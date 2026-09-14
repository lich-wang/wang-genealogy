---
schema: wang-person/v1
id: p_8mExp5yMEpk6UPfybMARKS
status: active
merged_into: null
display_name: 王世儉
cbdb_id: 285108
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZqkWc8UBXr9HQrQXYGAFMr
        subject_person_id: p_8mExp5yMEpk6UPfybMARKS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世儉，明人物。正德十六年進士，籍贯開州。（中国历代人物传记资料库 CBDB 285108）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_q9Bkk_ewAuMIbekyAgRe3U
          claim_id: c_ZqkWc8UBXr9HQrQXYGAFMr
          source_id: s_KSXGX4dk2iZybN1YQ5LjTn
          stance: supports
          locator: CBDB:285108
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_KSXGX4dk2iZybN1YQ5LjTn
            source_type: api_record
            title: 中国历代人物传记资料库：王世儉（CBDB 285108）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285108&o=json
            external_identifier: CBDB:285108
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.953Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_99jqAt7mH493bTGoohb29F
        subject_person_id: p_8mExp5yMEpk6UPfybMARKS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世儉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_kGkip6NSgGofxTFMdEFxeF
          claim_id: c_99jqAt7mH493bTGoohb29F
          source_id: s_KSXGX4dk2iZybN1YQ5LjTn
          stance: supports
          locator: CBDB:285108
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3301-3400）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c__H73iD7jwUrASqSsSHAXQa
        subject_person_id: p_5xNKeJnMLc2HP1gUGBRQHQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8mExp5yMEpk6UPfybMARKS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RTQ0ZBLPK16F30QqHPoWQY
          claim_id: c__H73iD7jwUrASqSsSHAXQa
          source_id: s_uNugAZCmRLiUMqFg_KRbZZ
          stance: supports
          locator: CBDB：兄弟 王世爵（202209）之父／母 王緒
          quotation: null
          interpretation_note: 由兄弟关系推断：王世儉 与 王世爵 为同胞（CBDB 记「兄」），王世爵 之父／母即 王世儉 之父／母。
          source:
            id: s_uNugAZCmRLiUMqFg_KRbZZ
            source_type: api_record
            title: 中国历代人物传记资料库：王世儉（CBDB 285108）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285108&o=json
            external_identifier: CBDB:285108
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5xNKeJnMLc2HP1gUGBRQHQ
        status: active
        display_name: 王緒
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_AVZyHPshi9C5Yc0V8oP0sp
        subject_person_id: p_8mExp5yMEpk6UPfybMARKS
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_mzfdPkfX3Q3SMWu8QjHhbB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2zgyIgZf3RA7wIIkRSVGVp
          claim_id: c_AVZyHPshi9C5Yc0V8oP0sp
          source_id: s_uNugAZCmRLiUMqFg_KRbZZ
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202209 王世爵）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_uNugAZCmRLiUMqFg_KRbZZ
            source_type: api_record
            title: 中国历代人物传记资料库：王世儉（CBDB 285108）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285108&o=json
            external_identifier: CBDB:285108
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_mzfdPkfX3Q3SMWu8QjHhbB
        status: active
        display_name: 王世爵
        merged_into_person_id: null
---

# 王世儉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王世儉，明人物。正德十六年進士，籍贯開州。（中国历代人物传记资料库 CBDB 285108） | accepted |
| name.primary | 王世儉 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5xNKeJnMLc2HP1gUGBRQHQ | 王緒 | accepted |
| other | p_mzfdPkfX3Q3SMWu8QjHhbB | 王世爵 | accepted |

## 外部来源

- [中国历代人物传记资料库：王世儉（CBDB 285108）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285108&o=json)
