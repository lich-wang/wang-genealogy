---
schema: wang-person/v1
id: p_Z3N3h8ZY4dzfju6Wwi9grE
status: active
merged_into: null
display_name: 王渠
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_w1f4AVuVa3xqzzHCWyeWFL
        subject_person_id: p_Z3N3h8ZY4dzfju6Wwi9grE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王渠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5qAe1t9u7NwJbHZhKSnspA
          claim_id: c_w1f4AVuVa3xqzzHCWyeWFL
          source_id: s_qdsSwpswYjqCufEASdbZop
          stance: supports
          locator: CBDB:274255
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（274255）
          source: &a1
            id: s_qdsSwpswYjqCufEASdbZop
            source_type: api_record
            title: 中国历代人物传记资料库：王渠（CBDB 274255）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274255&o=json
            external_identifier: CBDB:274255
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.920Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nrXsQK45CE6MEhycXepVGo
        subject_person_id: p_Z3N3h8ZY4dzfju6Wwi9grE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王渠，明人物。弘治十八年進士，籍贯金壇。（中国历代人物传记资料库 CBDB 274255）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XBCEAppA5WmoN0jRrwRel9
          claim_id: c_nrXsQK45CE6MEhycXepVGo
          source_id: s_qdsSwpswYjqCufEASdbZop
          stance: supports
          locator: CBDB:274255
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_0UQaBmPOzZUwOJQ8hNSCGq
        subject_person_id: p_VcYjKdyzjQFgG3FRqoyThA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Z3N3h8ZY4dzfju6Wwi9grE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XrLz_6U0bvnURWL5CSVYa-
          claim_id: c_0UQaBmPOzZUwOJQ8hNSCGq
          source_id: s_ypLCTZh44-f2EuqYtfc4No
          stance: supports
          locator: CBDB：兄弟 王栻（201553）之父／母 王完
          quotation: null
          interpretation_note: 由兄弟关系推断：王渠 与 王栻 为同胞（CBDB 记「弟」），王栻 之父／母即 王渠 之父／母。
          source:
            id: s_ypLCTZh44-f2EuqYtfc4No
            source_type: api_record
            title: 中国历代人物传记资料库：王渠（CBDB 274255）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274255&o=json
            external_identifier: CBDB:274255
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_VcYjKdyzjQFgG3FRqoyThA
        status: active
        display_name: 王完
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Mn1ZOIWQ8u9gSkuqJQnY4p
        subject_person_id: p_GPJ5PvBXjvhgLRDQbw5wn2
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Z3N3h8ZY4dzfju6Wwi9grE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pi3ZVxrf0O3c4c6P0B-ONn
          claim_id: c_Mn1ZOIWQ8u9gSkuqJQnY4p
          source_id: s_ypLCTZh44-f2EuqYtfc4No
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201553 王栻）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ypLCTZh44-f2EuqYtfc4No
            source_type: api_record
            title: 中国历代人物传记资料库：王渠（CBDB 274255）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274255&o=json
            external_identifier: CBDB:274255
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GPJ5PvBXjvhgLRDQbw5wn2
        status: active
        display_name: 王栻
        merged_into_person_id: null
---

# 王渠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王渠 | accepted |
| bio.summary | 王渠，明人物。弘治十八年進士，籍贯金壇。（中国历代人物传记资料库 CBDB 274255） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_VcYjKdyzjQFgG3FRqoyThA | 王完 | accepted |
| other | p_GPJ5PvBXjvhgLRDQbw5wn2 | 王栻 | accepted |

## 外部来源

- [中国历代人物传记资料库：王渠（CBDB 274255）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274255&o=json)
