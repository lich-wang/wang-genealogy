---
schema: wang-person/v1
id: p_CEvK7NRNzrMSwKhp2Yy6Qq
status: active
merged_into: null
display_name: 王文粹
cbdb_id: 318797
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XDMfQSP2ThCGq9vdkzwJ8r
        subject_person_id: p_CEvK7NRNzrMSwKhp2Yy6Qq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文粹，明人物。嘉靖三十二年進士，籍贯濰縣，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 318797）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_RK2IJyowCtwYXq_Jj5Dv40
          claim_id: c_XDMfQSP2ThCGq9vdkzwJ8r
          source_id: s_yG625kN6KFUUwBHTUCcD2b
          stance: supports
          locator: CBDB:318797
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_yG625kN6KFUUwBHTUCcD2b
            source_type: api_record
            title: 中国历代人物传记资料库：王文粹（CBDB 318797）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318797&o=json
            external_identifier: CBDB:318797
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.030Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_5EdJHpdJhxPbtDaw9ZF3vN
        subject_person_id: p_CEvK7NRNzrMSwKhp2Yy6Qq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文粹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_MKRuFejSiJT3ZAYtLBaKJN
          claim_id: c_5EdJHpdJhxPbtDaw9ZF3vN
          source_id: s_yG625kN6KFUUwBHTUCcD2b
          stance: supports
          locator: CBDB:318797
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3701-3800）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王文粹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王文粹，明人物。嘉靖三十二年進士，籍贯濰縣，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 318797） | accepted |
| name.primary | 王文粹 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文粹（CBDB 318797）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318797&o=json)
