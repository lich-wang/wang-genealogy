---
schema: wang-person/v1
id: p_ZSy5gAqhfVZVK9EQ2VePrD
status: active
merged_into: null
display_name: 王作朋
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3Nc2K3Nt6HfsiKZzmmSgzE
        subject_person_id: p_ZSy5gAqhfVZVK9EQ2VePrD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王作朋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_94xVZxrymEpCvDU8FA9k6N
          claim_id: c_3Nc2K3Nt6HfsiKZzmmSgzE
          source_id: s_zMfRbBDrBQePCM4rMZ5uPs
          stance: supports
          locator: CBDB:342455
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342455）
          source: &a1
            id: s_zMfRbBDrBQePCM4rMZ5uPs
            source_type: api_record
            title: 中国历代人物传记资料库：王作朋（CBDB 342455）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342455&o=json
            external_identifier: CBDB:342455
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.936Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7MKbdvpLKzbJQpg6YJ38Q3
        subject_person_id: p_ZSy5gAqhfVZVK9EQ2VePrD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王作朋，清人物。明清進士進士，籍贯河內，入仕進士。（中国历代人物传记资料库 CBDB 342455）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_eyRIjKz0iSVDr3xQUsCLu4
          claim_id: c_7MKbdvpLKzbJQpg6YJ38Q3
          source_id: s_zMfRbBDrBQePCM4rMZ5uPs
          stance: supports
          locator: CBDB:342455
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

# 王作朋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王作朋 | accepted |
| bio.summary | 王作朋，清人物。明清進士進士，籍贯河內，入仕進士。（中国历代人物传记资料库 CBDB 342455） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王作朋（CBDB 342455）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342455&o=json)
