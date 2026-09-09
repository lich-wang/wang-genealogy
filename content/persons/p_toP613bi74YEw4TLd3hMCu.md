---
schema: wang-person/v1
id: p_toP613bi74YEw4TLd3hMCu
status: active
merged_into: null
display_name: 王遷
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vzB6qGu37JqTu3zpfx4cLZ
        subject_person_id: p_toP613bi74YEw4TLd3hMCu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jE65hAa6tkAwbHipCo9KQu
          claim_id: c_vzB6qGu37JqTu3zpfx4cLZ
          source_id: s_JZPgKAJYz37U9tJtuccbGu
          stance: supports
          locator: CBDB:306145
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（306145）
          source: &a1
            id: s_JZPgKAJYz37U9tJtuccbGu
            source_type: api_record
            title: 中国历代人物传记资料库：王遷（CBDB 306145）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306145&o=json
            external_identifier: CBDB:306145
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.758Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6K5rP8qffbafCLi82xjM7U
        subject_person_id: p_toP613bi74YEw4TLd3hMCu
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
        - id: cs_qinEoTqcaZp1RTvdj99tYo
          claim_id: c_6K5rP8qffbafCLi82xjM7U
          source_id: s_JZPgKAJYz37U9tJtuccbGu
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

# 王遷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王遷 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王遷（CBDB 306145）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306145&o=json)
