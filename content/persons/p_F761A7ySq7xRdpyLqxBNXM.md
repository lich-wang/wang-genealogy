---
schema: wang-person/v1
id: p_F761A7ySq7xRdpyLqxBNXM
status: active
merged_into: null
display_name: 王子敬
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GN5HXQc2hdkJQ9GAEMPGzz
        subject_person_id: p_F761A7ySq7xRdpyLqxBNXM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子敬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zwNzuaXLxAEKfX5So5n367
          claim_id: c_GN5HXQc2hdkJQ9GAEMPGzz
          source_id: s_D9qwCZ6V2iANRhNpjJw8vN
          stance: supports
          locator: CBDB:683474
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（683474）
          source: &a1
            id: s_D9qwCZ6V2iANRhNpjJw8vN
            source_type: api_record
            title: 中国历代人物传记资料库：王子敬（CBDB 683474）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=683474&o=json
            external_identifier: CBDB:683474
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.301Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_j9YdUQPj7urN9D2EhFJw7m
        subject_person_id: p_F761A7ySq7xRdpyLqxBNXM
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
        - id: cs_DHKSFbXELZHSv3VonCA8jb
          claim_id: c_j9YdUQPj7urN9D2EhFJw7m
          source_id: s_D9qwCZ6V2iANRhNpjJw8vN
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

# 王子敬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王子敬 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王子敬（CBDB 683474）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=683474&o=json)
