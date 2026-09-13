---
schema: wang-person/v1
id: p_dnePnJFNmUipgTFL31QdDj
status: active
merged_into: null
display_name: 王子莊
cbdb_id: 56683
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LRPGRWtiizzrnNCzFmSAvv
        subject_person_id: p_dnePnJFNmUipgTFL31QdDj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子莊，史料所见人物。本项目依据《中国历代人物传记资料库：王子莊（CBDB 56683）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_uAS1EKmBJoTNGwg1g9OsyZ
          claim_id: c_LRPGRWtiizzrnNCzFmSAvv
          source_id: s_L9Psc1aLURuD6poSCLzNag
          stance: supports
          locator: CBDB:56683
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_L9Psc1aLURuD6poSCLzNag
            source_type: api_record
            title: 中国历代人物传记资料库：王子莊（CBDB 56683）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56683&o=json
            external_identifier: CBDB:56683
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:48.148Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_su8BMLchuJ1bgG7VaGUZzX
        subject_person_id: p_dnePnJFNmUipgTFL31QdDj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子莊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_LLpANdDQVjQPD378qpDDZ8
          claim_id: c_su8BMLchuJ1bgG7VaGUZzX
          source_id: s_L9Psc1aLURuD6poSCLzNag
          stance: supports
          locator: CBDB:56683
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1401-1500）｜历史性依据：CBDB 朝代 = 清
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_JqeKNMjsd_5qqD0xsp7Zoo
        subject_person_id: p_dnePnJFNmUipgTFL31QdDj
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_xXDXrKE837B4h7f5TwUN6U
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bnSpZaiGb2hPVXHbgWu-p-
          claim_id: c_JqeKNMjsd_5qqD0xsp7Zoo
          source_id: s_KT1joQ3-0ohKjyugmhWGDW
          stance: supports
          locator: CBDB 双向互证（妻子 任婉）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_KT1joQ3-0ohKjyugmhWGDW
            source_type: api_record
            title: 中国历代人物传记资料库：任婉（CBDB 56681）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56681&o=json
            external_identifier: CBDB:56681
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_xXDXrKE837B4h7f5TwUN6U
        status: active
        display_name: 任婉
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王子莊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王子莊，史料所见人物。本项目依据《中国历代人物传记资料库：王子莊（CBDB 56683）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王子莊 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_xXDXrKE837B4h7f5TwUN6U | 任婉 | accepted |

## 外部来源

- [中国历代人物传记资料库：任婉（CBDB 56681）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56681&o=json)
- [中国历代人物传记资料库：王子莊（CBDB 56683）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56683&o=json)
