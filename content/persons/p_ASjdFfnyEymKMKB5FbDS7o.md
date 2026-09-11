---
schema: wang-person/v1
id: p_ASjdFfnyEymKMKB5FbDS7o
status: active
merged_into: null
display_name: 方氏
revision: 1
cbdb_id: 437539
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CIWmtSNA1r9CczVqATnAxc
        subject_person_id: p_ASjdFfnyEymKMKB5FbDS7o
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 方氏，元人物。曾任恭人。（中国历代人物传记资料库 CBDB 437539）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rC1c3uHzafGqua3KwnB1ce
          claim_id: c_CIWmtSNA1r9CczVqATnAxc
          source_id: s_uBszQ5wD710IaQEbHdTj9q
          stance: supports
          locator: CBDB:437539
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_uBszQ5wD710IaQEbHdTj9q
            source_type: api_record
            title: 中国历代人物传记资料库：方氏（CBDB 437539）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437539&o=json
            external_identifier: CBDB:437539
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_upIILou5aLP-QlYCrEWeCv
        subject_person_id: p_ASjdFfnyEymKMKB5FbDS7o
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 方氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TAAuuOlljEdrRBNNIWmdVu
          claim_id: c_upIILou5aLP-QlYCrEWeCv
          source_id: s_uBszQ5wD710IaQEbHdTj9q
          stance: supports
          locator: CBDB:437539
          quotation: null
          interpretation_note: CBDB 明确记录的王文彪配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_PK_NPtMGcGO4SVasan0Rs9
        subject_person_id: p_ePUgH55QWsG6Hauqd4raHD
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_ASjdFfnyEymKMKB5FbDS7o
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5Om4UTNkmQkoQT8E-R4Ngu
          claim_id: c_PK_NPtMGcGO4SVasan0Rs9
          source_id: s_uBszQ5wD710IaQEbHdTj9q
          stance: supports
          locator: CBDB 双向互证（妻子 方氏）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ePUgH55QWsG6Hauqd4raHD
        status: active
        display_name: 王文彪
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 方氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 方氏，元人物。曾任恭人。（中国历代人物传记资料库 CBDB 437539） | accepted |
| name.primary | 方氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_ePUgH55QWsG6Hauqd4raHD | 王文彪 | accepted |

## 外部来源

- [中国历代人物传记资料库：方氏（CBDB 437539）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437539&o=json)
