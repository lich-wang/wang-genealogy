---
schema: wang-person/v1
id: p_AuyLqCGTGTSVeGuNAU3Pyx
status: active
merged_into: null
display_name: 王翹
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iPdcY1FhqKqRdDjGya4sXu
        subject_person_id: p_AuyLqCGTGTSVeGuNAU3Pyx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rExNcjB7qnZNgXi1C5S1tP
          claim_id: c_iPdcY1FhqKqRdDjGya4sXu
          source_id: s_Wo9Lu3K7dUcJsHk9qqTwbN
          stance: supports
          locator: CBDB:126859
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126859）
          source: &a1
            id: s_Wo9Lu3K7dUcJsHk9qqTwbN
            source_type: api_record
            title: 中国历代人物传记资料库：王翹（CBDB 126859）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126859&o=json
            external_identifier: CBDB:126859
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.263Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_CA1FGpxxp3PCab75wQA3xB
        subject_person_id: p_AuyLqCGTGTSVeGuNAU3Pyx
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1505年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BNuv6GBSw9xTa53hHcUtaA
          claim_id: c_CA1FGpxxp3PCab75wQA3xB
          source_id: s_Wo9Lu3K7dUcJsHk9qqTwbN
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_d6jtH3QjAFwaw6cPnGrV2e
        subject_person_id: p_AuyLqCGTGTSVeGuNAU3Pyx
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1572年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kfMKgYM4H7ojAFAuvMJbgZ
          claim_id: c_d6jtH3QjAFwaw6cPnGrV2e
          source_id: s_Wo9Lu3K7dUcJsHk9qqTwbN
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Q3HRUmRPHKUYFFfkjp5Nfi
        subject_person_id: p_AuyLqCGTGTSVeGuNAU3Pyx
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
        - id: cs_bDQot3cX4fLW9yB47yEkzY
          claim_id: c_Q3HRUmRPHKUYFFfkjp5Nfi
          source_id: s_Wo9Lu3K7dUcJsHk9qqTwbN
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

# 王翹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王翹 | accepted |
| birth.date | 1505年 | accepted |
| death.date | 1572年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王翹（CBDB 126859）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126859&o=json)
