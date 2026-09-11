---
schema: wang-person/v1
id: p_c8r2Ubqr461ALieEYa3N36
status: active
merged_into: null
display_name: 王建章
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FSfDZ2xUYuQs4S6K4GJ4Mc
        subject_person_id: p_c8r2Ubqr461ALieEYa3N36
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王建章
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cxF2m964kJGLjnTZcgLMb3
          claim_id: c_FSfDZ2xUYuQs4S6K4GJ4Mc
          source_id: s_oKdhEfjrvMeEwDDVPQCC49
          stance: supports
          locator: CBDB:327163
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（327163）
          source: &a1
            id: s_oKdhEfjrvMeEwDDVPQCC49
            source_type: api_record
            title: 中国历代人物传记资料库：王建章（CBDB 327163）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327163&o=json
            external_identifier: CBDB:327163
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.237Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DdnUDop7zDsCmJJALPJKMB
        subject_person_id: p_c8r2Ubqr461ALieEYa3N36
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王建章，明人物。嘉靖四十一年進士，籍贯東陽。（中国历代人物传记资料库 CBDB 327163）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8IvK-6BCsPKllV32a579gB
          claim_id: c_DdnUDop7zDsCmJJALPJKMB
          source_id: s_oKdhEfjrvMeEwDDVPQCC49
          stance: supports
          locator: CBDB:327163
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

# 王建章

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王建章 | accepted |
| bio.summary | 王建章，明人物。嘉靖四十一年進士，籍贯東陽。（中国历代人物传记资料库 CBDB 327163） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王建章（CBDB 327163）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327163&o=json)
