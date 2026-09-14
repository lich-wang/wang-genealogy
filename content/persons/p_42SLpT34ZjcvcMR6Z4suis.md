---
schema: wang-person/v1
id: p_42SLpT34ZjcvcMR6Z4suis
status: active
merged_into: null
display_name: 王期化
cbdb_id: 324018
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hnwEDPP3Zx9X4X1PQLhBaY
        subject_person_id: p_42SLpT34ZjcvcMR6Z4suis
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王期化，明人物。嘉靖三十八年進士，籍贯潞州衛。（中国历代人物传记资料库 CBDB 324018）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_8LDZEIZqqnwiuAuGIkD-4f
          claim_id: c_hnwEDPP3Zx9X4X1PQLhBaY
          source_id: s_4wSJN2zgC15tV1gAcdAwEP
          stance: supports
          locator: CBDB:324018
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_4wSJN2zgC15tV1gAcdAwEP
            source_type: api_record
            title: 中国历代人物传记资料库：王期化（CBDB 324018）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324018&o=json
            external_identifier: CBDB:324018
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.922Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_GN13GZL2DsbP2MHsfDsqs6
        subject_person_id: p_42SLpT34ZjcvcMR6Z4suis
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王期化
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_mSxAErAcPEgze2Ngb8NyQa
          claim_id: c_GN13GZL2DsbP2MHsfDsqs6
          source_id: s_4wSJN2zgC15tV1gAcdAwEP
          stance: supports
          locator: CBDB:324018
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3801-3900）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_-23tg-Nwye9NCOPb093d3n
        subject_person_id: p_CEMGnZJGkUBUQcSpdxgPnV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_42SLpT34ZjcvcMR6Z4suis
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qm5FjGRCM4GbfekgUYLpVy
          claim_id: c_-23tg-Nwye9NCOPb093d3n
          source_id: s_uzhyxICbrekBaOCIGCntlu
          stance: supports
          locator: CBDB：兄弟 王期古（204782）之父／母 王龍
          quotation: null
          interpretation_note: 由兄弟关系推断：王期化 与 王期古 为同胞（CBDB 记「兄」），王期古 之父／母即 王期化 之父／母。
          source:
            id: s_uzhyxICbrekBaOCIGCntlu
            source_type: api_record
            title: 中国历代人物传记资料库：王期化（CBDB 324018）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324018&o=json
            external_identifier: CBDB:324018
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CEMGnZJGkUBUQcSpdxgPnV
        status: active
        display_name: 王龍
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_XMYj9yJRPUq-sUbYCstwB2
        subject_person_id: p_42SLpT34ZjcvcMR6Z4suis
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_RQNnvu8c2y9N9EYgnmFtCC
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PCOOvQQ4tYmkjqJbmeIByp
          claim_id: c_XMYj9yJRPUq-sUbYCstwB2
          source_id: s_uzhyxICbrekBaOCIGCntlu
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204782 王期古）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_uzhyxICbrekBaOCIGCntlu
            source_type: api_record
            title: 中国历代人物传记资料库：王期化（CBDB 324018）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324018&o=json
            external_identifier: CBDB:324018
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_RQNnvu8c2y9N9EYgnmFtCC
        status: active
        display_name: 王期古
        merged_into_person_id: null
---

# 王期化

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王期化，明人物。嘉靖三十八年進士，籍贯潞州衛。（中国历代人物传记资料库 CBDB 324018） | accepted |
| name.primary | 王期化 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_CEMGnZJGkUBUQcSpdxgPnV | 王龍 | accepted |
| other | p_RQNnvu8c2y9N9EYgnmFtCC | 王期古 | accepted |

## 外部来源

- [中国历代人物传记资料库：王期化（CBDB 324018）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324018&o=json)
