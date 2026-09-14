---
schema: wang-person/v1
id: p_voHpA8GisKqT6bhA1i6mvV
status: active
merged_into: null
display_name: 王憲宸
cbdb_id: 235992
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uwUT97LvmXvZELbX4CLtHT
        subject_person_id: p_voHpA8GisKqT6bhA1i6mvV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王憲宸，明人物。籍贯江陰。（中国历代人物传记资料库 CBDB 235992）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_hBXbI5duzuoflpFvQtocSb
          claim_id: c_uwUT97LvmXvZELbX4CLtHT
          source_id: s_LNHRoKVcDN3TQn2Gzx4fqk
          stance: supports
          locator: CBDB:235992
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_LNHRoKVcDN3TQn2Gzx4fqk
            source_type: api_record
            title: 中国历代人物传记资料库：王憲宸（CBDB 235992）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235992&o=json
            external_identifier: CBDB:235992
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.856Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_nREv3p6B7eqLEkHhMueEPj
        subject_person_id: p_voHpA8GisKqT6bhA1i6mvV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王憲宸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_VEoEnuPNxU3yLTicdt3Yg7
          claim_id: c_nREv3p6B7eqLEkHhMueEPj
          source_id: s_LNHRoKVcDN3TQn2Gzx4fqk
          stance: supports
          locator: CBDB:235992
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2801-2900）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_BoctQiiEjFoe0ye_dAJXxj
        subject_person_id: p_fvtdZEELHENMPdwBvRdppk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_voHpA8GisKqT6bhA1i6mvV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_de7rAa78vhHjb89V0H3rFY
          claim_id: c_BoctQiiEjFoe0ye_dAJXxj
          source_id: s_GCmIdEvlndxOG2IyOioEPB
          stance: supports
          locator: CBDB：兄弟 王良臣（207791）之父／母 王維城
          quotation: null
          interpretation_note: 由兄弟关系推断：王憲宸 与 王良臣 为同胞（CBDB 记「兄」），王良臣 之父／母即 王憲宸 之父／母。
          source:
            id: s_GCmIdEvlndxOG2IyOioEPB
            source_type: api_record
            title: 中国历代人物传记资料库：王憲宸（CBDB 235992）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235992&o=json
            external_identifier: CBDB:235992
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fvtdZEELHENMPdwBvRdppk
        status: active
        display_name: 王維城
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_tS-nfM1Fs02p3yAXZxjSS0
        subject_person_id: p_fVwHvivQzDYcoN8uZB1uwy
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_voHpA8GisKqT6bhA1i6mvV
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0Y6BUAu4YVqT_LMSvqDshK
          claim_id: c_tS-nfM1Fs02p3yAXZxjSS0
          source_id: s_GCmIdEvlndxOG2IyOioEPB
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207791 王良臣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_GCmIdEvlndxOG2IyOioEPB
            source_type: api_record
            title: 中国历代人物传记资料库：王憲宸（CBDB 235992）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235992&o=json
            external_identifier: CBDB:235992
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fVwHvivQzDYcoN8uZB1uwy
        status: active
        display_name: 王良臣
        merged_into_person_id: null
---

# 王憲宸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王憲宸，明人物。籍贯江陰。（中国历代人物传记资料库 CBDB 235992） | accepted |
| name.primary | 王憲宸 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_fvtdZEELHENMPdwBvRdppk | 王維城 | accepted |
| other | p_fVwHvivQzDYcoN8uZB1uwy | 王良臣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王憲宸（CBDB 235992）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235992&o=json)
