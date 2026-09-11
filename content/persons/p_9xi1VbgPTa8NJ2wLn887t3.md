---
schema: wang-person/v1
id: p_9xi1VbgPTa8NJ2wLn887t3
status: active
merged_into: null
display_name: 王仲和
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DM84ALnB9QZjJmZUqjhntv
        subject_person_id: p_9xi1VbgPTa8NJ2wLn887t3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲和
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_59e6M74b1AHFCxb59uYo2J
          claim_id: c_DM84ALnB9QZjJmZUqjhntv
          source_id: s_uwCjHRVhvnqTP2DJCxmur9
          stance: supports
          locator: CBDB:236846
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（236846）
          source: &a1
            id: s_uwCjHRVhvnqTP2DJCxmur9
            source_type: api_record
            title: 中国历代人物传记资料库：王仲和（CBDB 236846）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236846&o=json
            external_identifier: CBDB:236846
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.815Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7cDVtVi3kRGAdUHYLNLxPA
        subject_person_id: p_9xi1VbgPTa8NJ2wLn887t3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲和，明人物。正統四年進士，籍贯祥符。（中国历代人物传记资料库 CBDB 236846）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2GenjtKxwey8086r8o9EI4
          claim_id: c_7cDVtVi3kRGAdUHYLNLxPA
          source_id: s_uwCjHRVhvnqTP2DJCxmur9
          stance: supports
          locator: CBDB:236846
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

# 王仲和

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仲和 | accepted |
| bio.summary | 王仲和，明人物。正統四年進士，籍贯祥符。（中国历代人物传记资料库 CBDB 236846） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王仲和（CBDB 236846）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236846&o=json)
