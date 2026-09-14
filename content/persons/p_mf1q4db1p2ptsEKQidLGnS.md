---
schema: wang-person/v1
id: p_mf1q4db1p2ptsEKQidLGnS
status: active
merged_into: null
display_name: 王霽
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AQm6ZYwXFFLM8ySE5ga8Cv
        subject_person_id: p_mf1q4db1p2ptsEKQidLGnS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王霽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DV5YEL8B5QHoHRngNsxYHs
          claim_id: c_AQm6ZYwXFFLM8ySE5ga8Cv
          source_id: s_1rxEpANm4ojuRDZ554oGUJ
          stance: supports
          locator: CBDB:270653
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（270653）
          source: &a1
            id: s_1rxEpANm4ojuRDZ554oGUJ
            source_type: api_record
            title: 中国历代人物传记资料库：王霽（CBDB 270653）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270653&o=json
            external_identifier: CBDB:270653
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.844Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bEJksuTEeNFULC7RzaSd7a
        subject_person_id: p_mf1q4db1p2ptsEKQidLGnS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王霽，明人物。弘治十五年進士，籍贯諸城。（中国历代人物传记资料库 CBDB 270653）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__YCsg-FgcHYJwVF6uEyF2b
          claim_id: c_bEJksuTEeNFULC7RzaSd7a
          source_id: s_1rxEpANm4ojuRDZ554oGUJ
          stance: supports
          locator: CBDB:270653
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_pny3ZNMEGEgEU_P7RsCEa7
        subject_person_id: p_SA9Pc7n2AYxZ7RijE7Kt9H
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mf1q4db1p2ptsEKQidLGnS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lI7SAJda5JK9mdcx5Zj91Q
          claim_id: c_pny3ZNMEGEgEU_P7RsCEa7
          source_id: s_B_iBZNfsRLL267yKgvCE40
          stance: supports
          locator: CBDB：兄弟 王雲（201331）之父／母 王通
          quotation: null
          interpretation_note: 由兄弟关系推断：王霽 与 王雲 为同胞（CBDB 记「兄」），王雲 之父／母即 王霽 之父／母。
          source:
            id: s_B_iBZNfsRLL267yKgvCE40
            source_type: api_record
            title: 中国历代人物传记资料库：王霽（CBDB 270653）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270653&o=json
            external_identifier: CBDB:270653
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_SA9Pc7n2AYxZ7RijE7Kt9H
        status: active
        display_name: 王通
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_iB_Iy7Za8hSsnNSy6JudhN
        subject_person_id: p_kuyuiJHgUznyGsvyFU7zw8
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_mf1q4db1p2ptsEKQidLGnS
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MkyfjQ081OF4OLJdSkrtqM
          claim_id: c_iB_Iy7Za8hSsnNSy6JudhN
          source_id: s_B_iBZNfsRLL267yKgvCE40
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201331 王雲）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_B_iBZNfsRLL267yKgvCE40
            source_type: api_record
            title: 中国历代人物传记资料库：王霽（CBDB 270653）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270653&o=json
            external_identifier: CBDB:270653
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_kuyuiJHgUznyGsvyFU7zw8
        status: active
        display_name: 王雲
        merged_into_person_id: null
---

# 王霽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王霽 | accepted |
| bio.summary | 王霽，明人物。弘治十五年進士，籍贯諸城。（中国历代人物传记资料库 CBDB 270653） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_SA9Pc7n2AYxZ7RijE7Kt9H | 王通 | accepted |
| other | p_kuyuiJHgUznyGsvyFU7zw8 | 王雲 | accepted |

## 外部来源

- [中国历代人物传记资料库：王霽（CBDB 270653）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270653&o=json)
