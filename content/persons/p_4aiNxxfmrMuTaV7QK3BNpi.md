---
schema: wang-person/v1
id: p_4aiNxxfmrMuTaV7QK3BNpi
status: active
merged_into: null
display_name: 王岱
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_h394ZWzZjxcyxhmS6J5Q9n
        subject_person_id: p_4aiNxxfmrMuTaV7QK3BNpi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王岱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_n1RF2NSgyzmQz9rhWbAj5o
          claim_id: c_h394ZWzZjxcyxhmS6J5Q9n
          source_id: s_3z15M2kSLrnqseAWYDZnmt
          stance: supports
          locator: CBDB:61492
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（61492）
          source: &a1
            id: s_3z15M2kSLrnqseAWYDZnmt
            source_type: api_record
            title: 中国历代人物传记资料库：王岱（CBDB 61492）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=61492&o=json
            external_identifier: CBDB:61492
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.902Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_yJkdcSAa1GTSJCenrugh6T
        subject_person_id: p_4aiNxxfmrMuTaV7QK3BNpi
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1742年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EPEj72r6TW622r7987R1ei
          claim_id: c_yJkdcSAa1GTSJCenrugh6T
          source_id: s_3z15M2kSLrnqseAWYDZnmt
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
        id: c_rQUR1MdZReaB2vbYE9wM4G
        subject_person_id: p_4aiNxxfmrMuTaV7QK3BNpi
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
        - id: cs_tyjwb26SGUfaDHH4M9viQN
          claim_id: c_rQUR1MdZReaB2vbYE9wM4G
          source_id: s_3z15M2kSLrnqseAWYDZnmt
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

# 王岱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王岱 | accepted |
| birth.date | 1742年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王岱（CBDB 61492）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=61492&o=json)
