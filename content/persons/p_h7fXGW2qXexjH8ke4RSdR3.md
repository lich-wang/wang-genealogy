---
schema: wang-person/v1
id: p_h7fXGW2qXexjH8ke4RSdR3
status: active
merged_into: null
display_name: 王金
revision: 8
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rA6yAxgCJLgs2GZxF299At
        subject_person_id: p_h7fXGW2qXexjH8ke4RSdR3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王金
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uunpX1Bw4QsuFGQ8fJyQTL
          claim_id: c_rA6yAxgCJLgs2GZxF299At
          source_id: s_YKx1VJJuWVzR7HUsm6D4ou
          stance: supports
          locator: CBDB:201798
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（201798）
          source: &a1
            id: s_YKx1VJJuWVzR7HUsm6D4ou
            source_type: api_record
            title: 中国历代人物传记资料库：王金（CBDB 201798）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201798&o=json
            external_identifier: CBDB:201798
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.694Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_2ZDG4CPPKvG438gPvvCd75
        subject_person_id: p_h7fXGW2qXexjH8ke4RSdR3
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1478年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BGgeNpAhPJc83Von4skFmK
          claim_id: c_2ZDG4CPPKvG438gPvvCd75
          source_id: s_YKx1VJJuWVzR7HUsm6D4ou
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
        id: c_Z5rzFXgpW431T62TtZ5Ba1
        subject_person_id: p_h7fXGW2qXexjH8ke4RSdR3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王金（生于1478年），明人物。明清進士進士，籍贯涿鹿中衛，入仕進士。（中国历代人物传记资料库 CBDB 201798）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_96xEpKXCgKwD6snIqay7FK
          claim_id: c_Z5rzFXgpW431T62TtZ5Ba1
          source_id: s_YKx1VJJuWVzR7HUsm6D4ou
          stance: supports
          locator: CBDB:201798
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_sLCjPyTUQClxVYMZsIhe9u
        subject_person_id: p_gMnjRmnoNMq3o2vj1nLE69
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_h7fXGW2qXexjH8ke4RSdR3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IbCqE8xfUW8aqfd4f0nByq
          claim_id: c_sLCjPyTUQClxVYMZsIhe9u
          source_id: s_NQt4EujdCKpuugUvaUmJQS
          stance: supports
          locator: 正德六年進士登科錄:一卷，第三甲第一百四十四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_NQt4EujdCKpuugUvaUmJQS
            source_type: api_record
            title: 中国历代人物传记资料库：王某華（CBDB 278404）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278404&o=json
            external_identifier: CBDB:278404
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_gMnjRmnoNMq3o2vj1nLE69
        status: active
        display_name: 王某華
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_7FJmuH01dlR5FKuB0fZ7E0
        subject_person_id: p_A4ZBP13BuAWnaxXR4USmkn
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_h7fXGW2qXexjH8ke4RSdR3
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5bRT7UTIjbeoByz4RNy8z9
          claim_id: c_7FJmuH01dlR5FKuB0fZ7E0
          source_id: s_VG6hzm3AnPqJ1Zs9e6Fr1w
          stance: supports
          locator: 正德六年進士登科錄:一卷，第三甲第一百四十四名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_VG6hzm3AnPqJ1Zs9e6Fr1w
            source_type: api_record
            title: 中国历代人物传记资料库：王彬（CBDB 278402）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278402&o=json
            external_identifier: CBDB:278402
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.963Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_A4ZBP13BuAWnaxXR4USmkn
        status: active
        display_name: 王彬
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_AeJuvqH5IZhlMQaQ4LnLIi
        subject_person_id: p_3JqDV4N9ByxnHmohbFTCk6
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_h7fXGW2qXexjH8ke4RSdR3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_L6izLuw-xZMRACJSFqhlMd
          claim_id: c_AeJuvqH5IZhlMQaQ4LnLIi
          source_id: s_uq_Ig-DbtFi9a9orl_Lf2a
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201798 王金）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_uq_Ig-DbtFi9a9orl_Lf2a
            source_type: api_record
            title: 中国历代人物传记资料库：王欽（CBDB 278409）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278409&o=json
            external_identifier: CBDB:278409
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3JqDV4N9ByxnHmohbFTCk6
        status: active
        display_name: 王欽
        merged_into_person_id: null
    - claim:
        id: c_HXk2pZppyV4uGRbmr1c_2N
        subject_person_id: p_5myeSNfs7KAdD19CKForv1
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_h7fXGW2qXexjH8ke4RSdR3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TplNAVtGJgbP1ldoQVtuQw
          claim_id: c_HXk2pZppyV4uGRbmr1c_2N
          source_id: s__I7VE6nacOcAa0SFeeNAyw
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201798 王金）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s__I7VE6nacOcAa0SFeeNAyw
            source_type: api_record
            title: 中国历代人物传记资料库：王介（CBDB 278414）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278414&o=json
            external_identifier: CBDB:278414
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5myeSNfs7KAdD19CKForv1
        status: active
        display_name: 王介
        merged_into_person_id: null
    - claim:
        id: c_6KsBQaH2fK7lU9TqJDJq9p
        subject_person_id: p_CFzJNjTesw3eQjmKKBs1D4
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_h7fXGW2qXexjH8ke4RSdR3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_v9C_Ck6HqsOZYwvIkz1qar
          claim_id: c_6KsBQaH2fK7lU9TqJDJq9p
          source_id: s_Cb9fNBYtyZAgJWOh2L8mFw
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201798 王金）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Cb9fNBYtyZAgJWOh2L8mFw
            source_type: api_record
            title: 中国历代人物传记资料库：王會（CBDB 278413）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278413&o=json
            external_identifier: CBDB:278413
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CFzJNjTesw3eQjmKKBs1D4
        status: active
        display_name: 王會
        merged_into_person_id: null
    - claim:
        id: c_pv-nPx0DF0hTTnZ0PkkSos
        subject_person_id: p_h7fXGW2qXexjH8ke4RSdR3
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_q5U5JfwdkxCt43SSTEGKNi
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LTIBuLgkNVPXDHzcpd050v
          claim_id: c_pv-nPx0DF0hTTnZ0PkkSos
          source_id: s_UnYpyzRYDAbaAfL7xG4Mcf
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201798 王金）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_UnYpyzRYDAbaAfL7xG4Mcf
            source_type: api_record
            title: 中国历代人物传记资料库：王翁（CBDB 278412）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278412&o=json
            external_identifier: CBDB:278412
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_q5U5JfwdkxCt43SSTEGKNi
        status: active
        display_name: 王翁
        merged_into_person_id: null
    - claim:
        id: c_MZaakfHY5TRVDLnhJzbGqy
        subject_person_id: p_h7fXGW2qXexjH8ke4RSdR3
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_t1A398H2QjGNXxHDDm9B2k
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9IAqncl8fuZyN0Xh8e0acS
          claim_id: c_MZaakfHY5TRVDLnhJzbGqy
          source_id: s_5XWZ3rHbJeCfvQegBdzgIS
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201798 王金）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_5XWZ3rHbJeCfvQegBdzgIS
            source_type: api_record
            title: 中国历代人物传记资料库：王鎮（CBDB 278410）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278410&o=json
            external_identifier: CBDB:278410
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_t1A398H2QjGNXxHDDm9B2k
        status: active
        display_name: 王鎮
        merged_into_person_id: null
