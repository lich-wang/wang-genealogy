---
schema: wang-person/v1
id: p_wZCSw897v1VHo4DPDZtzxp
status: active
merged_into: null
display_name: 王嘉會
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XcdoT48t7EMvBUY4sGAFRm
        subject_person_id: p_wZCSw897v1VHo4DPDZtzxp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘉會
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HY6qYp9f7H5sKKv63yR4i5
          claim_id: c_XcdoT48t7EMvBUY4sGAFRm
          source_id: s_g1pnAhLXbnNkCDP6AKX6Ba
          stance: supports
          locator: CBDB:72146
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（72146）
          source: &a1
            id: s_g1pnAhLXbnNkCDP6AKX6Ba
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉會（CBDB 72146）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72146&o=json
            external_identifier: CBDB:72146
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.022Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_7GUJCTLpKD6AXKqZg53sx6
        subject_person_id: p_wZCSw897v1VHo4DPDZtzxp
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1707年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dHx41LdptFXaydE9gW6cer
          claim_id: c_7GUJCTLpKD6AXKqZg53sx6
          source_id: s_g1pnAhLXbnNkCDP6AKX6Ba
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
        id: c_duJ44KPvZ7wsK4cuEMU9mW
        subject_person_id: p_wZCSw897v1VHo4DPDZtzxp
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
        - id: cs_hDe9oXKc1q7aMbMeiT1XjQ
          claim_id: c_duJ44KPvZ7wsK4cuEMU9mW
          source_id: s_g1pnAhLXbnNkCDP6AKX6Ba
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

# 王嘉會

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嘉會 | accepted |
| birth.date | 1707年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王嘉會（CBDB 72146）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72146&o=json)
