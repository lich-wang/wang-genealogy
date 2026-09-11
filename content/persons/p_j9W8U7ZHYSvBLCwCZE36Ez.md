---
schema: wang-person/v1
id: p_j9W8U7ZHYSvBLCwCZE36Ez
status: active
merged_into: null
display_name: 王全
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mUbYLw38vwDQvP7kREc4hG
        subject_person_id: p_j9W8U7ZHYSvBLCwCZE36Ez
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王全
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_E8FmSVV4MhhWASQQiQQEnv
          claim_id: c_mUbYLw38vwDQvP7kREc4hG
          source_id: s_WpGQ3pw7F1BiNaaUBVpq17
          stance: supports
          locator: CBDB:209426
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（209426）
          source: &a1
            id: s_WpGQ3pw7F1BiNaaUBVpq17
            source_type: api_record
            title: 中国历代人物传记资料库：王全（CBDB 209426）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209426&o=json
            external_identifier: CBDB:209426
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.984Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wBZfon4EaF9FRYGCYmWuVR
        subject_person_id: p_j9W8U7ZHYSvBLCwCZE36Ez
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王全，明人物。天順八年進士，籍贯遵化。（中国历代人物传记资料库 CBDB 209426）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Go4GUntP7RNMqJihB6BqTD
          claim_id: c_wBZfon4EaF9FRYGCYmWuVR
          source_id: s_WpGQ3pw7F1BiNaaUBVpq17
          stance: supports
          locator: CBDB:209426
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

# 王全

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王全 | accepted |
| bio.summary | 王全，明人物。天順八年進士，籍贯遵化。（中国历代人物传记资料库 CBDB 209426） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王全（CBDB 209426）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209426&o=json)
