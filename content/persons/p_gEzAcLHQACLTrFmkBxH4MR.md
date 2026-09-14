---
schema: wang-person/v1
id: p_gEzAcLHQACLTrFmkBxH4MR
status: active
merged_into: null
display_name: 王晉
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Csp3CJ9BUuvZssJpF7iZu6
        subject_person_id: p_gEzAcLHQACLTrFmkBxH4MR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bPGJBLcwjB8G9U5MiLEED2
          claim_id: c_Csp3CJ9BUuvZssJpF7iZu6
          source_id: s_hMPoX8cuKXFH3QG7PsmR2c
          stance: supports
          locator: CBDB:215749
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（215749）
          source: &a1
            id: s_hMPoX8cuKXFH3QG7PsmR2c
            source_type: api_record
            title: 中国历代人物传记资料库：王晉（CBDB 215749）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215749&o=json
            external_identifier: CBDB:215749
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.197Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gCrGhUkdAJGsqe62jvv9nh
        subject_person_id: p_gEzAcLHQACLTrFmkBxH4MR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晉，明人物。萬曆五年進士，籍贯烏程。（中国历代人物传记资料库 CBDB 215749）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_cy3khwBVFwpIdngSqwlRBZ
          claim_id: c_gCrGhUkdAJGsqe62jvv9nh
          source_id: s_hMPoX8cuKXFH3QG7PsmR2c
          stance: supports
          locator: CBDB:215749
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_FFxEJ9yyMC2Ysbbo7cOmFY
        subject_person_id: p_X44YhNxEhhrLSWmgtLLBJw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gEzAcLHQACLTrFmkBxH4MR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Rhm7CzB2MLN51wEg54BYdZ
          claim_id: c_FFxEJ9yyMC2Ysbbo7cOmFY
          source_id: s_832HLBAS8RadzSoAlijXzH
          stance: supports
          locator: CBDB：兄弟 王豫（206279）之父／母 王來聘
          quotation: null
          interpretation_note: 由兄弟关系推断：王晉 与 王豫 为同胞（CBDB 记「兄」），王豫 之父／母即 王晉 之父／母。
          source:
            id: s_832HLBAS8RadzSoAlijXzH
            source_type: api_record
            title: 中国历代人物传记资料库：王晉（CBDB 215749）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215749&o=json
            external_identifier: CBDB:215749
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_X44YhNxEhhrLSWmgtLLBJw
        status: active
        display_name: 王來聘
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c__zc4wau0QWMx3QRdqFLcum
        subject_person_id: p_dJSjDNjDHVG2RbXzuMWW8y
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_gEzAcLHQACLTrFmkBxH4MR
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8AmWvLq3Q_LIegbgGzg7OR
          claim_id: c__zc4wau0QWMx3QRdqFLcum
          source_id: s_832HLBAS8RadzSoAlijXzH
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206279 王豫）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_832HLBAS8RadzSoAlijXzH
            source_type: api_record
            title: 中国历代人物传记资料库：王晉（CBDB 215749）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215749&o=json
            external_identifier: CBDB:215749
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dJSjDNjDHVG2RbXzuMWW8y
        status: active
        display_name: 王豫
        merged_into_person_id: null
---

# 王晉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王晉 | accepted |
| bio.summary | 王晉，明人物。萬曆五年進士，籍贯烏程。（中国历代人物传记资料库 CBDB 215749） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_X44YhNxEhhrLSWmgtLLBJw | 王來聘 | accepted |
| other | p_dJSjDNjDHVG2RbXzuMWW8y | 王豫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王晉（CBDB 215749）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215749&o=json)
