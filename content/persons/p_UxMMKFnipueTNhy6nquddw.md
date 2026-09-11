---
schema: wang-person/v1
id: p_UxMMKFnipueTNhy6nquddw
status: active
merged_into: null
display_name: 王清
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_29vg6PAZwCziACAoz8LpKa
        subject_person_id: p_UxMMKFnipueTNhy6nquddw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王清
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ztjJswGgkxmtoUMRQ4Fx49
          claim_id: c_29vg6PAZwCziACAoz8LpKa
          source_id: s_nLu66igk1NBqGkgtJsatk2
          stance: supports
          locator: CBDB:29204
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（29204）
          source: &a1
            id: s_nLu66igk1NBqGkgtJsatk2
            source_type: api_record
            title: 中国历代人物传记资料库：王清（CBDB 29204）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29204&o=json
            external_identifier: CBDB:29204
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.992Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_diEntZTBSU8P5cQ9FUC5ZT
        subject_person_id: p_UxMMKFnipueTNhy6nquddw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为金人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_j5JPXhxYoHVoP2xhejtTpp
          claim_id: c_diEntZTBSU8P5cQ9FUC5ZT
          source_id: s_nLu66igk1NBqGkgtJsatk2
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
        id: c_GG29-fjPWs_QPKr10-wKax
        subject_person_id: p_a4e7MKuEArZH7zGy5eeJma
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UxMMKFnipueTNhy6nquddw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HtZ82M6RuAUSWLcpLm1OeB
          claim_id: c_GG29-fjPWs_QPKr10-wKax
          source_id: s_PY4dXJJZsw1aMJVRPoqKDQ
          stance: supports
          locator: CBDB 双向互证（子 王清 ⇄ 父 王載）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_PY4dXJJZsw1aMJVRPoqKDQ
            source_type: api_record
            title: 中国历代人物传记资料库：王載（CBDB 29205）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29205&o=json
            external_identifier: CBDB:29205
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.993Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_a4e7MKuEArZH7zGy5eeJma
        status: active
        display_name: 王載
        merged_into_person_id: null
    - claim:
        id: c_F43dAFTy6-XBLhjSywIs8w
        subject_person_id: p_XVBiZo5rSMuhnxXwBu1Wf6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UxMMKFnipueTNhy6nquddw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OIloELLnxVoWTspIvD_MWj
          claim_id: c_F43dAFTy6-XBLhjSywIs8w
          source_id: s_nLu66igk1NBqGkgtJsatk2
          stance: supports
          locator: CBDB 双向互证（父 王義 ⇄ 子 王清）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_XVBiZo5rSMuhnxXwBu1Wf6
        status: active
        display_name: 王義
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王清

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王清 | accepted |
| bio.summary | CBDB 记载为金人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_a4e7MKuEArZH7zGy5eeJma | 王載 | accepted |
| parents | p_XVBiZo5rSMuhnxXwBu1Wf6 | 王義 | accepted |

## 外部来源

- [中国历代人物传记资料库：王清（CBDB 29204）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29204&o=json)
- [中国历代人物传记资料库：王載（CBDB 29205）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29205&o=json)
