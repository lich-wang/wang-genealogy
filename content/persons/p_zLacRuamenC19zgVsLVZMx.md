---
schema: wang-person/v1
id: p_zLacRuamenC19zgVsLVZMx
status: active
merged_into: null
display_name: 王應之
cbdb_id: 19421
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xFt3j645RS6HeoVQwiuMNm
        subject_person_id: p_zLacRuamenC19zgVsLVZMx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應之，史料所见人物。本项目依据《中国历代人物传记资料库：王應之（CBDB 19421）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_DnJ4RGlVFwo4Vtpj8EvSJo
          claim_id: c_xFt3j645RS6HeoVQwiuMNm
          source_id: s_sZwf9MPLMPyF5SHwyHD8qV
          stance: supports
          locator: CBDB:19421
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_sZwf9MPLMPyF5SHwyHD8qV
            source_type: api_record
            title: 中国历代人物传记资料库：王應之（CBDB 19421）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19421&o=json
            external_identifier: CBDB:19421
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_SCsNgidSPFfWeFKYszxKQ1
        subject_person_id: p_zLacRuamenC19zgVsLVZMx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應之
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_dmPwScYxTmJ463QN7WTNgJ
          claim_id: c_SCsNgidSPFfWeFKYszxKQ1
          source_id: s_sZwf9MPLMPyF5SHwyHD8qV
          stance: supports
          locator: CBDB:19421
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（901-1000）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_1z0potYgCR2nb64h8VeKtr
        subject_person_id: p_zLacRuamenC19zgVsLVZMx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2kM1yTzwMkGpxWY3CwtJUi
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OQ5M_Jdt2KRVKMD34bf2vz
          claim_id: c_1z0potYgCR2nb64h8VeKtr
          source_id: s_VQ8HdxL39bDDXT7c2YeTnQ
          stance: supports
          locator: CBDB 双向互证（父 王應之 ⇄ 子 王象）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_VQ8HdxL39bDDXT7c2YeTnQ
            source_type: api_record
            title: 中国历代人物传记资料库：王象（CBDB 19426）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19426&o=json
            external_identifier: CBDB:19426
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.735Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2kM1yTzwMkGpxWY3CwtJUi
        status: active
        display_name: 王象
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王應之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王應之，史料所见人物。本项目依据《中国历代人物传记资料库：王應之（CBDB 19421）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王應之 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_2kM1yTzwMkGpxWY3CwtJUi | 王象 | accepted |

## 外部来源

- [中国历代人物传记资料库：王象（CBDB 19426）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19426&o=json)
- [中国历代人物传记资料库：王應之（CBDB 19421）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19421&o=json)
