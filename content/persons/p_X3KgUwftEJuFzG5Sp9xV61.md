---
schema: wang-person/v1
id: p_X3KgUwftEJuFzG5Sp9xV61
status: active
merged_into: null
display_name: 王公晟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oD8sGVUGiH7uQbXx1iqpPg
        subject_person_id: p_X3KgUwftEJuFzG5Sp9xV61
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王公晟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7Qs7xBE4Q85knsXFnBsugT
          claim_id: c_oD8sGVUGiH7uQbXx1iqpPg
          source_id: s_rBBH9nEcpb3em36UBKxGK7
          stance: supports
          locator: CBDB:142034
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（142034）
          source: &a1
            id: s_rBBH9nEcpb3em36UBKxGK7
            source_type: api_record
            title: 中国历代人物传记资料库：王公晟（CBDB 142034）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142034&o=json
            external_identifier: CBDB:142034
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.210Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_QFUGSpVshHE6J8aHeCcBbY
        subject_person_id: p_X3KgUwftEJuFzG5Sp9xV61
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 802年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_x1EtLsFi776hooDK4CvL1K
          claim_id: c_QFUGSpVshHE6J8aHeCcBbY
          source_id: s_rBBH9nEcpb3em36UBKxGK7
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
        id: c_JggHB32dYwKy8YzbB4BneG
        subject_person_id: p_X3KgUwftEJuFzG5Sp9xV61
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 870年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_o8sVeupBMXZ9tzb1RFYeNQ
          claim_id: c_JggHB32dYwKy8YzbB4BneG
          source_id: s_rBBH9nEcpb3em36UBKxGK7
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
        id: c_GBCqxtDCnGy5DApQhq27so
        subject_person_id: p_X3KgUwftEJuFzG5Sp9xV61
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
        - id: cs_9vNoL7QuNpUmU4gQmhy9JT
          claim_id: c_GBCqxtDCnGy5DApQhq27so
          source_id: s_rBBH9nEcpb3em36UBKxGK7
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

# 王公晟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王公晟 | accepted |
| birth.date | 802年 | accepted |
| death.date | 870年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王公晟（CBDB 142034）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142034&o=json)
