---
schema: wang-person/v1
id: p_kCPz13SSm1xDt5iUdfmQbA
status: active
merged_into: null
display_name: 王建
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_P4fRpDaf1HHP4yNpqsN8sL
        subject_person_id: p_kCPz13SSm1xDt5iUdfmQbA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王建
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JHMrUXCyaCEoz9V5i8Kagm
          claim_id: c_P4fRpDaf1HHP4yNpqsN8sL
          source_id: s_GtXzMz1VrFHZr5hkkcazW7
          stance: supports
          locator: CBDB:498457
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（498457）
          source: &a1
            id: s_GtXzMz1VrFHZr5hkkcazW7
            source_type: api_record
            title: 中国历代人物传记资料库：王建（CBDB 498457）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=498457&o=json
            external_identifier: CBDB:498457
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.707Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_56AY78P3qVEDjwaUytub4k
        subject_person_id: p_kCPz13SSm1xDt5iUdfmQbA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为北魏人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4f7oU3HUGcUkeBeSugcyM8
          claim_id: c_56AY78P3qVEDjwaUytub4k
          source_id: s_GtXzMz1VrFHZr5hkkcazW7
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

# 王建

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王建 | accepted |
| bio.summary | CBDB 记载为北魏人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王建（CBDB 498457）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=498457&o=json)
