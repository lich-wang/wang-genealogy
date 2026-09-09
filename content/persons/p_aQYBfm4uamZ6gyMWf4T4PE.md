---
schema: wang-person/v1
id: p_aQYBfm4uamZ6gyMWf4T4PE
status: active
merged_into: null
display_name: 王士毅
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AaD2XKVAL6UqWYdH8w2Qqd
        subject_person_id: p_aQYBfm4uamZ6gyMWf4T4PE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士毅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_te368YEVSz2jP1VuJ2CeEU
          claim_id: c_AaD2XKVAL6UqWYdH8w2Qqd
          source_id: s_dQXRSWYnybcU326K6f8vqV
          stance: supports
          locator: CBDB:507256
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（507256）
          source: &a1
            id: s_dQXRSWYnybcU326K6f8vqV
            source_type: api_record
            title: 中国历代人物传记资料库：王士毅（CBDB 507256）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=507256&o=json
            external_identifier: CBDB:507256
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.023Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gyms861h3QsK65c7gE2Jsb
        subject_person_id: p_aQYBfm4uamZ6gyMWf4T4PE
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
        - id: cs_G3zhJ6zvnLk83kkHKGfxiU
          claim_id: c_gyms861h3QsK65c7gE2Jsb
          source_id: s_dQXRSWYnybcU326K6f8vqV
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

# 王士毅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王士毅 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王士毅（CBDB 507256）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=507256&o=json)
