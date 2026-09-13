---
schema: wang-person/v1
id: p_yudA6ZEw2iJN85eNtCgZcR
status: active
merged_into: null
display_name: 王文溥
cbdb_id: 70273
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RZ8RMjuNrqw1heMHT3Cms6
        subject_person_id: p_yudA6ZEw2iJN85eNtCgZcR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文溥，史料所见人物。本项目依据《中国历代人物传记资料库：王文溥（CBDB 70273）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_QVwfQ8z9Xg2wLUuh01Ue9Z
          claim_id: c_RZ8RMjuNrqw1heMHT3Cms6
          source_id: s_37KYn4RnfeN1WTGJbZHNr2
          stance: supports
          locator: CBDB:70273
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_37KYn4RnfeN1WTGJbZHNr2
            source_type: api_record
            title: 中国历代人物传记资料库：王文溥（CBDB 70273）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=70273&o=json
            external_identifier: CBDB:70273
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:48.831Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_6RkkMw18rqd9RQMDdUKxAS
        subject_person_id: p_yudA6ZEw2iJN85eNtCgZcR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文溥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_pLHU6bF4xcNqXNAkqjZPdf
          claim_id: c_6RkkMw18rqd9RQMDdUKxAS
          source_id: s_37KYn4RnfeN1WTGJbZHNr2
          stance: supports
          locator: CBDB:70273
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1501-1600）｜历史性依据：CBDB 朝代 = 清
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
        id: c_xRNl0pWyXareJdwsmielxn
        subject_person_id: p_yudA6ZEw2iJN85eNtCgZcR
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_e1487jjs3wqBw34wWZ9y4R
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dLQt52gsdlnXmGS4fLzenk
          claim_id: c_xRNl0pWyXareJdwsmielxn
          source_id: s_M3g3XIe-npkgV2zePohLgk
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #1476, HuWenKai #485：妻子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_M3g3XIe-npkgV2zePohLgk
            source_type: api_record
            title: 中国历代人物传记资料库：浦蓮（CBDB 70265）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=70265&o=json
            external_identifier: CBDB:70265
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_e1487jjs3wqBw34wWZ9y4R
        status: active
        display_name: 浦蓮
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王文溥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王文溥，史料所见人物。本项目依据《中国历代人物传记资料库：王文溥（CBDB 70273）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王文溥 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_e1487jjs3wqBw34wWZ9y4R | 浦蓮 | accepted |

## 外部来源

- [中国历代人物传记资料库：浦蓮（CBDB 70265）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=70265&o=json)
- [中国历代人物传记资料库：王文溥（CBDB 70273）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=70273&o=json)
