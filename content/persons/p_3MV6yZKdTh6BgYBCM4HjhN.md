---
schema: wang-person/v1
id: p_3MV6yZKdTh6BgYBCM4HjhN
status: active
merged_into: null
display_name: 王逢
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Tx9fK8mQ1kHjB334kMEWs4
        subject_person_id: p_3MV6yZKdTh6BgYBCM4HjhN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王逢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PFLjD9HggM65tGEkHNH5Kw
          claim_id: c_Tx9fK8mQ1kHjB334kMEWs4
          source_id: s_9b17asnDsANoTCQAPz6hZT
          stance: supports
          locator: CBDB:175948
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175948）
          source: &a1
            id: s_9b17asnDsANoTCQAPz6hZT
            source_type: api_record
            title: 中国历代人物传记资料库：王逢（CBDB 175948）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175948&o=json
            external_identifier: CBDB:175948
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.214Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_EBH4aSwPQ3nLH58nXbsX63
        subject_person_id: p_3MV6yZKdTh6BgYBCM4HjhN
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 821年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bXccLfPoU34v5hXUQPY2Xv
          claim_id: c_EBH4aSwPQ3nLH58nXbsX63
          source_id: s_9b17asnDsANoTCQAPz6hZT
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
        id: c_TVvTPP5qsY4nBPKqgeCnoM
        subject_person_id: p_3MV6yZKdTh6BgYBCM4HjhN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UzxZNjZCeEBJfwMGD8Evsi
          claim_id: c_TVvTPP5qsY4nBPKqgeCnoM
          source_id: s_9b17asnDsANoTCQAPz6hZT
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
        id: c_UdE3sl7wvh2EexO7E4MeWM
        subject_person_id: p_kY6pJ3GE5CREHzY1UejctY
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3MV6yZKdTh6BgYBCM4HjhN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_66jUqv3pUv753Ua8K_3ET3
          claim_id: c_UdE3sl7wvh2EexO7E4MeWM
          source_id: s_9b17asnDsANoTCQAPz6hZT
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_kY6pJ3GE5CREHzY1UejctY
        status: active
        display_name: 王定
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王逢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王逢 | accepted |
| death.date | 821年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_kY6pJ3GE5CREHzY1UejctY | 王定 | accepted |

## 外部来源

- [中国历代人物传记资料库：王逢（CBDB 175948）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175948&o=json)
