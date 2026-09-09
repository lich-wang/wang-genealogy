---
schema: wang-person/v1
id: p_G9tFhQ1WwsB9Terb7BAL5q
status: active
merged_into: null
display_name: 王濬
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_g2BYrv9M6Hakv8LdLEZ4Rz
        subject_person_id: p_G9tFhQ1WwsB9Terb7BAL5q
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王濬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Esdh4Csg653XH6Xe4aYykF
          claim_id: c_g2BYrv9M6Hakv8LdLEZ4Rz
          source_id: s_QhD1r7dus14xTjAJ4s83SM
          stance: supports
          locator: CBDB:198786
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（198786）
          source: &a1
            id: s_QhD1r7dus14xTjAJ4s83SM
            source_type: api_record
            title: 中国历代人物传记资料库：王濬（CBDB 198786）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198786&o=json
            external_identifier: CBDB:198786
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.508Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_WBvJLrkRtEq3V564WBdGHX
        subject_person_id: p_G9tFhQ1WwsB9Terb7BAL5q
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1432年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wzZ9hGoY3MVuDEgWK8pU3u
          claim_id: c_WBvJLrkRtEq3V564WBdGHX
          source_id: s_QhD1r7dus14xTjAJ4s83SM
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
        id: c_6SzPDTqqZAxB5SsGF5z9yR
        subject_person_id: p_G9tFhQ1WwsB9Terb7BAL5q
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
        - id: cs_rDcmc6n5tNqHPgzp97jLHv
          claim_id: c_6SzPDTqqZAxB5SsGF5z9yR
          source_id: s_QhD1r7dus14xTjAJ4s83SM
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

# 王濬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王濬 | accepted |
| birth.date | 1432年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王濬（CBDB 198786）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198786&o=json)
