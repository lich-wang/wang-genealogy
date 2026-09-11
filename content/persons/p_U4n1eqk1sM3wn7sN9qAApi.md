---
schema: wang-person/v1
id: p_U4n1eqk1sM3wn7sN9qAApi
status: active
merged_into: null
display_name: 王僅
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2hfeN5yvu48tgbPj2FdW5k
        subject_person_id: p_U4n1eqk1sM3wn7sN9qAApi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王僅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vRimDJBBB2JaLVNuoTypGR
          claim_id: c_2hfeN5yvu48tgbPj2FdW5k
          source_id: s_9PKyJkxxdEZesMgxPoc1d9
          stance: supports
          locator: CBDB:322377
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（322377）
          source: &a1
            id: s_9PKyJkxxdEZesMgxPoc1d9
            source_type: api_record
            title: 中国历代人物传记资料库：王僅（CBDB 322377）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322377&o=json
            external_identifier: CBDB:322377
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.109Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_aeNH6ESRsmmU5Hh841ZJpP
        subject_person_id: p_U4n1eqk1sM3wn7sN9qAApi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王僅，明人物。宣德五年進士。（中国历代人物传记资料库 CBDB 322377）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_erxoK78MjKn3FUR_d6y1ss
          claim_id: c_aeNH6ESRsmmU5Hh841ZJpP
          source_id: s_9PKyJkxxdEZesMgxPoc1d9
          stance: supports
          locator: CBDB:322377
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

# 王僅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王僅 | accepted |
| bio.summary | 王僅，明人物。宣德五年進士。（中国历代人物传记资料库 CBDB 322377） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王僅（CBDB 322377）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322377&o=json)
