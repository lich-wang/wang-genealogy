---
schema: wang-person/v1
id: p_wHfrqfz22WN5KwU5HaW6zG
status: active
merged_into: null
display_name: 王仁著
cbdb_id: 38322
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KMTH3d7p8V55NvfEJhCNza
        subject_person_id: p_wHfrqfz22WN5KwU5HaW6zG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仁著，史料所见人物。本项目依据《中国历代人物传记资料库：王仁著（CBDB 38322）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_58a9VA3Nu4GhwFV57dc7Yz
          claim_id: c_KMTH3d7p8V55NvfEJhCNza
          source_id: s_pJhLDJVTDbYW6gguSz865r
          stance: supports
          locator: CBDB:38322
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_pJhLDJVTDbYW6gguSz865r
            source_type: api_record
            title: 中国历代人物传记资料库：王仁著（CBDB 38322）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38322&o=json
            external_identifier: CBDB:38322
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:46.515Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Gg6qHGdhvevRLDwAqEbZMU
        subject_person_id: p_wHfrqfz22WN5KwU5HaW6zG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仁著
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_a5QxWGzS56iEcCRisNNXPm
          claim_id: c_Gg6qHGdhvevRLDwAqEbZMU
          source_id: s_pJhLDJVTDbYW6gguSz865r
          stance: supports
          locator: CBDB:38322
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1201-1300）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_OAoGPrXKeIKglpyLfTZpzY
        subject_person_id: p_yUzqviNoJXsLMPELJLBNQB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wHfrqfz22WN5KwU5HaW6zG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HcWGpMzivfDESSan8fFnPI
          claim_id: c_OAoGPrXKeIKglpyLfTZpzY
          source_id: s_pJhLDJVTDbYW6gguSz865r
          stance: supports
          locator: 宋人傳記資料索引(電子版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_pJhLDJVTDbYW6gguSz865r
            source_type: api_record
            title: 中国历代人物传记资料库：王仁著（CBDB 38322）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38322&o=json
            external_identifier: CBDB:38322
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:46.515Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_yUzqviNoJXsLMPELJLBNQB
        status: active
        display_name: 王昭素
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王仁著

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王仁著，史料所见人物。本项目依据《中国历代人物传记资料库：王仁著（CBDB 38322）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王仁著 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_yUzqviNoJXsLMPELJLBNQB | 王昭素 | accepted |

## 外部来源

- [中国历代人物传记资料库：王仁著（CBDB 38322）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38322&o=json)
