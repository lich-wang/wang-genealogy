---
schema: wang-person/v1
id: p_Erh4mhNrUfhJ9PY5MKixBK
status: active
merged_into: null
display_name: 王午
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uG523F7B3k4fi4tC69WMFs
        subject_person_id: p_Erh4mhNrUfhJ9PY5MKixBK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王午
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_n7V9czmkbaA2mQZLvSM99w
          claim_id: c_uG523F7B3k4fi4tC69WMFs
          source_id: s_qBoSSBmmkfBSNJinX9FF2G
          stance: supports
          locator: CBDB:540151
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（540151）
          source: &a1
            id: s_qBoSSBmmkfBSNJinX9FF2G
            source_type: api_record
            title: 中国历代人物传记资料库：王午（CBDB 540151）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=540151&o=json
            external_identifier: CBDB:540151
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.443Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xVjgG5LiEAJf52cwdL2c7n
        subject_person_id: p_Erh4mhNrUfhJ9PY5MKixBK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9m9edTNa9Yk7xjokd2fADp
          claim_id: c_xVjgG5LiEAJf52cwdL2c7n
          source_id: s_qBoSSBmmkfBSNJinX9FF2G
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

# 王午

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王午 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王午（CBDB 540151）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=540151&o=json)
