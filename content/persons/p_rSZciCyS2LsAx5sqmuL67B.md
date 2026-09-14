---
schema: wang-person/v1
id: p_rSZciCyS2LsAx5sqmuL67B
status: active
merged_into: null
display_name: 王取
cbdb_id: 233973
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pXQnJtu8G55rp6nUAn8dZW
        subject_person_id: p_rSZciCyS2LsAx5sqmuL67B
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王取，明人物。籍贯鄧州。（中国历代人物传记资料库 CBDB 233973）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_AsFz1PouRvhrEisCpjdVgK
          claim_id: c_pXQnJtu8G55rp6nUAn8dZW
          source_id: s_L8yGJ8bLRpmMNGvs75fDDF
          stance: supports
          locator: CBDB:233973
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_L8yGJ8bLRpmMNGvs75fDDF
            source_type: api_record
            title: 中国历代人物传记资料库：王取（CBDB 233973）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233973&o=json
            external_identifier: CBDB:233973
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_RzHFsd7qAm54LLZ3D7MfH7
        subject_person_id: p_rSZciCyS2LsAx5sqmuL67B
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王取
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_dj4mNFjQ5692nwCzBHEBrz
          claim_id: c_RzHFsd7qAm54LLZ3D7MfH7
          source_id: s_L8yGJ8bLRpmMNGvs75fDDF
          stance: supports
          locator: CBDB:233973
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2701-2800）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_KF4JHYbJjRBXgFv4_gtBMh
        subject_person_id: p_vbmJR5uCeaqCSLSaANHLNi
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rSZciCyS2LsAx5sqmuL67B
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wAiXhi_-enB_So7o5DVfZj
          claim_id: c_KF4JHYbJjRBXgFv4_gtBMh
          source_id: s_7xPFkQq7FAmJdoz8a4lVpY
          stance: supports
          locator: CBDB：兄弟 王聘（207693）之父／母 王朝卿
          quotation: null
          interpretation_note: 由兄弟关系推断：王取 与 王聘 为同胞（CBDB 记「兄」），王聘 之父／母即 王取 之父／母。
          source:
            id: s_7xPFkQq7FAmJdoz8a4lVpY
            source_type: api_record
            title: 中国历代人物传记资料库：王取（CBDB 233973）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233973&o=json
            external_identifier: CBDB:233973
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_vbmJR5uCeaqCSLSaANHLNi
        status: active
        display_name: 王朝卿
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_cP3KHvmtQP6HVceqFA9vM9
        subject_person_id: p_rSZciCyS2LsAx5sqmuL67B
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_vV52H1GLe4mb587k9pj5Z2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uajjlgFvXJnHBMF2N77B_T
          claim_id: c_cP3KHvmtQP6HVceqFA9vM9
          source_id: s_7xPFkQq7FAmJdoz8a4lVpY
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207693 王聘）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_7xPFkQq7FAmJdoz8a4lVpY
            source_type: api_record
            title: 中国历代人物传记资料库：王取（CBDB 233973）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233973&o=json
            external_identifier: CBDB:233973
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_vV52H1GLe4mb587k9pj5Z2
        status: active
        display_name: 王聘
        merged_into_person_id: null
---

# 王取

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王取，明人物。籍贯鄧州。（中国历代人物传记资料库 CBDB 233973） | accepted |
| name.primary | 王取 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_vbmJR5uCeaqCSLSaANHLNi | 王朝卿 | accepted |
| other | p_vV52H1GLe4mb587k9pj5Z2 | 王聘 | accepted |

## 外部来源

- [中国历代人物传记资料库：王取（CBDB 233973）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233973&o=json)
