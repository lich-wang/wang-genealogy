---
schema: wang-person/v1
id: p_PjLFLca713vMspeHyzh9e2
status: active
merged_into: null
display_name: 王叔果
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qJUfZTARSJQWWDgWZQ3TW4
        subject_person_id: p_PjLFLca713vMspeHyzh9e2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王叔果
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_u9vUFfmuAY79mZDRfgYQ1C
          claim_id: c_qJUfZTARSJQWWDgWZQ3TW4
          source_id: s_Zcf1n9yz4QFE95Fq23RHz6
          stance: supports
          locator: CBDB:126578
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126578）
          source: &a1
            id: s_Zcf1n9yz4QFE95Fq23RHz6
            source_type: api_record
            title: 中国历代人物传记资料库：王叔果（CBDB 126578）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126578&o=json
            external_identifier: CBDB:126578
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.037Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_CQ6H7nTvMKW8AMFnDyksNb
        subject_person_id: p_PjLFLca713vMspeHyzh9e2
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1516年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GC4uHUzQKvfCdPLr7vXi8t
          claim_id: c_CQ6H7nTvMKW8AMFnDyksNb
          source_id: s_Zcf1n9yz4QFE95Fq23RHz6
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
        id: c_NLP24DuNCXYMacYNcBRtKp
        subject_person_id: p_PjLFLca713vMspeHyzh9e2
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1588年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FzrTbFm83Ms9PMpP8yk6bQ
          claim_id: c_NLP24DuNCXYMacYNcBRtKp
          source_id: s_Zcf1n9yz4QFE95Fq23RHz6
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
        id: c_PTYxCrtuZRAyLwgsvmKYPs
        subject_person_id: p_PjLFLca713vMspeHyzh9e2
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
        - id: cs_mbnaR4p9zHF5jNVcFXf8Jy
          claim_id: c_PTYxCrtuZRAyLwgsvmKYPs
          source_id: s_Zcf1n9yz4QFE95Fq23RHz6
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

# 王叔果

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王叔果 | accepted |
| birth.date | 1516年 | accepted |
| death.date | 1588年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王叔果（CBDB 126578）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126578&o=json)
