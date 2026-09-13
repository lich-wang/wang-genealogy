---
schema: wang-person/v1
id: p_ZViznSSCMeDEzahje8JWhN
status: active
merged_into: null
display_name: 王廷睿
cbdb_id: 39385
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Ljdg7pm66kygQGvVbhSyyB
        subject_person_id: p_ZViznSSCMeDEzahje8JWhN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷睿，史料所见人物。本项目依据《中国历代人物传记资料库：王廷睿（CBDB 39385）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_J4vetcvQbdB2F4N7B7wLXJ
          claim_id: c_Ljdg7pm66kygQGvVbhSyyB
          source_id: s_PaPMCY3apZnifajwPP5Dr8
          stance: supports
          locator: CBDB:39385
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_PaPMCY3apZnifajwPP5Dr8
            source_type: api_record
            title: 中国历代人物传记资料库：王廷睿（CBDB 39385）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39385&o=json
            external_identifier: CBDB:39385
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:47.307Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_THcBVBs328FDwfmEA22ynv
        subject_person_id: p_ZViznSSCMeDEzahje8JWhN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷睿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_2Bf4A5EQYjM8wHrFaVJJBd
          claim_id: c_THcBVBs328FDwfmEA22ynv
          source_id: s_PaPMCY3apZnifajwPP5Dr8
          stance: supports
          locator: CBDB:39385
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1301-1400）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_pT85DGc1D22xDFeNlvd_f-
        subject_person_id: p_cWq3Ad37Fg61KqGA2RFrbD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZViznSSCMeDEzahje8JWhN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HKOlRuNsRGUIMCYWwmElzJ
          claim_id: c_pT85DGc1D22xDFeNlvd_f-
          source_id: s_JEmLoa6B34TExkPDzfUvvx
          stance: supports
          locator: 宋人傳記資料索引(電子版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_JEmLoa6B34TExkPDzfUvvx
            source_type: api_record
            title: 中国历代人物传记资料库：王景（CBDB 38454）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38454&o=json
            external_identifier: CBDB:38454
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.486Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_cWq3Ad37Fg61KqGA2RFrbD
        status: active
        display_name: 王景
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王廷睿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王廷睿，史料所见人物。本项目依据《中国历代人物传记资料库：王廷睿（CBDB 39385）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王廷睿 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_cWq3Ad37Fg61KqGA2RFrbD | 王景 | accepted |

## 外部来源

- [中国历代人物传记资料库：王景（CBDB 38454）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38454&o=json)
- [中国历代人物传记资料库：王廷睿（CBDB 39385）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39385&o=json)
