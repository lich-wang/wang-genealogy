---
schema: wang-person/v1
id: p_D3ZKwNoKjeEJXSHgQd8CdC
status: active
merged_into: null
display_name: 王守仁
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_72Srk8RpsqaYtnWrdccvkL
        subject_person_id: p_D3ZKwNoKjeEJXSHgQd8CdC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守仁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_C4sGvYvRTbu5WUyGMiBMor
          claim_id: c_72Srk8RpsqaYtnWrdccvkL
          source_id: s_yUmzrSxNNCC7j1D7AdYPLL
          stance: supports
          locator: CBDB:30374
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（30374）
          source: &a1
            id: s_yUmzrSxNNCC7j1D7AdYPLL
            source_type: api_record
            title: 中国历代人物传记资料库：王守仁（CBDB 30374）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30374&o=json
            external_identifier: CBDB:30374
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.028Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_6RCum6J5oscqyw919GLeg6
        subject_person_id: p_D3ZKwNoKjeEJXSHgQd8CdC
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1472年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ztNojQ6TbmHPrHjtssrBDw
          claim_id: c_6RCum6J5oscqyw919GLeg6
          source_id: s_yUmzrSxNNCC7j1D7AdYPLL
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_9eBPyNif7JxU6R7zrXNG56
        subject_person_id: p_D3ZKwNoKjeEJXSHgQd8CdC
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1528年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MA1EwxHnQqmfKAii1o7Fre
          claim_id: c_9eBPyNif7JxU6R7zrXNG56
          source_id: s_yUmzrSxNNCC7j1D7AdYPLL
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jd3Pa9BEiKckuF1sv7fQzk
        subject_person_id: p_D3ZKwNoKjeEJXSHgQd8CdC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6QPbLC7kADicoVBBsWSBar
          claim_id: c_jd3Pa9BEiKckuF1sv7fQzk
          source_id: s_yUmzrSxNNCC7j1D7AdYPLL
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_O4bUXNSKz3yJHfQJACO-wQ
        subject_person_id: p_WAcva2ygM5s1wpkr4svdJW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_D3ZKwNoKjeEJXSHgQd8CdC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YIwmWjmVLmXoG6Oqh0nNjH
          claim_id: c_O4bUXNSKz3yJHfQJACO-wQ
          source_id: s_yUmzrSxNNCC7j1D7AdYPLL
          stance: supports
          locator: CBDB 双向互证（父 王華 ⇄ 子 王守仁）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_WAcva2ygM5s1wpkr4svdJW
        status: active
        display_name: 王華
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_x_POIBBfmbOZwKAbDh5bY5
        subject_person_id: p_vTrNtBUpLMvEjAK6D9b2BG
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_D3ZKwNoKjeEJXSHgQd8CdC
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QOX5F-iYCLIGZPfP0zpoId
          claim_id: c_x_POIBBfmbOZwKAbDh5bY5
          source_id: s_yUmzrSxNNCC7j1D7AdYPLL
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），11920：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_vTrNtBUpLMvEjAK6D9b2BG
        status: active
        display_name: 王天叙
        merged_into_person_id: null
  descendants:
    - claim:
        id: c_T_R8xxlrZPwmPdzR-Fefdg
        subject_person_id: p_D3ZKwNoKjeEJXSHgQd8CdC
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_zgWjAeM1N1EqCXTXQW9HkX
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xFaWjmvCNUvjQM1iLKi03z
          claim_id: c_T_R8xxlrZPwmPdzR-Fefdg
          source_id: s_yUmzrSxNNCC7j1D7AdYPLL
          stance: supports
          locator: 紹興府志:八十卷，Igid=316150：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_zgWjAeM1N1EqCXTXQW9HkX
        status: active
        display_name: 王承勋
        merged_into_person_id: null
    - claim:
        id: c_eLsojTOE0bFNJXQ5KqPzHg
        subject_person_id: p_D3ZKwNoKjeEJXSHgQd8CdC
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_DsQugLMn8y74PZ78X3Ldak
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_udiqjrxKcZ2YYCYj9Feip3
          claim_id: c_eLsojTOE0bFNJXQ5KqPzHg
          source_id: s_yUmzrSxNNCC7j1D7AdYPLL
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），11920：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_DsQugLMn8y74PZ78X3Ldak
        status: active
        display_name: 王承學
        merged_into_person_id: null
    - claim:
        id: c_Ohpu1w3aUcjDOxYJAzuQwV
        subject_person_id: p_D3ZKwNoKjeEJXSHgQd8CdC
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_DHmLm5HngcTLKcAaUV6Q4L
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_l0x0M7hhHPv_LvdrmcrYBS
          claim_id: c_Ohpu1w3aUcjDOxYJAzuQwV
          source_id: s_yUmzrSxNNCC7j1D7AdYPLL
          stance: supports
          locator: 紹興府志:八十卷，Igid=316150：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_DHmLm5HngcTLKcAaUV6Q4L
        status: active
        display_name: 王先进
        merged_into_person_id: null
    - claim:
        id: c_Sjy443atB3yn8M5TQakqSz
        subject_person_id: p_D3ZKwNoKjeEJXSHgQd8CdC
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_XM6mAGcrGG9zdfhaW7wsMr
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aAecKYJVUbbMwVRo2eGg9T
          claim_id: c_Sjy443atB3yn8M5TQakqSz
          source_id: s_yUmzrSxNNCC7j1D7AdYPLL
          stance: supports
          locator: 紹興府志:八十卷，Igid=316150：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_XM6mAGcrGG9zdfhaW7wsMr
        status: active
        display_name: 王先通
        merged_into_person_id: null
    - claim:
        id: c_cHxvSDNfirKexugUgCIn_C
        subject_person_id: p_D3ZKwNoKjeEJXSHgQd8CdC
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_cfbSo699FQEfuoc3FoGXE2
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_K5dvHbEp0qgea2pQj-Ejk1
          claim_id: c_cHxvSDNfirKexugUgCIn_C
          source_id: s_yUmzrSxNNCC7j1D7AdYPLL
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），11920：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_cfbSo699FQEfuoc3FoGXE2
        status: active
        display_name: 王先鋐
        merged_into_person_id: null
    - claim:
        id: c_MwKhylwZ37-noHMx9548uQ
        subject_person_id: p_D3ZKwNoKjeEJXSHgQd8CdC
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Vwh1UfYLcTAoFT9fJr6gFo
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_l_eoScMAFN0kS1GqotFuQm
          claim_id: c_MwKhylwZ37-noHMx9548uQ
          source_id: s_yUmzrSxNNCC7j1D7AdYPLL
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），11920：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Vwh1UfYLcTAoFT9fJr6gFo
        status: active
        display_name: 王先鐸
        merged_into_person_id: null
  other: []
---

# 王守仁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王守仁 | accepted |
| birth.date | 1472年 | accepted |
| death.date | 1528年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_WAcva2ygM5s1wpkr4svdJW | 王華 | accepted |
| ancestors | p_vTrNtBUpLMvEjAK6D9b2BG | 王天叙 | accepted |
| descendants | p_zgWjAeM1N1EqCXTXQW9HkX | 王承勋 | accepted |
| descendants | p_DsQugLMn8y74PZ78X3Ldak | 王承學 | accepted |
| descendants | p_DHmLm5HngcTLKcAaUV6Q4L | 王先进 | accepted |
| descendants | p_XM6mAGcrGG9zdfhaW7wsMr | 王先通 | accepted |
| descendants | p_cfbSo699FQEfuoc3FoGXE2 | 王先鋐 | accepted |
| descendants | p_Vwh1UfYLcTAoFT9fJr6gFo | 王先鐸 | accepted |

## 外部来源

- [中国历代人物传记资料库：王守仁（CBDB 30374）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30374&o=json)
