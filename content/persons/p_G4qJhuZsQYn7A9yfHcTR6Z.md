---
schema: wang-person/v1
id: p_G4qJhuZsQYn7A9yfHcTR6Z
status: active
merged_into: null
display_name: 王獻
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_drQ22bUCxSMTF7wM4pdPsQ
        subject_person_id: p_G4qJhuZsQYn7A9yfHcTR6Z
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王獻
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PeP5Ywu1yZETfwVx8B9Gjs
          claim_id: c_drQ22bUCxSMTF7wM4pdPsQ
          source_id: s_Gb8qcnN1o7MbAu8egRye6Z
          stance: supports
          locator: CBDB:126875
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126875）
          source: &a1
            id: s_Gb8qcnN1o7MbAu8egRye6Z
            source_type: api_record
            title: 中国历代人物传记资料库：王獻（CBDB 126875）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126875&o=json
            external_identifier: CBDB:126875
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.277Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XSiDwZLUcHP5EvbE9hJJsC
        subject_person_id: p_G4qJhuZsQYn7A9yfHcTR6Z
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GXfH1n6JFN7kx8kuMkSJND
          claim_id: c_XSiDwZLUcHP5EvbE9hJJsC
          source_id: s_Gb8qcnN1o7MbAu8egRye6Z
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
        id: c_mBllBBCnHLbUZR1ElSYn6-
        subject_person_id: p_do7sRWRkXm9HbF91DJTFWy
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_G4qJhuZsQYn7A9yfHcTR6Z
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__I4ztS48i22vikE5YKL7lO
          claim_id: c_mBllBBCnHLbUZR1ElSYn6-
          source_id: s_x8iqghaZ9G1jhaNV7hymRN
          stance: supports
          locator: 景泰二年進士登科錄:一卷，第二甲第三十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_x8iqghaZ9G1jhaNV7hymRN
            source_type: api_record
            title: 中国历代人物传记资料库：王智（CBDB 281419）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281419&o=json
            external_identifier: CBDB:281419
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.051Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_do7sRWRkXm9HbF91DJTFWy
        status: active
        display_name: 王智
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_hD4Mj0WB1L5BQZTj51PY5E
        subject_person_id: p_MrCsfTxuyRoFQSJAD6tSx8
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_G4qJhuZsQYn7A9yfHcTR6Z
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_galEMY3HiunxRn7HRyijyF
          claim_id: c_hD4Mj0WB1L5BQZTj51PY5E
          source_id: s_iRF7Z5ES8sXjh48q3pDpTA
          stance: supports
          locator: 景泰二年進士登科錄:一卷，第二甲第三十六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_iRF7Z5ES8sXjh48q3pDpTA
            source_type: api_record
            title: 中国历代人物传记资料库：王思誠（CBDB 281196）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281196&o=json
            external_identifier: CBDB:281196
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.046Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_MrCsfTxuyRoFQSJAD6tSx8
        status: active
        display_name: 王思誠
        merged_into_person_id: null
    - claim:
        id: c_YKhXmiXm8O6bTyB_xIMG1X
        subject_person_id: p_BKzrj8B5aVv9fN11xwUMfz
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_G4qJhuZsQYn7A9yfHcTR6Z
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EhSyw_Y9kn4-YdHz3A_5oz
          claim_id: c_YKhXmiXm8O6bTyB_xIMG1X
          source_id: s_uootp3154BBti6HcA37Mwi
          stance: supports
          locator: 景泰二年進士登科錄:一卷，第二甲第三十六名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_uootp3154BBti6HcA37Mwi
            source_type: api_record
            title: 中国历代人物传记资料库：王性安（CBDB 281307）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281307&o=json
            external_identifier: CBDB:281307
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.953Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_BKzrj8B5aVv9fN11xwUMfz
        status: active
        display_name: 王性安
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王獻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王獻 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_do7sRWRkXm9HbF91DJTFWy | 王智 | accepted |
| ancestors | p_MrCsfTxuyRoFQSJAD6tSx8 | 王思誠 | accepted |
| ancestors | p_BKzrj8B5aVv9fN11xwUMfz | 王性安 | accepted |

## 外部来源

- [中国历代人物传记资料库：王思誠（CBDB 281196）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281196&o=json)
- [中国历代人物传记资料库：王獻（CBDB 126875）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126875&o=json)
- [中国历代人物传记资料库：王性安（CBDB 281307）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281307&o=json)
- [中国历代人物传记资料库：王智（CBDB 281419）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281419&o=json)
