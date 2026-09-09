---
schema: wang-person/v1
id: p_p8r6s3whjBY9AELEEkHCGz
status: active
merged_into: null
display_name: 王豐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NjWcWYxG525aCrg2HPHBxQ
        subject_person_id: p_p8r6s3whjBY9AELEEkHCGz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王豐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pMsbsvQHpDTzVDGbwJVMJU
          claim_id: c_NjWcWYxG525aCrg2HPHBxQ
          source_id: s_s4AUZ2rGoKKjyu487eFshb
          stance: supports
          locator: CBDB:35518
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（35518）
          source: &a1
            id: s_s4AUZ2rGoKKjyu487eFshb
            source_type: api_record
            title: 中国历代人物传记资料库：王豐（CBDB 35518）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35518&o=json
            external_identifier: CBDB:35518
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.137Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PcByHj7KMS5y5wNBNxb1RD
        subject_person_id: p_p8r6s3whjBY9AELEEkHCGz
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
        - id: cs_hDDt6Avav34ND8B74GgBof
          claim_id: c_PcByHj7KMS5y5wNBNxb1RD
          source_id: s_s4AUZ2rGoKKjyu487eFshb
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

# 王豐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王豐 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王豐（CBDB 35518）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35518&o=json)
