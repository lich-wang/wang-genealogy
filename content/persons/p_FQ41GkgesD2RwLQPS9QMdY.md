---
schema: wang-person/v1
id: p_FQ41GkgesD2RwLQPS9QMdY
status: active
merged_into: null
display_name: 王炳寅
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XwDY36pZossmLr7wqSFWt6
        subject_person_id: p_FQ41GkgesD2RwLQPS9QMdY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王炳寅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5XgsA1iLTS8qqQ3Rr88qMi
          claim_id: c_XwDY36pZossmLr7wqSFWt6
          source_id: s_8tzgdsh7eGQ4czowyoLpfy
          stance: supports
          locator: CBDB:639279
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639279）
          source: &a1
            id: s_8tzgdsh7eGQ4czowyoLpfy
            source_type: api_record
            title: 中国历代人物传记资料库：王炳寅（CBDB 639279）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639279&o=json
            external_identifier: CBDB:639279
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.890Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XJYcj69L1NmMtLYQpTaj4d
        subject_person_id: p_FQ41GkgesD2RwLQPS9QMdY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王炳寅，清人物。籍贯歸安，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 639279）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_n_jk5yRTFltUIYAE_wOtbY
          claim_id: c_XJYcj69L1NmMtLYQpTaj4d
          source_id: s_8tzgdsh7eGQ4czowyoLpfy
          stance: supports
          locator: CBDB:639279
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

# 王炳寅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王炳寅 | accepted |
| bio.summary | 王炳寅，清人物。籍贯歸安，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 639279） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王炳寅（CBDB 639279）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639279&o=json)
