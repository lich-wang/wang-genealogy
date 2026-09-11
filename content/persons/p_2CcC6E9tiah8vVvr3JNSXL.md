---
schema: wang-person/v1
id: p_2CcC6E9tiah8vVvr3JNSXL
status: active
merged_into: null
display_name: 王允中
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pW96ft4hqAsGpzai1Kj6cr
        subject_person_id: p_2CcC6E9tiah8vVvr3JNSXL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王允中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5Q9V4UiJBxn12rEJ7zmuP4
          claim_id: c_pW96ft4hqAsGpzai1Kj6cr
          source_id: s_qUGS6YFNt8naf3zcTDveaa
          stance: supports
          locator: CBDB:499379
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（499379）
          source: &a1
            id: s_qUGS6YFNt8naf3zcTDveaa
            source_type: api_record
            title: 中国历代人物传记资料库：王允中（CBDB 499379）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=499379&o=json
            external_identifier: CBDB:499379
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.757Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GeG9FKtqRkcEbHyTgwK5Tj
        subject_person_id: p_2CcC6E9tiah8vVvr3JNSXL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王允中，明人物。入仕鄉貢舉人，曾任教諭、知縣。（中国历代人物传记资料库 CBDB 499379）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3bv17kcZtSHvcjy5QLJdlL
          claim_id: c_GeG9FKtqRkcEbHyTgwK5Tj
          source_id: s_qUGS6YFNt8naf3zcTDveaa
          stance: supports
          locator: CBDB:499379
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

# 王允中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王允中 | accepted |
| bio.summary | 王允中，明人物。入仕鄉貢舉人，曾任教諭、知縣。（中国历代人物传记资料库 CBDB 499379） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王允中（CBDB 499379）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=499379&o=json)
