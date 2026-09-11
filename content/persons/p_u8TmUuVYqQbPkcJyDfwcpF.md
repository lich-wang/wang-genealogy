---
schema: wang-person/v1
id: p_u8TmUuVYqQbPkcJyDfwcpF
status: active
merged_into: null
display_name: 林冷冷
revision: 1
cbdb_id: 522393
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ohe-EbWkukI6rJR2yrUEYf
        subject_person_id: p_u8TmUuVYqQbPkcJyDfwcpF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 林冷冷，史料所见人物。本项目依据《中国历代人物传记资料库：林冷冷（CBDB 522393）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lQWTlpERrtrFxh47TkwHQE
          claim_id: c_ohe-EbWkukI6rJR2yrUEYf
          source_id: s_tRfS_CqJ5t7qwX8bBJpmhE
          stance: supports
          locator: CBDB:522393
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_tRfS_CqJ5t7qwX8bBJpmhE
            source_type: api_record
            title: 中国历代人物传记资料库：林冷冷（CBDB 522393）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=522393&o=json
            external_identifier: CBDB:522393
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_uJlO_3Pqs-DrvdMdSfvKff
        subject_person_id: p_u8TmUuVYqQbPkcJyDfwcpF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 林冷冷
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eBWhb1CI4d8Vjmsp1wK0w-
          claim_id: c_uJlO_3Pqs-DrvdMdSfvKff
          source_id: s_tRfS_CqJ5t7qwX8bBJpmhE
          stance: supports
          locator: CBDB:522393
          quotation: null
          interpretation_note: CBDB 明确记录的王韜配偶
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
        id: c_GsUgrZbwtDi2GIRhTw4xVw
        subject_person_id: p_pWNx3zDCMERFh1vNM5CjyZ
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_u8TmUuVYqQbPkcJyDfwcpF
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TYTLFgyseN40slH_szudgc
          claim_id: c_GsUgrZbwtDi2GIRhTw4xVw
          source_id: s_tRfS_CqJ5t7qwX8bBJpmhE
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），9296：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_pWNx3zDCMERFh1vNM5CjyZ
        status: active
        display_name: 王韜
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 林冷冷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 林冷冷，史料所见人物。本项目依据《中国历代人物传记资料库：林冷冷（CBDB 522393）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 林冷冷 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_pWNx3zDCMERFh1vNM5CjyZ | 王韜 | accepted |

## 外部来源

- [中国历代人物传记资料库：林冷冷（CBDB 522393）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=522393&o=json)
