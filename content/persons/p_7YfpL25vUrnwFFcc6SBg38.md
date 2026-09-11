---
schema: wang-person/v1
id: p_7YfpL25vUrnwFFcc6SBg38
status: active
merged_into: null
display_name: 王博文
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uUH4ymcomCMdmeotTJUQWs
        subject_person_id: p_7YfpL25vUrnwFFcc6SBg38
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王博文
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7f43vapBhWvv61jz8j2gR9
          claim_id: c_uUH4ymcomCMdmeotTJUQWs
          source_id: s_mQaAmDqENzDB2HX8BBBFyG
          stance: supports
          locator: CBDB:1860
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1860）
          source: &a1
            id: s_mQaAmDqENzDB2HX8BBBFyG
            source_type: api_record
            title: 中国历代人物传记资料库：王博文（CBDB 1860）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1860&o=json
            external_identifier: CBDB:1860
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.351Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_BdiaD3PM2HxSJVxPA3hUk3
        subject_person_id: p_7YfpL25vUrnwFFcc6SBg38
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 973年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nW5SvD4GGjRiJ8yQvRh5r8
          claim_id: c_BdiaD3PM2HxSJVxPA3hUk3
          source_id: s_mQaAmDqENzDB2HX8BBBFyG
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
        id: c_ungw9HtYBiASbNF7E2CraD
        subject_person_id: p_7YfpL25vUrnwFFcc6SBg38
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1038年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6bZ2JRw32s56iXcwe1K5eU
          claim_id: c_ungw9HtYBiASbNF7E2CraD
          source_id: s_mQaAmDqENzDB2HX8BBBFyG
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
        id: c_VZ2faPXijHykr8dW4vVLDv
        subject_person_id: p_7YfpL25vUrnwFFcc6SBg38
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NZBYFvYJQ9SSmycyoEYxBd
          claim_id: c_VZ2faPXijHykr8dW4vVLDv
          source_id: s_mQaAmDqENzDB2HX8BBBFyG
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_N3MF_Gyg3RbyL1IFHvNCum
        subject_person_id: p_7YfpL25vUrnwFFcc6SBg38
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wUNvBF992YR7ZyCR3eJPF1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5FUyvf6g1-5apS1_UIASXg
          claim_id: c_N3MF_Gyg3RbyL1IFHvNCum
          source_id: s_mQaAmDqENzDB2HX8BBBFyG
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1285：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_wUNvBF992YR7ZyCR3eJPF1
        status: active
        display_name: 王疇
        merged_into_person_id: null
    - claim:
        id: c_RWPBOlcKYMFycHiXGQfNW2
        subject_person_id: p_7YfpL25vUrnwFFcc6SBg38
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VxVTJzv3gG8BG6P5j5b6D3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bHa2X7UFGeBcVbK4O2VYk9
          claim_id: c_RWPBOlcKYMFycHiXGQfNW2
          source_id: s_mQaAmDqENzDB2HX8BBBFyG
          stance: supports
          locator: 宋人傳記資料索引(電子版)，594：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_VxVTJzv3gG8BG6P5j5b6D3
        status: active
        display_name: 王田
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_iFChAq7dWD230qPDhZu-XA
        subject_person_id: p_wEqsogkdLBrdte1KEpUFVQ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_7YfpL25vUrnwFFcc6SBg38
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RwHfJ6tcHwpQIfAXNJfllY
          claim_id: c_iFChAq7dWD230qPDhZu-XA
          source_id: s_mQaAmDqENzDB2HX8BBBFyG
          stance: supports
          locator: 宋史：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_wEqsogkdLBrdte1KEpUFVQ
        status: active
        display_name: 王祐
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王博文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王博文 | accepted |
| birth.date | 973年 | accepted |
| death.date | 1038年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_wUNvBF992YR7ZyCR3eJPF1 | 王疇 | accepted |
| children | p_VxVTJzv3gG8BG6P5j5b6D3 | 王田 | accepted |
| ancestors | p_wEqsogkdLBrdte1KEpUFVQ | 王祐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王博文（CBDB 1860）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1860&o=json)
