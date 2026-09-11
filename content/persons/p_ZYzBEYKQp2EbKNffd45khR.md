---
schema: wang-person/v1
id: p_ZYzBEYKQp2EbKNffd45khR
status: active
merged_into: null
display_name: 王建中
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_b7iZLUUq8r7mEj1uQNamfT
        subject_person_id: p_ZYzBEYKQp2EbKNffd45khR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王建中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XJEFj2NwTBHdbgPHuo7p7T
          claim_id: c_b7iZLUUq8r7mEj1uQNamfT
          source_id: s_yEqeMDhPnvcvpxVqLs9s9o
          stance: supports
          locator: CBDB:341999
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（341999）
          source: &a1
            id: s_yEqeMDhPnvcvpxVqLs9s9o
            source_type: api_record
            title: 中国历代人物传记资料库：王建中（CBDB 341999）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341999&o=json
            external_identifier: CBDB:341999
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.805Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2Ze8Gt5VXwWjgwubDk8kJo
        subject_person_id: p_ZYzBEYKQp2EbKNffd45khR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王建中，清人物。明清進士進士，籍贯大城，入仕進士。（中国历代人物传记资料库 CBDB 341999）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_AFAXr2XUzFi2VAXUyK_X_W
          claim_id: c_2Ze8Gt5VXwWjgwubDk8kJo
          source_id: s_yEqeMDhPnvcvpxVqLs9s9o
          stance: supports
          locator: CBDB:341999
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

# 王建中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王建中 | accepted |
| bio.summary | 王建中，清人物。明清進士進士，籍贯大城，入仕進士。（中国历代人物传记资料库 CBDB 341999） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王建中（CBDB 341999）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341999&o=json)
