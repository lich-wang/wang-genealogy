---
schema: wang-person/v1
id: p_Zq4mJMQVLGpnDc4Hf8ri4Y
status: active
merged_into: null
display_name: 王璇
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jmtvBepBQZ9n18heZ1DJzV
        subject_person_id: p_Zq4mJMQVLGpnDc4Hf8ri4Y
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Qw8PwhFRYUDCssSu5FLYNS
          claim_id: c_jmtvBepBQZ9n18heZ1DJzV
          source_id: s_HZcCoJW1pQPRfkhhAX3KKX
          stance: supports
          locator: CBDB:315707
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（315707）
          source: &a1
            id: s_HZcCoJW1pQPRfkhhAX3KKX
            source_type: api_record
            title: 中国历代人物传记资料库：王璇（CBDB 315707）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315707&o=json
            external_identifier: CBDB:315707
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.949Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_z4z82nDA4B5jGf8HJihTNK
        subject_person_id: p_Zq4mJMQVLGpnDc4Hf8ri4Y
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璇，明人物。嘉靖三十二年進士，籍贯崑山。（中国历代人物传记资料库 CBDB 315707）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7Vb4g4RQ3d61slTk3QTLfG
          claim_id: c_z4z82nDA4B5jGf8HJihTNK
          source_id: s_HZcCoJW1pQPRfkhhAX3KKX
          stance: supports
          locator: CBDB:315707
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_9ECGnBqGfCQSAFqj2FbbWj
        subject_person_id: p_QuF4DaKK4SqaM66dLXVH8d
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Zq4mJMQVLGpnDc4Hf8ri4Y
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8a2vmv2O1Tz_GDh6orCU8i
          claim_id: c_9ECGnBqGfCQSAFqj2FbbWj
          source_id: s_RJtj9cW5dx8mmfDwGl2s82
          stance: supports
          locator: CBDB：兄弟 王宇（204187）之父／母 王億
          quotation: null
          interpretation_note: 由兄弟关系推断：王璇 与 王宇 为同胞（CBDB 记「弟」），王宇 之父／母即 王璇 之父／母。
          source:
            id: s_RJtj9cW5dx8mmfDwGl2s82
            source_type: api_record
            title: 中国历代人物传记资料库：王璇（CBDB 315707）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315707&o=json
            external_identifier: CBDB:315707
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_QuF4DaKK4SqaM66dLXVH8d
        status: active
        display_name: 王億
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_4eQPhNkxpChT6AF8gSaYwS
        subject_person_id: p_GXZCrH2ek2TqbFGJ8qqmqw
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Zq4mJMQVLGpnDc4Hf8ri4Y
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_U_IzXsB55evH4WadCfzsJ7
          claim_id: c_4eQPhNkxpChT6AF8gSaYwS
          source_id: s_RJtj9cW5dx8mmfDwGl2s82
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204187 王宇）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_RJtj9cW5dx8mmfDwGl2s82
            source_type: api_record
            title: 中国历代人物传记资料库：王璇（CBDB 315707）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315707&o=json
            external_identifier: CBDB:315707
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GXZCrH2ek2TqbFGJ8qqmqw
        status: active
        display_name: 王宇
        merged_into_person_id: null
---

# 王璇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璇 | accepted |
| bio.summary | 王璇，明人物。嘉靖三十二年進士，籍贯崑山。（中国历代人物传记资料库 CBDB 315707） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_QuF4DaKK4SqaM66dLXVH8d | 王億 | accepted |
| other | p_GXZCrH2ek2TqbFGJ8qqmqw | 王宇 | accepted |

## 外部来源

- [中国历代人物传记资料库：王璇（CBDB 315707）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315707&o=json)
