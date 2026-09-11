---
schema: wang-person/v1
id: p_d3CEFj65Tejb6yCUo7M2L2
status: active
merged_into: null
display_name: 王龍
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dsBMxEPwMpx7MgteHxV5QY
        subject_person_id: p_d3CEFj65Tejb6yCUo7M2L2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王龍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GUkx5xbGHgN3r3CeTVYrLQ
          claim_id: c_dsBMxEPwMpx7MgteHxV5QY
          source_id: s_W6dhDSz2fEKxPeTqVWbHES
          stance: supports
          locator: CBDB:231764
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（231764）
          source: &a1
            id: s_W6dhDSz2fEKxPeTqVWbHES
            source_type: api_record
            title: 中国历代人物传记资料库：王龍（CBDB 231764）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231764&o=json
            external_identifier: CBDB:231764
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.654Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_j1RY5LJrSUksDTRVpHx5Ay
        subject_person_id: p_d3CEFj65Tejb6yCUo7M2L2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王龍，史料所见人物。本项目依据《中国历代人物传记资料库：王龍（CBDB 231764）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4FOS5MVBKTuaReWChzQbzh
          claim_id: c_j1RY5LJrSUksDTRVpHx5Ay
          source_id: s_W6dhDSz2fEKxPeTqVWbHES
          stance: supports
          locator: CBDB:231764
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
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
  descendants:
    - claim:
        id: c_8ewmRqsX-rXyLosbn3t8P-
        subject_person_id: p_d3CEFj65Tejb6yCUo7M2L2
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_94dDbMbKJAD59aKbdEvHPz
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NopDFXa8dIz7-d25q8C3ID
          claim_id: c_8ewmRqsX-rXyLosbn3t8P-
          source_id: s_ePLDEJ7rK62rXWD8VSG5vH
          stance: supports
          locator: 萬曆二十年壬辰科進士歷履便覽:一卷，第三甲第一百四十三名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ePLDEJ7rK62rXWD8VSG5vH
            source_type: api_record
            title: 中国历代人物传记资料库：王愛（CBDB 207364）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207364&o=json
            external_identifier: CBDB:207364
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.920Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_94dDbMbKJAD59aKbdEvHPz
        status: active
        display_name: 王愛
        merged_into_person_id: null
  other: []
---

# 王龍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王龍 | accepted |
| bio.summary | 王龍，史料所见人物。本项目依据《中国历代人物传记资料库：王龍（CBDB 231764）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_94dDbMbKJAD59aKbdEvHPz | 王愛 | accepted |

## 外部来源

- [中国历代人物传记资料库：王愛（CBDB 207364）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207364&o=json)
- [中国历代人物传记资料库：王龍（CBDB 231764）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231764&o=json)
