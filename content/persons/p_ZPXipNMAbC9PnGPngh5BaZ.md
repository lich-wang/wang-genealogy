---
schema: wang-person/v1
id: p_ZPXipNMAbC9PnGPngh5BaZ
status: active
merged_into: null
display_name: 王發
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WiZJSUrkUGSXjAGPqEhn1E
        subject_person_id: p_ZPXipNMAbC9PnGPngh5BaZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王發
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uSh4rwbQmg5ET3XFFp8C6b
          claim_id: c_WiZJSUrkUGSXjAGPqEhn1E
          source_id: s_Dk5mHCvDrYw26LSCHocyHn
          stance: supports
          locator: CBDB:19080
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（19080）
          source: &a1
            id: s_Dk5mHCvDrYw26LSCHocyHn
            source_type: api_record
            title: 中国历代人物传记资料库：王發（CBDB 19080）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19080&o=json
            external_identifier: CBDB:19080
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.722Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PNV5NmPNFHkis9BSzKzpnD
        subject_person_id: p_ZPXipNMAbC9PnGPngh5BaZ
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
        - id: cs_aVtE59i1Xh55CKF3dJgEpY
          claim_id: c_PNV5NmPNFHkis9BSzKzpnD
          source_id: s_Dk5mHCvDrYw26LSCHocyHn
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
        id: c_YU9GUnOpy1plNi3rnrbVHb
        subject_person_id: p_ZPXipNMAbC9PnGPngh5BaZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KQXHiSb9v8hy4Pk5jUcKth
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__E_Uwi2i5I1igLZ0UlyKPp
          claim_id: c_YU9GUnOpy1plNi3rnrbVHb
          source_id: s_Dk5mHCvDrYw26LSCHocyHn
          stance: supports
          locator: CBDB 双向互证（子 王庭芳 ⇄ 父 王發）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_KQXHiSb9v8hy4Pk5jUcKth
        status: active
        display_name: 王庭芳
        merged_into_person_id: null
    - claim:
        id: c_hSsNE0LWvb_dTePaCS-tub
        subject_person_id: p_ZPXipNMAbC9PnGPngh5BaZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8ZNRfFsK3rEkNpQdDz6act
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9n_9JLKcvXEjXWiAadqbRh
          claim_id: c_hSsNE0LWvb_dTePaCS-tub
          source_id: s_Dk5mHCvDrYw26LSCHocyHn
          stance: supports
          locator: CBDB 双向互证（子 王庭秀 ⇄ 父 王發）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_8ZNRfFsK3rEkNpQdDz6act
        status: active
        display_name: 王庭秀
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王發

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王發 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_KQXHiSb9v8hy4Pk5jUcKth | 王庭芳 | accepted |
| children | p_8ZNRfFsK3rEkNpQdDz6act | 王庭秀 | accepted |

## 外部来源

- [中国历代人物传记资料库：王發（CBDB 19080）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19080&o=json)
