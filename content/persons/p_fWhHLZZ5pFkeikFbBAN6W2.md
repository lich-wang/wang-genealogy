---
schema: wang-person/v1
id: p_fWhHLZZ5pFkeikFbBAN6W2
status: active
merged_into: null
display_name: 王媛
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uZCQP8vDoRUeFbDF5i4SEK
        subject_person_id: p_fWhHLZZ5pFkeikFbBAN6W2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王媛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VSpqN9LBsALxdmdjHjNiph
          claim_id: c_uZCQP8vDoRUeFbDF5i4SEK
          source_id: s_KdUz2oZj67akVZ6vP7HnZr
          stance: supports
          locator: CBDB:141214
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（141214）
          source: &a1
            id: s_KdUz2oZj67akVZ6vP7HnZr
            source_type: api_record
            title: 中国历代人物传记资料库：王媛（CBDB 141214）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141214&o=json
            external_identifier: CBDB:141214
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.550Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_8xFKFQ9HtbK2Jc8NJVEuFG
        subject_person_id: p_fWhHLZZ5pFkeikFbBAN6W2
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 648年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HU1dMosSX39Kmdz3CP4Emw
          claim_id: c_8xFKFQ9HtbK2Jc8NJVEuFG
          source_id: s_KdUz2oZj67akVZ6vP7HnZr
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
        id: c_57A4B7AQrfxxfQfAXGaBfy
        subject_person_id: p_fWhHLZZ5pFkeikFbBAN6W2
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 721年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kJ1iSwj5wqWJaU1gvEXses
          claim_id: c_57A4B7AQrfxxfQfAXGaBfy
          source_id: s_KdUz2oZj67akVZ6vP7HnZr
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
        id: c_m3Mk943dcxLdV7NnbfQPuy
        subject_person_id: p_fWhHLZZ5pFkeikFbBAN6W2
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
        - id: cs_HTBApibzCzaXpTezGEhcst
          claim_id: c_m3Mk943dcxLdV7NnbfQPuy
          source_id: s_KdUz2oZj67akVZ6vP7HnZr
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

# 王媛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王媛 | accepted |
| birth.date | 648年 | accepted |
| death.date | 721年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王媛（CBDB 141214）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141214&o=json)
