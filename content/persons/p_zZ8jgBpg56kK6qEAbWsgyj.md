---
schema: wang-person/v1
id: p_zZ8jgBpg56kK6qEAbWsgyj
status: active
merged_into: null
display_name: 王選
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_V8QDQ4Mj7HYrgKS74VWYRp
        subject_person_id: p_zZ8jgBpg56kK6qEAbWsgyj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王選
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DQjJ16GUWXDQWDcrzgbEic
          claim_id: c_V8QDQ4Mj7HYrgKS74VWYRp
          source_id: s_GmPk4oSMRZZ9dtt4M4rPBA
          stance: supports
          locator: CBDB:160792
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（160792）
          source: &a1
            id: s_GmPk4oSMRZZ9dtt4M4rPBA
            source_type: api_record
            title: 中国历代人物传记资料库：王選（CBDB 160792）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=160792&o=json
            external_identifier: CBDB:160792
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.943Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_h2TVFprEu4G71K8u16swjm
        subject_person_id: p_zZ8jgBpg56kK6qEAbWsgyj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_38AEsXoP1uRvUr5o75Fz5Y
          claim_id: c_h2TVFprEu4G71K8u16swjm
          source_id: s_GmPk4oSMRZZ9dtt4M4rPBA
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

# 王選

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王選 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王選（CBDB 160792）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=160792&o=json)
