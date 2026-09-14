---
schema: wang-person/v1
id: p_6BVg5XTFHGs5WQLK88uH4B
status: active
merged_into: null
display_name: 王世臨
cbdb_id: 233806
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GTVrLd8tvbv4uaVe4di3gk
        subject_person_id: p_6BVg5XTFHGs5WQLK88uH4B
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世臨，明人物。籍贯南充，入仕貢生 = 貢監生 (明清賓貢,功貢)。（中国历代人物传记资料库 CBDB 233806）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_ZZfqr92hH9ALWCi9N3OgvZ
          claim_id: c_GTVrLd8tvbv4uaVe4di3gk
          source_id: s_vYUJKTZD6xa8DQAbtX3TpW
          stance: supports
          locator: CBDB:233806
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_vYUJKTZD6xa8DQAbtX3TpW
            source_type: api_record
            title: 中国历代人物传记资料库：王世臨（CBDB 233806）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233806&o=json
            external_identifier: CBDB:233806
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_fSNz55dKMVusdbzQ8RiTFH
        subject_person_id: p_6BVg5XTFHGs5WQLK88uH4B
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世臨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_VAX1xdGCHuxs28TXyn2uHr
          claim_id: c_fSNz55dKMVusdbzQ8RiTFH
          source_id: s_vYUJKTZD6xa8DQAbtX3TpW
          stance: supports
          locator: CBDB:233806
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2701-2800）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_RBjoC6aaLVSxC7dc3eJRFx
        subject_person_id: p_z6ACPFtm9wPnLGvKH6v1N8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6BVg5XTFHGs5WQLK88uH4B
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HGqKtCF3FdQ_EBNJujGxu7
          claim_id: c_RBjoC6aaLVSxC7dc3eJRFx
          source_id: s_sVdXa4WyWknZ1L73FyOsZC
          stance: supports
          locator: CBDB：兄弟 王世蔭（207683）之父／母 王樓
          quotation: null
          interpretation_note: 由兄弟关系推断：王世臨 与 王世蔭 为同胞（CBDB 记「兄」），王世蔭 之父／母即 王世臨 之父／母。
          source:
            id: s_sVdXa4WyWknZ1L73FyOsZC
            source_type: api_record
            title: 中国历代人物传记资料库：王世臨（CBDB 233806）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233806&o=json
            external_identifier: CBDB:233806
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_z6ACPFtm9wPnLGvKH6v1N8
        status: active
        display_name: 王樓
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Ma0qK94AhSZO8El5za8MFN
        subject_person_id: p_6BVg5XTFHGs5WQLK88uH4B
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Rv5ych5iExch2twdfSXkLP
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JQj12YiS1QL5xR9IOK-Czq
          claim_id: c_Ma0qK94AhSZO8El5za8MFN
          source_id: s_sVdXa4WyWknZ1L73FyOsZC
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207683 王世蔭）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_sVdXa4WyWknZ1L73FyOsZC
            source_type: api_record
            title: 中国历代人物传记资料库：王世臨（CBDB 233806）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233806&o=json
            external_identifier: CBDB:233806
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Rv5ych5iExch2twdfSXkLP
        status: active
        display_name: 王世蔭
        merged_into_person_id: null
---

# 王世臨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王世臨，明人物。籍贯南充，入仕貢生 = 貢監生 (明清賓貢,功貢)。（中国历代人物传记资料库 CBDB 233806） | accepted |
| name.primary | 王世臨 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_z6ACPFtm9wPnLGvKH6v1N8 | 王樓 | accepted |
| other | p_Rv5ych5iExch2twdfSXkLP | 王世蔭 | accepted |

## 外部来源

- [中国历代人物传记资料库：王世臨（CBDB 233806）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233806&o=json)
