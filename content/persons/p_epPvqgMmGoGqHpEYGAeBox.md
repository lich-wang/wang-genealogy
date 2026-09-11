---
schema: wang-person/v1
id: p_epPvqgMmGoGqHpEYGAeBox
status: active
merged_into: null
display_name: 王顯忠
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wCjq9RBF4HhzTJvqzPSEMX
        subject_person_id: p_epPvqgMmGoGqHpEYGAeBox
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王顯忠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RkCygeCrgKeB7FX8afjM5q
          claim_id: c_wCjq9RBF4HhzTJvqzPSEMX
          source_id: s_F7GMPaDUdDkKE7yj4V4dw3
          stance: supports
          locator: CBDB:126894
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126894）
          source: &a1
            id: s_F7GMPaDUdDkKE7yj4V4dw3
            source_type: api_record
            title: 中国历代人物传记资料库：王顯忠（CBDB 126894）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126894&o=json
            external_identifier: CBDB:126894
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.290Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2sRBaisxArxRVt149YWyhz
        subject_person_id: p_epPvqgMmGoGqHpEYGAeBox
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
        - id: cs_sypieZ4T5umFjknHFYfqcu
          claim_id: c_2sRBaisxArxRVt149YWyhz
          source_id: s_F7GMPaDUdDkKE7yj4V4dw3
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
        id: c_QZSTmA47uZrd2k5sOa9KNH
        subject_person_id: p_33joHpVQH9KnqRAf9nqpnS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_epPvqgMmGoGqHpEYGAeBox
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-017qKr5sWvsrVPl5ix6fC
          claim_id: c_QZSTmA47uZrd2k5sOa9KNH
          source_id: s_ANGS7ChRjNE5dQPvG8Bhnt
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第三甲第二十二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ANGS7ChRjNE5dQPvG8Bhnt
            source_type: api_record
            title: 中国历代人物传记资料库：王誥（CBDB 303242）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303242&o=json
            external_identifier: CBDB:303242
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.681Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_33joHpVQH9KnqRAf9nqpnS
        status: active
        display_name: 王誥
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_CwIao_J7GiYT9qiKtQRwEs
        subject_person_id: p_Ce3DgqpXRSWeMxbEy1S6fm
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_epPvqgMmGoGqHpEYGAeBox
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_B4pD3STg3dKqq7_VnQcAzB
          claim_id: c_CwIao_J7GiYT9qiKtQRwEs
          source_id: s_15AzHDy3cBLhJd6wkHK5X8
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第三甲第二十二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_15AzHDy3cBLhJd6wkHK5X8
            source_type: api_record
            title: 中国历代人物传记资料库：王宗（CBDB 303241）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303241&o=json
            external_identifier: CBDB:303241
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.681Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Ce3DgqpXRSWeMxbEy1S6fm
        status: active
        display_name: 王宗
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王顯忠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王顯忠 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_33joHpVQH9KnqRAf9nqpnS | 王誥 | accepted |
| ancestors | p_Ce3DgqpXRSWeMxbEy1S6fm | 王宗 | accepted |

## 外部来源

- [中国历代人物传记资料库：王誥（CBDB 303242）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303242&o=json)
- [中国历代人物传记资料库：王顯忠（CBDB 126894）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126894&o=json)
- [中国历代人物传记资料库：王宗（CBDB 303241）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303241&o=json)
