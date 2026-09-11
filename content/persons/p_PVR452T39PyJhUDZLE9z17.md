---
schema: wang-person/v1
id: p_PVR452T39PyJhUDZLE9z17
status: active
merged_into: null
display_name: 王磐
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QPcDA1HRDnrjKUoSnG2Egd
        subject_person_id: p_PVR452T39PyJhUDZLE9z17
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王磐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RhqHDd9GBNj1323TMCXN2s
          claim_id: c_QPcDA1HRDnrjKUoSnG2Egd
          source_id: s_Lh5HNnxT2mVNhBGKCZZJKg
          stance: supports
          locator: CBDB:29236
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（29236）
          source: &a1
            id: s_Lh5HNnxT2mVNhBGKCZZJKg
            source_type: api_record
            title: 中国历代人物传记资料库：王磐（CBDB 29236）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29236&o=json
            external_identifier: CBDB:29236
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.997Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_JrJELoFnUTBRxquPUezw6b
        subject_person_id: p_PVR452T39PyJhUDZLE9z17
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1202年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fdvdQE65Y2B3GYdoYx4s2T
          claim_id: c_JrJELoFnUTBRxquPUezw6b
          source_id: s_Lh5HNnxT2mVNhBGKCZZJKg
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_hziRWi1EB4LncENyzguUqA
        subject_person_id: p_PVR452T39PyJhUDZLE9z17
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1293年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eFx6JypRx42qM1ePD9Dpqf
          claim_id: c_hziRWi1EB4LncENyzguUqA
          source_id: s_Lh5HNnxT2mVNhBGKCZZJKg
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WA4KStZNVeTMH5EYUU8CG2
        subject_person_id: p_PVR452T39PyJhUDZLE9z17
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王磐（1202年—1293年），元人物。籍贯魯山，身份为農民、拒絕出仕，入仕進士，曾任翰林國史院學士承旨、翰林國史院直學士、太常少卿。（中国历代人物传记资料库 CBDB 29236）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_QebP_NqZc9OHokmD1R9QJM
          claim_id: c_WA4KStZNVeTMH5EYUU8CG2
          source_id: s_Lh5HNnxT2mVNhBGKCZZJKg
          stance: supports
          locator: CBDB:29236
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_rsCUBIMk3-byOQXgPVon0-
        subject_person_id: p_56ruJFe2RBLj1LeKpYLwL1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PVR452T39PyJhUDZLE9z17
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VPMXTQNua8lfnU1PcK-TGp
          claim_id: c_rsCUBIMk3-byOQXgPVon0-
          source_id: s_6BMqZKWMY26pHcRyqEKujh
          stance: supports
          locator: CBDB 双向互证（子 王磐 ⇄ 父 王禧）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_6BMqZKWMY26pHcRyqEKujh
            source_type: api_record
            title: 中国历代人物传记资料库：王禧（CBDB 29237）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29237&o=json
            external_identifier: CBDB:29237
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.998Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_56ruJFe2RBLj1LeKpYLwL1
        status: active
        display_name: 王禧
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王磐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王磐 | accepted |
| birth.date | 1202年 | accepted |
| death.date | 1293年 | accepted |
| bio.summary | 王磐（1202年—1293年），元人物。籍贯魯山，身份为農民、拒絕出仕，入仕進士，曾任翰林國史院學士承旨、翰林國史院直學士、太常少卿。（中国历代人物传记资料库 CBDB 29236） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_56ruJFe2RBLj1LeKpYLwL1 | 王禧 | accepted |

## 外部来源

- [中国历代人物传记资料库：王磐（CBDB 29236）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29236&o=json)
- [中国历代人物传记资料库：王禧（CBDB 29237）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29237&o=json)
