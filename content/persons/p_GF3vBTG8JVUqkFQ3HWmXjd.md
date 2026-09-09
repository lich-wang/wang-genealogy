---
schema: wang-person/v1
id: p_GF3vBTG8JVUqkFQ3HWmXjd
status: active
merged_into: null
display_name: 王璟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2wKY88A9PxhPSGcCw2CsCj
        subject_person_id: p_GF3vBTG8JVUqkFQ3HWmXjd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sYaN6PtEEpmsDskX9DyEtx
          claim_id: c_2wKY88A9PxhPSGcCw2CsCj
          source_id: s_CAqknLzi1zJRhPeFf3Bxk3
          stance: supports
          locator: CBDB:69463
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69463）
          source: &a1
            id: s_CAqknLzi1zJRhPeFf3Bxk3
            source_type: api_record
            title: 中国历代人物传记资料库：王璟（CBDB 69463）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69463&o=json
            external_identifier: CBDB:69463
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.282Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_oKu3ANMynoLQeXq8s88Fea
        subject_person_id: p_GF3vBTG8JVUqkFQ3HWmXjd
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1799年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pCeT36SP9efA4EymKBdK4K
          claim_id: c_oKu3ANMynoLQeXq8s88Fea
          source_id: s_CAqknLzi1zJRhPeFf3Bxk3
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_STK42nswSu1vLmuxk61mRT
        subject_person_id: p_GF3vBTG8JVUqkFQ3HWmXjd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EXLVgrevStE7RLwHuLHHG1
          claim_id: c_STK42nswSu1vLmuxk61mRT
          source_id: s_CAqknLzi1zJRhPeFf3Bxk3
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

# 王璟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璟 | accepted |
| death.date | 1799年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王璟（CBDB 69463）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69463&o=json)
