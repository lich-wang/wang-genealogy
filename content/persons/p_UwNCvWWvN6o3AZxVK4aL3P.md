---
schema: wang-person/v1
id: p_UwNCvWWvN6o3AZxVK4aL3P
status: active
merged_into: null
display_name: 王宗岱
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2HUNYGG616qkGpZE7kRj5G
        subject_person_id: p_UwNCvWWvN6o3AZxVK4aL3P
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗岱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EQbNPEgPHpKXzmU9csUTfj
          claim_id: c_2HUNYGG616qkGpZE7kRj5G
          source_id: s_HCDmv8QSCtvGW47dSram4F
          stance: supports
          locator: CBDB:288563
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（288563）
          source: &a1
            id: s_HCDmv8QSCtvGW47dSram4F
            source_type: api_record
            title: 中国历代人物传记资料库：王宗岱（CBDB 288563）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288563&o=json
            external_identifier: CBDB:288563
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.294Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_htFQEqJ1695Gy1j65Qw1aF
        subject_person_id: p_UwNCvWWvN6o3AZxVK4aL3P
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗岱，明人物。嘉靖八年進士，籍贯武邑。（中国历代人物传记资料库 CBDB 288563）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_j2h8zuqlsLl3U2QoVsRz3Q
          claim_id: c_htFQEqJ1695Gy1j65Qw1aF
          source_id: s_HCDmv8QSCtvGW47dSram4F
          stance: supports
          locator: CBDB:288563
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_vjuj8hpReGV4XmU1JG38ql
        subject_person_id: p_wfbyDLXDm9dw8R5wz4t1Hc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UwNCvWWvN6o3AZxVK4aL3P
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tjsV4-x1lIcTYNSaO9u2vM
          claim_id: c_vjuj8hpReGV4XmU1JG38ql
          source_id: s_Z_kHS04yjDNHfLhVHmOC-9
          stance: supports
          locator: CBDB：兄弟 王宗恆（202460）之父／母 王璠
          quotation: null
          interpretation_note: 由兄弟关系推断：王宗岱 与 王宗恆 为同胞（CBDB 记「弟」），王宗恆 之父／母即 王宗岱 之父／母。
          source:
            id: s_Z_kHS04yjDNHfLhVHmOC-9
            source_type: api_record
            title: 中国历代人物传记资料库：王宗岱（CBDB 288563）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288563&o=json
            external_identifier: CBDB:288563
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_wfbyDLXDm9dw8R5wz4t1Hc
        status: active
        display_name: 王璠
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_YLUqMkRILCP1h7J1Q0GdAa
        subject_person_id: p_JirTxmVijtiT96YhPfvEVf
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_UwNCvWWvN6o3AZxVK4aL3P
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_B6sgseCtTCeww6JkZn_hE8
          claim_id: c_YLUqMkRILCP1h7J1Q0GdAa
          source_id: s_Z_kHS04yjDNHfLhVHmOC-9
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202460 王宗恆）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Z_kHS04yjDNHfLhVHmOC-9
            source_type: api_record
            title: 中国历代人物传记资料库：王宗岱（CBDB 288563）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288563&o=json
            external_identifier: CBDB:288563
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_JirTxmVijtiT96YhPfvEVf
        status: active
        display_name: 王宗恆
        merged_into_person_id: null
---

# 王宗岱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗岱 | accepted |
| bio.summary | 王宗岱，明人物。嘉靖八年進士，籍贯武邑。（中国历代人物传记资料库 CBDB 288563） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_wfbyDLXDm9dw8R5wz4t1Hc | 王璠 | accepted |
| other | p_JirTxmVijtiT96YhPfvEVf | 王宗恆 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宗岱（CBDB 288563）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288563&o=json)
