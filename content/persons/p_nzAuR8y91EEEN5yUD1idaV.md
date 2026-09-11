---
schema: wang-person/v1
id: p_nzAuR8y91EEEN5yUD1idaV
status: active
merged_into: null
display_name: 王雋基
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NWj18Fr75i5q85EVmEGE9T
        subject_person_id: p_nzAuR8y91EEEN5yUD1idaV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雋基
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cf2K31Dv6Ke8RdrhByrGKg
          claim_id: c_NWj18Fr75i5q85EVmEGE9T
          source_id: s_7497XKsEWYvW4a1RHWFNPM
          stance: supports
          locator: CBDB:640795
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640795）
          source: &a1
            id: s_7497XKsEWYvW4a1RHWFNPM
            source_type: api_record
            title: 中国历代人物传记资料库：王雋基（CBDB 640795）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640795&o=json
            external_identifier: CBDB:640795
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.371Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_821KNtu9zFk4xgeqscPkYp
        subject_person_id: p_nzAuR8y91EEEN5yUD1idaV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雋基，清人物。籍贯江蘇省，入仕監生，曾任縣丞。（中国历代人物传记资料库 CBDB 640795）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Vn2dzJDkHC4sPNeCXENQnE
          claim_id: c_821KNtu9zFk4xgeqscPkYp
          source_id: s_7497XKsEWYvW4a1RHWFNPM
          stance: supports
          locator: CBDB:640795
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

# 王雋基

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王雋基 | accepted |
| bio.summary | 王雋基，清人物。籍贯江蘇省，入仕監生，曾任縣丞。（中国历代人物传记资料库 CBDB 640795） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王雋基（CBDB 640795）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640795&o=json)
