---
schema: wang-person/v1
id: p_R7jmeqFYgTXeHhV8VE84kN
status: active
merged_into: null
display_name: 王發聚
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_K9yZpSpp9aFiNJPNEwj7n1
        subject_person_id: p_R7jmeqFYgTXeHhV8VE84kN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王發聚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Qd1vkmfzWtFQd3T5jAw2aJ
          claim_id: c_K9yZpSpp9aFiNJPNEwj7n1
          source_id: s_xgDKnXVM2kkzzXZFF743EC
          stance: supports
          locator: CBDB:639519
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639519）
          source: &a1
            id: s_xgDKnXVM2kkzzXZFF743EC
            source_type: api_record
            title: 中国历代人物传记资料库：王發聚（CBDB 639519）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639519&o=json
            external_identifier: CBDB:639519
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.959Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VHPnQBj66vQPfkoTwVR8dE
        subject_person_id: p_R7jmeqFYgTXeHhV8VE84kN
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
        - id: cs_AVuRLfeAT5VMHMWi6rjrEJ
          claim_id: c_VHPnQBj66vQPfkoTwVR8dE
          source_id: s_xgDKnXVM2kkzzXZFF743EC
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

# 王發聚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王發聚 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王發聚（CBDB 639519）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639519&o=json)
