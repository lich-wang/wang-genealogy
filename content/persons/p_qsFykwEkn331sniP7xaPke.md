---
schema: wang-person/v1
id: p_qsFykwEkn331sniP7xaPke
status: active
merged_into: null
display_name: 王添祥
cbdb_id: 238292
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ERdPoiGv16YKDMAD6rwwtG
        subject_person_id: p_qsFykwEkn331sniP7xaPke
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王添祥，史料所见人物。本项目依据《中国历代人物传记资料库：王添祥（CBDB 238292）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_wKBzKrSDn1dnmVAT0qEV9r
          claim_id: c_ERdPoiGv16YKDMAD6rwwtG
          source_id: s_UDXxgsipSBNx4E2g13e3Tv
          stance: supports
          locator: CBDB:238292
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_UDXxgsipSBNx4E2g13e3Tv
            source_type: api_record
            title: 中国历代人物传记资料库：王添祥（CBDB 238292）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238292&o=json
            external_identifier: CBDB:238292
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.856Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Tc927F3JhUmb1JP4Dbf6gz
        subject_person_id: p_qsFykwEkn331sniP7xaPke
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王添祥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_EHSEKzN6JCCQd7pkrtqT21
          claim_id: c_Tc927F3JhUmb1JP4Dbf6gz
          source_id: s_UDXxgsipSBNx4E2g13e3Tv
          stance: supports
          locator: CBDB:238292
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2801-2900）｜历史性依据：CBDB 朝代 = 明
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
        id: c_sgtNn570pspSsY0sOLkKiF
        subject_person_id: p_qsFykwEkn331sniP7xaPke
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_6e5ELnuv2E5KGPsNrAysQX
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SMujzUtJwxVxY9Tda1jpcO
          claim_id: c_sgtNn570pspSsY0sOLkKiF
          source_id: s_UDXxgsipSBNx4E2g13e3Tv
          stance: supports
          locator: 正统七年進士登科錄:一卷，第三甲第三十七名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_UDXxgsipSBNx4E2g13e3Tv
            source_type: api_record
            title: 中国历代人物传记资料库：王添祥（CBDB 238292）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238292&o=json
            external_identifier: CBDB:238292
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.856Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_6e5ELnuv2E5KGPsNrAysQX
        status: active
        display_name: 王庾
        merged_into_person_id: null
  other: []
---

# 王添祥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王添祥，史料所见人物。本项目依据《中国历代人物传记资料库：王添祥（CBDB 238292）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王添祥 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_6e5ELnuv2E5KGPsNrAysQX | 王庾 | accepted |

## 外部来源

- [中国历代人物传记资料库：王添祥（CBDB 238292）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238292&o=json)
