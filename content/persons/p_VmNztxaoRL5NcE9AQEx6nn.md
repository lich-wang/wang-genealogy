---
schema: wang-person/v1
id: p_VmNztxaoRL5NcE9AQEx6nn
status: active
merged_into: null
display_name: 王學詩
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Pfo3mF5vfLjb684J2i4yjj
        subject_person_id: p_VmNztxaoRL5NcE9AQEx6nn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學詩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Sf262j4r71j7Envaa6wxyY
          claim_id: c_Pfo3mF5vfLjb684J2i4yjj
          source_id: s_s3PAVVJWzmaBWmiCXZudyk
          stance: supports
          locator: CBDB:316259
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（316259）
          source: &a1
            id: s_s3PAVVJWzmaBWmiCXZudyk
            source_type: api_record
            title: 中国历代人物传记资料库：王學詩（CBDB 316259）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316259&o=json
            external_identifier: CBDB:316259
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.961Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_78TyZAnm1o6WPunYxDZM7n
        subject_person_id: p_VmNztxaoRL5NcE9AQEx6nn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學詩，明人物。嘉靖三十二年進士，籍贯朝邑，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 316259）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RzYn-ZAC_i37dHh4HpFNYS
          claim_id: c_78TyZAnm1o6WPunYxDZM7n
          source_id: s_s3PAVVJWzmaBWmiCXZudyk
          stance: supports
          locator: CBDB:316259
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

# 王學詩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王學詩 | accepted |
| bio.summary | 王學詩，明人物。嘉靖三十二年進士，籍贯朝邑，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 316259） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王學詩（CBDB 316259）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316259&o=json)
