---
schema: wang-person/v1
id: p_33zY9uGH1CFjowUzre2Q1b
status: active
merged_into: null
display_name: 王師道
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BfxyjdXv1kLRvwvusbfEh5
        subject_person_id: p_33zY9uGH1CFjowUzre2Q1b
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王師道
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DBJQ5eNxTNjNYdfFZnWQSP
          claim_id: c_BfxyjdXv1kLRvwvusbfEh5
          source_id: s_hyn291KAmV7BoW4thFWsg9
          stance: supports
          locator: CBDB:637399
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637399）
          source: &a1
            id: s_hyn291KAmV7BoW4thFWsg9
            source_type: api_record
            title: 中国历代人物传记资料库：王師道（CBDB 637399）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637399&o=json
            external_identifier: CBDB:637399
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.399Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_y7KBLM3Gd4hepAvMG4Rbun
        subject_person_id: p_33zY9uGH1CFjowUzre2Q1b
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
        - id: cs_rxREkkBStFfp7X2oDVwwXH
          claim_id: c_y7KBLM3Gd4hepAvMG4Rbun
          source_id: s_hyn291KAmV7BoW4thFWsg9
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

# 王師道

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王師道 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王師道（CBDB 637399）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637399&o=json)
