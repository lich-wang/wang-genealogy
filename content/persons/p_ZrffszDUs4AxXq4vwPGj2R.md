---
schema: wang-person/v1
id: p_ZrffszDUs4AxXq4vwPGj2R
status: active
merged_into: null
display_name: 王章
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vRRBRbfuxGWG61untadzNL
        subject_person_id: p_ZrffszDUs4AxXq4vwPGj2R
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王章
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tEmeMyRC7BExbw8mzphmaa
          claim_id: c_vRRBRbfuxGWG61untadzNL
          source_id: s_BaDnx5q5DzD5Hp6Q1Cwqi2
          stance: supports
          locator: CBDB:200383
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（200383）
          source: &a1
            id: s_BaDnx5q5DzD5Hp6Q1Cwqi2
            source_type: api_record
            title: 中国历代人物传记资料库：王章（CBDB 200383）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200383&o=json
            external_identifier: CBDB:200383
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.607Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_3CcK4MiUm3BHcVei4pDK29
        subject_person_id: p_ZrffszDUs4AxXq4vwPGj2R
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1444年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UT5vB7J4XQmfT4G5MAu3fs
          claim_id: c_3CcK4MiUm3BHcVei4pDK29
          source_id: s_BaDnx5q5DzD5Hp6Q1Cwqi2
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
        id: c_1FFme86h3ccroRmtFMc799
        subject_person_id: p_ZrffszDUs4AxXq4vwPGj2R
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
        - id: cs_ysfyikyz2VwENjFmBqBAFF
          claim_id: c_1FFme86h3ccroRmtFMc799
          source_id: s_BaDnx5q5DzD5Hp6Q1Cwqi2
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

# 王章

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王章 | accepted |
| birth.date | 1444年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王章（CBDB 200383）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200383&o=json)
