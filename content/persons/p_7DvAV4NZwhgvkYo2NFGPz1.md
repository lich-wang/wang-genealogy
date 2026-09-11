---
schema: wang-person/v1
id: p_7DvAV4NZwhgvkYo2NFGPz1
status: active
merged_into: null
display_name: 王謨
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AkVXtz4LoAqqD3H9JT7AVb
        subject_person_id: p_7DvAV4NZwhgvkYo2NFGPz1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王謨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CCHMDJ895nkhb51nyfEiN4
          claim_id: c_AkVXtz4LoAqqD3H9JT7AVb
          source_id: s_iVWHgoCbJ36o6UkwJ3F9kL
          stance: supports
          locator: CBDB:684537
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（684537）
          source: &a1
            id: s_iVWHgoCbJ36o6UkwJ3F9kL
            source_type: api_record
            title: 中国历代人物传记资料库：王謨（CBDB 684537）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=684537&o=json
            external_identifier: CBDB:684537
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.307Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_V6dU2qMjcUZ9N9kjVLi9Wj
        subject_person_id: p_7DvAV4NZwhgvkYo2NFGPz1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王謨，清人物。籍贯歙縣，身份为行醫，入仕邑庠生。（中国历代人物传记资料库 CBDB 684537）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_f4gJppwpm93xIL9jJRQ1Bp
          claim_id: c_V6dU2qMjcUZ9N9kjVLi9Wj
          source_id: s_iVWHgoCbJ36o6UkwJ3F9kL
          stance: supports
          locator: CBDB:684537
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_W4Zo10xtlTh9rliu8P0l93
        subject_person_id: p_GbYj3F7dkvznndKuLNKMtn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7DvAV4NZwhgvkYo2NFGPz1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4MOoN_AsY2JWcIp6dSpPTG
          claim_id: c_W4Zo10xtlTh9rliu8P0l93
          source_id: s_iVWHgoCbJ36o6UkwJ3F9kL
          stance: supports
          locator: "民國歙縣志: 十六卷，lgid=1163962：父"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_GbYj3F7dkvznndKuLNKMtn
        status: active
        display_name: 王士恕
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_NlPeDV1Om2zi0Q3OSlxMSr
        subject_person_id: p_iM1B1oYqK2XseAuiGpcZ7v
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_7DvAV4NZwhgvkYo2NFGPz1
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__0_nFrm69eys1rXCvG2wJr
          claim_id: c_NlPeDV1Om2zi0Q3OSlxMSr
          source_id: s_iVWHgoCbJ36o6UkwJ3F9kL
          stance: supports
          locator: "民國歙縣志: 十六卷，lgid=1163962：祖父"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_iM1B1oYqK2XseAuiGpcZ7v
        status: active
        display_name: 王學健
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王謨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王謨 | accepted |
| bio.summary | 王謨，清人物。籍贯歙縣，身份为行醫，入仕邑庠生。（中国历代人物传记资料库 CBDB 684537） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_GbYj3F7dkvznndKuLNKMtn | 王士恕 | accepted |
| ancestors | p_iM1B1oYqK2XseAuiGpcZ7v | 王學健 | accepted |

## 外部来源

- [中国历代人物传记资料库：王謨（CBDB 684537）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=684537&o=json)
