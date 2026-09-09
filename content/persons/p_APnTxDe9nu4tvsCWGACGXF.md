---
schema: wang-person/v1
id: p_APnTxDe9nu4tvsCWGACGXF
status: active
merged_into: null
display_name: 王穆
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xd7dbcMqsrDtUETdvWci8a
        subject_person_id: p_APnTxDe9nu4tvsCWGACGXF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王穆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Yfmn6pZ7ahx151JSE93MAb
          claim_id: c_xd7dbcMqsrDtUETdvWci8a
          source_id: s_EFJbJ9h9SgJWhXD8YN4XTD
          stance: supports
          locator: CBDB:509629
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（509629）
          source: &a1
            id: s_EFJbJ9h9SgJWhXD8YN4XTD
            source_type: api_record
            title: 中国历代人物传记资料库：王穆（CBDB 509629）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=509629&o=json
            external_identifier: CBDB:509629
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.166Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7k82FkaVeM1eyReDsYiwfw
        subject_person_id: p_APnTxDe9nu4tvsCWGACGXF
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
        - id: cs_9WAPp7kDsKSqzD31Q51gEe
          claim_id: c_7k82FkaVeM1eyReDsYiwfw
          source_id: s_EFJbJ9h9SgJWhXD8YN4XTD
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

# 王穆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王穆 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王穆（CBDB 509629）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=509629&o=json)
