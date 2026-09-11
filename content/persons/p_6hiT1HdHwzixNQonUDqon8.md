---
schema: wang-person/v1
id: p_6hiT1HdHwzixNQonUDqon8
status: active
merged_into: null
display_name: 王璠
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_F814d9zVHcu5Q1QoUufEAw
        subject_person_id: p_6hiT1HdHwzixNQonUDqon8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QSXs5sPNdi7btuMtNMMCy8
          claim_id: c_F814d9zVHcu5Q1QoUufEAw
          source_id: s_WxbYcDin47YzKWh9cAaPzx
          stance: supports
          locator: CBDB:212332
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（212332）
          source: &a1
            id: s_WxbYcDin47YzKWh9cAaPzx
            source_type: api_record
            title: 中国历代人物传记资料库：王璠（CBDB 212332）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212332&o=json
            external_identifier: CBDB:212332
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.085Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_V3AVCMr2eV5L8fNoBuxqb4
        subject_person_id: p_6hiT1HdHwzixNQonUDqon8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璠，明人物。萬曆二年進士。（中国历代人物传记资料库 CBDB 212332）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_IRQM4paFXnStK053xBoico
          claim_id: c_V3AVCMr2eV5L8fNoBuxqb4
          source_id: s_WxbYcDin47YzKWh9cAaPzx
          stance: supports
          locator: CBDB:212332
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
  descendants:
    - claim:
        id: c_LRk66t0d7x6VMbJ22lJxAO
        subject_person_id: p_6hiT1HdHwzixNQonUDqon8
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_bGr6oW3hdV82DMLPiZb28N
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_buAtzyjYVpDkyjmJN6Zdam
          claim_id: c_LRk66t0d7x6VMbJ22lJxAO
          source_id: s_WxbYcDin47YzKWh9cAaPzx
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第二甲第三名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_bGr6oW3hdV82DMLPiZb28N
        status: active
        display_name: 王泮
        merged_into_person_id: null
  other: []
---

# 王璠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璠 | accepted |
| bio.summary | 王璠，明人物。萬曆二年進士。（中国历代人物传记资料库 CBDB 212332） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_bGr6oW3hdV82DMLPiZb28N | 王泮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王璠（CBDB 212332）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212332&o=json)
