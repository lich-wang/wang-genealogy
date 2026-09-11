---
schema: wang-person/v1
id: p_6XW8QGTBTKNGQg13NWRjPt
status: active
merged_into: null
display_name: 蕭道藩
revision: 1
cbdb_id: 54838
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Via6mj8h2vcahDvUAChbic
        subject_person_id: p_6XW8QGTBTKNGQg13NWRjPt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 蕭道藩，史料所见人物。本项目依据《中国历代人物传记资料库：蕭道藩（CBDB 54838）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jMUQ9uo-_ZQspmiGwwLq6k
          claim_id: c_Via6mj8h2vcahDvUAChbic
          source_id: s_Sg-aWhD7wZRaU8SXCuRSCb
          stance: supports
          locator: CBDB:54838
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_Sg-aWhD7wZRaU8SXCuRSCb
            source_type: api_record
            title: 中国历代人物传记资料库：蕭道藩（CBDB 54838）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=54838&o=json
            external_identifier: CBDB:54838
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_2PysqdAQBi3BhnauZGwBMO
        subject_person_id: p_6XW8QGTBTKNGQg13NWRjPt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 蕭道藩
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nbLdSm7W1g9l4AyCzQUHW6
          claim_id: c_2PysqdAQBi3BhnauZGwBMO
          source_id: s_Sg-aWhD7wZRaU8SXCuRSCb
          stance: supports
          locator: CBDB:54838
          quotation: null
          interpretation_note: CBDB 明确记录的王素雯配偶
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
        id: c_yjdj53K0B1NPoco0et9a_q
        subject_person_id: p_1v4iQ1X34hsFcBuishSd5C
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_6XW8QGTBTKNGQg13NWRjPt
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5vZHKa_DLketlBDD22xbDF
          claim_id: c_yjdj53K0B1NPoco0et9a_q
          source_id: s_Sg-aWhD7wZRaU8SXCuRSCb
          stance: supports
          locator: CBDB 双向互证（丈夫 蕭道藩）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_1v4iQ1X34hsFcBuishSd5C
        status: active
        display_name: 王素雯
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 蕭道藩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 蕭道藩，史料所见人物。本项目依据《中国历代人物传记资料库：蕭道藩（CBDB 54838）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 蕭道藩 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_1v4iQ1X34hsFcBuishSd5C | 王素雯 | accepted |

## 外部来源

- [中国历代人物传记资料库：蕭道藩（CBDB 54838）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=54838&o=json)
