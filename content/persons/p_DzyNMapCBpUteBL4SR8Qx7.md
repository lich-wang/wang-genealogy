---
schema: wang-person/v1
id: p_DzyNMapCBpUteBL4SR8Qx7
status: active
merged_into: null
display_name: 王乃詔
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XyLRnkuLoTLpbLsnsB82QL
        subject_person_id: p_DzyNMapCBpUteBL4SR8Qx7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王乃詔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5JfDc6tZ7SN66bT6ENXCGP
          claim_id: c_XyLRnkuLoTLpbLsnsB82QL
          source_id: s_4Eu2cyGYLFYgf5KrVdDfZA
          stance: supports
          locator: CBDB:635765
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635765）
          source: &a1
            id: s_4Eu2cyGYLFYgf5KrVdDfZA
            source_type: api_record
            title: 中国历代人物传记资料库：王乃詔（CBDB 635765）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635765&o=json
            external_identifier: CBDB:635765
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.785Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Bo3ZNC677jN2swpar5v9rP
        subject_person_id: p_DzyNMapCBpUteBL4SR8Qx7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王乃詔，清人物。籍贯瓊州府，曾任復設教諭。（中国历代人物传记资料库 CBDB 635765）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xMeRCi8Xja9wDEg-QDnHeG
          claim_id: c_Bo3ZNC677jN2swpar5v9rP
          source_id: s_4Eu2cyGYLFYgf5KrVdDfZA
          stance: supports
          locator: CBDB:635765
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

# 王乃詔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王乃詔 | accepted |
| bio.summary | 王乃詔，清人物。籍贯瓊州府，曾任復設教諭。（中国历代人物传记资料库 CBDB 635765） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王乃詔（CBDB 635765）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635765&o=json)
