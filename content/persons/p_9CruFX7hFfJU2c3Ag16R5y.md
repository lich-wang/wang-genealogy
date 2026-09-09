---
schema: wang-person/v1
id: p_9CruFX7hFfJU2c3Ag16R5y
status: active
merged_into: null
display_name: 王彝
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uoh3PNN7SVRvsbMTFDEYn4
        subject_person_id: p_9CruFX7hFfJU2c3Ag16R5y
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7iqXv6soRgcBBg3JBoMUyL
          claim_id: c_uoh3PNN7SVRvsbMTFDEYn4
          source_id: s_JP4HBWxLpfQGWqNP4BhYNV
          stance: supports
          locator: CBDB:34379
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（34379）
          source: &a1
            id: s_JP4HBWxLpfQGWqNP4BhYNV
            source_type: api_record
            title: 中国历代人物传记资料库：王彝（CBDB 34379）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34379&o=json
            external_identifier: CBDB:34379
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.081Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_5Wkc1vWWEnLF8sxcWE6GLF
        subject_person_id: p_9CruFX7hFfJU2c3Ag16R5y
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1374年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5Fn1aZBAGL4pT9c2x3oVwi
          claim_id: c_5Wkc1vWWEnLF8sxcWE6GLF
          source_id: s_JP4HBWxLpfQGWqNP4BhYNV
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
        id: c_Uwvw5FFBiKaTytPy3vx369
        subject_person_id: p_9CruFX7hFfJU2c3Ag16R5y
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
        - id: cs_pVG7et7d8VWYAxeZq9rE8S
          claim_id: c_Uwvw5FFBiKaTytPy3vx369
          source_id: s_JP4HBWxLpfQGWqNP4BhYNV
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

# 王彝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王彝 | accepted |
| death.date | 1374年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王彝（CBDB 34379）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34379&o=json)
