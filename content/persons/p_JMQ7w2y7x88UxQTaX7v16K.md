---
schema: wang-person/v1
id: p_JMQ7w2y7x88UxQTaX7v16K
status: active
merged_into: null
display_name: 王夢齡
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XgrA2MpNwq9P9Kpxp8bjf1
        subject_person_id: p_JMQ7w2y7x88UxQTaX7v16K
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夢齡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TpFtptKUtVuUcEcWQ6Mfik
          claim_id: c_XgrA2MpNwq9P9Kpxp8bjf1
          source_id: s_WLzGAnMsmR8762Rnkk1DED
          stance: supports
          locator: CBDB:69396
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69396）
          source: &a1
            id: s_WLzGAnMsmR8762Rnkk1DED
            source_type: api_record
            title: 中国历代人物传记资料库：王夢齡（CBDB 69396）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69396&o=json
            external_identifier: CBDB:69396
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.116Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_6ifDwrC54c5emCagUn4G5h
        subject_person_id: p_JMQ7w2y7x88UxQTaX7v16K
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1866年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EAWuvTyx3jBBFuQsVR9iGD
          claim_id: c_6ifDwrC54c5emCagUn4G5h
          source_id: s_WLzGAnMsmR8762Rnkk1DED
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
        id: c_K2ByVomsdMN4JSg1z7Saf6
        subject_person_id: p_JMQ7w2y7x88UxQTaX7v16K
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
        - id: cs_kJU8pM24YFdGAqSwAn83Pq
          claim_id: c_K2ByVomsdMN4JSg1z7Saf6
          source_id: s_WLzGAnMsmR8762Rnkk1DED
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

# 王夢齡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王夢齡 | accepted |
| death.date | 1866年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王夢齡（CBDB 69396）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69396&o=json)
