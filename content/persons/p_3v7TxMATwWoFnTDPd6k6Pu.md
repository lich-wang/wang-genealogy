---
schema: wang-person/v1
id: p_3v7TxMATwWoFnTDPd6k6Pu
status: active
merged_into: null
display_name: 王崇文
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VjXX7gPCPaLhGL7x6UmiAR
        subject_person_id: p_3v7TxMATwWoFnTDPd6k6Pu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇文
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qY6b6hcKvcP4hD2kppgaJ3
          claim_id: c_VjXX7gPCPaLhGL7x6UmiAR
          source_id: s_1CqD81CEPLD8L8RE91RvcW
          stance: supports
          locator: CBDB:301928
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（301928）
          source: &a1
            id: s_1CqD81CEPLD8L8RE91RvcW
            source_type: api_record
            title: 中国历代人物传记资料库：王崇文（CBDB 301928）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301928&o=json
            external_identifier: CBDB:301928
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.643Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3td9CBwV2nWHqvjzcB3Fpy
        subject_person_id: p_3v7TxMATwWoFnTDPd6k6Pu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇文，明人物。嘉靖十七年進士，籍贯淄川。（中国历代人物传记资料库 CBDB 301928）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Rybl7q0N1DNWbbrplScC5W
          claim_id: c_3td9CBwV2nWHqvjzcB3Fpy
          source_id: s_1CqD81CEPLD8L8RE91RvcW
          stance: supports
          locator: CBDB:301928
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

# 王崇文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王崇文 | accepted |
| bio.summary | 王崇文，明人物。嘉靖十七年進士，籍贯淄川。（中国历代人物传记资料库 CBDB 301928） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王崇文（CBDB 301928）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301928&o=json)
