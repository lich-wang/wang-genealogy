---
schema: wang-person/v1
id: p_xmHExufKAHa4TFiPqrE1V7
status: active
merged_into: null
display_name: 王經
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iabL5jrCdX7NuehjPY7LLK
        subject_person_id: p_xmHExufKAHa4TFiPqrE1V7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王經
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iRGWoLXXu73wCryNnobbrF
          claim_id: c_iabL5jrCdX7NuehjPY7LLK
          source_id: s_1AxCDUCY5NtL6dpK9pSmaA
          stance: supports
          locator: CBDB:502436
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（502436）
          source: &a1
            id: s_1AxCDUCY5NtL6dpK9pSmaA
            source_type: api_record
            title: 中国历代人物传记资料库：王經（CBDB 502436）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=502436&o=json
            external_identifier: CBDB:502436
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.872Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SCHzsYCnzjG71piFC8TFgE
        subject_person_id: p_xmHExufKAHa4TFiPqrE1V7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王經，明人物。曾任縣丞。（中国历代人物传记资料库 CBDB 502436）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_IVJdG2tcYq5dxfiGPFvmVn
          claim_id: c_SCHzsYCnzjG71piFC8TFgE
          source_id: s_1AxCDUCY5NtL6dpK9pSmaA
          stance: supports
          locator: CBDB:502436
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

# 王經

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王經 | accepted |
| bio.summary | 王經，明人物。曾任縣丞。（中国历代人物传记资料库 CBDB 502436） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王經（CBDB 502436）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=502436&o=json)
