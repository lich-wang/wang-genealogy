---
schema: wang-person/v1
id: p_kY5RkWuKny8vWpD2iFHL8p
status: active
merged_into: null
display_name: 王佳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_19TkDkUbK1HYWi8M2Fm7hZ
        subject_person_id: p_kY5RkWuKny8vWpD2iFHL8p
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_C24CmrnPGVRt3MNen4i47S
          claim_id: c_19TkDkUbK1HYWi8M2Fm7hZ
          source_id: s_u2bmNwNi3MPTNaGrKM92WB
          stance: supports
          locator: CBDB:262453
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（262453）
          source: &a1
            id: s_u2bmNwNi3MPTNaGrKM92WB
            source_type: api_record
            title: 中国历代人物传记资料库：王佳（CBDB 262453）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262453&o=json
            external_identifier: CBDB:262453
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.589Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_feiDQs75sG9inc7zUNgkeU
        subject_person_id: p_kY5RkWuKny8vWpD2iFHL8p
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佳，明人物。弘治三年進士，籍贯黃縣。（中国历代人物传记资料库 CBDB 262453）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KZtheUs1NJBJD8W_r2ki7N
          claim_id: c_feiDQs75sG9inc7zUNgkeU
          source_id: s_u2bmNwNi3MPTNaGrKM92WB
          stance: supports
          locator: CBDB:262453
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

# 王佳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王佳 | accepted |
| bio.summary | 王佳，明人物。弘治三年進士，籍贯黃縣。（中国历代人物传记资料库 CBDB 262453） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王佳（CBDB 262453）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262453&o=json)
