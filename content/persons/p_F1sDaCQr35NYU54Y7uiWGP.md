---
schema: wang-person/v1
id: p_F1sDaCQr35NYU54Y7uiWGP
status: active
merged_into: null
display_name: 王萇
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QU5DkGwjPHiMcYSucT43iP
        subject_person_id: p_F1sDaCQr35NYU54Y7uiWGP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王萇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xcK53CofibDzXmXmMj4fJv
          claim_id: c_QU5DkGwjPHiMcYSucT43iP
          source_id: s_Fs3poSFGn4jeZcrcUQJz5R
          stance: supports
          locator: CBDB:191192
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（191192）
          source: &a1
            id: s_Fs3poSFGn4jeZcrcUQJz5R
            source_type: api_record
            title: 中国历代人物传记资料库：王萇（CBDB 191192）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191192&o=json
            external_identifier: CBDB:191192
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.352Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_RR8bhuP4ihwLG7M7qMQ9xj
        subject_person_id: p_F1sDaCQr35NYU54Y7uiWGP
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 848年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Q2QNE4Q7DFRyodZ3qBkDB5
          claim_id: c_RR8bhuP4ihwLG7M7qMQ9xj
          source_id: s_Fs3poSFGn4jeZcrcUQJz5R
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
        id: c_K93a3eunTcR4arag97GiCv
        subject_person_id: p_F1sDaCQr35NYU54Y7uiWGP
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
        - id: cs_Ct3mtKBMQRcFmXgfjuFPJE
          claim_id: c_K93a3eunTcR4arag97GiCv
          source_id: s_Fs3poSFGn4jeZcrcUQJz5R
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

# 王萇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王萇 | accepted |
| death.date | 848年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王萇（CBDB 191192）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191192&o=json)
