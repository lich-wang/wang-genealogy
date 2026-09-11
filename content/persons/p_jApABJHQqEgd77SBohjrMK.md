---
schema: wang-person/v1
id: p_jApABJHQqEgd77SBohjrMK
status: active
merged_into: null
display_name: 王溱
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SPZ1TRbYyYQejM4Ny2R8SL
        subject_person_id: p_jApABJHQqEgd77SBohjrMK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王溱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gbXveRGYzB2huvsqx54SEG
          claim_id: c_SPZ1TRbYyYQejM4Ny2R8SL
          source_id: s_18kW3WcnzNFm52CFiUGSqo
          stance: supports
          locator: CBDB:201734
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（201734）
          source: &a1
            id: s_18kW3WcnzNFm52CFiUGSqo
            source_type: api_record
            title: 中国历代人物传记资料库：王溱（CBDB 201734）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201734&o=json
            external_identifier: CBDB:201734
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.692Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_VYY5Qir9xK8vcSQCMAWUxm
        subject_person_id: p_jApABJHQqEgd77SBohjrMK
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1484年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TwH9sQukxY4AdS3p3VKjo5
          claim_id: c_VYY5Qir9xK8vcSQCMAWUxm
          source_id: s_18kW3WcnzNFm52CFiUGSqo
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
        id: c_5Tbsufe69Awv2BWutMRhnx
        subject_person_id: p_jApABJHQqEgd77SBohjrMK
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
        - id: cs_CCdsPQaf8NTtBStLyjqp7t
          claim_id: c_5Tbsufe69Awv2BWutMRhnx
          source_id: s_18kW3WcnzNFm52CFiUGSqo
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
  ancestors:
    - claim:
        id: c_PMUfrBD-svttaWctd-uwVD
        subject_person_id: p_bJ8rJzPN6VZNDPRrC6RiSz
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_jApABJHQqEgd77SBohjrMK
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_03-yzSbWeyR6pLHLpEMF32
          claim_id: c_PMUfrBD-svttaWctd-uwVD
          source_id: s_8GEgdmTG67BRqGC47YjVUv
          stance: supports
          locator: 正德六年進士登科錄:一卷，第三甲第三十八名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_8GEgdmTG67BRqGC47YjVUv
            source_type: api_record
            title: 中国历代人物传记资料库：王宗（CBDB 277333）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=277333&o=json
            external_identifier: CBDB:277333
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.957Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_bJ8rJzPN6VZNDPRrC6RiSz
        status: active
        display_name: 王宗
        merged_into_person_id: null
    - claim:
        id: c_4Cnl7wo7Uvpjy2rBd5CU6U
        subject_person_id: p_sgA76MaSaZNc6H2p7RgTa7
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_jApABJHQqEgd77SBohjrMK
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6Y1y529bQSO2kHU262r4JG
          claim_id: c_4Cnl7wo7Uvpjy2rBd5CU6U
          source_id: s_v1SPiDFttL1x1WGNJ4QJso
          stance: supports
          locator: 正德六年進士登科錄:一卷，第三甲第三十八名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_v1SPiDFttL1x1WGNJ4QJso
            source_type: api_record
            title: 中国历代人物传记资料库：王榮（CBDB 277332）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=277332&o=json
            external_identifier: CBDB:277332
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.957Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_sgA76MaSaZNc6H2p7RgTa7
        status: active
        display_name: 王榮
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王溱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王溱 | accepted |
| birth.date | 1484年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_bJ8rJzPN6VZNDPRrC6RiSz | 王宗 | accepted |
| ancestors | p_sgA76MaSaZNc6H2p7RgTa7 | 王榮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王溱（CBDB 201734）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201734&o=json)
- [中国历代人物传记资料库：王榮（CBDB 277332）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=277332&o=json)
- [中国历代人物传记资料库：王宗（CBDB 277333）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=277333&o=json)
