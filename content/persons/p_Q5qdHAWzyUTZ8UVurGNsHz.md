---
schema: wang-person/v1
id: p_Q5qdHAWzyUTZ8UVurGNsHz
status: active
merged_into: null
display_name: 王恆清
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HC4fu4i11B2kSjHVGdsngq
        subject_person_id: p_Q5qdHAWzyUTZ8UVurGNsHz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恆清
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4qjrLFTKUEfS51tLcB7vhp
          claim_id: c_HC4fu4i11B2kSjHVGdsngq
          source_id: s_5P57iGKNPq1oG8eGPD5c6k
          stance: supports
          locator: CBDB:156057
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（156057）
          source: &a1
            id: s_5P57iGKNPq1oG8eGPD5c6k
            source_type: api_record
            title: 中国历代人物传记资料库：王恆清（CBDB 156057）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=156057&o=json
            external_identifier: CBDB:156057
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.890Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xswcgZfPsT8paJ7LGJxjy6
        subject_person_id: p_Q5qdHAWzyUTZ8UVurGNsHz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恆清，史料所见人物。本项目依据《中国历代人物传记资料库：王恆清（CBDB 156057）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wjI9_3xAyjl1Uxl3YiRq34
          claim_id: c_xswcgZfPsT8paJ7LGJxjy6
          source_id: s_5P57iGKNPq1oG8eGPD5c6k
          stance: supports
          locator: CBDB:156057
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
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
  descendants: []
  other:
    - claim:
        id: c_fRnhGL6MzEypEh-nzyQYNd
        subject_person_id: p_Q5qdHAWzyUTZ8UVurGNsHz
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_zzQn3afESvutWcTEBVbFTe
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SzTYuBhCPjVpaQn8JsS4Z_
          claim_id: c_fRnhGL6MzEypEh-nzyQYNd
          source_id: s_5cPnyZYJo-dP7wrUzrLEXe
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 141368 王恆汎）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_5cPnyZYJo-dP7wrUzrLEXe
            source_type: api_record
            title: 中国历代人物传记资料库：王恆清（CBDB 156057）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=156057&o=json
            external_identifier: CBDB:156057
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_zzQn3afESvutWcTEBVbFTe
        status: active
        display_name: 王恆汎
        merged_into_person_id: null
---

# 王恆清

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王恆清 | accepted |
| bio.summary | 王恆清，史料所见人物。本项目依据《中国历代人物传记资料库：王恆清（CBDB 156057）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| other | p_zzQn3afESvutWcTEBVbFTe | 王恆汎 | accepted |

## 外部来源

- [中国历代人物传记资料库：王恆清（CBDB 156057）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=156057&o=json)
