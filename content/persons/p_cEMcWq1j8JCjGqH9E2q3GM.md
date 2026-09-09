---
schema: wang-person/v1
id: p_cEMcWq1j8JCjGqH9E2q3GM
status: active
merged_into: null
display_name: 王詡
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_q2fRv36RgzQs6vCVMdaNnQ
        subject_person_id: p_cEMcWq1j8JCjGqH9E2q3GM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王詡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LDqXw8zGkrMq1ZiFhTQMWo
          claim_id: c_q2fRv36RgzQs6vCVMdaNnQ
          source_id: s_6yc9CBuE1JPBz38JQGtGp8
          stance: supports
          locator: CBDB:71116
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71116）
          source: &a1
            id: s_6yc9CBuE1JPBz38JQGtGp8
            source_type: api_record
            title: 中国历代人物传记资料库：王詡（CBDB 71116）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71116&o=json
            external_identifier: CBDB:71116
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.388Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_DNb9bCmyVFP2BSTwYZ9LLg
        subject_person_id: p_cEMcWq1j8JCjGqH9E2q3GM
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1824年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pBsK3B3jshCMZDkJqnkp2e
          claim_id: c_DNb9bCmyVFP2BSTwYZ9LLg
          source_id: s_6yc9CBuE1JPBz38JQGtGp8
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
        id: c_1Tm7AetQp5iZxEUCdmr9u7
        subject_person_id: p_cEMcWq1j8JCjGqH9E2q3GM
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1907年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kDFpq88vd8FaZXPJFkHSGU
          claim_id: c_1Tm7AetQp5iZxEUCdmr9u7
          source_id: s_6yc9CBuE1JPBz38JQGtGp8
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
        id: c_vxAnQQ1zki4iyJHccwCE1c
        subject_person_id: p_cEMcWq1j8JCjGqH9E2q3GM
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
        - id: cs_MsRPDfvaqDEPhrEq2gMPHc
          claim_id: c_vxAnQQ1zki4iyJHccwCE1c
          source_id: s_6yc9CBuE1JPBz38JQGtGp8
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

# 王詡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王詡 | accepted |
| birth.date | 1824年 | accepted |
| death.date | 1907年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王詡（CBDB 71116）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71116&o=json)
