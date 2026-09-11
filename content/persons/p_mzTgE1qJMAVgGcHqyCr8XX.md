---
schema: wang-person/v1
id: p_mzTgE1qJMAVgGcHqyCr8XX
status: active
merged_into: null
display_name: 王垂謙
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vYTxdUSC1UFCYxYdZ5k6Hb
        subject_person_id: p_mzTgE1qJMAVgGcHqyCr8XX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王垂謙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HdEb8eMtnYJgWv28Ehx2sZ
          claim_id: c_vYTxdUSC1UFCYxYdZ5k6Hb
          source_id: s_AA2KsrqoCgHvDhR2zwn6Y2
          stance: supports
          locator: CBDB:527021
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（527021）
          source: &a1
            id: s_AA2KsrqoCgHvDhR2zwn6Y2
            source_type: api_record
            title: 中国历代人物传记资料库：王垂謙（CBDB 527021）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=527021&o=json
            external_identifier: CBDB:527021
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.337Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UbWaWaVM3fcPyvdTJKr24v
        subject_person_id: p_mzTgE1qJMAVgGcHqyCr8XX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王垂謙，史料所见人物。本项目依据《中国历代人物传记资料库：王垂謙（CBDB 527021）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__DDoxkj-YqsKUEWkhRxl8E
          claim_id: c_UbWaWaVM3fcPyvdTJKr24v
          source_id: s_AA2KsrqoCgHvDhR2zwn6Y2
          stance: supports
          locator: CBDB:527021
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_k_9wgHRVZde0gcOr4qBnH8
        subject_person_id: p_fFFejeNTAUwXPAWu7JRdwj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mzTgE1qJMAVgGcHqyCr8XX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8rks9Ol8TmRgXU-fgH5Q1f
          claim_id: c_k_9wgHRVZde0gcOr4qBnH8
          source_id: s_3G8X5aZSgEtsKYhYueEct5
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13182：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_3G8X5aZSgEtsKYhYueEct5
            source_type: api_record
            title: 中国历代人物传记资料库：王龍光（CBDB 69470）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69470&o=json
            external_identifier: CBDB:69470
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.287Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_fFFejeNTAUwXPAWu7JRdwj
        status: active
        display_name: 王龍光
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王垂謙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王垂謙 | accepted |
| bio.summary | 王垂謙，史料所见人物。本项目依据《中国历代人物传记资料库：王垂謙（CBDB 527021）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_fFFejeNTAUwXPAWu7JRdwj | 王龍光 | accepted |

## 外部来源

- [中国历代人物传记资料库：王垂謙（CBDB 527021）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=527021&o=json)
- [中国历代人物传记资料库：王龍光（CBDB 69470）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69470&o=json)
