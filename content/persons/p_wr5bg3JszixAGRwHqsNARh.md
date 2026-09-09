---
schema: wang-person/v1
id: p_wr5bg3JszixAGRwHqsNARh
status: active
merged_into: null
display_name: 王均諒
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tXVYJyLeCTLYjcY9tmB2uj
        subject_person_id: p_wr5bg3JszixAGRwHqsNARh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王均諒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Veo2KLayG7x4QG86776Zpb
          claim_id: c_tXVYJyLeCTLYjcY9tmB2uj
          source_id: s_Kbf1BuK4DPKfFrq5KFHdUX
          stance: supports
          locator: CBDB:67779
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（67779）
          source: &a1
            id: s_Kbf1BuK4DPKfFrq5KFHdUX
            source_type: api_record
            title: 中国历代人物传记资料库：王均諒（CBDB 67779）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67779&o=json
            external_identifier: CBDB:67779
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.097Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_7Lx9vf6JCCxTNWbSKjoAB2
        subject_person_id: p_wr5bg3JszixAGRwHqsNARh
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1371年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JNY87T5wnrPUWvwmFc6s5n
          claim_id: c_7Lx9vf6JCCxTNWbSKjoAB2
          source_id: s_Kbf1BuK4DPKfFrq5KFHdUX
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
        id: c_npMp5TFRA44eAP7DMU1AJe
        subject_person_id: p_wr5bg3JszixAGRwHqsNARh
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
        - id: cs_nTf2PkEPLUhLkC2sS2R3nH
          claim_id: c_npMp5TFRA44eAP7DMU1AJe
          source_id: s_Kbf1BuK4DPKfFrq5KFHdUX
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

# 王均諒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王均諒 | accepted |
| death.date | 1371年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王均諒（CBDB 67779）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67779&o=json)
