---
schema: wang-person/v1
id: p_UKZ9JENMUQXopMywb8jsK4
status: active
merged_into: null
display_name: 王撝
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oN35XX772pWqm3RZ8QQ3ua
        subject_person_id: p_UKZ9JENMUQXopMywb8jsK4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王撝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QJYCNJE7rCnDE2yu98MM5X
          claim_id: c_oN35XX772pWqm3RZ8QQ3ua
          source_id: s_63pKKv3HG9tRh4545qEzmA
          stance: supports
          locator: CBDB:19879
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（19879）
          source: &a1
            id: s_63pKKv3HG9tRh4545qEzmA
            source_type: api_record
            title: 中国历代人物传记资料库：王撝（CBDB 19879）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19879&o=json
            external_identifier: CBDB:19879
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.745Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8z1BkfWdT4kExPfFcrvMk8
        subject_person_id: p_UKZ9JENMUQXopMywb8jsK4
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
        - id: cs_8BcLvY2qLeucQCKSsZTMtP
          claim_id: c_8z1BkfWdT4kExPfFcrvMk8
          source_id: s_63pKKv3HG9tRh4545qEzmA
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

# 王撝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王撝 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王撝（CBDB 19879）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19879&o=json)
