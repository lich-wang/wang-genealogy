---
schema: wang-person/v1
id: p_KhQZ4rkBabwAVX8vrHF7JY
status: active
merged_into: null
display_name: 王濂
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sQyjCJF8hqg6SmKRFxWuAE
        subject_person_id: p_KhQZ4rkBabwAVX8vrHF7JY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王濂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BtA5qRVN8SF3FKUBYiCBL2
          claim_id: c_sQyjCJF8hqg6SmKRFxWuAE
          source_id: s_G4DMg2bVVHtJEicVV5qJWj
          stance: supports
          locator: CBDB:304529
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（304529）
          source: &a1
            id: s_G4DMg2bVVHtJEicVV5qJWj
            source_type: api_record
            title: 中国历代人物传记资料库：王濂（CBDB 304529）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304529&o=json
            external_identifier: CBDB:304529
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.720Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jn4xu8ZRt2xHB6xFb4G69a
        subject_person_id: p_KhQZ4rkBabwAVX8vrHF7JY
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
        - id: cs_Q2fR5FiCBig6o7bQCTy26X
          claim_id: c_jn4xu8ZRt2xHB6xFb4G69a
          source_id: s_G4DMg2bVVHtJEicVV5qJWj
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_KTit0cTdSpuFfoG0VqQ6Mo
        subject_person_id: p_KhQZ4rkBabwAVX8vrHF7JY
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_JML3zLgbrajmhN4fDU1Pka
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_--DZJML1Q0gadaG7H5THyS
          claim_id: c_KTit0cTdSpuFfoG0VqQ6Mo
          source_id: s_sJ3iEzhs44udb87E8NcpTD
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第三甲第一百三十九名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_sJ3iEzhs44udb87E8NcpTD
            source_type: api_record
            title: 中国历代人物传记资料库：王交（CBDB 126505）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126505&o=json
            external_identifier: CBDB:126505
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.990Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_JML3zLgbrajmhN4fDU1Pka
        status: active
        display_name: 王交
        merged_into_person_id: null
  other: []
---

# 王濂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王濂 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_JML3zLgbrajmhN4fDU1Pka | 王交 | accepted |

## 外部来源

- [中国历代人物传记资料库：王交（CBDB 126505）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126505&o=json)
- [中国历代人物传记资料库：王濂（CBDB 304529）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304529&o=json)
