---
schema: wang-person/v1
id: p_eaCJx4f5xQjYkN6krp3axA
status: active
merged_into: null
display_name: 王藻
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UrZnke7oh2qhzi4SNvM9Wz
        subject_person_id: p_eaCJx4f5xQjYkN6krp3axA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王藻
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_K7Bh7zK9c4phEAZsZorr8K
          claim_id: c_UrZnke7oh2qhzi4SNvM9Wz
          source_id: s_sK44S9fS11fJeQhMdshqKN
          stance: supports
          locator: CBDB:71299
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71299）
          source: &a1
            id: s_sK44S9fS11fJeQhMdshqKN
            source_type: api_record
            title: 中国历代人物传记资料库：王藻（CBDB 71299）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71299&o=json
            external_identifier: CBDB:71299
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.580Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_K5kH4QwFTuxRHfe9juRrXF
        subject_person_id: p_eaCJx4f5xQjYkN6krp3axA
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1693年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bHpRrGLLjNNbzUpDgw62ga
          claim_id: c_K5kH4QwFTuxRHfe9juRrXF
          source_id: s_sK44S9fS11fJeQhMdshqKN
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AdGPq6VXTYZu3XuyVzBFhr
        subject_person_id: p_eaCJx4f5xQjYkN6krp3axA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_i93PFdZM5B4HmCiUGJN4Df
          claim_id: c_AdGPq6VXTYZu3XuyVzBFhr
          source_id: s_sK44S9fS11fJeQhMdshqKN
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

# 王藻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王藻 | accepted |
| birth.date | 1693年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王藻（CBDB 71299）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71299&o=json)
