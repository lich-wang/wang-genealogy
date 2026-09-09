---
schema: wang-person/v1
id: p_Kh3s9bFrA4G7BKhq1mDmpS
status: active
merged_into: null
display_name: 王豫
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CwrsS8yD9e7T9JF6RoUCZn
        subject_person_id: p_Kh3s9bFrA4G7BKhq1mDmpS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王豫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2qA4h1BCcuR1NwYo3nhWdF
          claim_id: c_CwrsS8yD9e7T9JF6RoUCZn
          source_id: s_pWEYeHP9JX5tKuL5CUG7A3
          stance: supports
          locator: CBDB:700870
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（700870）
          source: &a1
            id: s_pWEYeHP9JX5tKuL5CUG7A3
            source_type: api_record
            title: 中国历代人物传记资料库：王豫（CBDB 700870）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700870&o=json
            external_identifier: CBDB:700870
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.782Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jCe8WNTVCd4MF5DB5K4WMA
        subject_person_id: p_Kh3s9bFrA4G7BKhq1mDmpS
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
        - id: cs_SZHoXmxH1SrM2b14XnHgt8
          claim_id: c_jCe8WNTVCd4MF5DB5K4WMA
          source_id: s_pWEYeHP9JX5tKuL5CUG7A3
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

# 王豫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王豫 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王豫（CBDB 700870）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700870&o=json)
