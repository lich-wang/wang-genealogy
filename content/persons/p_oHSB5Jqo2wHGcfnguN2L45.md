---
schema: wang-person/v1
id: p_oHSB5Jqo2wHGcfnguN2L45
status: active
merged_into: null
display_name: 王佐才
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_asB85BJHwEa11peFVxnpXB
        subject_person_id: p_oHSB5Jqo2wHGcfnguN2L45
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佐才
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NFpGeJTB9UWVWFEXRQBCac
          claim_id: c_asB85BJHwEa11peFVxnpXB
          source_id: s_wm8S5t6HzTJ6qJeNFHNSKD
          stance: supports
          locator: CBDB:490678
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（490678）
          source: &a1
            id: s_wm8S5t6HzTJ6qJeNFHNSKD
            source_type: api_record
            title: 中国历代人物传记资料库：王佐才（CBDB 490678）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=490678&o=json
            external_identifier: CBDB:490678
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.135Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EkAq1J6dqxtQ6vb1fn7SKa
        subject_person_id: p_oHSB5Jqo2wHGcfnguN2L45
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佐才，清人物。入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 490678）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5JnpyScCarts-ftnmAnN8-
          claim_id: c_EkAq1J6dqxtQ6vb1fn7SKa
          source_id: s_wm8S5t6HzTJ6qJeNFHNSKD
          stance: supports
          locator: CBDB:490678
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

# 王佐才

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王佐才 | accepted |
| bio.summary | 王佐才，清人物。入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 490678） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王佐才（CBDB 490678）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=490678&o=json)
