---
schema: wang-person/v1
id: p_FVJVfXxhTB6LhNc5LEmUMs
status: active
merged_into: null
display_name: 王有贊
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zhB1bB9hb8EkngiXLcp2P9
        subject_person_id: p_FVJVfXxhTB6LhNc5LEmUMs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王有贊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dnEK1B5CWRLm8t55QDBKxF
          claim_id: c_zhB1bB9hb8EkngiXLcp2P9
          source_id: s_sCDbmJG7cGMgLetYjKX7JN
          stance: supports
          locator: CBDB:638604
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638604）
          source: &a1
            id: s_sCDbmJG7cGMgLetYjKX7JN
            source_type: api_record
            title: 中国历代人物传记资料库：王有贊（CBDB 638604）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638604&o=json
            external_identifier: CBDB:638604
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.691Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_r3x8eAfMxHaHYo6nzVgyKh
        subject_person_id: p_FVJVfXxhTB6LhNc5LEmUMs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王有贊，清人物。籍贯蘇州府，入仕貢生: 拔貢，曾任復設訓導。（中国历代人物传记资料库 CBDB 638604）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_90ojoiNYccm7hf7O55UD5J
          claim_id: c_r3x8eAfMxHaHYo6nzVgyKh
          source_id: s_sCDbmJG7cGMgLetYjKX7JN
          stance: supports
          locator: CBDB:638604
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

# 王有贊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王有贊 | accepted |
| bio.summary | 王有贊，清人物。籍贯蘇州府，入仕貢生: 拔貢，曾任復設訓導。（中国历代人物传记资料库 CBDB 638604） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王有贊（CBDB 638604）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638604&o=json)
