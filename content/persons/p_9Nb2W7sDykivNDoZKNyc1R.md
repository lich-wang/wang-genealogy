---
schema: wang-person/v1
id: p_9Nb2W7sDykivNDoZKNyc1R
status: active
merged_into: null
display_name: 王奎
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_x3L6DwszMZWCy9YVtKkoBD
        subject_person_id: p_9Nb2W7sDykivNDoZKNyc1R
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王奎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_z4LK7awDf7pQFQAJ1AVnLk
          claim_id: c_x3L6DwszMZWCy9YVtKkoBD
          source_id: s_hRRFPYwhsj9xKUj4cyrrjd
          stance: supports
          locator: CBDB:209897
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（209897）
          source: &a1
            id: s_hRRFPYwhsj9xKUj4cyrrjd
            source_type: api_record
            title: 中国历代人物传记资料库：王奎（CBDB 209897）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209897&o=json
            external_identifier: CBDB:209897
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.988Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RF59ByVJsW59rJdenMBANY
        subject_person_id: p_9Nb2W7sDykivNDoZKNyc1R
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
        - id: cs_CrMaY58tvA6pjf3t3mviX8
          claim_id: c_RF59ByVJsW59rJdenMBANY
          source_id: s_hRRFPYwhsj9xKUj4cyrrjd
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

# 王奎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王奎 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王奎（CBDB 209897）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209897&o=json)
