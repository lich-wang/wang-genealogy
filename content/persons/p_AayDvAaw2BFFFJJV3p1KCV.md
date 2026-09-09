---
schema: wang-person/v1
id: p_AayDvAaw2BFFFJJV3p1KCV
status: active
merged_into: null
display_name: 王世隆
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_j533wLB9BrVXmeUS9Y8GhQ
        subject_person_id: p_AayDvAaw2BFFFJJV3p1KCV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世隆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_h9HPVK1koiCZ4qPjNmo6Vm
          claim_id: c_j533wLB9BrVXmeUS9Y8GhQ
          source_id: s_VzvPDRXDpxovog7TLRDnQg
          stance: supports
          locator: CBDB:38446
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38446）
          source: &a1
            id: s_VzvPDRXDpxovog7TLRDnQg
            source_type: api_record
            title: 中国历代人物传记资料库：王世隆（CBDB 38446）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38446&o=json
            external_identifier: CBDB:38446
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.477Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_CLgoDvmtDiMWfgQnYGYYcL
        subject_person_id: p_AayDvAaw2BFFFJJV3p1KCV
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 976年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_p2JQAihmTZMLeYzEXz2Tzj
          claim_id: c_CLgoDvmtDiMWfgQnYGYYcL
          source_id: s_VzvPDRXDpxovog7TLRDnQg
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
        id: c_QYN4dMESzQYiG22TuqM4tw
        subject_person_id: p_AayDvAaw2BFFFJJV3p1KCV
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1042年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PZzqWugZeJ9tBwq6tgxuMM
          claim_id: c_QYN4dMESzQYiG22TuqM4tw
          source_id: s_VzvPDRXDpxovog7TLRDnQg
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
        id: c_Lxo19MeyznP9fYqwMYwTAw
        subject_person_id: p_AayDvAaw2BFFFJJV3p1KCV
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
        - id: cs_i2H347RCeu2nghiJhGyZW5
          claim_id: c_Lxo19MeyznP9fYqwMYwTAw
          source_id: s_VzvPDRXDpxovog7TLRDnQg
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

# 王世隆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世隆 | accepted |
| birth.date | 976年 | accepted |
| death.date | 1042年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王世隆（CBDB 38446）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38446&o=json)
