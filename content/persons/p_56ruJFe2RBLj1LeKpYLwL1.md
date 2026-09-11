---
schema: wang-person/v1
id: p_56ruJFe2RBLj1LeKpYLwL1
status: active
merged_into: null
display_name: 王禧
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2GZVY7U1C7KtN71fZzD7B8
        subject_person_id: p_56ruJFe2RBLj1LeKpYLwL1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王禧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kLR6w2xnRdzDNP8p7Bo2D5
          claim_id: c_2GZVY7U1C7KtN71fZzD7B8
          source_id: s_6BMqZKWMY26pHcRyqEKujh
          stance: supports
          locator: CBDB:29237
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（29237）
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NzBDqgGx8erdv8fQa1cAEk
        subject_person_id: p_56ruJFe2RBLj1LeKpYLwL1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王禧，金人物。籍贯永年，身份为農民，入仕進納補官(捐授)。（中国历代人物传记资料库 CBDB 29237）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8TcOHcTf7fup_-7ZfQnN3-
          claim_id: c_NzBDqgGx8erdv8fQa1cAEk
          source_id: s_6BMqZKWMY26pHcRyqEKujh
          stance: supports
          locator: CBDB:29237
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
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
          source: *a1
      object_person:
        id: p_PVR452T39PyJhUDZLE9z17
        status: active
        display_name: 王磐
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王禧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王禧 | accepted |
| bio.summary | 王禧，金人物。籍贯永年，身份为農民，入仕進納補官(捐授)。（中国历代人物传记资料库 CBDB 29237） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_PVR452T39PyJhUDZLE9z17 | 王磐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王禧（CBDB 29237）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29237&o=json)
