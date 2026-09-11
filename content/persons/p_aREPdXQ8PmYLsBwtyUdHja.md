---
schema: wang-person/v1
id: p_aREPdXQ8PmYLsBwtyUdHja
status: active
merged_into: null
display_name: 王槐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dBj161AhdQJNdtcoSBayJU
        subject_person_id: p_aREPdXQ8PmYLsBwtyUdHja
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王槐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_F9nDYA462shWdV5dQMz34L
          claim_id: c_dBj161AhdQJNdtcoSBayJU
          source_id: s_7y9VXPECRmRAJLcZWQE9fy
          stance: supports
          locator: CBDB:283704
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（283704）
          source: &a1
            id: s_7y9VXPECRmRAJLcZWQE9fy
            source_type: api_record
            title: 中国历代人物传记资料库：王槐（CBDB 283704）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283704&o=json
            external_identifier: CBDB:283704
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.151Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nT1NQ8wQXephDzr5EKxkqN
        subject_person_id: p_aREPdXQ8PmYLsBwtyUdHja
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王槐，明人物。正德十六年進士，籍贯會稽。（中国历代人物传记资料库 CBDB 283704）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yn52nfHv0C3XUxjeBsQLq2
          claim_id: c_nT1NQ8wQXephDzr5EKxkqN
          source_id: s_7y9VXPECRmRAJLcZWQE9fy
          stance: supports
          locator: CBDB:283704
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王槐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王槐 | accepted |
| bio.summary | 王槐，明人物。正德十六年進士，籍贯會稽。（中国历代人物传记资料库 CBDB 283704） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王槐（CBDB 283704）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283704&o=json)
