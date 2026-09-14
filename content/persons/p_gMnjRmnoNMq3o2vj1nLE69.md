---
schema: wang-person/v1
id: p_gMnjRmnoNMq3o2vj1nLE69
status: active
merged_into: null
display_name: 王某華
cbdb_id: 278404
revision: 7
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HddtbdknTVQ7y6bRyBbwWp
        subject_person_id: p_gMnjRmnoNMq3o2vj1nLE69
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王某華，明人物。正德六年進士，籍贯涿鹿中衛。（中国历代人物传记资料库 CBDB 278404）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_EWt0XxYSmOne5kNK0Rcg6-
          claim_id: c_HddtbdknTVQ7y6bRyBbwWp
          source_id: s_NQt4EujdCKpuugUvaUmJQS
          stance: supports
          locator: CBDB:278404
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_2NzLsr6wtqVpfjd8Rk7bEw
        subject_person_id: p_gMnjRmnoNMq3o2vj1nLE69
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王某華
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_sakAUhT6bvAXPd9iWvb5Lj
          claim_id: c_2NzLsr6wtqVpfjd8Rk7bEw
          source_id: s_NQt4EujdCKpuugUvaUmJQS
          stance: supports
          locator: CBDB:278404
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3201-3300）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
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
        id: p_h7fXGW2qXexjH8ke4RSdR3
        status: active
        display_name: 王金
        merged_into_person_id: null
    - claim:
        id: c_WJA8_YqxGdiqvN1tmWvjjx
        subject_person_id: p_gMnjRmnoNMq3o2vj1nLE69
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3JqDV4N9ByxnHmohbFTCk6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5I-STciEF5PcSwszOLI0b8
          claim_id: c_WJA8_YqxGdiqvN1tmWvjjx
          source_id: s_uq_Ig-DbtFi9a9orl_Lf2a
          stance: supports
          locator: CBDB：兄弟 王金（201798）之父／母 王某華
          quotation: null
          interpretation_note: 由兄弟关系推断：王欽 与 王金 为同胞（CBDB 记「弟」），王金 之父／母即 王欽 之父／母。
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
        id: c_7LP7vaowAMwCi23tPVEBHY
        subject_person_id: p_gMnjRmnoNMq3o2vj1nLE69
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5myeSNfs7KAdD19CKForv1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DRTTW3B5vYqtmPjzvoT97Q
          claim_id: c_7LP7vaowAMwCi23tPVEBHY
          source_id: s__I7VE6nacOcAa0SFeeNAyw
          stance: supports
          locator: CBDB：兄弟 王金（201798）之父／母 王某華
          quotation: null
          interpretation_note: 由兄弟关系推断：王介 与 王金 为同胞（CBDB 记「兄」），王金 之父／母即 王介 之父／母。
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
        id: c_q4ILwhP9HdI8X-uVeg1O0s
        subject_person_id: p_gMnjRmnoNMq3o2vj1nLE69
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CFzJNjTesw3eQjmKKBs1D4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2MiE3M7Oz122gyLALDCAYO
          claim_id: c_q4ILwhP9HdI8X-uVeg1O0s
          source_id: s_Cb9fNBYtyZAgJWOh2L8mFw
          stance: supports
          locator: CBDB：兄弟 王金（201798）之父／母 王某華
          quotation: null
          interpretation_note: 由兄弟关系推断：王會 与 王金 为同胞（CBDB 记「兄」），王金 之父／母即 王會 之父／母。
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
        id: c_aMJQEBGJtYC-MnxtGtjHPF
        subject_person_id: p_gMnjRmnoNMq3o2vj1nLE69
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_q5U5JfwdkxCt43SSTEGKNi
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_duzv8pFxpOinul0fqNZCuQ
          claim_id: c_aMJQEBGJtYC-MnxtGtjHPF
          source_id: s_UnYpyzRYDAbaAfL7xG4Mcf
          stance: supports
          locator: CBDB：兄弟 王金（201798）之父／母 王某華
          quotation: null
          interpretation_note: 由兄弟关系推断：王翁 与 王金 为同胞（CBDB 记「兄」），王金 之父／母即 王翁 之父／母。
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
        id: c_x6zmu0YSHiD9u6EM0GnEXJ
        subject_person_id: p_gMnjRmnoNMq3o2vj1nLE69
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_t1A398H2QjGNXxHDDm9B2k
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uJCMvyq9bhPPapvf2HvDUP
          claim_id: c_x6zmu0YSHiD9u6EM0GnEXJ
          source_id: s_5XWZ3rHbJeCfvQegBdzgIS
          stance: supports
          locator: CBDB：兄弟 王金（201798）之父／母 王某華
          quotation: null
          interpretation_note: 由兄弟关系推断：王鎮 与 王金 为同胞（CBDB 记「弟」），王金 之父／母即 王鎮 之父／母。
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
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王某華

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王某華，明人物。正德六年進士，籍贯涿鹿中衛。（中国历代人物传记资料库 CBDB 278404） | accepted |
| name.primary | 王某華 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_h7fXGW2qXexjH8ke4RSdR3 | 王金 | accepted |
| children | p_3JqDV4N9ByxnHmohbFTCk6 | 王欽 | accepted |
| children | p_5myeSNfs7KAdD19CKForv1 | 王介 | accepted |
| children | p_CFzJNjTesw3eQjmKKBs1D4 | 王會 | accepted |
| children | p_q5U5JfwdkxCt43SSTEGKNi | 王翁 | accepted |
| children | p_t1A398H2QjGNXxHDDm9B2k | 王鎮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王會（CBDB 278413）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278413&o=json)
- [中国历代人物传记资料库：王介（CBDB 278414）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278414&o=json)
- [中国历代人物传记资料库：王某華（CBDB 278404）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278404&o=json)
- [中国历代人物传记资料库：王欽（CBDB 278409）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278409&o=json)
- [中国历代人物传记资料库：王翁（CBDB 278412）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278412&o=json)
- [中国历代人物传记资料库：王鎮（CBDB 278410）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278410&o=json)
