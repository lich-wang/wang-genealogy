---
schema: wang-person/v1
id: p_2GjVAPNSCojFZnHBTwZoNq
status: active
merged_into: null
display_name: 王訓
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LM63d18F1awtJfrweEc6xs
        subject_person_id: p_2GjVAPNSCojFZnHBTwZoNq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王訓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_P2siugRZFYSK1fTjxHqRwQ
          claim_id: c_LM63d18F1awtJfrweEc6xs
          source_id: s_SLNr6ZGXbTP2FhQP8rPVFJ
          stance: supports
          locator: CBDB:69310
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69310）
          source: &a1
            id: s_SLNr6ZGXbTP2FhQP8rPVFJ
            source_type: api_record
            title: 中国历代人物传记资料库：王訓（CBDB 69310）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69310&o=json
            external_identifier: CBDB:69310
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.207Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_VsfPGCcWvh84msAU1LuQtX
        subject_person_id: p_2GjVAPNSCojFZnHBTwZoNq
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1857年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JUGE8PsaQAS9D4G1PWN8p9
          claim_id: c_VsfPGCcWvh84msAU1LuQtX
          source_id: s_SLNr6ZGXbTP2FhQP8rPVFJ
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
        id: c_hywD53SarNZNKMcfN7Q6T6
        subject_person_id: p_2GjVAPNSCojFZnHBTwZoNq
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
        - id: cs_koHZhz9ywFgmbhw2DiiH4A
          claim_id: c_hywD53SarNZNKMcfN7Q6T6
          source_id: s_SLNr6ZGXbTP2FhQP8rPVFJ
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

# 王訓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王訓 | accepted |
| death.date | 1857年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王訓（CBDB 69310）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69310&o=json)
