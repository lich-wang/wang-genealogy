---
schema: wang-person/v1
id: p_TM1Cuq1eEZmtPXBv2xPrq5
status: active
merged_into: null
display_name: 王奧
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_psraCNw7L5CkwJteeW1CXS
        subject_person_id: p_TM1Cuq1eEZmtPXBv2xPrq5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王奧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ty6jeRp9NWKbmMxC4cGZdP
          claim_id: c_psraCNw7L5CkwJteeW1CXS
          source_id: s_5xz8dMhtr743npVHmN1U7m
          stance: supports
          locator: CBDB:38645
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38645）
          source: &a1
            id: s_5xz8dMhtr743npVHmN1U7m
            source_type: api_record
            title: 中国历代人物传记资料库：王奧（CBDB 38645）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38645&o=json
            external_identifier: CBDB:38645
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.522Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xzTCnpS6AzoLDAR4jUj7VC
        subject_person_id: p_TM1Cuq1eEZmtPXBv2xPrq5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王奧，史料所见人物。本项目依据《中国历代人物传记资料库：王奧（CBDB 38645）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_D06XOTsi3LPVPjiHDMSTvS
          claim_id: c_xzTCnpS6AzoLDAR4jUj7VC
          source_id: s_5xz8dMhtr743npVHmN1U7m
          stance: supports
          locator: CBDB:38645
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
  ancestors:
    - claim:
        id: c_t8anNLd0vlVjDGjGZnA9y6
        subject_person_id: p_tyaMeFLDyyzL3DtTVsE3uu
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_TM1Cuq1eEZmtPXBv2xPrq5
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0TZV_OVxi8s01jVfFiZ7Gl
          claim_id: c_t8anNLd0vlVjDGjGZnA9y6
          source_id: s_5xz8dMhtr743npVHmN1U7m
          stance: supports
          locator: 宋人傳記資料索引(電子版)，592;593：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_tyaMeFLDyyzL3DtTVsE3uu
        status: active
        display_name: 王旦
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王奧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王奧 | accepted |
| bio.summary | 王奧，史料所见人物。本项目依据《中国历代人物传记资料库：王奧（CBDB 38645）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_tyaMeFLDyyzL3DtTVsE3uu | 王旦 | accepted |

## 外部来源

- [中国历代人物传记资料库：王奧（CBDB 38645）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38645&o=json)
