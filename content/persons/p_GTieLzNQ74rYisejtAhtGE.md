---
schema: wang-person/v1
id: p_GTieLzNQ74rYisejtAhtGE
status: active
merged_into: null
display_name: 王咸義
cbdb_id: 27694
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3E7fa7yxPmGjk2Y6W8A4dW
        subject_person_id: p_GTieLzNQ74rYisejtAhtGE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王咸義，史料所见人物。本项目依据《中国历代人物传记资料库：王咸義（CBDB 27694）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_zYI3JlVzGgIXNLmLPu3IyU
          claim_id: c_3E7fa7yxPmGjk2Y6W8A4dW
          source_id: s_oUjfbcBCsqzycCm5LAof91
          stance: supports
          locator: CBDB:27694
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_oUjfbcBCsqzycCm5LAof91
            source_type: api_record
            title: 中国历代人物传记资料库：王咸義（CBDB 27694）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=27694&o=json
            external_identifier: CBDB:27694
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.019Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_bygWQN3Gccs9nnsnm9brHz
        subject_person_id: p_GTieLzNQ74rYisejtAhtGE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王咸義
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_x3n89YF4jainQdn9Q5xotP
          claim_id: c_bygWQN3Gccs9nnsnm9brHz
          source_id: s_oUjfbcBCsqzycCm5LAof91
          stance: supports
          locator: CBDB:27694
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1001-1100）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_o4WtViwyC1PtP7-hxcqCfy
        subject_person_id: p_JEp5M3BLJajMXRjvLCUuVy
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_GTieLzNQ74rYisejtAhtGE
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cDUEIwRsDoqviG52nP_gYg
          claim_id: c_o4WtViwyC1PtP7-hxcqCfy
          source_id: s_oUjfbcBCsqzycCm5LAof91
          stance: supports
          locator: CBDB 双向互证（祖父 王惟熙 ⇄ 孫 王咸義）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_oUjfbcBCsqzycCm5LAof91
            source_type: api_record
            title: 中国历代人物传记资料库：王咸義（CBDB 27694）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=27694&o=json
            external_identifier: CBDB:27694
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.019Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_JEp5M3BLJajMXRjvLCUuVy
        status: active
        display_name: 王惟熙
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王咸義

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王咸義，史料所见人物。本项目依据《中国历代人物传记资料库：王咸義（CBDB 27694）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王咸義 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_JEp5M3BLJajMXRjvLCUuVy | 王惟熙 | accepted |

## 外部来源

- [中国历代人物传记资料库：王咸義（CBDB 27694）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=27694&o=json)
