---
schema: wang-person/v1
id: p_77KUt4ppLcUYh3H4mPAVZk
status: active
merged_into: null
display_name: 王悅
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ctuEB81dminc23Uq3HSdvE
        subject_person_id: p_77KUt4ppLcUYh3H4mPAVZk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王悅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_r1Rq5bQk9WSZ45Efq1Tugr
          claim_id: c_ctuEB81dminc23Uq3HSdvE
          source_id: s_5VTGNfEy8REeuKx7zm9KHZ
          stance: supports
          locator: CBDB:437522
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（437522）
          source: &a1
            id: s_5VTGNfEy8REeuKx7zm9KHZ
            source_type: api_record
            title: 中国历代人物传记资料库：王悅（CBDB 437522）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437522&o=json
            external_identifier: CBDB:437522
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.044Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EVVjTcAFTsCSJhu4Uy6GvA
        subject_person_id: p_77KUt4ppLcUYh3H4mPAVZk
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
        - id: cs_ag5bhuHxX1VvAWs4M8dh2L
          claim_id: c_EVVjTcAFTsCSJhu4Uy6GvA
          source_id: s_5VTGNfEy8REeuKx7zm9KHZ
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
        id: c_M8YoR7MRLNQPthhHUsRH6N
        subject_person_id: p_77KUt4ppLcUYh3H4mPAVZk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WrdABvZJN9cX74q6iDQUDp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wafaFEJmOq6b3VygB2ZJbA
          claim_id: c_M8YoR7MRLNQPthhHUsRH6N
          source_id: s_5VTGNfEy8REeuKx7zm9KHZ
          stance: supports
          locator: CBDB 双向互证（子 王喬年 ⇄ 父 王悅）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_WrdABvZJN9cX74q6iDQUDp
        status: active
        display_name: 王喬年
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_42oIxqBpg2FgHweFIrGy-5
        subject_person_id: p_77KUt4ppLcUYh3H4mPAVZk
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_uj5CLmvfB4euhULD7fRHEY
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1TszWjwd_qjhu2_ZFoHW4C
          claim_id: c_42oIxqBpg2FgHweFIrGy-5
          source_id: s_5VTGNfEy8REeuKx7zm9KHZ
          stance: supports
          locator: CBDB 双向互证（曾孫; 重孫 王寅 ⇄ 曾祖 王悅）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_uj5CLmvfB4euhULD7fRHEY
        status: active
        display_name: 王寅
        merged_into_person_id: null
    - claim:
        id: c_Bd4B7KaCFMebb1Q7f_XVVn
        subject_person_id: p_77KUt4ppLcUYh3H4mPAVZk
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_BEHvgFz44Nk9kRSJfRSWD8
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7qnq3LNWwijMgw8OfAkioY
          claim_id: c_Bd4B7KaCFMebb1Q7f_XVVn
          source_id: s_5VTGNfEy8REeuKx7zm9KHZ
          stance: supports
          locator: CBDB 双向互证（曾孫; 重孫 王寓 ⇄ 曾祖 王悅）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_BEHvgFz44Nk9kRSJfRSWD8
        status: active
        display_name: 王寓
        merged_into_person_id: null
    - claim:
        id: c_OHOhoEHHnmJamNKJbMyN6L
        subject_person_id: p_77KUt4ppLcUYh3H4mPAVZk
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_PEapMzWnzmpqJJJ13D8WQK
        generation_count: 4
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_grURjh0SHzpXeoBAmDqPS-
          claim_id: c_OHOhoEHHnmJamNKJbMyN6L
          source_id: s_5VTGNfEy8REeuKx7zm9KHZ
          stance: supports
          locator: CBDB 双向互证（玄孫;四世孫 王誠 ⇄ 高祖;四世祖 王悅）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_PEapMzWnzmpqJJJ13D8WQK
        status: active
        display_name: 王誠
        merged_into_person_id: null
  other: []
---

# 王悅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王悅 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_WrdABvZJN9cX74q6iDQUDp | 王喬年 | accepted |
| descendants | p_uj5CLmvfB4euhULD7fRHEY | 王寅 | accepted |
| descendants | p_BEHvgFz44Nk9kRSJfRSWD8 | 王寓 | accepted |
| descendants | p_PEapMzWnzmpqJJJ13D8WQK | 王誠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王悅（CBDB 437522）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437522&o=json)
