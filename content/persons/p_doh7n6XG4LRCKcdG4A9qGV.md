---
schema: wang-person/v1
id: p_doh7n6XG4LRCKcdG4A9qGV
status: active
merged_into: null
display_name: 王洪極
cbdb_id: 233445
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DcjdivMUE7CaCDVEB2m6yw
        subject_person_id: p_doh7n6XG4LRCKcdG4A9qGV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王洪極，明人物。籍贯海鹽，入仕監生。（中国历代人物传记资料库 CBDB 233445）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_aPnmWQxxPT5HK22VyCrt9E
          claim_id: c_DcjdivMUE7CaCDVEB2m6yw
          source_id: s_LTuK8osw76kRY61FzoB5ej
          stance: supports
          locator: CBDB:233445
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_LTuK8osw76kRY61FzoB5ej
            source_type: api_record
            title: 中国历代人物传记资料库：王洪極（CBDB 233445）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233445&o=json
            external_identifier: CBDB:233445
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_PwhjL1NgeK55KFhCP5eACE
        subject_person_id: p_doh7n6XG4LRCKcdG4A9qGV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王洪極
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_TFQiA9sCpmMtg3rGhbyJ44
          claim_id: c_PwhjL1NgeK55KFhCP5eACE
          source_id: s_LTuK8osw76kRY61FzoB5ej
          stance: supports
          locator: CBDB:233445
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2701-2800）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_fRYvIvAfm_4hxHVhfLP0OH
        subject_person_id: p_uE1u3bYV3J8fuYnjaWRvAs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_doh7n6XG4LRCKcdG4A9qGV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_--TMfuU93dLzBIA2mZhSer
          claim_id: c_fRYvIvAfm_4hxHVhfLP0OH
          source_id: s_QgxLQToudguhgsV21nkYZV
          stance: supports
          locator: CBDB：兄弟 王家相（207666）之父／母 王釗
          quotation: null
          interpretation_note: 由兄弟关系推断：王洪極 与 王家相 为同胞（CBDB 记「弟」），王家相 之父／母即 王洪極 之父／母。
          source:
            id: s_QgxLQToudguhgsV21nkYZV
            source_type: api_record
            title: 中国历代人物传记资料库：王洪極（CBDB 233445）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233445&o=json
            external_identifier: CBDB:233445
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_uE1u3bYV3J8fuYnjaWRvAs
        status: active
        display_name: 王釗
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Fjui296BN0uF6glBBOsmCg
        subject_person_id: p_cpGBEq63QojtvoRHpvNFEb
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_doh7n6XG4LRCKcdG4A9qGV
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_j3UsK0La-U6HAp-WP_e8he
          claim_id: c_Fjui296BN0uF6glBBOsmCg
          source_id: s_QgxLQToudguhgsV21nkYZV
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 207666 王家相）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_QgxLQToudguhgsV21nkYZV
            source_type: api_record
            title: 中国历代人物传记资料库：王洪極（CBDB 233445）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233445&o=json
            external_identifier: CBDB:233445
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_cpGBEq63QojtvoRHpvNFEb
        status: active
        display_name: 王家相
        merged_into_person_id: null
---

# 王洪極

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王洪極，明人物。籍贯海鹽，入仕監生。（中国历代人物传记资料库 CBDB 233445） | accepted |
| name.primary | 王洪極 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_uE1u3bYV3J8fuYnjaWRvAs | 王釗 | accepted |
| other | p_cpGBEq63QojtvoRHpvNFEb | 王家相 | accepted |

## 外部来源

- [中国历代人物传记资料库：王洪極（CBDB 233445）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233445&o=json)
