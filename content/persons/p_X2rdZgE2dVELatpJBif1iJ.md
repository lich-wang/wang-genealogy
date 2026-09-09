---
schema: wang-person/v1
id: p_X2rdZgE2dVELatpJBif1iJ
status: active
merged_into: null
display_name: 王應楨
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_C41b1xZqVhWFCouDD4ShRD
        subject_person_id: p_X2rdZgE2dVELatpJBif1iJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應楨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bVrZLmaM3PshC2qJeS9j3P
          claim_id: c_C41b1xZqVhWFCouDD4ShRD
          source_id: s_uBZrujLJqdxDEBk1YuP1j4
          stance: supports
          locator: CBDB:576663
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（576663）
          source: &a1
            id: s_uBZrujLJqdxDEBk1YuP1j4
            source_type: api_record
            title: 中国历代人物传记资料库：王應楨（CBDB 576663）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=576663&o=json
            external_identifier: CBDB:576663
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.960Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Ub5fNZg7BD4vaQyJzGB66o
        subject_person_id: p_X2rdZgE2dVELatpJBif1iJ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1566年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bhazWZF5HHx61NydH7dHcf
          claim_id: c_Ub5fNZg7BD4vaQyJzGB66o
          source_id: s_uBZrujLJqdxDEBk1YuP1j4
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
        id: c_STtfC2Du4iH13GBPZjW7d5
        subject_person_id: p_X2rdZgE2dVELatpJBif1iJ
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
        - id: cs_7CEnVDFdBennJbED8QTsQz
          claim_id: c_STtfC2Du4iH13GBPZjW7d5
          source_id: s_uBZrujLJqdxDEBk1YuP1j4
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

# 王應楨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應楨 | accepted |
| death.date | 1566年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王應楨（CBDB 576663）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=576663&o=json)
