---
schema: wang-person/v1
id: p_cKYaDFXTiBFX19B92FrXF3
status: active
merged_into: null
display_name: 王應祥
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FZ4exRfM7ebFQ3jXD3csqG
        subject_person_id: p_cKYaDFXTiBFX19B92FrXF3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應祥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6mB3GNW3JMepNbwE1CRnu8
          claim_id: c_FZ4exRfM7ebFQ3jXD3csqG
          source_id: s_QdipAxfa3eZJvZywKTASWz
          stance: supports
          locator: CBDB:313049
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（313049）
          source: &a1
            id: s_QdipAxfa3eZJvZywKTASWz
            source_type: api_record
            title: 中国历代人物传记资料库：王應祥（CBDB 313049）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313049&o=json
            external_identifier: CBDB:313049
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.895Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Y2ZFuJuTUXKUksuqvpEjnT
        subject_person_id: p_cKYaDFXTiBFX19B92FrXF3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應祥，明人物。嘉靖二十九年進士，籍贯聊城。（中国历代人物传记资料库 CBDB 313049）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_uSOg1dNRQvxk5Hv2SLwbhj
          claim_id: c_Y2ZFuJuTUXKUksuqvpEjnT
          source_id: s_QdipAxfa3eZJvZywKTASWz
          stance: supports
          locator: CBDB:313049
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_fYZ-4pT-Z1lxCrtW4HfKsR
        subject_person_id: p_vZNxiPDxgjLuXX3n9HfE91
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cKYaDFXTiBFX19B92FrXF3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OR7Tn4DptpiAXE-jqvb_Ou
          claim_id: c_fYZ-4pT-Z1lxCrtW4HfKsR
          source_id: s_frwIJvo0nbBfjJ7yYmcXER
          stance: supports
          locator: CBDB：兄弟 王應璧（203997）之父／母 王祿
          quotation: null
          interpretation_note: 由兄弟关系推断：王應祥 与 王應璧 为同胞（CBDB 记「弟」），王應璧 之父／母即 王應祥 之父／母。
          source:
            id: s_frwIJvo0nbBfjJ7yYmcXER
            source_type: api_record
            title: 中国历代人物传记资料库：王應祥（CBDB 313049）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313049&o=json
            external_identifier: CBDB:313049
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_vZNxiPDxgjLuXX3n9HfE91
        status: active
        display_name: 王祿
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_RlF0KoN92QZI_oBIsabi7W
        subject_person_id: p_1ZWbH3Q2UJJJLSJ9mDZ9cG
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_cKYaDFXTiBFX19B92FrXF3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tFeHiRfpirnsKegdrwynHe
          claim_id: c_RlF0KoN92QZI_oBIsabi7W
          source_id: s_frwIJvo0nbBfjJ7yYmcXER
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 203997 王應璧）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_frwIJvo0nbBfjJ7yYmcXER
            source_type: api_record
            title: 中国历代人物传记资料库：王應祥（CBDB 313049）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313049&o=json
            external_identifier: CBDB:313049
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1ZWbH3Q2UJJJLSJ9mDZ9cG
        status: active
        display_name: 王應璧
        merged_into_person_id: null
---

# 王應祥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應祥 | accepted |
| bio.summary | 王應祥，明人物。嘉靖二十九年進士，籍贯聊城。（中国历代人物传记资料库 CBDB 313049） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_vZNxiPDxgjLuXX3n9HfE91 | 王祿 | accepted |
| other | p_1ZWbH3Q2UJJJLSJ9mDZ9cG | 王應璧 | accepted |

## 外部来源

- [中国历代人物传记资料库：王應祥（CBDB 313049）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313049&o=json)
