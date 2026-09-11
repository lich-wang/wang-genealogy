---
schema: wang-person/v1
id: p_QZHN7XBFLhdEfKGuEPQEhp
status: active
merged_into: null
display_name: 王贄
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4JxmJ51z3z7eEMVa7oXfJ8
        subject_person_id: p_QZHN7XBFLhdEfKGuEPQEhp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王贄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TuCZ5EFhARQMm2VGc5xvdQ
          claim_id: c_4JxmJ51z3z7eEMVa7oXfJ8
          source_id: s_thn4gMJq6L4yGd4YCKvb7F
          stance: supports
          locator: CBDB:1783
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1783）
          source: &a1
            id: s_thn4gMJq6L4yGd4YCKvb7F
            source_type: api_record
            title: 中国历代人物传记资料库：王贄（CBDB 1783）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1783&o=json
            external_identifier: CBDB:1783
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.247Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4Cp3bqtGKHQHCgxdP45kiR
        subject_person_id: p_QZHN7XBFLhdEfKGuEPQEhp
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
        - id: cs_sPLT3CUdMNkEUEm2Bup7Gd
          claim_id: c_4Cp3bqtGKHQHCgxdP45kiR
          source_id: s_thn4gMJq6L4yGd4YCKvb7F
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
        id: c_-DpoGU5o0BUXS4v_Pj4ckv
        subject_person_id: p_PNfmbNyKR2auC4aeL1AuSM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QZHN7XBFLhdEfKGuEPQEhp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_c9RrnOCy5tQxUkgqd6c_rX
          claim_id: c_-DpoGU5o0BUXS4v_Pj4ckv
          source_id: s_sHRCQq4nQnkKPMFBzoveAB
          stance: supports
          locator: CBDB 双向互证（子 王贄 ⇄ 父 王永）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_sHRCQq4nQnkKPMFBzoveAB
            source_type: api_record
            title: 中国历代人物传记资料库：王永（CBDB 13516）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=13516&o=json
            external_identifier: CBDB:13516
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.624Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_PNfmbNyKR2auC4aeL1AuSM
        status: active
        display_name: 王永
        merged_into_person_id: null
  children:
    - claim:
        id: c_wbVGeKqysj6iR4FWSv9rPt
        subject_person_id: p_QZHN7XBFLhdEfKGuEPQEhp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_egyS5bPtB4BGpQ3ch7iPFq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_97I9WIjQJkLQQZTMVsAVW8
          claim_id: c_wbVGeKqysj6iR4FWSv9rPt
          source_id: s_aWZb1QTCaZLsHnndnPqr6u
          stance: supports
          locator: CBDB 双向互证（父 王贄 ⇄ 子 王罕）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_aWZb1QTCaZLsHnndnPqr6u
            source_type: api_record
            title: 中国历代人物传记资料库：王罕（CBDB 1810）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1810&o=json
            external_identifier: CBDB:1810
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.271Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_egyS5bPtB4BGpQ3ch7iPFq
        status: active
        display_name: 王罕
        merged_into_person_id: null
    - claim:
        id: c_UITUD_ZjnZqdKqm9JjBgYY
        subject_person_id: p_QZHN7XBFLhdEfKGuEPQEhp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qtbxt55gw7F1hTWtEuCisP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__mAZB2tWuAQHdyF0znmTHn
          claim_id: c_UITUD_ZjnZqdKqm9JjBgYY
          source_id: s_VXQwondBEJA6cahGcFikd7
          stance: supports
          locator: CBDB 双向互证（父 王贄 ⇄ 子 王準）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_VXQwondBEJA6cahGcFikd7
            source_type: api_record
            title: 中国历代人物传记资料库：王準（CBDB 13515）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=13515&o=json
            external_identifier: CBDB:13515
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.623Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_qtbxt55gw7F1hTWtEuCisP
        status: active
        display_name: 王準
        merged_into_person_id: null
    - claim:
        id: c_GdvYkzUBNVI8sIpyOXdXxU
        subject_person_id: p_QZHN7XBFLhdEfKGuEPQEhp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_St4Eey4EGBhVg2zh8anpZT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_34I_cTJHJ5aJcUqlyRNqJB
          claim_id: c_GdvYkzUBNVI8sIpyOXdXxU
          source_id: s_thn4gMJq6L4yGd4YCKvb7F
          stance: supports
          locator: CBDB 双向互证（子 王覃 ⇄ 父 王贄）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_St4Eey4EGBhVg2zh8anpZT
        status: active
        display_name: 王覃
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_9SwXgtenu6Mvap8NOsJfd_
        subject_person_id: p_QZHN7XBFLhdEfKGuEPQEhp
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_QjasEDi9wDntJbhQ9Bbkdz
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZtAhTNoSm7hY-9UWW3BTdV
          claim_id: c_9SwXgtenu6Mvap8NOsJfd_
          source_id: s_BodoIWfUDr61om4Hax06WL
          stance: supports
          locator: 宋人傳記資料索引(電子版)，835：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_BodoIWfUDr61om4Hax06WL
            source_type: api_record
            title: 中国历代人物传记资料库：丘氏(王贄妻)（CBDB 37979）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37979&o=json
            external_identifier: CBDB:37979
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_QjasEDi9wDntJbhQ9Bbkdz
        status: active
        display_name: 丘氏
        merged_into_person_id: null
  ancestors: []
  descendants:
    - claim:
        id: c_VJvR67JW1O8oaqR1Qo6b_h
        subject_person_id: p_QZHN7XBFLhdEfKGuEPQEhp
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_KzB2C1aLBuDGmUVnrc9So3
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0Sbohii06Ep3i4o91u53UL
          claim_id: c_VJvR67JW1O8oaqR1Qo6b_h
          source_id: s_FNLuB5DJx6UNnRbHaEHKpA
          stance: supports
          locator: 宋人傳記資料索引(電子版)，833;834：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_FNLuB5DJx6UNnRbHaEHKpA
            source_type: api_record
            title: 中国历代人物传记资料库：王珪（CBDB 1845）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1845&o=json
            external_identifier: CBDB:1845
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.331Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_KzB2C1aLBuDGmUVnrc9So3
        status: active
        display_name: 王珪
        merged_into_person_id: null
  other: []
---

# 王贄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王贄 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_PNfmbNyKR2auC4aeL1AuSM | 王永 | accepted |
| children | p_egyS5bPtB4BGpQ3ch7iPFq | 王罕 | accepted |
| children | p_qtbxt55gw7F1hTWtEuCisP | 王準 | accepted |
| children | p_St4Eey4EGBhVg2zh8anpZT | 王覃 | accepted |
| spouses | p_QjasEDi9wDntJbhQ9Bbkdz | 丘氏 | accepted |
| descendants | p_KzB2C1aLBuDGmUVnrc9So3 | 王珪 | accepted |

## 外部来源

- [中国历代人物传记资料库：丘氏(王贄妻)（CBDB 37979）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37979&o=json)
- [中国历代人物传记资料库：王珪（CBDB 1845）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1845&o=json)
- [中国历代人物传记资料库：王罕（CBDB 1810）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1810&o=json)
- [中国历代人物传记资料库：王永（CBDB 13516）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=13516&o=json)
- [中国历代人物传记资料库：王贄（CBDB 1783）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1783&o=json)
- [中国历代人物传记资料库：王準（CBDB 13515）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=13515&o=json)
