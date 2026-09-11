---
schema: wang-person/v1
id: p_LNAKBPYt9PQCz44835GtLD
status: active
merged_into: null
display_name: 王續之
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VYj4TYYQYH7wuFwJjVZgNf
        subject_person_id: p_LNAKBPYt9PQCz44835GtLD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王續之
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vqjJWbGjZqhHdAfibjuKK7
          claim_id: c_VYj4TYYQYH7wuFwJjVZgNf
          source_id: s_6awbq68aufhR92WGrbmNvR
          stance: supports
          locator: CBDB:204986
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（204986）
          source: &a1
            id: s_6awbq68aufhR92WGrbmNvR
            source_type: api_record
            title: 中国历代人物传记资料库：王續之（CBDB 204986）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204986&o=json
            external_identifier: CBDB:204986
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.845Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_EfGDGKvRndtSfMpKws59jm
        subject_person_id: p_LNAKBPYt9PQCz44835GtLD
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1534年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HkMeF9XhEzsWKbJfX2TzUG
          claim_id: c_EfGDGKvRndtSfMpKws59jm
          source_id: s_6awbq68aufhR92WGrbmNvR
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ApG7MbiGLi5wUzFRJsH9yY
        subject_person_id: p_LNAKBPYt9PQCz44835GtLD
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
        - id: cs_wbCiNX738vdkrmHPdsGA1Y
          claim_id: c_ApG7MbiGLi5wUzFRJsH9yY
          source_id: s_6awbq68aufhR92WGrbmNvR
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
        id: c_YbXpkaIhpg5T4PTu4vWizl
        subject_person_id: p_vK3QABJxLZ3CGaf98onw4k
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LNAKBPYt9PQCz44835GtLD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZkUivbljmu_kADppLhA0K7
          claim_id: c_YbXpkaIhpg5T4PTu4vWizl
          source_id: s_FLYjb1DFHNr84N9a3wBTWi
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第二甲第五十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_FLYjb1DFHNr84N9a3wBTWi
            source_type: api_record
            title: 中国历代人物传记资料库：王廷（CBDB 326819）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326819&o=json
            external_identifier: CBDB:326819
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.230Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_vK3QABJxLZ3CGaf98onw4k
        status: active
        display_name: 王廷
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_56qZCzU3RwCNYU2YzG_8Rf
        subject_person_id: p_JH4jDbcMV3BNGKWbQ9vKF4
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_LNAKBPYt9PQCz44835GtLD
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_C7yVq2MFq8BsabJKBEt-ra
          claim_id: c_56qZCzU3RwCNYU2YzG_8Rf
          source_id: s_zK3XJnZokR4EFPfZGjURLH
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第二甲第五十七名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_zK3XJnZokR4EFPfZGjURLH
            source_type: api_record
            title: 中国历代人物传记资料库：王銳（CBDB 326816）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326816&o=json
            external_identifier: CBDB:326816
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.229Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_JH4jDbcMV3BNGKWbQ9vKF4
        status: active
        display_name: 王銳
        merged_into_person_id: null
    - claim:
        id: c_DBBKh7SPpH3bgaOoyp8Lzv
        subject_person_id: p_ZWx9BUeSiDUd2ZtZQJRxGo
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_LNAKBPYt9PQCz44835GtLD
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__XFJR3Ks9t1oJAnN8fd9uJ
          claim_id: c_DBBKh7SPpH3bgaOoyp8Lzv
          source_id: s_7bD6X6QACgJ5TN9t5K7TYM
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第二甲第五十七名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_7bD6X6QACgJ5TN9t5K7TYM
            source_type: api_record
            title: 中国历代人物传记资料库：王希文（CBDB 326817）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326817&o=json
            external_identifier: CBDB:326817
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.230Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ZWx9BUeSiDUd2ZtZQJRxGo
        status: active
        display_name: 王希文
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王續之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王續之 | accepted |
| birth.date | 1534年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_vK3QABJxLZ3CGaf98onw4k | 王廷 | accepted |
| ancestors | p_JH4jDbcMV3BNGKWbQ9vKF4 | 王銳 | accepted |
| ancestors | p_ZWx9BUeSiDUd2ZtZQJRxGo | 王希文 | accepted |

## 外部来源

- [中国历代人物传记资料库：王銳（CBDB 326816）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326816&o=json)
- [中国历代人物传记资料库：王廷（CBDB 326819）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326819&o=json)
- [中国历代人物传记资料库：王希文（CBDB 326817）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326817&o=json)
- [中国历代人物传记资料库：王續之（CBDB 204986）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204986&o=json)
