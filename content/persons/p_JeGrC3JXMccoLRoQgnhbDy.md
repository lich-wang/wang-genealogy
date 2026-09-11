---
schema: wang-person/v1
id: p_JeGrC3JXMccoLRoQgnhbDy
status: active
merged_into: null
display_name: 王藩
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EKP4JE2zbE6AY1ejFUWJM6
        subject_person_id: p_JeGrC3JXMccoLRoQgnhbDy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王藩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pvdWNkDFLZGzYGEHvymGko
          claim_id: c_EKP4JE2zbE6AY1ejFUWJM6
          source_id: s_6Zw29dPVLYjtkgD3FoLf1m
          stance: supports
          locator: CBDB:343090
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343090）
          source: &a1
            id: s_6Zw29dPVLYjtkgD3FoLf1m
            source_type: api_record
            title: 中国历代人物传记资料库：王藩（CBDB 343090）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343090&o=json
            external_identifier: CBDB:343090
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.204Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Et33DEKHqG4KPNGZGs6znZ
        subject_person_id: p_JeGrC3JXMccoLRoQgnhbDy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王藩，清人物。明清進士進士，籍贯會稽，入仕進士，曾任吏部員外郎、吏部主事、同考官。（中国历代人物传记资料库 CBDB 343090）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3u8RQeu5M2P7enjxzqaUhl
          claim_id: c_Et33DEKHqG4KPNGZGs6znZ
          source_id: s_6Zw29dPVLYjtkgD3FoLf1m
          stance: supports
          locator: CBDB:343090
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

# 王藩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王藩 | accepted |
| bio.summary | 王藩，清人物。明清進士進士，籍贯會稽，入仕進士，曾任吏部員外郎、吏部主事、同考官。（中国历代人物传记资料库 CBDB 343090） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王藩（CBDB 343090）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343090&o=json)
