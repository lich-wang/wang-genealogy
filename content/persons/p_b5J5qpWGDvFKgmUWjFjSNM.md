---
schema: wang-person/v1
id: p_b5J5qpWGDvFKgmUWjFjSNM
status: active
merged_into: null
display_name: 王霖
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_obdWgJVBNtYA6pyJeS3Bxw
        subject_person_id: p_b5J5qpWGDvFKgmUWjFjSNM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王霖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_by7eENfn3y6MiLkm6dKzqA
          claim_id: c_obdWgJVBNtYA6pyJeS3Bxw
          source_id: s_3BaC11NWwxFmZSsCXtpTD8
          stance: supports
          locator: CBDB:341856
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（341856）
          source: &a1
            id: s_3BaC11NWwxFmZSsCXtpTD8
            source_type: api_record
            title: 中国历代人物传记资料库：王霖（CBDB 341856）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341856&o=json
            external_identifier: CBDB:341856
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.731Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bgHVnm6GFHccC4W2aBrAz1
        subject_person_id: p_b5J5qpWGDvFKgmUWjFjSNM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王霖，清人物。明清進士進士，籍贯上元，入仕進士，曾任禮部員外郎、同考官。（中国历代人物传记资料库 CBDB 341856）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Oa4mPBKx9Yvy6REN5nV4bc
          claim_id: c_bgHVnm6GFHccC4W2aBrAz1
          source_id: s_3BaC11NWwxFmZSsCXtpTD8
          stance: supports
          locator: CBDB:341856
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

# 王霖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王霖 | accepted |
| bio.summary | 王霖，清人物。明清進士進士，籍贯上元，入仕進士，曾任禮部員外郎、同考官。（中国历代人物传记资料库 CBDB 341856） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王霖（CBDB 341856）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341856&o=json)
