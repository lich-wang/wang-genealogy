---
schema: wang-person/v1
id: p_NYf4fXj4n829cEBYm96jNc
status: active
merged_into: null
display_name: 王養
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3gN5Nxrvxs3yNggqjsBQAi
        subject_person_id: p_NYf4fXj4n829cEBYm96jNc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王養
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1RcQmN4mQCB9CPAubnZNnA
          claim_id: c_3gN5Nxrvxs3yNggqjsBQAi
          source_id: s_44DPacPNBUAQJBjuRadXdB
          stance: supports
          locator: CBDB:140133
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（140133）
          source: &a1
            id: s_44DPacPNBUAQJBjuRadXdB
            source_type: api_record
            title: 中国历代人物传记资料库：王養（CBDB 140133）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140133&o=json
            external_identifier: CBDB:140133
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.471Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_9h7pMM8MqEHTkvghHS37Tx
        subject_person_id: p_NYf4fXj4n829cEBYm96jNc
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 632年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fo1BFXJACEdKrrhaRiHssZ
          claim_id: c_9h7pMM8MqEHTkvghHS37Tx
          source_id: s_44DPacPNBUAQJBjuRadXdB
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
        id: c_JhTBGwcTuULfQkZC2GADeX
        subject_person_id: p_NYf4fXj4n829cEBYm96jNc
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 670年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_198M6Y2hnTdBc2GwZQQ597
          claim_id: c_JhTBGwcTuULfQkZC2GADeX
          source_id: s_44DPacPNBUAQJBjuRadXdB
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
        id: c_BTUVNnSrehGLDKfdRuKtum
        subject_person_id: p_NYf4fXj4n829cEBYm96jNc
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
        - id: cs_cQVDAt2khewqPA6DkCfoLb
          claim_id: c_BTUVNnSrehGLDKfdRuKtum
          source_id: s_44DPacPNBUAQJBjuRadXdB
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

# 王養

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王養 | accepted |
| birth.date | 632年 | accepted |
| death.date | 670年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王養（CBDB 140133）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140133&o=json)
