---
schema: wang-person/v1
id: p_K6KFSk49rs3QwV3cdFfGHE
status: active
merged_into: null
display_name: 王室
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wX2Xb1aRYUzHgFUNMvV7Re
        subject_person_id: p_K6KFSk49rs3QwV3cdFfGHE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王室
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kWLAXAN2xSxMmiShWcd3PT
          claim_id: c_wX2Xb1aRYUzHgFUNMvV7Re
          source_id: s_NAKec1mhYUdTKL864m2Lh6
          stance: supports
          locator: CBDB:335216
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（335216）
          source: &a1
            id: s_NAKec1mhYUdTKL864m2Lh6
            source_type: api_record
            title: 中国历代人物传记资料库：王室（CBDB 335216）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335216&o=json
            external_identifier: CBDB:335216
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.454Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZRMg7XZskPnaJJU89Hupc6
        subject_person_id: p_K6KFSk49rs3QwV3cdFfGHE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王室，明人物。隆慶二年進士，籍贯上高。（中国历代人物传记资料库 CBDB 335216）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_v25TQ3rE15nYFgWitq2Kgb
          claim_id: c_ZRMg7XZskPnaJJU89Hupc6
          source_id: s_NAKec1mhYUdTKL864m2Lh6
          stance: supports
          locator: CBDB:335216
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

# 王室

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王室 | accepted |
| bio.summary | 王室，明人物。隆慶二年進士，籍贯上高。（中国历代人物传记资料库 CBDB 335216） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王室（CBDB 335216）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335216&o=json)
