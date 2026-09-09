---
schema: wang-person/v1
id: p_Rb8rz9YWDF2F5cHDQYP9yH
status: active
merged_into: null
display_name: 王志宣
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7K73KAj8ZYdwD8DM6p9wNP
        subject_person_id: p_Rb8rz9YWDF2F5cHDQYP9yH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志宣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ipByKGHno4t6ZQwK4mg7cn
          claim_id: c_7K73KAj8ZYdwD8DM6p9wNP
          source_id: s_UcicNhRQFBH5H5UbL5Fy24
          stance: supports
          locator: CBDB:690729
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（690729）
          source: &a1
            id: s_UcicNhRQFBH5H5UbL5Fy24
            source_type: api_record
            title: 中国历代人物传记资料库：王志宣（CBDB 690729）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=690729&o=json
            external_identifier: CBDB:690729
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.485Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7CQLd3KdCc6oHmh3QYZgRL
        subject_person_id: p_Rb8rz9YWDF2F5cHDQYP9yH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gSDk7uycLQBcC6F7gBRtfP
          claim_id: c_7CQLd3KdCc6oHmh3QYZgRL
          source_id: s_UcicNhRQFBH5H5UbL5Fy24
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王志宣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王志宣 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王志宣（CBDB 690729）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=690729&o=json)
