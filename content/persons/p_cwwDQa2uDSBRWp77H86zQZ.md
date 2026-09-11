---
schema: wang-person/v1
id: p_cwwDQa2uDSBRWp77H86zQZ
status: active
merged_into: null
display_name: 王以敏
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_epTYLfcQzhUpuqHCjVpaNA
        subject_person_id: p_cwwDQa2uDSBRWp77H86zQZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王以敏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YVHQevkrsrvEX89hEmAD7s
          claim_id: c_epTYLfcQzhUpuqHCjVpaNA
          source_id: s_rpscd5GdQKpYaV9UTaU3aJ
          stance: supports
          locator: CBDB:68562
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（68562）
          source: &a1
            id: s_rpscd5GdQKpYaV9UTaU3aJ
            source_type: api_record
            title: 中国历代人物传记资料库：王以敏（CBDB 68562）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68562&o=json
            external_identifier: CBDB:68562
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.080Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_FdwS3Ajo5jBhJHdA1cAyW7
        subject_person_id: p_cwwDQa2uDSBRWp77H86zQZ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1855年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VYNWcETmytAYejmDxpR83u
          claim_id: c_FdwS3Ajo5jBhJHdA1cAyW7
          source_id: s_rpscd5GdQKpYaV9UTaU3aJ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_BtMkpB3cj7sARYbzGUkniR
        subject_person_id: p_cwwDQa2uDSBRWp77H86zQZ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1921年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nfPTVJ1fev1bboTKTJwXRS
          claim_id: c_BtMkpB3cj7sARYbzGUkniR
          source_id: s_rpscd5GdQKpYaV9UTaU3aJ
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
        id: c_GixQ3SBeRqSFRGBjGbGegh
        subject_person_id: p_cwwDQa2uDSBRWp77H86zQZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王以敏（1855年—1921年），中華民國人物。籍贯武陵，入仕進士，曾任知府。（中国历代人物传记资料库 CBDB 68562）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_pxeeP9DJmozwbnw_NMvG5R
          claim_id: c_GixQ3SBeRqSFRGBjGbGegh
          source_id: s_rpscd5GdQKpYaV9UTaU3aJ
          stance: supports
          locator: CBDB:68562
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王以敏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王以敏 | accepted |
| birth.date | 1855年 | accepted |
| death.date | 1921年 | accepted |
| bio.summary | 王以敏（1855年—1921年），中華民國人物。籍贯武陵，入仕進士，曾任知府。（中国历代人物传记资料库 CBDB 68562） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王以敏（CBDB 68562）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68562&o=json)
