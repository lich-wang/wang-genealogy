---
schema: wang-person/v1
id: p_QVJacyZZDcMUMA6LhaCPei
status: active
merged_into: null
display_name: 曾建斗
revision: 1
cbdb_id: 118579
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_f-9VO6o6ldXHVsrMvBnyWH
        subject_person_id: p_QVJacyZZDcMUMA6LhaCPei
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 曾建斗，史料所见人物。本项目依据《中国历代人物传记资料库：曾建斗（CBDB 118579）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dF9Q4TY3edeypKXHFD425z
          claim_id: c_f-9VO6o6ldXHVsrMvBnyWH
          source_id: s_J8XwNwf-7nyPG5FY-7dlia
          stance: supports
          locator: CBDB:118579
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_J8XwNwf-7nyPG5FY-7dlia
            source_type: api_record
            title: 中国历代人物传记资料库：曾建斗（CBDB 118579）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=118579&o=json
            external_identifier: CBDB:118579
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ps0j4XJBbmYDndCNJ_cf93
        subject_person_id: p_QVJacyZZDcMUMA6LhaCPei
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 曾建斗
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GOSM2wapnvhIahjmVZX6GM
          claim_id: c_ps0j4XJBbmYDndCNJ_cf93
          source_id: s_J8XwNwf-7nyPG5FY-7dlia
          stance: supports
          locator: CBDB:118579
          quotation: null
          interpretation_note: CBDB 明确记录的王瓊瑛配偶
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
        id: c_pkNF91yItEQ8RkmAD0uquE
        subject_person_id: p_3GfmC8MTFBUnnSqz1tct8A
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_QVJacyZZDcMUMA6LhaCPei
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_f-rNEclpZ_laqvyrFDQpWV
          claim_id: c_pkNF91yItEQ8RkmAD0uquE
          source_id: s_J8XwNwf-7nyPG5FY-7dlia
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #2654, HuWenKai #257：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_3GfmC8MTFBUnnSqz1tct8A
        status: active
        display_name: 王瓊瑛
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 曾建斗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 曾建斗，史料所见人物。本项目依据《中国历代人物传记资料库：曾建斗（CBDB 118579）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 曾建斗 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_3GfmC8MTFBUnnSqz1tct8A | 王瓊瑛 | accepted |

## 外部来源

- [中国历代人物传记资料库：曾建斗（CBDB 118579）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=118579&o=json)
