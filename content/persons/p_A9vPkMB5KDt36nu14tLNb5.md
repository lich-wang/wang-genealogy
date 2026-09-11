---
schema: wang-person/v1
id: p_A9vPkMB5KDt36nu14tLNb5
status: active
merged_into: null
display_name: 余泮英
revision: 1
cbdb_id: 120991
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5m6oxtjy-eD047KSLlAb3g
        subject_person_id: p_A9vPkMB5KDt36nu14tLNb5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 余泮英，史料所见人物。本项目依据《中国历代人物传记资料库：余泮英（CBDB 120991）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bnVV6Uk0SweuWpbDCPKT6H
          claim_id: c_5m6oxtjy-eD047KSLlAb3g
          source_id: s_bitzfwXgcvBRBF2oEsdDNd
          stance: supports
          locator: CBDB:120991
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_bitzfwXgcvBRBF2oEsdDNd
            source_type: api_record
            title: 中国历代人物传记资料库：余泮英（CBDB 120991）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120991&o=json
            external_identifier: CBDB:120991
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_zHbqAZNNou1ewUYhTeU4Le
        subject_person_id: p_A9vPkMB5KDt36nu14tLNb5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 余泮英
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AhQzEG73oMfAxD6DvRDfGk
          claim_id: c_zHbqAZNNou1ewUYhTeU4Le
          source_id: s_bitzfwXgcvBRBF2oEsdDNd
          stance: supports
          locator: CBDB:120991
          quotation: null
          interpretation_note: CBDB 明确记录的王郁蘭配偶
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
        id: c_mQ0QsVkZKl5casbofGMOT8
        subject_person_id: p_GoX1HcvR89FQWuj4HX6FjJ
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_A9vPkMB5KDt36nu14tLNb5
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Mvi9crAfmEpVJ-DgBxwsDu
          claim_id: c_mQ0QsVkZKl5casbofGMOT8
          source_id: s_bitzfwXgcvBRBF2oEsdDNd
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #3925, HuWenKai #237：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_GoX1HcvR89FQWuj4HX6FjJ
        status: active
        display_name: 王郁蘭
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 余泮英

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 余泮英，史料所见人物。本项目依据《中国历代人物传记资料库：余泮英（CBDB 120991）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 余泮英 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_GoX1HcvR89FQWuj4HX6FjJ | 王郁蘭 | accepted |

## 外部来源

- [中国历代人物传记资料库：余泮英（CBDB 120991）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120991&o=json)
