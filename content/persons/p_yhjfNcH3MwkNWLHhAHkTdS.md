---
schema: wang-person/v1
id: p_yhjfNcH3MwkNWLHhAHkTdS
status: active
merged_into: null
display_name: 王應麃
cbdb_id: 221584
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2M6t9DLWjJ8vAvSMKzVQjj
        subject_person_id: p_yhjfNcH3MwkNWLHhAHkTdS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應麃，明人物。萬曆八年進士，籍贯龍溪。（中国历代人物传记资料库 CBDB 221584）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_L3B5DUy4nQy_qmRlUzab79
          claim_id: c_2M6t9DLWjJ8vAvSMKzVQjj
          source_id: s_3bqwTRdr8gHG8oLQcxqfnn
          stance: supports
          locator: CBDB:221584
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_3bqwTRdr8gHG8oLQcxqfnn
            source_type: api_record
            title: 中国历代人物传记资料库：王應麃（CBDB 221584）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221584&o=json
            external_identifier: CBDB:221584
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_68ikwnNBk4dvVhbn3tMG7x
        subject_person_id: p_yhjfNcH3MwkNWLHhAHkTdS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應麃
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_GMfFtsZLQE1AzPVeX2g8j5
          claim_id: c_68ikwnNBk4dvVhbn3tMG7x
          source_id: s_3bqwTRdr8gHG8oLQcxqfnn
          stance: supports
          locator: CBDB:221584
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2501-2600）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_-FN3dMraq6YVIfk23GH_Z6
        subject_person_id: p_MpRHKYQgMhyeJ8uJAKZD2Z
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yhjfNcH3MwkNWLHhAHkTdS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_K4MOnfyNHfHm0KaOzIg0Vx
          claim_id: c_-FN3dMraq6YVIfk23GH_Z6
          source_id: s_Skyeohn_UKY3PSUEwyAel_
          stance: supports
          locator: CBDB：兄弟 王應麟（126851）之父／母 王榮貴
          quotation: null
          interpretation_note: 由兄弟关系推断：王應麃 与 王應麟 为同胞（CBDB 记「兄」），王應麟 之父／母即 王應麃 之父／母。
          source:
            id: s_Skyeohn_UKY3PSUEwyAel_
            source_type: api_record
            title: 中国历代人物传记资料库：王應麃（CBDB 221584）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221584&o=json
            external_identifier: CBDB:221584
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MpRHKYQgMhyeJ8uJAKZD2Z
        status: active
        display_name: 王榮貴
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_P2Z3PYiTRA65X5Juj2hait
        subject_person_id: p_hnvFbFQMD3qoDJL59kCJv1
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_yhjfNcH3MwkNWLHhAHkTdS
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xTeOHEe8X94JpR0REhkOSU
          claim_id: c_P2Z3PYiTRA65X5Juj2hait
          source_id: s_Skyeohn_UKY3PSUEwyAel_
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126851 王應麟）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Skyeohn_UKY3PSUEwyAel_
            source_type: api_record
            title: 中国历代人物传记资料库：王應麃（CBDB 221584）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221584&o=json
            external_identifier: CBDB:221584
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hnvFbFQMD3qoDJL59kCJv1
        status: active
        display_name: 王應麟
        merged_into_person_id: null
---

# 王應麃

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王應麃，明人物。萬曆八年進士，籍贯龍溪。（中国历代人物传记资料库 CBDB 221584） | accepted |
| name.primary | 王應麃 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_MpRHKYQgMhyeJ8uJAKZD2Z | 王榮貴 | accepted |
| other | p_hnvFbFQMD3qoDJL59kCJv1 | 王應麟 | accepted |

## 外部来源

- [中国历代人物传记资料库：王應麃（CBDB 221584）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221584&o=json)
