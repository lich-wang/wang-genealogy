---
schema: wang-person/v1
id: p_fbHvDV8B4hnpJVKar4aFb9
status: active
merged_into: null
display_name: 王應辰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9CG5U5Fa9D9W2siT7s8buM
        subject_person_id: p_fbHvDV8B4hnpJVKar4aFb9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應辰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nXSG95LG4dsX7jVpFGRR5p
          claim_id: c_9CG5U5Fa9D9W2siT7s8buM
          source_id: s_HG1CandbsfsxGLKr6NQEPM
          stance: supports
          locator: CBDB:688274
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（688274）
          source: &a1
            id: s_HG1CandbsfsxGLKr6NQEPM
            source_type: api_record
            title: 中国历代人物传记资料库：王應辰（CBDB 688274）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=688274&o=json
            external_identifier: CBDB:688274
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.507Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6WU1gRre2yw1ruodj9GBcZ
        subject_person_id: p_fbHvDV8B4hnpJVKar4aFb9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應辰，宋人物。籍贯德興，入仕進士。（中国历代人物传记资料库 CBDB 688274）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_sQGMWOU9d65sM9tEJKX4IA
          claim_id: c_6WU1gRre2yw1ruodj9GBcZ
          source_id: s_HG1CandbsfsxGLKr6NQEPM
          stance: supports
          locator: CBDB:688274
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

# 王應辰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應辰 | accepted |
| bio.summary | 王應辰，宋人物。籍贯德興，入仕進士。（中国历代人物传记资料库 CBDB 688274） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王應辰（CBDB 688274）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=688274&o=json)
