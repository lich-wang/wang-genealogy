---
schema: wang-person/v1
id: p_jKi5c4J6CPUkCC3FL5KPio
status: active
merged_into: null
display_name: 王道仁
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nq8inZm7BoB3ceuyf9Adxr
        subject_person_id: p_jKi5c4J6CPUkCC3FL5KPio
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道仁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ibtrz52GTbdQZsSHb5yprd
          claim_id: c_nq8inZm7BoB3ceuyf9Adxr
          source_id: s_VgjQ6DCcfBTCmxfrNWVcQh
          stance: supports
          locator: CBDB:142411
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（142411）
          source: &a1
            id: s_VgjQ6DCcfBTCmxfrNWVcQh
            source_type: api_record
            title: 中国历代人物传记资料库：王道仁（CBDB 142411）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142411&o=json
            external_identifier: CBDB:142411
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.215Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_oBd19F8aBe3zDs68rswu6y
        subject_person_id: p_jKi5c4J6CPUkCC3FL5KPio
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 590年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zN1eTV3JzHvQukbB6NrqcD
          claim_id: c_oBd19F8aBe3zDs68rswu6y
          source_id: s_VgjQ6DCcfBTCmxfrNWVcQh
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
        id: c_bfksfN11yhKnnyfA9KgpS8
        subject_person_id: p_jKi5c4J6CPUkCC3FL5KPio
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 651年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UJP7PoJoBqrHdZ9RGvE4TL
          claim_id: c_bfksfN11yhKnnyfA9KgpS8
          source_id: s_VgjQ6DCcfBTCmxfrNWVcQh
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
        id: c_KzS16vq543z3GMbX63j4mH
        subject_person_id: p_jKi5c4J6CPUkCC3FL5KPio
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
        - id: cs_5Ksf72tQigJZFvinDQuvC2
          claim_id: c_KzS16vq543z3GMbX63j4mH
          source_id: s_VgjQ6DCcfBTCmxfrNWVcQh
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_LyUMWBbscCNaTWDzL2W4BR
        subject_person_id: p_CjH8cGK5qidgRN6Pjz5TZH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jKi5c4J6CPUkCC3FL5KPio
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tzZvckMy1nU4uyhaTImMZ0
          claim_id: c_LyUMWBbscCNaTWDzL2W4BR
          source_id: s_6jR4iPsGWrLbGAFzscVoKZ
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Yonghui6：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_6jR4iPsGWrLbGAFzscVoKZ
            source_type: api_record
            title: 中国历代人物传记资料库：王實（CBDB 162018）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=162018&o=json
            external_identifier: CBDB:162018
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.950Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_CjH8cGK5qidgRN6Pjz5TZH
        status: active
        display_name: 王實
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王道仁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王道仁 | accepted |
| birth.date | 590年 | accepted |
| death.date | 651年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_CjH8cGK5qidgRN6Pjz5TZH | 王實 | accepted |

## 外部来源

- [中国历代人物传记资料库：王道仁（CBDB 142411）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142411&o=json)
- [中国历代人物传记资料库：王實（CBDB 162018）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=162018&o=json)
