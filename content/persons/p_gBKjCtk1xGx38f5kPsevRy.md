---
schema: wang-person/v1
id: p_gBKjCtk1xGx38f5kPsevRy
status: active
merged_into: null
display_name: 王遜
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rC5QPCfRC6fL6GNYRrPWLY
        subject_person_id: p_gBKjCtk1xGx38f5kPsevRy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wiDZ8CSuMe5vAjKqfiHfy5
          claim_id: c_rC5QPCfRC6fL6GNYRrPWLY
          source_id: s_PLWs95grhSFrfeW1124cRX
          stance: supports
          locator: CBDB:508483
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（508483）
          source: &a1
            id: s_PLWs95grhSFrfeW1124cRX
            source_type: api_record
            title: 中国历代人物传记资料库：王遜（CBDB 508483）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=508483&o=json
            external_identifier: CBDB:508483
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.090Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Faa8WbkewStfCR8TX5VB76
        subject_person_id: p_gBKjCtk1xGx38f5kPsevRy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遜，明人物。入仕世襲(替)，曾任百戶。（中国历代人物传记资料库 CBDB 508483）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8itzbZPKalCAbS8kGD_tNt
          claim_id: c_Faa8WbkewStfCR8TX5VB76
          source_id: s_PLWs95grhSFrfeW1124cRX
          stance: supports
          locator: CBDB:508483
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

# 王遜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王遜 | accepted |
| bio.summary | 王遜，明人物。入仕世襲(替)，曾任百戶。（中国历代人物传记资料库 CBDB 508483） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王遜（CBDB 508483）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=508483&o=json)
