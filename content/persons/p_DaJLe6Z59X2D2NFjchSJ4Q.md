---
schema: wang-person/v1
id: p_DaJLe6Z59X2D2NFjchSJ4Q
status: active
merged_into: null
display_name: 王繼昌
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Cfk1mEBgtkcCgTLzc5qSaj
        subject_person_id: p_DaJLe6Z59X2D2NFjchSJ4Q
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼昌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ya5PftuM1JtxnzuEfdFpgT
          claim_id: c_Cfk1mEBgtkcCgTLzc5qSaj
          source_id: s_P8oots9Zm9rRoxNd8hsHZs
          stance: supports
          locator: CBDB:508184
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（508184）
          source: &a1
            id: s_P8oots9Zm9rRoxNd8hsHZs
            source_type: api_record
            title: 中国历代人物传记资料库：王繼昌（CBDB 508184）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=508184&o=json
            external_identifier: CBDB:508184
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.076Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fuHdEaZrX8P5NAb49bPvaF
        subject_person_id: p_DaJLe6Z59X2D2NFjchSJ4Q
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
        - id: cs_RsY8WLhFrK1YP8ckENUAB7
          claim_id: c_fuHdEaZrX8P5NAb49bPvaF
          source_id: s_P8oots9Zm9rRoxNd8hsHZs
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

# 王繼昌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王繼昌 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王繼昌（CBDB 508184）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=508184&o=json)
