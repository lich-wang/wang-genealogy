---
schema: wang-person/v1
id: p_rZCeAGNurjExGgGFQ9mg9X
status: active
merged_into: null
display_name: 王凝華
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DeB2E6EFQ84chjFXnGwLzF
        subject_person_id: p_rZCeAGNurjExGgGFQ9mg9X
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王凝華
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wRwgZBJ9RBLCCrHvPjRsna
          claim_id: c_DeB2E6EFQ84chjFXnGwLzF
          source_id: s_MVFubCz4tNc3TToBwDD1r8
          stance: supports
          locator: CBDB:142268
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（142268）
          source: &a1
            id: s_MVFubCz4tNc3TToBwDD1r8
            source_type: api_record
            title: 中国历代人物传记资料库：王凝華（CBDB 142268）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142268&o=json
            external_identifier: CBDB:142268
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.212Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_T69PtUF4YfQB8ir7HPU6Cr
        subject_person_id: p_rZCeAGNurjExGgGFQ9mg9X
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 569年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TPhqZ5gUE6vXXa1DtKGYW5
          claim_id: c_T69PtUF4YfQB8ir7HPU6Cr
          source_id: s_MVFubCz4tNc3TToBwDD1r8
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_NVkVJfDWo8uyGWE8BeNgBH
        subject_person_id: p_rZCeAGNurjExGgGFQ9mg9X
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 646年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kEdfeqriRDPtQvP2wB6JHr
          claim_id: c_NVkVJfDWo8uyGWE8BeNgBH
          source_id: s_MVFubCz4tNc3TToBwDD1r8
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
        id: c_1fhRzNdKA8vLzp6bxgp3wP
        subject_person_id: p_rZCeAGNurjExGgGFQ9mg9X
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JG995Z7HbvY9XTNGHQKNqm
          claim_id: c_1fhRzNdKA8vLzp6bxgp3wP
          source_id: s_MVFubCz4tNc3TToBwDD1r8
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

# 王凝華

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王凝華 | accepted |
| birth.date | 569年 | accepted |
| death.date | 646年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王凝華（CBDB 142268）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142268&o=json)
