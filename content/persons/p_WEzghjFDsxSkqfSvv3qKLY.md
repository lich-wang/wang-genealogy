---
schema: wang-person/v1
id: p_WEzghjFDsxSkqfSvv3qKLY
status: active
merged_into: null
display_name: 王永
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_F5f7fGBbw1XVLC5f4oBShv
        subject_person_id: p_WEzghjFDsxSkqfSvv3qKLY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fKcsJHve5mHTzBnykcXZkG
          claim_id: c_F5f7fGBbw1XVLC5f4oBShv
          source_id: s_4vpvrN323qB6wTHRaERaFj
          stance: supports
          locator: CBDB:100647
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100647）
          source: &a1
            id: s_4vpvrN323qB6wTHRaERaFj
            source_type: api_record
            title: 中国历代人物传记资料库：王永（CBDB 100647）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100647&o=json
            external_identifier: CBDB:100647
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.329Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Fnbt7DrKUC2Phcq8dHBY9F
        subject_person_id: p_WEzghjFDsxSkqfSvv3qKLY
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1308年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FgRPt8ijzU5TbtjMSgbrMX
          claim_id: c_Fnbt7DrKUC2Phcq8dHBY9F
          source_id: s_4vpvrN323qB6wTHRaERaFj
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
        id: c_RC8Bao9CnAbFkqNoZnhw5D
        subject_person_id: p_WEzghjFDsxSkqfSvv3qKLY
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1358年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_epV6MQQfoEBYwgCY6ZcaeL
          claim_id: c_RC8Bao9CnAbFkqNoZnhw5D
          source_id: s_4vpvrN323qB6wTHRaERaFj
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
        id: c_KGMXyzkFeFTSUavm6yVHQZ
        subject_person_id: p_WEzghjFDsxSkqfSvv3qKLY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qSo5cVDWQnQck9Vf9N6Vxa
          claim_id: c_KGMXyzkFeFTSUavm6yVHQZ
          source_id: s_4vpvrN323qB6wTHRaERaFj
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

# 王永

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王永 | accepted |
| birth.date | 1308年 | accepted |
| death.date | 1358年 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王永（CBDB 100647）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100647&o=json)
