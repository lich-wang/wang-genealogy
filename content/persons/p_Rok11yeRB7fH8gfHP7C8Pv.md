---
schema: wang-person/v1
id: p_Rok11yeRB7fH8gfHP7C8Pv
status: active
merged_into: null
display_name: 王鑑清
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5H52tXxk3J2TV6WqVoRtf7
        subject_person_id: p_Rok11yeRB7fH8gfHP7C8Pv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑑清
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yV26FHviV4mFd2yvbA9kW5
          claim_id: c_5H52tXxk3J2TV6WqVoRtf7
          source_id: s_sUJhSLBpqPtCfXL9gsHogS
          stance: supports
          locator: CBDB:640718
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640718）
          source: &a1
            id: s_sUJhSLBpqPtCfXL9gsHogS
            source_type: api_record
            title: 中国历代人物传记资料库：王鑑清（CBDB 640718）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640718&o=json
            external_identifier: CBDB:640718
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.346Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GaF43QQXc3kRcHvCAc9GEU
        subject_person_id: p_Rok11yeRB7fH8gfHP7C8Pv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑑清，清人物。籍贯海城，入仕附貢生，曾任知縣。（中国历代人物传记资料库 CBDB 640718）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JsV4jK-MdRUFK_qeHrqGjB
          claim_id: c_GaF43QQXc3kRcHvCAc9GEU
          source_id: s_sUJhSLBpqPtCfXL9gsHogS
          stance: supports
          locator: CBDB:640718
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

# 王鑑清

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鑑清 | accepted |
| bio.summary | 王鑑清，清人物。籍贯海城，入仕附貢生，曾任知縣。（中国历代人物传记资料库 CBDB 640718） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鑑清（CBDB 640718）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640718&o=json)
