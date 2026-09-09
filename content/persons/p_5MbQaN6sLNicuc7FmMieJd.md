---
schema: wang-person/v1
id: p_5MbQaN6sLNicuc7FmMieJd
status: active
merged_into: null
display_name: 王文錦
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_m2DUPe3skFQwiMER6qxCjG
        subject_person_id: p_5MbQaN6sLNicuc7FmMieJd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文錦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EzR18B626HqtUYve5zJLwE
          claim_id: c_m2DUPe3skFQwiMER6qxCjG
          source_id: s_gcATuP6CQr39pk8hp1ieE8
          stance: supports
          locator: CBDB:57810
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（57810）
          source: &a1
            id: s_gcATuP6CQr39pk8hp1ieE8
            source_type: api_record
            title: 中国历代人物传记资料库：王文錦（CBDB 57810）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=57810&o=json
            external_identifier: CBDB:57810
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.812Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_PYeU2TXn9XNAgniWHNbExS
        subject_person_id: p_5MbQaN6sLNicuc7FmMieJd
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1835年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AQSqb8eL6f5MyVBWocYmW5
          claim_id: c_PYeU2TXn9XNAgniWHNbExS
          source_id: s_gcATuP6CQr39pk8hp1ieE8
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
        id: c_N1HZJmuHMai9a1HdvDogk6
        subject_person_id: p_5MbQaN6sLNicuc7FmMieJd
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1896年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZAcwvAvFkWKnNZXCh3S1C7
          claim_id: c_N1HZJmuHMai9a1HdvDogk6
          source_id: s_gcATuP6CQr39pk8hp1ieE8
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
        id: c_nNoZ8kG3793w1nBHzxYau4
        subject_person_id: p_5MbQaN6sLNicuc7FmMieJd
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
        - id: cs_AcadP68Tc5rwVJe1P4EjDu
          claim_id: c_nNoZ8kG3793w1nBHzxYau4
          source_id: s_gcATuP6CQr39pk8hp1ieE8
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

# 王文錦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文錦 | accepted |
| birth.date | 1835年 | accepted |
| death.date | 1896年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文錦（CBDB 57810）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=57810&o=json)
