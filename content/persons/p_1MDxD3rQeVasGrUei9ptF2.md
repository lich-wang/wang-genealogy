---
schema: wang-person/v1
id: p_1MDxD3rQeVasGrUei9ptF2
status: active
merged_into: null
display_name: 王興叔
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TkALvKMHP5bpisjJPWY66i
        subject_person_id: p_1MDxD3rQeVasGrUei9ptF2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王興叔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fNg94dfDLhM68Cg4F7EaZt
          claim_id: c_TkALvKMHP5bpisjJPWY66i
          source_id: s_q1bkYudDseAyCKJzR6bqNY
          stance: supports
          locator: CBDB:538398
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（538398）
          source: &a1
            id: s_q1bkYudDseAyCKJzR6bqNY
            source_type: api_record
            title: 中国历代人物传记资料库：王興叔（CBDB 538398）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=538398&o=json
            external_identifier: CBDB:538398
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.417Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RyhEDfw53uc7rRup9QJMK8
        subject_person_id: p_1MDxD3rQeVasGrUei9ptF2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王興叔，宋人物。籍贯鄞縣，入仕進士。（中国历代人物传记资料库 CBDB 538398）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wGCsvH_Xqmcc6JGDOix3yL
          claim_id: c_RyhEDfw53uc7rRup9QJMK8
          source_id: s_q1bkYudDseAyCKJzR6bqNY
          stance: supports
          locator: CBDB:538398
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

# 王興叔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王興叔 | accepted |
| bio.summary | 王興叔，宋人物。籍贯鄞縣，入仕進士。（中国历代人物传记资料库 CBDB 538398） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王興叔（CBDB 538398）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=538398&o=json)
