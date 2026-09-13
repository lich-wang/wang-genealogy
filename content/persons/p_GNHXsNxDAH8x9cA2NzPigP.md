---
schema: wang-person/v1
id: p_GNHXsNxDAH8x9cA2NzPigP
status: active
merged_into: null
display_name: 王言
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KBLzwm7MERud88i81H6q7w
        subject_person_id: p_GNHXsNxDAH8x9cA2NzPigP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王言
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5GFTmreSuDvQ3ZYDzFoYRJ
          claim_id: c_KBLzwm7MERud88i81H6q7w
          source_id: s_GLF3W15r49867jAKaPcYZP
          stance: supports
          locator: CBDB:17837
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（17837）
          source: &a1
            id: s_GLF3W15r49867jAKaPcYZP
            source_type: api_record
            title: 中国历代人物传记资料库：王言（CBDB 17837）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17837&o=json
            external_identifier: CBDB:17837
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.683Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PpH1GsqQHF1TVAhUcZTC3u
        subject_person_id: p_GNHXsNxDAH8x9cA2NzPigP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王言，五代人物。籍贯莘縣。（中国历代人物传记资料库 CBDB 17837）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_o-rJmarNwYX4a3slEg280e
          claim_id: c_PpH1GsqQHF1TVAhUcZTC3u
          source_id: s_GLF3W15r49867jAKaPcYZP
          stance: supports
          locator: CBDB:17837
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
        id: c_KpUuWp9iAbJHUo2lVIWakf
        subject_person_id: p_GNHXsNxDAH8x9cA2NzPigP
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_wEqsogkdLBrdte1KEpUFVQ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KK3BGAMVOE2hxJEcJcwogc
          claim_id: c_KpUuWp9iAbJHUo2lVIWakf
          source_id: s_GLF3W15r49867jAKaPcYZP
          stance: supports
          locator: 宋史：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_wEqsogkdLBrdte1KEpUFVQ
        status: active
        display_name: 王祐
        merged_into_person_id: null
    - claim:
        id: c_06XTxGZADEIYx3xipToNuJ
        subject_person_id: p_GNHXsNxDAH8x9cA2NzPigP
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_dzQsozLMz4kdNcHPqJVsZP
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ciT7FA1gvBsTGTXrQVaOu4
          claim_id: c_06XTxGZADEIYx3xipToNuJ
          source_id: s_GLF3W15r49867jAKaPcYZP
          stance: supports
          locator: 宋史：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_dzQsozLMz4kdNcHPqJVsZP
        status: active
        display_name: 王旦
        merged_into_person_id: null
  other: []
---

# 王言

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王言 | accepted |
| bio.summary | 王言，五代人物。籍贯莘縣。（中国历代人物传记资料库 CBDB 17837） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_wEqsogkdLBrdte1KEpUFVQ | 王祐 | accepted |
| descendants | p_dzQsozLMz4kdNcHPqJVsZP | 王旦 | accepted |

## 外部来源

- [中国历代人物传记资料库：王言（CBDB 17837）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17837&o=json)
