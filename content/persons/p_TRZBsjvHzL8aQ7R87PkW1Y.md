---
schema: wang-person/v1
id: p_TRZBsjvHzL8aQ7R87PkW1Y
status: active
merged_into: null
display_name: 王璧
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_h19rmP9Aj3WgLQfBfbTtQN
        subject_person_id: p_TRZBsjvHzL8aQ7R87PkW1Y
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EjPvCmGorkPaZb9r1KcDef
          claim_id: c_h19rmP9Aj3WgLQfBfbTtQN
          source_id: s_B4FPiYFehv1T5VAhACcUc5
          stance: supports
          locator: CBDB:489233
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（489233）
          source: &a1
            id: s_B4FPiYFehv1T5VAhACcUc5
            source_type: api_record
            title: 中国历代人物传记资料库：王璧（CBDB 489233）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=489233&o=json
            external_identifier: CBDB:489233
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.030Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ig9g7tKbhUN9UMLAb4HQkq
        subject_person_id: p_TRZBsjvHzL8aQ7R87PkW1Y
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璧，元人物。曾任典史。（中国历代人物传记资料库 CBDB 489233）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ida5gNSiYSE8qcNG5VO-RW
          claim_id: c_ig9g7tKbhUN9UMLAb4HQkq
          source_id: s_B4FPiYFehv1T5VAhACcUc5
          stance: supports
          locator: CBDB:489233
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

# 王璧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璧 | accepted |
| bio.summary | 王璧，元人物。曾任典史。（中国历代人物传记资料库 CBDB 489233） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王璧（CBDB 489233）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=489233&o=json)
