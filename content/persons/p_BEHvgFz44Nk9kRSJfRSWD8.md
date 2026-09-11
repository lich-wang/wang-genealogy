---
schema: wang-person/v1
id: p_BEHvgFz44Nk9kRSJfRSWD8
status: active
merged_into: null
display_name: 王寓
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EUABecu2qDHjZQJtXqWRSL
        subject_person_id: p_BEHvgFz44Nk9kRSJfRSWD8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DV22oJ3Y7HKZDdW8ugZNNV
          claim_id: c_EUABecu2qDHjZQJtXqWRSL
          source_id: s_YPugPqGTXFMAiZ1BM5CSmX
          stance: supports
          locator: CBDB:386580
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（386580）
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RGGPfY77AGBpbj4LKz5RY6
        subject_person_id: p_BEHvgFz44Nk9kRSJfRSWD8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寓，宋人物。籍贯義烏，曾任提舉、轉運司幹辦公事。（中国历代人物传记资料库 CBDB 386580）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4HwsjQyh9Rf0PFQPtWvcRg
          claim_id: c_RGGPfY77AGBpbj4LKz5RY6
          source_id: s_YPugPqGTXFMAiZ1BM5CSmX
          stance: supports
          locator: CBDB:386580
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_QDWDcFfpqrfa-ktgstrSWK
        subject_person_id: p_EWnxKCBQmpHPKtnBGKNGzU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BEHvgFz44Nk9kRSJfRSWD8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GpvrevcgPL95TBdq42_Uvh
          claim_id: c_QDWDcFfpqrfa-ktgstrSWK
          source_id: s_YPugPqGTXFMAiZ1BM5CSmX
          stance: supports
          locator: CBDB 双向互证（父 王濤 ⇄ 子 王寓）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_EWnxKCBQmpHPKtnBGKNGzU
        status: active
        display_name: 王濤
        merged_into_person_id: null
  children:
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
          source: *a1
      object_person:
        id: p_PEapMzWnzmpqJJJ13D8WQK
        status: active
        display_name: 王誠
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
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
          source: *a1
      object_person:
        id: p_WrdABvZJN9cX74q6iDQUDp
        status: active
        display_name: 王喬年
        merged_into_person_id: null
  descendants:
    - claim:
        id: c__j8EVZa5XUGlq_bMHy3LHg
        subject_person_id: p_BEHvgFz44Nk9kRSJfRSWD8
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_mp9fqPLVqRaYj9MBorGs2H
        generation_count: 4
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xBd9X_1x3iOO11NXPDGUJC
          claim_id: c__j8EVZa5XUGlq_bMHy3LHg
          source_id: s_YPugPqGTXFMAiZ1BM5CSmX
          stance: supports
          locator: CBDB 双向互证（玄孫;四世孫 王炎澤 ⇄ 高祖;四世祖 王寓）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_mp9fqPLVqRaYj9MBorGs2H
        status: active
        display_name: 王炎澤
        merged_into_person_id: null
  other: []
---

# 王寓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寓 | accepted |
| bio.summary | 王寓，宋人物。籍贯義烏，曾任提舉、轉運司幹辦公事。（中国历代人物传记资料库 CBDB 386580） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_EWnxKCBQmpHPKtnBGKNGzU | 王濤 | accepted |
| children | p_PEapMzWnzmpqJJJ13D8WQK | 王誠 | accepted |
| ancestors | p_77KUt4ppLcUYh3H4mPAVZk | 王悅 | accepted |
| ancestors | p_WrdABvZJN9cX74q6iDQUDp | 王喬年 | accepted |
| descendants | p_mp9fqPLVqRaYj9MBorGs2H | 王炎澤 | accepted |

## 外部来源

- [中国历代人物传记资料库：王寓（CBDB 386580）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386580&o=json)
- [中国历代人物传记资料库：王悅（CBDB 437522）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437522&o=json)
