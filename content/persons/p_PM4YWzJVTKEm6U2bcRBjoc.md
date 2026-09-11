---
schema: wang-person/v1
id: p_PM4YWzJVTKEm6U2bcRBjoc
status: active
merged_into: null
display_name: 王俶
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Lx4FpDTcJFAK4DySYZbf3F
        subject_person_id: p_PM4YWzJVTKEm6U2bcRBjoc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6tJff99PXyTgo9W6Y5Xhqu
          claim_id: c_Lx4FpDTcJFAK4DySYZbf3F
          source_id: s_PgjhrUqzXggBsgueWJueVU
          stance: supports
          locator: CBDB:241974
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（241974）
          source: &a1
            id: s_PgjhrUqzXggBsgueWJueVU
            source_type: api_record
            title: 中国历代人物传记资料库：王俶（CBDB 241974）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241974&o=json
            external_identifier: CBDB:241974
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.966Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZYyzf6dvfkNqdQ9ty1GGNx
        subject_person_id: p_PM4YWzJVTKEm6U2bcRBjoc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俶，明人物。成化二年進士，籍贯長興。（中国历代人物传记资料库 CBDB 241974）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_QA-pqVISv90GFJ8LAkx6sc
          claim_id: c_ZYyzf6dvfkNqdQ9ty1GGNx
          source_id: s_PgjhrUqzXggBsgueWJueVU
          stance: supports
          locator: CBDB:241974
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

# 王俶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王俶 | accepted |
| bio.summary | 王俶，明人物。成化二年進士，籍贯長興。（中国历代人物传记资料库 CBDB 241974） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王俶（CBDB 241974）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241974&o=json)
