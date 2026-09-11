---
schema: wang-person/v1
id: p_tLU1LrAFB4ktySdFGqXwEy
status: active
merged_into: null
display_name: 王賡
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GcGasEy17ghgbZt3jaxmHn
        subject_person_id: p_tLU1LrAFB4ktySdFGqXwEy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_x8BZQMSsWiNpAQ5Fze1Csm
          claim_id: c_GcGasEy17ghgbZt3jaxmHn
          source_id: s_rJXYehRzBmeBJxJJ64Yqp9
          stance: supports
          locator: CBDB:640330
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640330）
          source: &a1
            id: s_rJXYehRzBmeBJxJJ64Yqp9
            source_type: api_record
            title: 中国历代人物传记资料库：王賡（CBDB 640330）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640330&o=json
            external_identifier: CBDB:640330
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.082Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bHCYyk2oSrVSgfV5L33MuC
        subject_person_id: p_tLU1LrAFB4ktySdFGqXwEy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賡，清人物。籍贯銅梁，入仕鄉貢舉人，曾任知縣、知州。（中国历代人物传记资料库 CBDB 640330）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JvC-AEFFbG0GCWyrKho4Mf
          claim_id: c_bHCYyk2oSrVSgfV5L33MuC
          source_id: s_rJXYehRzBmeBJxJJ64Yqp9
          stance: supports
          locator: CBDB:640330
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

# 王賡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王賡 | accepted |
| bio.summary | 王賡，清人物。籍贯銅梁，入仕鄉貢舉人，曾任知縣、知州。（中国历代人物传记资料库 CBDB 640330） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王賡（CBDB 640330）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640330&o=json)
