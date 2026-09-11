---
schema: wang-person/v1
id: p_ftWggwpxeZ4AwvVMrUZZ87
status: active
merged_into: null
display_name: 王守琠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_374kF4qc6wnHu8hM17vK8n
        subject_person_id: p_ftWggwpxeZ4AwvVMrUZZ87
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守琠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aPcC7GRDoA9CXMJ6Mx5PvG
          claim_id: c_374kF4qc6wnHu8hM17vK8n
          source_id: s_N5f6yS7tghvfwNBeCzGmDB
          stance: supports
          locator: CBDB:637070
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637070）
          source: &a1
            id: s_N5f6yS7tghvfwNBeCzGmDB
            source_type: api_record
            title: 中国历代人物传记资料库：王守琠（CBDB 637070）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637070&o=json
            external_identifier: CBDB:637070
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.195Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1MG2eYcTqpnKoV5PoaLWeV
        subject_person_id: p_ftWggwpxeZ4AwvVMrUZZ87
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守琠，清人物。籍贯濟南府，入仕縣學附生，曾任訓導、復設教諭。（中国历代人物传记资料库 CBDB 637070）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_deNxVtHewPZISitjI0knfz
          claim_id: c_1MG2eYcTqpnKoV5PoaLWeV
          source_id: s_N5f6yS7tghvfwNBeCzGmDB
          stance: supports
          locator: CBDB:637070
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

# 王守琠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王守琠 | accepted |
| bio.summary | 王守琠，清人物。籍贯濟南府，入仕縣學附生，曾任訓導、復設教諭。（中国历代人物传记资料库 CBDB 637070） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王守琠（CBDB 637070）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637070&o=json)
