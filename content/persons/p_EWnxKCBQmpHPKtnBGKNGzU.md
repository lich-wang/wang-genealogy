---
schema: wang-person/v1
id: p_EWnxKCBQmpHPKtnBGKNGzU
status: active
merged_into: null
display_name: 王濤
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Akbd3wYmk26b95pbwDMefK
        subject_person_id: p_EWnxKCBQmpHPKtnBGKNGzU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王濤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UuQEcV42CYcko5scsTTRAq
          claim_id: c_Akbd3wYmk26b95pbwDMefK
          source_id: s_aWs39iPTw5vjBgELjpXSeq
          stance: supports
          locator: CBDB:386579
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（386579）
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LJdsjq9NUuReM2QhN8DZ9e
        subject_person_id: p_EWnxKCBQmpHPKtnBGKNGzU
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
        - id: cs_sgod1WzDKKuuJ4nDQCDuYq
          claim_id: c_LJdsjq9NUuReM2QhN8DZ9e
          source_id: s_aWs39iPTw5vjBgELjpXSeq
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
          source: *a1
      object_person:
        id: p_WrdABvZJN9cX74q6iDQUDp
        status: active
        display_name: 王喬年
        merged_into_person_id: null
  children:
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
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
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
          source: *a1
      object_person:
        id: p_PEapMzWnzmpqJJJ13D8WQK
        status: active
        display_name: 王誠
        merged_into_person_id: null
  other: []
---

# 王濤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王濤 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_WrdABvZJN9cX74q6iDQUDp | 王喬年 | accepted |
| children | p_BEHvgFz44Nk9kRSJfRSWD8 | 王寓 | accepted |
| descendants | p_PEapMzWnzmpqJJJ13D8WQK | 王誠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王濤（CBDB 386579）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386579&o=json)
- [中国历代人物传记资料库：王寓（CBDB 386580）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386580&o=json)
