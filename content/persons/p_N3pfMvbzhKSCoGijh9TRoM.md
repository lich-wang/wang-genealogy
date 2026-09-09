---
schema: wang-person/v1
id: p_N3pfMvbzhKSCoGijh9TRoM
status: active
merged_into: null
display_name: 王可贈
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1SR5SNZ5P8rncs7NWrxEbg
        subject_person_id: p_N3pfMvbzhKSCoGijh9TRoM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王可贈
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BDZamTTt1vAbQfagkEF1QA
          claim_id: c_1SR5SNZ5P8rncs7NWrxEbg
          source_id: s_iee8FLPpRBve22Hap76NBu
          stance: supports
          locator: CBDB:560308
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（560308）
          source: &a1
            id: s_iee8FLPpRBve22Hap76NBu
            source_type: api_record
            title: 中国历代人物传记资料库：王可贈（CBDB 560308）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=560308&o=json
            external_identifier: CBDB:560308
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.551Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MpWTF86BEehfHkYAhYSARp
        subject_person_id: p_N3pfMvbzhKSCoGijh9TRoM
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
        - id: cs_ijZ389HTf41sNTFLGoVN9P
          claim_id: c_MpWTF86BEehfHkYAhYSARp
          source_id: s_iee8FLPpRBve22Hap76NBu
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

# 王可贈

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王可贈 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王可贈（CBDB 560308）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=560308&o=json)
