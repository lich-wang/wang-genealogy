---
schema: wang-person/v1
id: p_KS2gB6YHZAZsRjsuGZgLT1
status: active
merged_into: null
display_name: 王士魁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_92puBqT5X6tX6rmDFHerhp
        subject_person_id: p_KS2gB6YHZAZsRjsuGZgLT1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士魁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_s2HmjKSMHrdLUroeHK6FQT
          claim_id: c_92puBqT5X6tX6rmDFHerhp
          source_id: s_6oHuFmuJGvyrCeABHyX8cg
          stance: supports
          locator: CBDB:636828
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636828）
          source: &a1
            id: s_6oHuFmuJGvyrCeABHyX8cg
            source_type: api_record
            title: 中国历代人物传记资料库：王士魁（CBDB 636828）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636828&o=json
            external_identifier: CBDB:636828
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.262Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jUv8ZHtEaFo2LrggMtCbBf
        subject_person_id: p_KS2gB6YHZAZsRjsuGZgLT1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士魁，清人物。籍贯洛陽，曾任訓導。（中国历代人物传记资料库 CBDB 636828）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_U_zeUNe__LDT_8RIG4LEZh
          claim_id: c_jUv8ZHtEaFo2LrggMtCbBf
          source_id: s_6oHuFmuJGvyrCeABHyX8cg
          stance: supports
          locator: CBDB:636828
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

# 王士魁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王士魁 | accepted |
| bio.summary | 王士魁，清人物。籍贯洛陽，曾任訓導。（中国历代人物传记资料库 CBDB 636828） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王士魁（CBDB 636828）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636828&o=json)
