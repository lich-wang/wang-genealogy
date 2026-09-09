---
schema: wang-person/v1
id: p_x5chVJWUxFzThLSZwhLKJP
status: active
merged_into: null
display_name: 王唐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EBWfzEtV2rgjuBUGn1n1vH
        subject_person_id: p_x5chVJWUxFzThLSZwhLKJP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王唐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vod5tdQXBrUDQNy3azwh6Z
          claim_id: c_EBWfzEtV2rgjuBUGn1n1vH
          source_id: s_inWucc8M8AV8fqd8LdY3mC
          stance: supports
          locator: CBDB:37993
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（37993）
          source: &a1
            id: s_inWucc8M8AV8fqd8LdY3mC
            source_type: api_record
            title: 中国历代人物传记资料库：王唐（CBDB 37993）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37993&o=json
            external_identifier: CBDB:37993
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.311Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_FqV8FBspLAUju1Bc3ww9FM
        subject_person_id: p_x5chVJWUxFzThLSZwhLKJP
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1224年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4Qwi5XChjkMczeF9Eqj8Lo
          claim_id: c_FqV8FBspLAUju1Bc3ww9FM
          source_id: s_inWucc8M8AV8fqd8LdY3mC
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
        id: c_QUMTvTckPtGQ8S582qCQys
        subject_person_id: p_x5chVJWUxFzThLSZwhLKJP
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
        - id: cs_DftfkHsT78wAR7DjeBLgF2
          claim_id: c_QUMTvTckPtGQ8S582qCQys
          source_id: s_inWucc8M8AV8fqd8LdY3mC
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

# 王唐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王唐 | accepted |
| birth.date | 1224年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王唐（CBDB 37993）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37993&o=json)
