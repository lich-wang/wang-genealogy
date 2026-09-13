---
schema: wang-person/v1
id: p_LX6tTUxSzJQLKBETT4sQXD
status: active
merged_into: null
display_name: 王轟
cbdb_id: 19889
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2P8e8hZG7MAeDRNi6e9TwQ
        subject_person_id: p_LX6tTUxSzJQLKBETT4sQXD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王轟，宋人物。籍贯鄞縣，入仕進士。（中国历代人物传记资料库 CBDB 19889）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_6MmOboGasgn8a4SPfC9ED3
          claim_id: c_2P8e8hZG7MAeDRNi6e9TwQ
          source_id: s_fb2WkSgLSSqKiZ1YJY4vE2
          stance: supports
          locator: CBDB:19889
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_fb2WkSgLSSqKiZ1YJY4vE2
            source_type: api_record
            title: 中国历代人物传记资料库：王轟（CBDB 19889）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19889&o=json
            external_identifier: CBDB:19889
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_is1NEVjmZdaLVhtjWWVqL3
        subject_person_id: p_LX6tTUxSzJQLKBETT4sQXD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王轟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Ea54TR9DPtrJcS9X1KZG87
          claim_id: c_is1NEVjmZdaLVhtjWWVqL3
          source_id: s_fb2WkSgLSSqKiZ1YJY4vE2
          stance: supports
          locator: CBDB:19889
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（901-1000）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_ixJcdq5tcAPsM7WgLOqA8d
        subject_person_id: p_LMN8U3w7r8FiSU2N778GMc
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_LX6tTUxSzJQLKBETT4sQXD
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cWSYOxw_9n_KV4dVRbdt5i
          claim_id: c_ixJcdq5tcAPsM7WgLOqA8d
          source_id: s_fb2WkSgLSSqKiZ1YJY4vE2
          stance: supports
          locator: CBDB 双向互证（曾祖 王勳 ⇄ 曾孫; 重孫 王轟）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_fb2WkSgLSSqKiZ1YJY4vE2
            source_type: api_record
            title: 中国历代人物传记资料库：王轟（CBDB 19889）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19889&o=json
            external_identifier: CBDB:19889
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_LMN8U3w7r8FiSU2N778GMc
        status: active
        display_name: 王勳
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王轟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王轟，宋人物。籍贯鄞縣，入仕進士。（中国历代人物传记资料库 CBDB 19889） | accepted |
| name.primary | 王轟 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_LMN8U3w7r8FiSU2N778GMc | 王勳 | accepted |

## 外部来源

- [中国历代人物传记资料库：王轟（CBDB 19889）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19889&o=json)
