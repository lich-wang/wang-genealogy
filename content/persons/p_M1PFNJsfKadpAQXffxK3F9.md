---
schema: wang-person/v1
id: p_M1PFNJsfKadpAQXffxK3F9
status: active
merged_into: null
display_name: 王應中
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rRNeetYoHeHSqzCUQtkxnV
        subject_person_id: p_M1PFNJsfKadpAQXffxK3F9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XYY8fmMivH8fiPTH3qS3eZ
          claim_id: c_rRNeetYoHeHSqzCUQtkxnV
          source_id: s_JtVg3q72i8GxMFAp5uCsGo
          stance: supports
          locator: CBDB:221577
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（221577）
          source: &a1
            id: s_JtVg3q72i8GxMFAp5uCsGo
            source_type: api_record
            title: 中国历代人物传记资料库：王應中（CBDB 221577）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221577&o=json
            external_identifier: CBDB:221577
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.315Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9QQ33wpVMuYLU7U5VdeBKw
        subject_person_id: p_M1PFNJsfKadpAQXffxK3F9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應中，明人物。萬曆八年進士，籍贯龍溪。（中国历代人物传记资料库 CBDB 221577）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Jo23ZtArS8Vdg3iEF9idnZ
          claim_id: c_9QQ33wpVMuYLU7U5VdeBKw
          source_id: s_JtVg3q72i8GxMFAp5uCsGo
          stance: supports
          locator: CBDB:221577
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_P8IVEez1rG1wIwrhAHxfs7
        subject_person_id: p_MpRHKYQgMhyeJ8uJAKZD2Z
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_M1PFNJsfKadpAQXffxK3F9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tBInOq59DSb9tw-XhBCSLW
          claim_id: c_P8IVEez1rG1wIwrhAHxfs7
          source_id: s_cIKoDQGQESOxBDlJx1b7dR
          stance: supports
          locator: CBDB：兄弟 王應麟（126851）之父／母 王榮貴
          quotation: null
          interpretation_note: 由兄弟关系推断：王應中 与 王應麟 为同胞（CBDB 记「弟」），王應麟 之父／母即 王應中 之父／母。
          source:
            id: s_cIKoDQGQESOxBDlJx1b7dR
            source_type: api_record
            title: 中国历代人物传记资料库：王應中（CBDB 221577）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221577&o=json
            external_identifier: CBDB:221577
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
        id: c_y6BFfr9_YM4B-77IPI-zUF
        subject_person_id: p_M1PFNJsfKadpAQXffxK3F9
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hnvFbFQMD3qoDJL59kCJv1
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_At6YvjvUdNMO7ZSHyY6Q79
          claim_id: c_y6BFfr9_YM4B-77IPI-zUF
          source_id: s_cIKoDQGQESOxBDlJx1b7dR
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126851 王應麟）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_cIKoDQGQESOxBDlJx1b7dR
            source_type: api_record
            title: 中国历代人物传记资料库：王應中（CBDB 221577）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221577&o=json
            external_identifier: CBDB:221577
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hnvFbFQMD3qoDJL59kCJv1
        status: active
        display_name: 王應麟
        merged_into_person_id: null
---

# 王應中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應中 | accepted |
| bio.summary | 王應中，明人物。萬曆八年進士，籍贯龍溪。（中国历代人物传记资料库 CBDB 221577） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_MpRHKYQgMhyeJ8uJAKZD2Z | 王榮貴 | accepted |
| other | p_hnvFbFQMD3qoDJL59kCJv1 | 王應麟 | accepted |

## 外部来源

- [中国历代人物传记资料库：王應中（CBDB 221577）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221577&o=json)
