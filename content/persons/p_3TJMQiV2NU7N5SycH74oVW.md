---
schema: wang-person/v1
id: p_3TJMQiV2NU7N5SycH74oVW
status: active
merged_into: null
display_name: 王訢
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MzYHZzsejhPmSv51zjSRVq
        subject_person_id: p_3TJMQiV2NU7N5SycH74oVW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王訢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SHAJoqtCsUH6BeXbEsgLTb
          claim_id: c_MzYHZzsejhPmSv51zjSRVq
          source_id: s_hKniLkL7sjoXZhqQf77n8E
          stance: supports
          locator: CBDB:71063
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71063）
          source: &a1
            id: s_hKniLkL7sjoXZhqQf77n8E
            source_type: api_record
            title: 中国历代人物传记资料库：王訢（CBDB 71063）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71063&o=json
            external_identifier: CBDB:71063
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.329Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_V4Besm19XEGcPUVsiY4Bi5
        subject_person_id: p_3TJMQiV2NU7N5SycH74oVW
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1756年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jujg11Gik38DDYYcF32sfk
          claim_id: c_V4Besm19XEGcPUVsiY4Bi5
          source_id: s_hKniLkL7sjoXZhqQf77n8E
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gLFZsyx8o1jF3PuJ1gjB63
        subject_person_id: p_3TJMQiV2NU7N5SycH74oVW
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
        - id: cs_WniiHAM4wFLHgi3CM4g4oi
          claim_id: c_gLFZsyx8o1jF3PuJ1gjB63
          source_id: s_hKniLkL7sjoXZhqQf77n8E
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

# 王訢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王訢 | accepted |
| birth.date | 1756年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王訢（CBDB 71063）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71063&o=json)
