---
schema: wang-person/v1
id: p_NSKaGo44mD6LDGFEDxnoWF
status: active
merged_into: null
display_name: 王審邽
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Q2N6DbT17PRMJkBrSjnWLG
        subject_person_id: p_NSKaGo44mD6LDGFEDxnoWF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王審邽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8AhL19YKEpvseVQQvb43d6
          claim_id: c_Q2N6DbT17PRMJkBrSjnWLG
          source_id: s_ckrKDpARP1soAyYv7Cxvgb
          stance: supports
          locator: CBDB:194932
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（194932）
          source: &a1
            id: s_ckrKDpARP1soAyYv7Cxvgb
            source_type: api_record
            title: 中国历代人物传记资料库：王審邽（CBDB 194932）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=194932&o=json
            external_identifier: CBDB:194932
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.459Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_5Y8NfLBbPNqxKSJhbb4Ehi
        subject_person_id: p_NSKaGo44mD6LDGFEDxnoWF
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 921年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cyU6csLUjE5dniJysui7Wy
          claim_id: c_5Y8NfLBbPNqxKSJhbb4Ehi
          source_id: s_ckrKDpARP1soAyYv7Cxvgb
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
        id: c_VPaKc99pjujnYKUMWK3bCC
        subject_person_id: p_NSKaGo44mD6LDGFEDxnoWF
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
        - id: cs_KGEQPHLrzCeVizNFeFe47i
          claim_id: c_VPaKc99pjujnYKUMWK3bCC
          source_id: s_ckrKDpARP1soAyYv7Cxvgb
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

# 王審邽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王審邽 | accepted |
| death.date | 921年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王審邽（CBDB 194932）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=194932&o=json)
