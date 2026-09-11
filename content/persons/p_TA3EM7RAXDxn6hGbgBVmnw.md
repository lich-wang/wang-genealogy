---
schema: wang-person/v1
id: p_TA3EM7RAXDxn6hGbgBVmnw
status: active
merged_into: null
display_name: 王僑
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_USPeDsm68f7s69GK4hbmyH
        subject_person_id: p_TA3EM7RAXDxn6hGbgBVmnw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王僑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WzSJmj4ME4zfFhuA8yEMTi
          claim_id: c_USPeDsm68f7s69GK4hbmyH
          source_id: s_32Ki7FktVkHpVcc49xyuG3
          stance: supports
          locator: CBDB:386692
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（386692）
          source: &a1
            id: s_32Ki7FktVkHpVcc49xyuG3
            source_type: api_record
            title: 中国历代人物传记资料库：王僑（CBDB 386692）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386692&o=json
            external_identifier: CBDB:386692
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.902Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XCE52JUgxBx1xnTucaii1P
        subject_person_id: p_TA3EM7RAXDxn6hGbgBVmnw
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
        - id: cs_TefZ6G8SFJsQbYTowhp7tC
          claim_id: c_XCE52JUgxBx1xnTucaii1P
          source_id: s_32Ki7FktVkHpVcc49xyuG3
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
        id: c_8orchn222uM3k-8FQjCYd4
        subject_person_id: p_TA3EM7RAXDxn6hGbgBVmnw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_26BJbufiHdX8oiM4dJs1K3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Mp9f-DAT8I58UtGb0C63_j
          claim_id: c_8orchn222uM3k-8FQjCYd4
          source_id: s_MuLyWsZibwer1EjgcGYF4p
          stance: supports
          locator: CBDB 双向互证（父 王僑 ⇄ 子 王琰）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_MuLyWsZibwer1EjgcGYF4p
            source_type: api_record
            title: 中国历代人物传记资料库：王琰（CBDB 386693）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386693&o=json
            external_identifier: CBDB:386693
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.902Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_26BJbufiHdX8oiM4dJs1K3
        status: active
        display_name: 王琰
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_Vu3Zk2rWkMohHO4LZsKDom
        subject_person_id: p_bkMbqmq6U23rFXaG17Pxzk
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_TA3EM7RAXDxn6hGbgBVmnw
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wZzyIjbJlWqVdxJjK0NK8w
          claim_id: c_Vu3Zk2rWkMohHO4LZsKDom
          source_id: s_bDr42YdofJ3M2VBGUPzaxN
          stance: supports
          locator: CBDB 双向互证（孫 王僑 ⇄ 祖父 王師心）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_bDr42YdofJ3M2VBGUPzaxN
            source_type: api_record
            title: 中国历代人物传记资料库：王師心（CBDB 1872）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1872&o=json
            external_identifier: CBDB:1872
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.366Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_bkMbqmq6U23rFXaG17Pxzk
        status: active
        display_name: 王師心
        merged_into_person_id: null
  descendants:
    - claim:
        id: c_NS3LUm3miyxJeUa4Was56r
        subject_person_id: p_TA3EM7RAXDxn6hGbgBVmnw
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Q1HXQkSMAFHi7fYuKS8duv
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WB-5WnXBVtz37t1zoXAc4U
          claim_id: c_NS3LUm3miyxJeUa4Was56r
          source_id: s_cTeZV932iKduvMEe2aNegi
          stance: supports
          locator: CBDB 双向互证（曾祖 王僑 ⇄ 曾孫; 重孫 王蕙）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_cTeZV932iKduvMEe2aNegi
            source_type: api_record
            title: 中国历代人物传记资料库：王蕙（CBDB 386691）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386691&o=json
            external_identifier: CBDB:386691
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.901Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Q1HXQkSMAFHi7fYuKS8duv
        status: active
        display_name: 王蕙
        merged_into_person_id: null
  other: []
---

# 王僑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王僑 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_26BJbufiHdX8oiM4dJs1K3 | 王琰 | accepted |
| ancestors | p_bkMbqmq6U23rFXaG17Pxzk | 王師心 | accepted |
| descendants | p_Q1HXQkSMAFHi7fYuKS8duv | 王蕙 | accepted |

## 外部来源

- [中国历代人物传记资料库：王蕙（CBDB 386691）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386691&o=json)
- [中国历代人物传记资料库：王僑（CBDB 386692）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386692&o=json)
- [中国历代人物传记资料库：王師心（CBDB 1872）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1872&o=json)
- [中国历代人物传记资料库：王琰（CBDB 386693）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386693&o=json)
