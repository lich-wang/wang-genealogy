---
schema: wang-person/v1
id: p_6YDDamD31FqdZsDuahyiXX
status: active
merged_into: null
display_name: 王恕
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Y72Nz5f6EwuXBgEZG1MHpj
        subject_person_id: p_6YDDamD31FqdZsDuahyiXX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cXKnypE22mcR71F1QsYc7B
          claim_id: c_Y72Nz5f6EwuXBgEZG1MHpj
          source_id: s_mdsYqnaUWb8rvkx4qY5hGx
          stance: supports
          locator: CBDB:145608
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（145608）
          source: &a1
            id: s_mdsYqnaUWb8rvkx4qY5hGx
            source_type: api_record
            title: 中国历代人物传记资料库：王恕（CBDB 145608）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145608&o=json
            external_identifier: CBDB:145608
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.684Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_95XwMTB98Kq7GLitP5XUAP
        subject_person_id: p_6YDDamD31FqdZsDuahyiXX
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 723年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xhf7HgEWq3uRYhTjJf3zN5
          claim_id: c_95XwMTB98Kq7GLitP5XUAP
          source_id: s_mdsYqnaUWb8rvkx4qY5hGx
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
        id: c_Ya3WTmCht4gBCcf7LYZ2i6
        subject_person_id: p_6YDDamD31FqdZsDuahyiXX
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 784年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VvQ6QpN6tBSh8HH6g1gdHv
          claim_id: c_Ya3WTmCht4gBCcf7LYZ2i6
          source_id: s_mdsYqnaUWb8rvkx4qY5hGx
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
        id: c_5oaQuyYN4cJ23LZ4xT3j8Y
        subject_person_id: p_6YDDamD31FqdZsDuahyiXX
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
        - id: cs_q1jhcF444HCZeaCRVnrUa1
          claim_id: c_5oaQuyYN4cJ23LZ4xT3j8Y
          source_id: s_mdsYqnaUWb8rvkx4qY5hGx
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

# 王恕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王恕 | accepted |
| birth.date | 723年 | accepted |
| death.date | 784年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王恕（CBDB 145608）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145608&o=json)