---

# 王金

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王金 | accepted |
| birth.date | 1478年 | accepted |
| bio.summary | 王金（生于1478年），明人物。明清進士進士，籍贯涿鹿中衛，入仕進士。（中国历代人物传记资料库 CBDB 201798） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_gMnjRmnoNMq3o2vj1nLE69 | 王某華 | accepted |
| ancestors | p_A4ZBP13BuAWnaxXR4USmkn | 王彬 | accepted |
| other | p_3JqDV4N9ByxnHmohbFTCk6 | 王欽 | accepted |
| other | p_5myeSNfs7KAdD19CKForv1 | 王介 | accepted |
| other | p_CFzJNjTesw3eQjmKKBs1D4 | 王會 | accepted |
| other | p_q5U5JfwdkxCt43SSTEGKNi | 王翁 | accepted |
| other | p_t1A398H2QjGNXxHDDm9B2k | 王鎮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王彬（CBDB 278402）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278402&o=json)
- [中国历代人物传记资料库：王會（CBDB 278413）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278413&o=json)
- [中国历代人物传记资料库：王介（CBDB 278414）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278414&o=json)
- [中国历代人物传记资料库：王金（CBDB 201798）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201798&o=json)
- [中国历代人物传记资料库：王某華（CBDB 278404）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278404&o=json)
- [中国历代人物传记资料库：王欽（CBDB 278409）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278409&o=json)
- [中国历代人物传记资料库：王翁（CBDB 278412）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278412&o=json)
- [中国历代人物传记资料库：王鎮（CBDB 278410）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278410&o=json)
