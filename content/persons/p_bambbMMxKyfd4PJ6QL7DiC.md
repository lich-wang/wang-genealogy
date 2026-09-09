---
schema: wang-person/v1
id: p_bambbMMxKyfd4PJ6QL7DiC
status: active
merged_into: null
display_name: 王家祿
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YYFYAoQhGvPRvpbAskSW1e
        subject_person_id: p_bambbMMxKyfd4PJ6QL7DiC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王家祿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Gmb6PAPy4g7GEt5v8uCrzV
          claim_id: c_YYFYAoQhGvPRvpbAskSW1e
          source_id: s_tBMunBrxXb1k2ztq88SBeg
          stance: supports
          locator: CBDB:69286
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69286）
          source: &a1
            id: s_tBMunBrxXb1k2ztq88SBeg
            source_type: api_record
            title: 中国历代人物传记资料库：王家祿（CBDB 69286）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69286&o=json
            external_identifier: CBDB:69286
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.195Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_tvXNs6pLvhDe3FFgz7aCJi
        subject_person_id: p_bambbMMxKyfd4PJ6QL7DiC
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1859年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_imwmduu7nTijG88wGHj3vs
          claim_id: c_tvXNs6pLvhDe3FFgz7aCJi
          source_id: s_tBMunBrxXb1k2ztq88SBeg
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
        id: c_gKxVuK37G7QBThkf2K3Ux7
        subject_person_id: p_bambbMMxKyfd4PJ6QL7DiC
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
        - id: cs_TER3iHiW6nMaFMyookE5yw
          claim_id: c_gKxVuK37G7QBThkf2K3Ux7
          source_id: s_tBMunBrxXb1k2ztq88SBeg
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

# 王家祿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王家祿 | accepted |
| death.date | 1859年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王家祿（CBDB 69286）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69286&o=json)
