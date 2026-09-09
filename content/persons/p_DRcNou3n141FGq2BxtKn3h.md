---
schema: wang-person/v1
id: p_DRcNou3n141FGq2BxtKn3h
status: active
merged_into: null
display_name: 王瑊
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eBSW5RuiMqwwFxJtj79bSa
        subject_person_id: p_DRcNou3n141FGq2BxtKn3h
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zfUuQGE2NevKJW37fQdxPo
          claim_id: c_eBSW5RuiMqwwFxJtj79bSa
          source_id: s_U9UWUap4dJFx47WyCMMHMj
          stance: supports
          locator: CBDB:341968
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（341968）
          source: &a1
            id: s_U9UWUap4dJFx47WyCMMHMj
            source_type: api_record
            title: 中国历代人物传记资料库：王瑊（CBDB 341968）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341968&o=json
            external_identifier: CBDB:341968
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.789Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pPAw5vWYSP9suU68R3ewHu
        subject_person_id: p_DRcNou3n141FGq2BxtKn3h
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
        - id: cs_GBocfa8BGKGUUMDE5GMkyu
          claim_id: c_pPAw5vWYSP9suU68R3ewHu
          source_id: s_U9UWUap4dJFx47WyCMMHMj
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

# 王瑊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑊 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王瑊（CBDB 341968）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341968&o=json)
