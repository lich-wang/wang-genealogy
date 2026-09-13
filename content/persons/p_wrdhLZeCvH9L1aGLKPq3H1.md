---
schema: wang-person/v1
id: p_wrdhLZeCvH9L1aGLKPq3H1
status: active
merged_into: null
display_name: 王如忠
cbdb_id: 526020
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bXv2xeH9kgSXgiwtCvcNUH
        subject_person_id: p_wrdhLZeCvH9L1aGLKPq3H1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王如忠，史料所见人物。本项目依据《中国历代人物传记资料库：王如忠（CBDB 526020）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_7ij4IBFkzWdiyfgYXBQXGo
          claim_id: c_bXv2xeH9kgSXgiwtCvcNUH
          source_id: s_hUeAj2RYujYB7mbTEpbmmi
          stance: supports
          locator: CBDB:526020
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_hUeAj2RYujYB7mbTEpbmmi
            source_type: api_record
            title: 中国历代人物传记资料库：王如忠（CBDB 526020）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526020&o=json
            external_identifier: CBDB:526020
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:17.868Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_fWvXPx5KHQANJXq2h1SQpE
        subject_person_id: p_wrdhLZeCvH9L1aGLKPq3H1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王如忠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_p2PCvKjxpUHpn5zvZUmCiF
          claim_id: c_fWvXPx5KHQANJXq2h1SQpE
          source_id: s_hUeAj2RYujYB7mbTEpbmmi
          stance: supports
          locator: CBDB:526020
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（7001-7100）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_pbFrd-FnGct99th-DVwSIX
        subject_person_id: p_2HerRhttycbbLEz6aNcNH6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wrdhLZeCvH9L1aGLKPq3H1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Y5NjVDcNJF7cs5r_849NlO
          claim_id: c_pbFrd-FnGct99th-DVwSIX
          source_id: s_buwC6Xo3FSxnC2w51jBQzW
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），11927：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_buwC6Xo3FSxnC2w51jBQzW
            source_type: api_record
            title: 中国历代人物传记资料库：王瓊（CBDB 68264）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68264&o=json
            external_identifier: CBDB:68264
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.063Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2HerRhttycbbLEz6aNcNH6
        status: active
        display_name: 王瓊
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王如忠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王如忠，史料所见人物。本项目依据《中国历代人物传记资料库：王如忠（CBDB 526020）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王如忠 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_2HerRhttycbbLEz6aNcNH6 | 王瓊 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瓊（CBDB 68264）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68264&o=json)
- [中国历代人物传记资料库：王如忠（CBDB 526020）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526020&o=json)
