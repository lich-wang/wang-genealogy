---
schema: wang-person/v1
id: p_stHoVQftjNFmSu9T7T3WAa
status: active
merged_into: null
display_name: 王昇
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CfFFKyzAvqNipMpqfqJ886
        subject_person_id: p_stHoVQftjNFmSu9T7T3WAa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FHfCaviXn8QBQp1xxLEiVx
          claim_id: c_CfFFKyzAvqNipMpqfqJ886
          source_id: s_NhfdrjA4YgefiM56ts4PEa
          stance: supports
          locator: CBDB:198437
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（198437）
          source: &a1
            id: s_NhfdrjA4YgefiM56ts4PEa
            source_type: api_record
            title: 中国历代人物传记资料库：王昇（CBDB 198437）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198437&o=json
            external_identifier: CBDB:198437
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.494Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_4yUVQhJC3bFFdtx7R1H81i
        subject_person_id: p_stHoVQftjNFmSu9T7T3WAa
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1421年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JqGPA5mGDqMzS82yur8nh4
          claim_id: c_4yUVQhJC3bFFdtx7R1H81i
          source_id: s_NhfdrjA4YgefiM56ts4PEa
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
        id: c_t3cNEZWpxLNWhnERZ7GxPM
        subject_person_id: p_stHoVQftjNFmSu9T7T3WAa
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
        - id: cs_JYdtmD1k8gMvG58Wakh3uQ
          claim_id: c_t3cNEZWpxLNWhnERZ7GxPM
          source_id: s_NhfdrjA4YgefiM56ts4PEa
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

# 王昇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昇 | accepted |
| birth.date | 1421年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王昇（CBDB 198437）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198437&o=json)
