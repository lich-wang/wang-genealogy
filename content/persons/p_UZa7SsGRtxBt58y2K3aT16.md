---
schema: wang-person/v1
id: p_UZa7SsGRtxBt58y2K3aT16
status: active
merged_into: null
display_name: 王宗茂
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FXsdu7J82EmK5r9tjpdmAQ
        subject_person_id: p_UZa7SsGRtxBt58y2K3aT16
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗茂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9ApribQkSRnPy8EBDYvJTZ
          claim_id: c_FXsdu7J82EmK5r9tjpdmAQ
          source_id: s_BmQpcZT2TjNopqBs6Rgzjh
          stance: supports
          locator: CBDB:68496
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（68496）
          source: &a1
            id: s_BmQpcZT2TjNopqBs6Rgzjh
            source_type: api_record
            title: 中国历代人物传记资料库：王宗茂（CBDB 68496）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68496&o=json
            external_identifier: CBDB:68496
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.076Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_SRhWVpqfREJg3HFi4XbvCM
        subject_person_id: p_UZa7SsGRtxBt58y2K3aT16
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1511年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_quC38ipYE2taXM84bFNnLr
          claim_id: c_SRhWVpqfREJg3HFi4XbvCM
          source_id: s_BmQpcZT2TjNopqBs6Rgzjh
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
        id: c_EkKWLg4Fx3TAZuMBCGFQCy
        subject_person_id: p_UZa7SsGRtxBt58y2K3aT16
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1562年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VURKfG871UxfzQDo1uNVZt
          claim_id: c_EkKWLg4Fx3TAZuMBCGFQCy
          source_id: s_BmQpcZT2TjNopqBs6Rgzjh
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
        id: c_u3QD9Rbrzx14yGXC5qgr3R
        subject_person_id: p_UZa7SsGRtxBt58y2K3aT16
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
        - id: cs_s1ap9TL2qeJC3JQg9XZR3q
          claim_id: c_u3QD9Rbrzx14yGXC5qgr3R
          source_id: s_BmQpcZT2TjNopqBs6Rgzjh
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

# 王宗茂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗茂 | accepted |
| birth.date | 1511年 | accepted |
| death.date | 1562年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宗茂（CBDB 68496）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68496&o=json)
