---
schema: wang-person/v1
id: p_Vscy6494CeHCcNFbbLRo1j
status: active
merged_into: null
display_name: 王長祐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nq8ebGfqo2fqN2N3ULZoz6
        subject_person_id: p_Vscy6494CeHCcNFbbLRo1j
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王長祐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SrhEhCWWuj4bzw6DYkKyDD
          claim_id: c_nq8ebGfqo2fqN2N3ULZoz6
          source_id: s_obcvurEHkBPNoGNoK7LuAc
          stance: supports
          locator: CBDB:640737
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640737）
          source: &a1
            id: s_obcvurEHkBPNoGNoK7LuAc
            source_type: api_record
            title: 中国历代人物传记资料库：王長祐（CBDB 640737）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640737&o=json
            external_identifier: CBDB:640737
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.352Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pY5iUQHz8WgCGWMtPE7ceh
        subject_person_id: p_Vscy6494CeHCcNFbbLRo1j
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
        - id: cs_DqudfRJF4wdAyFLH35sFde
          claim_id: c_pY5iUQHz8WgCGWMtPE7ceh
          source_id: s_obcvurEHkBPNoGNoK7LuAc
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

# 王長祐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王長祐 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王長祐（CBDB 640737）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640737&o=json)
