---
schema: wang-person/v1
id: p_WrdABvZJN9cX74q6iDQUDp
status: active
merged_into: null
display_name: 王喬年
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jL32sDPtuXCgJPJLtY4EHQ
        subject_person_id: p_WrdABvZJN9cX74q6iDQUDp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王喬年
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Q26ZkUC6EJWaqDCc1sTcwj
          claim_id: c_jL32sDPtuXCgJPJLtY4EHQ
          source_id: s_ZcNkceeZUsQGbx1TW2ksH7
          stance: supports
          locator: CBDB:386573
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（386573）
          source: &a1
            id: s_ZcNkceeZUsQGbx1TW2ksH7
            source_type: api_record
            title: 中国历代人物传记资料库：王喬年（CBDB 386573）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386573&o=json
            external_identifier: CBDB:386573
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.896Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_R1fLfmdkhGQaD16Az91BCc
        subject_person_id: p_WrdABvZJN9cX74q6iDQUDp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王喬年，宋人物。籍贯義烏。（中国历代人物传记资料库 CBDB 386573）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qBUkH8pA_19PQmazgF_HIE
          claim_id: c_R1fLfmdkhGQaD16Az91BCc
          source_id: s_ZcNkceeZUsQGbx1TW2ksH7
          stance: supports
          locator: CBDB:386573
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
          source:
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
      object_person:
        id: p_77KUt4ppLcUYh3H4mPAVZk
        status: active
        display_name: 王悅
        merged_into_person_id: null
    - claim:
        id: c_c6WTCHXzREXEP15MBv-Ywk
        subject_person_id: p_Dbnj6E8kMUFP6rJiZMSDLw
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
        - id: cs_v13jeSzwl_wlsEzxNFfjMz
          claim_id: c_c6WTCHXzREXEP15MBv-Ywk
          source_id: s_L4DnLA3g6o2C8iwvdjkTk9
          stance: supports
          locator: CBDB 双向互证（子 王喬年 ⇄ 父 王說）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_L4DnLA3g6o2C8iwvdjkTk9
            source_type: api_record
            title: 中国历代人物传记资料库：王說（CBDB 386572）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386572&o=json
            external_identifier: CBDB:386572
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.896Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Dbnj6E8kMUFP6rJiZMSDLw
        status: active
        display_name: 王說
        merged_into_person_id: null
  children:
    - claim:
        id: c_Nv6obi9OLmuARyjfzti3SY
        subject_person_id: p_WrdABvZJN9cX74q6iDQUDp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EWnxKCBQmpHPKtnBGKNGzU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TkACTOyM8nYpZCKJZpI8hc
          claim_id: c_Nv6obi9OLmuARyjfzti3SY
          source_id: s_aWs39iPTw5vjBgELjpXSeq
          stance: supports
          locator: CBDB 双向互证（父 王喬年 ⇄ 子 王濤）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_aWs39iPTw5vjBgELjpXSeq
            source_type: api_record
            title: 中国历代人物传记资料库：王濤（CBDB 386579）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386579&o=json
            external_identifier: CBDB:386579
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.898Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_EWnxKCBQmpHPKtnBGKNGzU
        status: active
        display_name: 王濤
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_iqDe7Fdkzx0JScP0okGeXD
        subject_person_id: p_WrdABvZJN9cX74q6iDQUDp
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_BEHvgFz44Nk9kRSJfRSWD8
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6xn_YhvbfIXUDs12anGkHt
          claim_id: c_iqDe7Fdkzx0JScP0okGeXD
          source_id: s_YPugPqGTXFMAiZ1BM5CSmX
          stance: supports
          locator: CBDB 双向互证（祖父 王喬年 ⇄ 孫 王寓）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_YPugPqGTXFMAiZ1BM5CSmX
            source_type: api_record
            title: 中国历代人物传记资料库：王寓（CBDB 386580）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386580&o=json
            external_identifier: CBDB:386580
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.898Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BEHvgFz44Nk9kRSJfRSWD8
        status: active
        display_name: 王寓
        merged_into_person_id: null
    - claim:
        id: c_ihJFOAd2YZAmuSqnBP0qid
        subject_person_id: p_WrdABvZJN9cX74q6iDQUDp
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_PEapMzWnzmpqJJJ13D8WQK
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_25gmuuhOalXecrvjE19eLD
          claim_id: c_ihJFOAd2YZAmuSqnBP0qid
          source_id: s_UoX4MEBfM98NMgk1mDetSF
          stance: supports
          locator: CBDB 双向互证（曾祖 王喬年 ⇄ 曾孫; 重孫 王誠）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_UoX4MEBfM98NMgk1mDetSF
            source_type: api_record
            title: 中国历代人物传记资料库：王誠（CBDB 28103）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28103&o=json
            external_identifier: CBDB:28103
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.961Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_PEapMzWnzmpqJJJ13D8WQK
        status: active
        display_name: 王誠
        merged_into_person_id: null
  other: []
---

# 王喬年

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王喬年 | accepted |
| bio.summary | 王喬年，宋人物。籍贯義烏。（中国历代人物传记资料库 CBDB 386573） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_77KUt4ppLcUYh3H4mPAVZk | 王悅 | accepted |
| parents | p_Dbnj6E8kMUFP6rJiZMSDLw | 王說 | accepted |
| children | p_EWnxKCBQmpHPKtnBGKNGzU | 王濤 | accepted |
| descendants | p_BEHvgFz44Nk9kRSJfRSWD8 | 王寓 | accepted |
| descendants | p_PEapMzWnzmpqJJJ13D8WQK | 王誠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王誠（CBDB 28103）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28103&o=json)
- [中国历代人物传记资料库：王喬年（CBDB 386573）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386573&o=json)
- [中国历代人物传记资料库：王說（CBDB 386572）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386572&o=json)
- [中国历代人物传记资料库：王濤（CBDB 386579）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386579&o=json)
- [中国历代人物传记资料库：王寓（CBDB 386580）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386580&o=json)
- [中国历代人物传记资料库：王悅（CBDB 437522）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437522&o=json)
