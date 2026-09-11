---
schema: wang-person/v1
id: p_F5Q1n952LWrS6kAA5QZt8u
status: active
merged_into: null
display_name: 王聰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4BYS6Kx4WhFYPiyaHjua1A
        subject_person_id: p_F5Q1n952LWrS6kAA5QZt8u
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王聰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cTG9bKduGc7fytFnCmEGiS
          claim_id: c_4BYS6Kx4WhFYPiyaHjua1A
          source_id: s_yBcZWthPkJyGuPDjhnW2aX
          stance: supports
          locator: CBDB:252679
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（252679）
          source: &a1
            id: s_yBcZWthPkJyGuPDjhnW2aX
            source_type: api_record
            title: 中国历代人物传记资料库：王聰（CBDB 252679）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252679&o=json
            external_identifier: CBDB:252679
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.274Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_aNZdi7ouxNBQJuTMrQRpRm
        subject_person_id: p_F5Q1n952LWrS6kAA5QZt8u
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王聰，明人物。成化十四年進士，籍贯遷安。（中国历代人物传记资料库 CBDB 252679）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_d2RM4u6vuvbIIb7U4DsH2T
          claim_id: c_aNZdi7ouxNBQJuTMrQRpRm
          source_id: s_yBcZWthPkJyGuPDjhnW2aX
          stance: supports
          locator: CBDB:252679
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

# 王聰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王聰 | accepted |
| bio.summary | 王聰，明人物。成化十四年進士，籍贯遷安。（中国历代人物传记资料库 CBDB 252679） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王聰（CBDB 252679）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252679&o=json)
