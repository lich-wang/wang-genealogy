---
schema: wang-person/v1
id: p_V977tuTXveY9HTtwYUxUVK
status: active
merged_into: null
display_name: 王大同
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ByZyhyeGRCK49KP5GFFwib
        subject_person_id: p_V977tuTXveY9HTtwYUxUVK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大同
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qWVH6rQWqyCRWEsfnWnxe4
          claim_id: c_ByZyhyeGRCK49KP5GFFwib
          source_id: s_dXxzogSP7LpJCEMtomWTqF
          stance: supports
          locator: CBDB:572685
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（572685）
          source: &a1
            id: s_dXxzogSP7LpJCEMtomWTqF
            source_type: api_record
            title: 中国历代人物传记资料库：王大同（CBDB 572685）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=572685&o=json
            external_identifier: CBDB:572685
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.889Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_fNjXafp2KDKqDuE7YKfApj
        subject_person_id: p_V977tuTXveY9HTtwYUxUVK
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1027年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5ZhATLCoWUUYNtXTAVJLKF
          claim_id: c_fNjXafp2KDKqDuE7YKfApj
          source_id: s_dXxzogSP7LpJCEMtomWTqF
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
        id: c_H91DAtr1A66xz46jVQ2dXT
        subject_person_id: p_V977tuTXveY9HTtwYUxUVK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oUz56upHLVy566jwVNRTEC
          claim_id: c_H91DAtr1A66xz46jVQ2dXT
          source_id: s_dXxzogSP7LpJCEMtomWTqF
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

# 王大同

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大同 | accepted |
| death.date | 1027年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王大同（CBDB 572685）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=572685&o=json)
