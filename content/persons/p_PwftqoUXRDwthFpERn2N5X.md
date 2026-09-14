---
schema: wang-person/v1
id: p_PwftqoUXRDwthFpERn2N5X
status: active
merged_into: null
display_name: 王敦
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DNzhig5RiHR8qjMo7Tq7yB
        subject_person_id: p_PwftqoUXRDwthFpERn2N5X
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YpX6hKiFcD8v8KM92xpo2k
          claim_id: c_DNzhig5RiHR8qjMo7Tq7yB
          source_id: s_kKc4n3pDqiwWxNKSpdMC8d
          stance: supports
          locator: CBDB:293462
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（293462）
          source: &a1
            id: s_kKc4n3pDqiwWxNKSpdMC8d
            source_type: api_record
            title: 中国历代人物传记资料库：王敦（CBDB 293462）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=293462&o=json
            external_identifier: CBDB:293462
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.430Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hDAL3mbpyrgKPLWKhYzzon
        subject_person_id: p_PwftqoUXRDwthFpERn2N5X
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敦，明人物。天順元年進士，籍贯福清。（中国历代人物传记资料库 CBDB 293462）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jz9eRD7uMZch4uxCg7T2Ze
          claim_id: c_hDAL3mbpyrgKPLWKhYzzon
          source_id: s_kKc4n3pDqiwWxNKSpdMC8d
          stance: supports
          locator: CBDB:293462
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_6kXu2CJCQUeB91NJ4TnaVm
        subject_person_id: p_W9ZtR1XxvGkrodjCFZhZJj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PwftqoUXRDwthFpERn2N5X
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_daK8vfZvgvt3pJm1lS4yFG
          claim_id: c_6kXu2CJCQUeB91NJ4TnaVm
          source_id: s_Ti0G2gswOt-s_a3pmY6pFy
          stance: supports
          locator: CBDB：兄弟 王克復（126540）之父／母 王朋
          quotation: null
          interpretation_note: 由兄弟关系推断：王敦 与 王克復 为同胞（CBDB 记「弟」），王克復 之父／母即 王敦 之父／母。
          source:
            id: s_Ti0G2gswOt-s_a3pmY6pFy
            source_type: api_record
            title: 中国历代人物传记资料库：王敦（CBDB 293462）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=293462&o=json
            external_identifier: CBDB:293462
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_W9ZtR1XxvGkrodjCFZhZJj
        status: active
        display_name: 王朋
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_7uu_IWyfZ5ag_PZ3mlw962
        subject_person_id: p_AV2ZgKZQXWPMrvp5xNJqFj
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_PwftqoUXRDwthFpERn2N5X
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DI3ht5u8BBTrtxp0-xdKhp
          claim_id: c_7uu_IWyfZ5ag_PZ3mlw962
          source_id: s_Ti0G2gswOt-s_a3pmY6pFy
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126540 王克復）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Ti0G2gswOt-s_a3pmY6pFy
            source_type: api_record
            title: 中国历代人物传记资料库：王敦（CBDB 293462）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=293462&o=json
            external_identifier: CBDB:293462
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AV2ZgKZQXWPMrvp5xNJqFj
        status: active
        display_name: 王克復
        merged_into_person_id: null
---

# 王敦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敦 | accepted |
| bio.summary | 王敦，明人物。天順元年進士，籍贯福清。（中国历代人物传记资料库 CBDB 293462） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_W9ZtR1XxvGkrodjCFZhZJj | 王朋 | accepted |
| other | p_AV2ZgKZQXWPMrvp5xNJqFj | 王克復 | accepted |

## 外部来源

- [中国历代人物传记资料库：王敦（CBDB 293462）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=293462&o=json)
