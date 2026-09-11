---
schema: wang-person/v1
id: p_3c51sRY54HrEz5MEejfZBm
status: active
merged_into: null
display_name: 王信仁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TVyovhmQqevE9utSNHh2YR
        subject_person_id: p_3c51sRY54HrEz5MEejfZBm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王信仁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_V367Q5ZbG2bhqf6nAs3QXP
          claim_id: c_TVyovhmQqevE9utSNHh2YR
          source_id: s_V4nER8piDUK8Qs19RFKoiX
          stance: supports
          locator: CBDB:636061
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636061）
          source: &a1
            id: s_V4nER8piDUK8Qs19RFKoiX
            source_type: api_record
            title: 中国历代人物传记资料库：王信仁（CBDB 636061）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636061&o=json
            external_identifier: CBDB:636061
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.873Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_z3w12v8aoCPzoWC9Pou132
        subject_person_id: p_3c51sRY54HrEz5MEejfZBm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王信仁，清人物。籍贯石阡府，入仕貢生: 拔貢，曾任訓導。（中国历代人物传记资料库 CBDB 636061）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mEEQMRGRDbuZsQK-hbdmvi
          claim_id: c_z3w12v8aoCPzoWC9Pou132
          source_id: s_V4nER8piDUK8Qs19RFKoiX
          stance: supports
          locator: CBDB:636061
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

# 王信仁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王信仁 | accepted |
| bio.summary | 王信仁，清人物。籍贯石阡府，入仕貢生: 拔貢，曾任訓導。（中国历代人物传记资料库 CBDB 636061） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王信仁（CBDB 636061）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636061&o=json)
