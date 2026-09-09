---
schema: wang-person/v1
id: p_PvJSWUenksG3qVpCHLqjhz
status: active
merged_into: null
display_name: 王麒
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YUvJcK3Yfr6xbJVV2mNJAV
        subject_person_id: p_PvJSWUenksG3qVpCHLqjhz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王麒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DJfKPz6Z6HHutq5pwt5XzZ
          claim_id: c_YUvJcK3Yfr6xbJVV2mNJAV
          source_id: s_CFqzRdAVnzQdro1Fy17ytM
          stance: supports
          locator: CBDB:697816
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（697816）
          source: &a1
            id: s_CFqzRdAVnzQdro1Fy17ytM
            source_type: api_record
            title: 中国历代人物传记资料库：王麒（CBDB 697816）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=697816&o=json
            external_identifier: CBDB:697816
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.730Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mNKWzBhfB3pkFoJ4jnSjD5
        subject_person_id: p_PvJSWUenksG3qVpCHLqjhz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_s4DPbDek7UQBKtMdQT7LYP
          claim_id: c_mNKWzBhfB3pkFoJ4jnSjD5
          source_id: s_CFqzRdAVnzQdro1Fy17ytM
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

# 王麒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王麒 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王麒（CBDB 697816）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=697816&o=json)
