---
schema: wang-person/v1
id: p_ctietCw2hFwAE76dBhBJ6P
status: active
merged_into: null
display_name: 王霖
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9TUwmJeHR5p5VrpwUoDw16
        subject_person_id: p_ctietCw2hFwAE76dBhBJ6P
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王霖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rP8X1225DFKo59A6PCTL6L
          claim_id: c_9TUwmJeHR5p5VrpwUoDw16
          source_id: s_ddFzj11XZMX9rAMtfnuorw
          stance: supports
          locator: CBDB:471009
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（471009）
          source: &a1
            id: s_ddFzj11XZMX9rAMtfnuorw
            source_type: api_record
            title: 中国历代人物传记资料库：王霖（CBDB 471009）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=471009&o=json
            external_identifier: CBDB:471009
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.164Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uQ6YNsWUMJnUN3q6hBDHAp
        subject_person_id: p_ctietCw2hFwAE76dBhBJ6P
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王霖，清人物。入仕貢生: 拔貢，曾任知縣。（中国历代人物传记资料库 CBDB 471009）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_esn6C9sxfk3JmzYUpKy_Xs
          claim_id: c_uQ6YNsWUMJnUN3q6hBDHAp
          source_id: s_ddFzj11XZMX9rAMtfnuorw
          stance: supports
          locator: CBDB:471009
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

# 王霖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王霖 | accepted |
| bio.summary | 王霖，清人物。入仕貢生: 拔貢，曾任知縣。（中国历代人物传记资料库 CBDB 471009） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王霖（CBDB 471009）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=471009&o=json)
