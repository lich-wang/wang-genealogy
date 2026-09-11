---
schema: wang-person/v1
id: p_PEapMzWnzmpqJJJ13D8WQK
status: active
merged_into: null
display_name: 王誠
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iQ7Ze312kF8sbDosPb9ucN
        subject_person_id: p_PEapMzWnzmpqJJJ13D8WQK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王誠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GfQhBbvxE7DYFxErDmH4MK
          claim_id: c_iQ7Ze312kF8sbDosPb9ucN
          source_id: s_UoX4MEBfM98NMgk1mDetSF
          stance: supports
          locator: CBDB:28103
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（28103）
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bcLP9EpBg77SkfMqsbyMJq
        subject_person_id: p_PEapMzWnzmpqJJJ13D8WQK
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
        - id: cs_CKQWfWVnQCr9TQaCpKRihD
          claim_id: c_bcLP9EpBg77SkfMqsbyMJq
          source_id: s_UoX4MEBfM98NMgk1mDetSF
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
        id: c_hPdURv7QjaqySLKGc2a1sw
        subject_person_id: p_BEHvgFz44Nk9kRSJfRSWD8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PEapMzWnzmpqJJJ13D8WQK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fCgf08uHi_QuMW6XmE42k8
          claim_id: c_hPdURv7QjaqySLKGc2a1sw
          source_id: s_YPugPqGTXFMAiZ1BM5CSmX
          stance: supports
          locator: CBDB 双向互证（子 王誠 ⇄ 父 王寓）
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
  children:
    - claim:
        id: c_fwaHaIgSkFHuzG97A-bzpH
        subject_person_id: p_PEapMzWnzmpqJJJ13D8WQK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kDSCbFbfBMQKBJLyjdUjQ9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3nP3BcxFlSG3v7Zs-YNb5C
          claim_id: c_fwaHaIgSkFHuzG97A-bzpH
          source_id: s_HA4VG2PFdZ8CT75e9Ubn5Y
          stance: supports
          locator: CBDB 双向互证（父 王誠 ⇄ 子 王衛道）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_HA4VG2PFdZ8CT75e9Ubn5Y
            source_type: api_record
            title: 中国历代人物传记资料库：王衛道（CBDB 28102）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28102&o=json
            external_identifier: CBDB:28102
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.960Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_kDSCbFbfBMQKBJLyjdUjQ9
        status: active
        display_name: 王衛道
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
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
        id: c_WHpZD944R6ANxPpjyqpysX
        subject_person_id: p_EWnxKCBQmpHPKtnBGKNGzU
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_PEapMzWnzmpqJJJ13D8WQK
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GGdphp8Mnn0j4YW4f4X6kF
          claim_id: c_WHpZD944R6ANxPpjyqpysX
          source_id: s_aWs39iPTw5vjBgELjpXSeq
          stance: supports
          locator: CBDB 双向互证（孫 王誠 ⇄ 祖父 王濤）
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
          source: *a1
      object_person:
        id: p_WrdABvZJN9cX74q6iDQUDp
        status: active
        display_name: 王喬年
        merged_into_person_id: null
  descendants:
    - claim:
        id: c_V67VGYDengquu9Fq1eqTod
        subject_person_id: p_PEapMzWnzmpqJJJ13D8WQK
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_mp9fqPLVqRaYj9MBorGs2H
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ez3w0FtQUPoeP1hZZDN70T
          claim_id: c_V67VGYDengquu9Fq1eqTod
          source_id: s_uzCPGMUpAMX6b1wjW5hE99
          stance: supports
          locator: CBDB 双向互证（曾祖 王誠 ⇄ 曾孫; 重孫 王炎澤）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_uzCPGMUpAMX6b1wjW5hE99
            source_type: api_record
            title: 中国历代人物传记资料库：王炎澤（CBDB 10724）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10724&o=json
            external_identifier: CBDB:10724
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.562Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_mp9fqPLVqRaYj9MBorGs2H
        status: active
        display_name: 王炎澤
        merged_into_person_id: null
  other: []
---

# 王誠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王誠 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_BEHvgFz44Nk9kRSJfRSWD8 | 王寓 | accepted |
| children | p_kDSCbFbfBMQKBJLyjdUjQ9 | 王衛道 | accepted |
| ancestors | p_77KUt4ppLcUYh3H4mPAVZk | 王悅 | accepted |
| ancestors | p_EWnxKCBQmpHPKtnBGKNGzU | 王濤 | accepted |
| ancestors | p_WrdABvZJN9cX74q6iDQUDp | 王喬年 | accepted |
| descendants | p_mp9fqPLVqRaYj9MBorGs2H | 王炎澤 | accepted |

## 外部来源

- [中国历代人物传记资料库：王誠（CBDB 28103）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28103&o=json)
- [中国历代人物传记资料库：王濤（CBDB 386579）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386579&o=json)
- [中国历代人物传记资料库：王衛道（CBDB 28102）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28102&o=json)
- [中国历代人物传记资料库：王炎澤（CBDB 10724）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10724&o=json)
- [中国历代人物传记资料库：王寓（CBDB 386580）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386580&o=json)
- [中国历代人物传记资料库：王悅（CBDB 437522）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437522&o=json)
