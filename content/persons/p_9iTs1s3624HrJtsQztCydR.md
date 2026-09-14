---
schema: wang-person/v1
id: p_9iTs1s3624HrJtsQztCydR
status: active
merged_into: null
display_name: 王懋
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fE77w4ENPir6E1okAHokLV
        subject_person_id: p_9iTs1s3624HrJtsQztCydR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DQVdZua9cZnk7ZVAwizQtM
          claim_id: c_fE77w4ENPir6E1okAHokLV
          source_id: s_keMduNu5BwuHN2MzY8B8D8
          stance: supports
          locator: CBDB:318796
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（318796）
          source: &a1
            id: s_keMduNu5BwuHN2MzY8B8D8
            source_type: api_record
            title: 中国历代人物传记资料库：王懋（CBDB 318796）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318796&o=json
            external_identifier: CBDB:318796
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.028Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gz2TKrMMsvoa98Mx9zLKPG
        subject_person_id: p_9iTs1s3624HrJtsQztCydR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懋，明人物。天順四年進士，籍贯開州。（中国历代人物传记资料库 CBDB 318796）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MzCUKf5p_l65DLCYDsPxMN
          claim_id: c_gz2TKrMMsvoa98Mx9zLKPG
          source_id: s_keMduNu5BwuHN2MzY8B8D8
          stance: supports
          locator: CBDB:318796
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ZlVbijkfd1k-akwiJGwian
        subject_person_id: p_hqCuRGLw8xBKqFLCQNmJMn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9iTs1s3624HrJtsQztCydR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8INtC16ApotvbOS_yoidgI
          claim_id: c_ZlVbijkfd1k-akwiJGwian
          source_id: s_XC1d_fBQ8RBMGfuMjtg_1l
          stance: supports
          locator: CBDB：兄弟 王範（198805）之父／母 王信
          quotation: null
          interpretation_note: 由兄弟关系推断：王懋 与 王範 为同胞（CBDB 记「兄」），王範 之父／母即 王懋 之父／母。
          source:
            id: s_XC1d_fBQ8RBMGfuMjtg_1l
            source_type: api_record
            title: 中国历代人物传记资料库：王懋（CBDB 318796）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318796&o=json
            external_identifier: CBDB:318796
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hqCuRGLw8xBKqFLCQNmJMn
        status: active
        display_name: 王信
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_WldJ_Pi0-h1gOOAGJEUOcw
        subject_person_id: p_9iTs1s3624HrJtsQztCydR
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_FXTUX1KirgmPw4nA2wx9vP
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iTYIAOpacZHErUgkNYVIjT
          claim_id: c_WldJ_Pi0-h1gOOAGJEUOcw
          source_id: s_XC1d_fBQ8RBMGfuMjtg_1l
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198805 王範）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_XC1d_fBQ8RBMGfuMjtg_1l
            source_type: api_record
            title: 中国历代人物传记资料库：王懋（CBDB 318796）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318796&o=json
            external_identifier: CBDB:318796
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FXTUX1KirgmPw4nA2wx9vP
        status: active
        display_name: 王範
        merged_into_person_id: null
---

# 王懋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王懋 | accepted |
| bio.summary | 王懋，明人物。天順四年進士，籍贯開州。（中国历代人物传记资料库 CBDB 318796） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_hqCuRGLw8xBKqFLCQNmJMn | 王信 | accepted |
| other | p_FXTUX1KirgmPw4nA2wx9vP | 王範 | accepted |

## 外部来源

- [中国历代人物传记资料库：王懋（CBDB 318796）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318796&o=json)
