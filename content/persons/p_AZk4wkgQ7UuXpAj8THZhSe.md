---
schema: wang-person/v1
id: p_AZk4wkgQ7UuXpAj8THZhSe
status: active
merged_into: null
display_name: 王靖
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qTmAEuEoCACC4VzCJ2t5TM
        subject_person_id: p_AZk4wkgQ7UuXpAj8THZhSe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王靖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9htqNoL4pnZs94PQ5D8pG1
          claim_id: c_qTmAEuEoCACC4VzCJ2t5TM
          source_id: s_UPXA3cLM7jkbMSu2afxwPY
          stance: supports
          locator: CBDB:1788
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1788）
          source: &a1
            id: s_UPXA3cLM7jkbMSu2afxwPY
            source_type: api_record
            title: 中国历代人物传记资料库：王靖（CBDB 1788）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1788&o=json
            external_identifier: CBDB:1788
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.255Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_oytKPR2hdSsmKhkJPmcBzK
        subject_person_id: p_AZk4wkgQ7UuXpAj8THZhSe
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1036年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PAkC4vELCQFqEzx7r54Xp6
          claim_id: c_oytKPR2hdSsmKhkJPmcBzK
          source_id: s_UPXA3cLM7jkbMSu2afxwPY
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
        id: c_7nkFb357Q9Y2rcMMNGV2XD
        subject_person_id: p_AZk4wkgQ7UuXpAj8THZhSe
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1081年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VeDY3wxzWZYKhFSNUXCVH3
          claim_id: c_7nkFb357Q9Y2rcMMNGV2XD
          source_id: s_UPXA3cLM7jkbMSu2afxwPY
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
        id: c_TYqDLH7EtxNTZdxFVBMsEe
        subject_person_id: p_AZk4wkgQ7UuXpAj8THZhSe
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
        - id: cs_T6q8FFAYTdyu18M8cD3FVL
          claim_id: c_TYqDLH7EtxNTZdxFVBMsEe
          source_id: s_UPXA3cLM7jkbMSu2afxwPY
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
        id: c_cWNPb65u3m0ntD8hkOaOY2
        subject_person_id: p_RLeRV5dpFasTBxgAWhwChj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AZk4wkgQ7UuXpAj8THZhSe
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_U7t1JzIWlq5Zwjw1sRAV87
          claim_id: c_cWNPb65u3m0ntD8hkOaOY2
          source_id: s_UPXA3cLM7jkbMSu2afxwPY
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1039：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_RLeRV5dpFasTBxgAWhwChj
        status: active
        display_name: 王雍
        merged_into_person_id: null
    - claim:
        id: c_E8QYHsjUTUWT1vQmICAh10
        subject_person_id: p_dYvHHiu3FBujjP1HrpE6gG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AZk4wkgQ7UuXpAj8THZhSe
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-foGgJlz_zMOrL6mUJSUR7
          claim_id: c_E8QYHsjUTUWT1vQmICAh10
          source_id: s_UPXA3cLM7jkbMSu2afxwPY
          stance: supports
          locator: CBDB 双向互证（父 王冲 ⇄ 子 王靖）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_dYvHHiu3FBujjP1HrpE6gG
        status: active
        display_name: 王冲
        merged_into_person_id: null
  children:
    - claim:
        id: c_d_QPlaUBt7xOrIX_vUx7oJ
        subject_person_id: p_AZk4wkgQ7UuXpAj8THZhSe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_y6nBpA6HE95vgfY3b666P1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_W_0JvZW0wZsqpp8kM-GLMH
          claim_id: c_d_QPlaUBt7xOrIX_vUx7oJ
          source_id: s_UPXA3cLM7jkbMSu2afxwPY
          stance: supports
          locator: 宋人傳記資料索引(電子版)，588：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_y6nBpA6HE95vgfY3b666P1
        status: active
        display_name: 王古
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王靖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王靖 | accepted |
| birth.date | 1036年 | accepted |
| death.date | 1081年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_RLeRV5dpFasTBxgAWhwChj | 王雍 | accepted |
| parents | p_dYvHHiu3FBujjP1HrpE6gG | 王冲 | accepted |
| children | p_y6nBpA6HE95vgfY3b666P1 | 王古 | accepted |

## 外部来源

- [中国历代人物传记资料库：王靖（CBDB 1788）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1788&o=json)
