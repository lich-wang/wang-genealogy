---
schema: wang-person/v1
id: p_PZ16kT7mX4LFMhdZ6WcEBh
status: active
merged_into: null
display_name: 王有譽
cbdb_id: 522572
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SHaBVcL8LFupSAPR39cCJ9
        subject_person_id: p_PZ16kT7mX4LFMhdZ6WcEBh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王有譽，史料所见人物。本项目依据《中国历代人物传记资料库：王有譽（CBDB 522572）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_GR6H4xIx8EPlQ9thPQS_Ao
          claim_id: c_SHaBVcL8LFupSAPR39cCJ9
          source_id: s_EtvoyDAUfs67QXQJwoQffA
          stance: supports
          locator: CBDB:522572
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_EtvoyDAUfs67QXQJwoQffA
            source_type: api_record
            title: 中国历代人物传记资料库：王有譽（CBDB 522572）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=522572&o=json
            external_identifier: CBDB:522572
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:17.868Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_xsoFg6ms2BG77iiR4tby4y
        subject_person_id: p_PZ16kT7mX4LFMhdZ6WcEBh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王有譽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_1Erm9Rybc76ZS9teokboiM
          claim_id: c_xsoFg6ms2BG77iiR4tby4y
          source_id: s_EtvoyDAUfs67QXQJwoQffA
          stance: supports
          locator: CBDB:522572
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（7001-7100）｜历史性依据：CBDB 朝代 = 清
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_xEEjrhw-vLGmpwiIUS3r3l
        subject_person_id: p_HT1byH8rxSEHoPMAFQo6uz
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PZ16kT7mX4LFMhdZ6WcEBh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NSoh2Dri_-1xGwEGYTuSqf
          claim_id: c_xEEjrhw-vLGmpwiIUS3r3l
          source_id: s_JsaeHJVJrAG3MBSN1CqeX7
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），9371：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_JsaeHJVJrAG3MBSN1CqeX7
            source_type: api_record
            title: 中国历代人物传记资料库：王翬（CBDB 65886）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=65886&o=json
            external_identifier: CBDB:65886
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.944Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_HT1byH8rxSEHoPMAFQo6uz
        status: active
        display_name: 王翬
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王有譽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王有譽，史料所见人物。本项目依据《中国历代人物传记资料库：王有譽（CBDB 522572）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王有譽 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_HT1byH8rxSEHoPMAFQo6uz | 王翬 | accepted |

## 外部来源

- [中国历代人物传记资料库：王翬（CBDB 65886）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=65886&o=json)
- [中国历代人物传记资料库：王有譽（CBDB 522572）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=522572&o=json)
