---
schema: wang-person/v1
id: p_1n6udeiAV3WPwXHR7TEH2x
status: active
merged_into: null
display_name: 王䪧
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HaYWWKc888K3SncBAvh7FQ
        subject_person_id: p_1n6udeiAV3WPwXHR7TEH2x
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王䪧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_h2rA7YBv899m7TyHpzb9Wp
          claim_id: c_HaYWWKc888K3SncBAvh7FQ
          source_id: s_Q4ezfLAD2UeFESzhkorC29
          stance: supports
          locator: CBDB:526002
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（526002）
          source: &a1
            id: s_Q4ezfLAD2UeFESzhkorC29
            source_type: api_record
            title: 中国历代人物传记资料库：王䪧（CBDB 526002）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526002&o=json
            external_identifier: CBDB:526002
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.331Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nMx7sGx6psW4fnPpvjknr8
        subject_person_id: p_1n6udeiAV3WPwXHR7TEH2x
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王䪧，史料所见人物。本项目依据《中国历代人物传记资料库：王䪧（CBDB 526002）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_43HZUZfTdpH_e6fRJQPgm9
          claim_id: c_nMx7sGx6psW4fnPpvjknr8
          source_id: s_Q4ezfLAD2UeFESzhkorC29
          stance: supports
          locator: CBDB:526002
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
  descendants:
    - claim:
        id: c_K93cTOCL3KdppoTH9qtYon
        subject_person_id: p_1n6udeiAV3WPwXHR7TEH2x
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_PuUiGdtpzWdsK7wcEt3S7p
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_U5yDIQN_bLMGf-d8C8oC6K
          claim_id: c_K93cTOCL3KdppoTH9qtYon
          source_id: s_Q4ezfLAD2UeFESzhkorC29
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），11918：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_PuUiGdtpzWdsK7wcEt3S7p
        status: active
        display_name: 王以旂
        merged_into_person_id: null
  other: []
---

# 王䪧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王䪧 | accepted |
| bio.summary | 王䪧，史料所见人物。本项目依据《中国历代人物传记资料库：王䪧（CBDB 526002）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_PuUiGdtpzWdsK7wcEt3S7p | 王以旂 | accepted |

## 外部来源

- [中国历代人物传记资料库：王䪧（CBDB 526002）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526002&o=json)
