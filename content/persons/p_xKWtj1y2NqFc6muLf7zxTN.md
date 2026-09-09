---
schema: wang-person/v1
id: p_xKWtj1y2NqFc6muLf7zxTN
status: active
merged_into: null
display_name: 王平
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wQ199ztCqLGeuR8dHgn1Ac
        subject_person_id: p_xKWtj1y2NqFc6muLf7zxTN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王平
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TRPV6ppTQPgFQ8rC7i3tDa
          claim_id: c_wQ199ztCqLGeuR8dHgn1Ac
          source_id: s_UWvqSn55sLWQ9WYEJqJemK
          stance: supports
          locator: CBDB:486382
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（486382）
          source: &a1
            id: s_UWvqSn55sLWQ9WYEJqJemK
            source_type: api_record
            title: 中国历代人物传记资料库：王平（CBDB 486382）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=486382&o=json
            external_identifier: CBDB:486382
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.911Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WmUFy5TEoEitVGx7zWJ52j
        subject_person_id: p_xKWtj1y2NqFc6muLf7zxTN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_e6LgnuT31vfViHTSUuUjQd
          claim_id: c_WmUFy5TEoEitVGx7zWJ52j
          source_id: s_UWvqSn55sLWQ9WYEJqJemK
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王平

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王平 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王平（CBDB 486382）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=486382&o=json)
