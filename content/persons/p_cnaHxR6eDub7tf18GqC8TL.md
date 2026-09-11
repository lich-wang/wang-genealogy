---
schema: wang-person/v1
id: p_cnaHxR6eDub7tf18GqC8TL
status: active
merged_into: null
display_name: 王宗尹
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sppNNJ1pJa8HdV12NQDrsi
        subject_person_id: p_cnaHxR6eDub7tf18GqC8TL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗尹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jNht8sM1L4PapcubpqXJJ1
          claim_id: c_sppNNJ1pJa8HdV12NQDrsi
          source_id: s_nF4vuG5CAkRyFiJpsBKjCJ
          stance: supports
          locator: CBDB:556733
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（556733）
          source: &a1
            id: s_nF4vuG5CAkRyFiJpsBKjCJ
            source_type: api_record
            title: 中国历代人物传记资料库：王宗尹（CBDB 556733）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556733&o=json
            external_identifier: CBDB:556733
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.657Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2GXhXovu52WxpZxZLstmtK
        subject_person_id: p_cnaHxR6eDub7tf18GqC8TL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗尹，明人物。籍贯泰和，入仕鄉貢舉人，曾任通判、知州。（中国历代人物传记资料库 CBDB 556733）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jT7HHFqFcWIuzoFvey_C59
          claim_id: c_2GXhXovu52WxpZxZLstmtK
          source_id: s_nF4vuG5CAkRyFiJpsBKjCJ
          stance: supports
          locator: CBDB:556733
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

# 王宗尹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗尹 | accepted |
| bio.summary | 王宗尹，明人物。籍贯泰和，入仕鄉貢舉人，曾任通判、知州。（中国历代人物传记资料库 CBDB 556733） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宗尹（CBDB 556733）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556733&o=json)
