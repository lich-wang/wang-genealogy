---
schema: wang-person/v1
id: p_afPNNs5ZnKkGi8uzmbG1Wn
status: active
merged_into: null
display_name: 王昊
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JbyKgaPQy9H2KRdCGfFapg
        subject_person_id: p_afPNNs5ZnKkGi8uzmbG1Wn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TrPekG3KBMXnbi4RH77GEJ
          claim_id: c_JbyKgaPQy9H2KRdCGfFapg
          source_id: s_rTuc5S99rm8FC13m7vE1Te
          stance: supports
          locator: CBDB:69262
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69262）
          source: &a1
            id: s_rTuc5S99rm8FC13m7vE1Te
            source_type: api_record
            title: 中国历代人物传记资料库：王昊（CBDB 69262）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69262&o=json
            external_identifier: CBDB:69262
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.184Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_49rogBQ2hWbRiiRjJm7vzJ
        subject_person_id: p_afPNNs5ZnKkGi8uzmbG1Wn
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1627年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JJPTu7s6Fp4FUVKjCCZp9F
          claim_id: c_49rogBQ2hWbRiiRjJm7vzJ
          source_id: s_rTuc5S99rm8FC13m7vE1Te
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
        id: c_3FUBQdFce42xHT7wCDHU9d
        subject_person_id: p_afPNNs5ZnKkGi8uzmbG1Wn
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1679年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pkuE1P1W3E5nSCCDvsaeRL
          claim_id: c_3FUBQdFce42xHT7wCDHU9d
          source_id: s_rTuc5S99rm8FC13m7vE1Te
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
        id: c_DQeJo2wxzpPQju9vb7pPj4
        subject_person_id: p_afPNNs5ZnKkGi8uzmbG1Wn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_95odoEHKqmw8NTdCDmXY1c
          claim_id: c_DQeJo2wxzpPQju9vb7pPj4
          source_id: s_rTuc5S99rm8FC13m7vE1Te
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
        id: c_MMO-88u-3ZKJ76e0ArEi5K
        subject_person_id: p_4EGWjzekM8nQB2yr2oCRfT
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_afPNNs5ZnKkGi8uzmbG1Wn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UgPP2EaysYCxjBiDpuZRh1
          claim_id: c_MMO-88u-3ZKJ76e0ArEi5K
          source_id: s_rTuc5S99rm8FC13m7vE1Te
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），12963：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_4EGWjzekM8nQB2yr2oCRfT
        status: active
        display_name: 王瑞璋
        merged_into_person_id: null
  children:
    - claim:
        id: c_S-LG8K3dFptbxc8kccpRR3
        subject_person_id: p_afPNNs5ZnKkGi8uzmbG1Wn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DG3H98EJP8qJYYC1Uxccn4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nOwxcRx9gUeKQmxyb-zXUD
          claim_id: c_S-LG8K3dFptbxc8kccpRR3
          source_id: s_rTuc5S99rm8FC13m7vE1Te
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），12963：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_DG3H98EJP8qJYYC1Uxccn4
        status: active
        display_name: 王之洵
        merged_into_person_id: null
    - claim:
        id: c_iGBG7vpaGmSvYql8KHWlLm
        subject_person_id: p_afPNNs5ZnKkGi8uzmbG1Wn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nXwiWePzD9b9ELo6fkm6tA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5W103l9A-LL_NzO3QrxN06
          claim_id: c_iGBG7vpaGmSvYql8KHWlLm
          source_id: s_rTuc5S99rm8FC13m7vE1Te
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），12963：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_nXwiWePzD9b9ELo6fkm6tA
        status: active
        display_name: 王之淹
        merged_into_person_id: null
    - claim:
        id: c_F_7hgsBZhGb71kTjizHObg
        subject_person_id: p_afPNNs5ZnKkGi8uzmbG1Wn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YcWVwYBVSNnfzDWCxdbhRy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dHJ6FpuAhBgcUb9ftaVXZI
          claim_id: c_F_7hgsBZhGb71kTjizHObg
          source_id: s_rTuc5S99rm8FC13m7vE1Te
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），12963：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_YcWVwYBVSNnfzDWCxdbhRy
        status: active
        display_name: 王之滉
        merged_into_person_id: null
    - claim:
        id: c_QDnve82u7oqZhoLb4Yw0uC
        subject_person_id: p_afPNNs5ZnKkGi8uzmbG1Wn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xeVszPdDffxmhQLEDAu8i3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pLMU8NRg6GnGTAsjDQ5XXK
          claim_id: c_QDnve82u7oqZhoLb4Yw0uC
          source_id: s_rTuc5S99rm8FC13m7vE1Te
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），12963：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_xeVszPdDffxmhQLEDAu8i3
        status: active
        display_name: 王之濤
        merged_into_person_id: null
    - claim:
        id: c_C3H9QVCNgUqp7HfVqPBi1E
        subject_person_id: p_afPNNs5ZnKkGi8uzmbG1Wn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YzvPimY1PapXuY35NTAFfY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Hbw1gC5mUOpPiQskWvq80h
          claim_id: c_C3H9QVCNgUqp7HfVqPBi1E
          source_id: s_rTuc5S99rm8FC13m7vE1Te
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），12963：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_YzvPimY1PapXuY35NTAFfY
        status: active
        display_name: 王緝修
        merged_into_person_id: null
    - claim:
        id: c_uQ1vWsGNJ09IQykGyyiMmk
        subject_person_id: p_afPNNs5ZnKkGi8uzmbG1Wn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FcM28MPKKrydnE5jZgbivJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gAsTq3bBVJJH79S8HZHLN-
          claim_id: c_uQ1vWsGNJ09IQykGyyiMmk
          source_id: s_rTuc5S99rm8FC13m7vE1Te
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），12963：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_FcM28MPKKrydnE5jZgbivJ
        status: active
        display_name: 王繹高
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_2hrm3NZnZqBVehy49o_TVl
        subject_person_id: p_mJRaNEZHwcBgFbPh9cRtuK
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_afPNNs5ZnKkGi8uzmbG1Wn
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IwQ3xy2uiQhA_JHbxiXsGR
          claim_id: c_2hrm3NZnZqBVehy49o_TVl
          source_id: s_rTuc5S99rm8FC13m7vE1Te
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），12963：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_mJRaNEZHwcBgFbPh9cRtuK
        status: active
        display_name: 王士駰
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王昊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昊 | accepted |
| birth.date | 1627年 | accepted |
| death.date | 1679年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_4EGWjzekM8nQB2yr2oCRfT | 王瑞璋 | accepted |
| children | p_DG3H98EJP8qJYYC1Uxccn4 | 王之洵 | accepted |
| children | p_nXwiWePzD9b9ELo6fkm6tA | 王之淹 | accepted |
| children | p_YcWVwYBVSNnfzDWCxdbhRy | 王之滉 | accepted |
| children | p_xeVszPdDffxmhQLEDAu8i3 | 王之濤 | accepted |
| children | p_YzvPimY1PapXuY35NTAFfY | 王緝修 | accepted |
| children | p_FcM28MPKKrydnE5jZgbivJ | 王繹高 | accepted |
| ancestors | p_mJRaNEZHwcBgFbPh9cRtuK | 王士駰 | accepted |

## 外部来源

- [中国历代人物传记资料库：王昊（CBDB 69262）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69262&o=json)
