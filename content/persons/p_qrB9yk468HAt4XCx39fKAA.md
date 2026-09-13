---
schema: wang-person/v1
id: p_qrB9yk468HAt4XCx39fKAA
status: active
merged_into: null
display_name: 王伯靈
cbdb_id: 524722
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hPTBfArPN7M2uLxAUvLnaH
        subject_person_id: p_qrB9yk468HAt4XCx39fKAA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伯靈，史料所见人物。本项目依据《中国历代人物传记资料库：王伯靈（CBDB 524722）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_df9kvyLqS-IrKFDLH9oHsm
          claim_id: c_hPTBfArPN7M2uLxAUvLnaH
          source_id: s_8x1G7L5VofYPDQWSqVtFPQ
          stance: supports
          locator: CBDB:524722
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_8x1G7L5VofYPDQWSqVtFPQ
            source_type: api_record
            title: 中国历代人物传记资料库：王伯靈（CBDB 524722）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=524722&o=json
            external_identifier: CBDB:524722
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:17.868Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_vzwa5PmV816M9MEuwedhwb
        subject_person_id: p_qrB9yk468HAt4XCx39fKAA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伯靈
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_gNm1hsk27vLuCy4H8QFFwS
          claim_id: c_vzwa5PmV816M9MEuwedhwb
          source_id: s_8x1G7L5VofYPDQWSqVtFPQ
          stance: supports
          locator: CBDB:524722
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（7001-7100）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c__3jzRE2t11pX2b1dR86peQ
        subject_person_id: p_qrB9yk468HAt4XCx39fKAA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3vv94kaBWa8sUxdLF8B6cN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_G1V_IYqjix71FThVP12BQU
          claim_id: c__3jzRE2t11pX2b1dR86peQ
          source_id: s_pYNPwMic5enMTAbLgLaDrN
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），11008：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_pYNPwMic5enMTAbLgLaDrN
            source_type: api_record
            title: 中国历代人物传记资料库：王偉（CBDB 67398）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67398&o=json
            external_identifier: CBDB:67398
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.992Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3vv94kaBWa8sUxdLF8B6cN
        status: active
        display_name: 王偉
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王伯靈

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王伯靈，史料所见人物。本项目依据《中国历代人物传记资料库：王伯靈（CBDB 524722）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王伯靈 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_3vv94kaBWa8sUxdLF8B6cN | 王偉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王伯靈（CBDB 524722）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=524722&o=json)
- [中国历代人物传记资料库：王偉（CBDB 67398）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67398&o=json)
