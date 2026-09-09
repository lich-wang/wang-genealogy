---
schema: wang-person/v1
id: p_UjZpJ3nna6WnKHPp7DAt53
status: active
merged_into: null
display_name: 王三聘
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qxENmt67WZ7pmuKvoyPD7i
        subject_person_id: p_UjZpJ3nna6WnKHPp7DAt53
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三聘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_R45aGTvLh7QDx4d2m33BnJ
          claim_id: c_qxENmt67WZ7pmuKvoyPD7i
          source_id: s_VeAAfBxe8QmHhEieXsCmM1
          stance: supports
          locator: CBDB:203007
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（203007）
          source: &a1
            id: s_VeAAfBxe8QmHhEieXsCmM1
            source_type: api_record
            title: 中国历代人物传记资料库：王三聘（CBDB 203007）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203007&o=json
            external_identifier: CBDB:203007
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.771Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_6HuPkqtQAyaaxwJBBs6HYL
        subject_person_id: p_UjZpJ3nna6WnKHPp7DAt53
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1501年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZWubW6i5qdcwySEAPxogmN
          claim_id: c_6HuPkqtQAyaaxwJBBs6HYL
          source_id: s_VeAAfBxe8QmHhEieXsCmM1
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
        id: c_w3JquwYQe57nyeMeNGnLVf
        subject_person_id: p_UjZpJ3nna6WnKHPp7DAt53
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
        - id: cs_k4eN33c7vpb2WfdMMEL5CP
          claim_id: c_w3JquwYQe57nyeMeNGnLVf
          source_id: s_VeAAfBxe8QmHhEieXsCmM1
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

# 王三聘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王三聘 | accepted |
| birth.date | 1501年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王三聘（CBDB 203007）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203007&o=json)
