---
schema: wang-person/v1
id: p_PQQ9B9zPBAjRcHDw7hpDP7
status: active
merged_into: null
display_name: 王述
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fd8RrzCiZHctNkskPHg1Lp
        subject_person_id: p_PQQ9B9zPBAjRcHDw7hpDP7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王述
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_st1HAFV3dC9N81Aq5qngHC
          claim_id: c_fd8RrzCiZHctNkskPHg1Lp
          source_id: s_SBo4NJ6XD39LvEDGSzquua
          stance: supports
          locator: CBDB:3974
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（3974）
          source: &a1
            id: s_SBo4NJ6XD39LvEDGSzquua
            source_type: api_record
            title: 中国历代人物传记资料库：王述（CBDB 3974）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3974&o=json
            external_identifier: CBDB:3974
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.438Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2vUPNQrnS9ZzAYJg8bZcsM
        subject_person_id: p_PQQ9B9zPBAjRcHDw7hpDP7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王述，宋人物。籍贯開封府。（中国历代人物传记资料库 CBDB 3974）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yngT0m658SXytjKikRE1JK
          claim_id: c_2vUPNQrnS9ZzAYJg8bZcsM
          source_id: s_SBo4NJ6XD39LvEDGSzquua
          stance: supports
          locator: CBDB:3974
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_sypTDLRLiNu5GVjIgAfjHB
        subject_person_id: p_KvaDyJMUHzeGStoEsTh4se
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PQQ9B9zPBAjRcHDw7hpDP7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UHO9uKc2hGws2FAz3WrftW
          claim_id: c_sypTDLRLiNu5GVjIgAfjHB
          source_id: s_yykPmVJb5Wn59M9QG2gpGt
          stance: supports
          locator: 宋史：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_yykPmVJb5Wn59M9QG2gpGt
            source_type: api_record
            title: 中国历代人物传记资料库：王倫（CBDB 8178）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=8178&o=json
            external_identifier: CBDB:8178
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.505Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_KvaDyJMUHzeGStoEsTh4se
        status: active
        display_name: 王倫
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王述

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王述 | accepted |
| bio.summary | 王述，宋人物。籍贯開封府。（中国历代人物传记资料库 CBDB 3974） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_KvaDyJMUHzeGStoEsTh4se | 王倫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王倫（CBDB 8178）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=8178&o=json)
- [中国历代人物传记资料库：王述（CBDB 3974）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3974&o=json)
