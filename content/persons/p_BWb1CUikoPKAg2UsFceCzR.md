---
schema: wang-person/v1
id: p_BWb1CUikoPKAg2UsFceCzR
status: active
merged_into: null
display_name: 王贊
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Q88qLanGxw4EF1cDU2kX9c
        subject_person_id: p_BWb1CUikoPKAg2UsFceCzR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王贊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_d6gn4QWg5X9nTcTgY4jJSM
          claim_id: c_Q88qLanGxw4EF1cDU2kX9c
          source_id: s_NFucA5ha32t8r2EGHAiwPn
          stance: supports
          locator: CBDB:459801
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（459801）
          source: &a1
            id: s_NFucA5ha32t8r2EGHAiwPn
            source_type: api_record
            title: 中国历代人物传记资料库：王贊（CBDB 459801）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=459801&o=json
            external_identifier: CBDB:459801
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.725Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9Kd3DSmfPYaxhDDaEfJZor
        subject_person_id: p_BWb1CUikoPKAg2UsFceCzR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王贊，清人物。入仕貢生: 拔貢，曾任教諭。（中国历代人物传记资料库 CBDB 459801）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_iFUdVU53-pCwgTUnpbOEwH
          claim_id: c_9Kd3DSmfPYaxhDDaEfJZor
          source_id: s_NFucA5ha32t8r2EGHAiwPn
          stance: supports
          locator: CBDB:459801
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

# 王贊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王贊 | accepted |
| bio.summary | 王贊，清人物。入仕貢生: 拔貢，曾任教諭。（中国历代人物传记资料库 CBDB 459801） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王贊（CBDB 459801）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=459801&o=json)
