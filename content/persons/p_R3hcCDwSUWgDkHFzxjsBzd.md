---
schema: wang-person/v1
id: p_R3hcCDwSUWgDkHFzxjsBzd
status: active
merged_into: null
display_name: 王夢松
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UZmpecZPjr92y9X24D56C5
        subject_person_id: p_R3hcCDwSUWgDkHFzxjsBzd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夢松
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1UKoBNFPimZDaAdF6E9HW1
          claim_id: c_UZmpecZPjr92y9X24D56C5
          source_id: s_kMj29tgHAGZ8yyDR61GeAr
          stance: supports
          locator: CBDB:636868
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636868）
          source: &a1
            id: s_kMj29tgHAGZ8yyDR61GeAr
            source_type: api_record
            title: 中国历代人物传记资料库：王夢松（CBDB 636868）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636868&o=json
            external_identifier: CBDB:636868
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.267Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YyABWezKWH77mz4jdURYJt
        subject_person_id: p_R3hcCDwSUWgDkHFzxjsBzd
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
        - id: cs_MGRnBV1K988Zw4zbX2Kjng
          claim_id: c_YyABWezKWH77mz4jdURYJt
          source_id: s_kMj29tgHAGZ8yyDR61GeAr
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

# 王夢松

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王夢松 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王夢松（CBDB 636868）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636868&o=json)
