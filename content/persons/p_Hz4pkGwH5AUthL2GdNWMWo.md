---
schema: wang-person/v1
id: p_Hz4pkGwH5AUthL2GdNWMWo
status: active
merged_into: null
display_name: 王言綸
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JyMrYm1FQfmr2VCTAqyfNz
        subject_person_id: p_Hz4pkGwH5AUthL2GdNWMWo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王言綸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aE3EM2XRzQzWEbMyeJ21DS
          claim_id: c_JyMrYm1FQfmr2VCTAqyfNz
          source_id: s_TpHSUtiCNh22KeTkfqnXLk
          stance: supports
          locator: CBDB:640261
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640261）
          source: &a1
            id: s_TpHSUtiCNh22KeTkfqnXLk
            source_type: api_record
            title: 中国历代人物传记资料库：王言綸（CBDB 640261）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640261&o=json
            external_identifier: CBDB:640261
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.199Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_e3wSPby2jSWSsmaq6TMsFK
        subject_person_id: p_Hz4pkGwH5AUthL2GdNWMWo
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
        - id: cs_2GoHHGtf19GW833jCDzZw5
          claim_id: c_e3wSPby2jSWSsmaq6TMsFK
          source_id: s_TpHSUtiCNh22KeTkfqnXLk
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

# 王言綸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王言綸 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王言綸（CBDB 640261）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640261&o=json)
