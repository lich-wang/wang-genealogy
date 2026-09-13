---
schema: wang-person/v1
id: p_n8otk5J6h144ffRBjB5Udy
status: active
merged_into: null
display_name: 王某象
cbdb_id: 453379
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fiu1enUyfjr7Arx5km6gBL
        subject_person_id: p_n8otk5J6h144ffRBjB5Udy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王某象，清人物。曾任知州。（中国历代人物传记资料库 CBDB 453379）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_S4fcxZDRhp9-ow9jY5ioVV
          claim_id: c_fiu1enUyfjr7Arx5km6gBL
          source_id: s_7PaCr9sESQf2wgsyd7LjHe
          stance: supports
          locator: CBDB:453379
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_7PaCr9sESQf2wgsyd7LjHe
            source_type: api_record
            title: 中国历代人物传记资料库：王某象（CBDB 453379）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=453379&o=json
            external_identifier: CBDB:453379
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:13.763Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_xgHVsH89t2VDexzhTwjUTa
        subject_person_id: p_n8otk5J6h144ffRBjB5Udy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王某象
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_4Ym75yxQUEpA3WNMcze567
          claim_id: c_xgHVsH89t2VDexzhTwjUTa
          source_id: s_7PaCr9sESQf2wgsyd7LjHe
          stance: supports
          locator: CBDB:453379
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（6601-6700）｜历史性依据：CBDB 朝代 = 清
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

# 王某象

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王某象，清人物。曾任知州。（中国历代人物传记资料库 CBDB 453379） | accepted |
| name.primary | 王某象 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王某象（CBDB 453379）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=453379&o=json)
