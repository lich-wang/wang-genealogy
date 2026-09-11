---
schema: wang-person/v1
id: p_GXZCrH2ek2TqbFGJ8qqmqw
status: active
merged_into: null
display_name: 王宇
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AzAHJBrQ7G9FwUyK6sa8SY
        subject_person_id: p_GXZCrH2ek2TqbFGJ8qqmqw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Q2MydjMTRcHd5arze11J22
          claim_id: c_AzAHJBrQ7G9FwUyK6sa8SY
          source_id: s_Q26QGsE1tDWf8c5tgB1Cix
          stance: supports
          locator: CBDB:204187
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（204187）
          source: &a1
            id: s_Q26QGsE1tDWf8c5tgB1Cix
            source_type: api_record
            title: 中国历代人物传记资料库：王宇（CBDB 204187）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204187&o=json
            external_identifier: CBDB:204187
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.819Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_at3QfA8QBXM2Dmz8hx2Kkw
        subject_person_id: p_GXZCrH2ek2TqbFGJ8qqmqw
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1518年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_A2VG13n3HmdYit16DEG2EL
          claim_id: c_at3QfA8QBXM2Dmz8hx2Kkw
          source_id: s_Q26QGsE1tDWf8c5tgB1Cix
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
        id: c_6jYs97JCFkzxNLxKfoP8BQ
        subject_person_id: p_GXZCrH2ek2TqbFGJ8qqmqw
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
        - id: cs_gUD5XX8se6VWajbRgfF9Kg
          claim_id: c_6jYs97JCFkzxNLxKfoP8BQ
          source_id: s_Q26QGsE1tDWf8c5tgB1Cix
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
        id: c_CqWcd8SXHLdBe0lYgTwl4j
        subject_person_id: p_QuF4DaKK4SqaM66dLXVH8d
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GXZCrH2ek2TqbFGJ8qqmqw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Bhp9xkE0dHWgxO8xi1ycrf
          claim_id: c_CqWcd8SXHLdBe0lYgTwl4j
          source_id: s_JV9KsRurtZYg171fJ7Lg7T
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第二甲第七十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_JV9KsRurtZYg171fJ7Lg7T
            source_type: api_record
            title: 中国历代人物传记资料库：王億（CBDB 315703）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315703&o=json
            external_identifier: CBDB:315703
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.948Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_QuF4DaKK4SqaM66dLXVH8d
        status: active
        display_name: 王億
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_KQ5q122cNnnE2ew06px7Nj
        subject_person_id: p_BhzbpVnWNojWd9QYAz11EY
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_GXZCrH2ek2TqbFGJ8qqmqw
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0AeLM9fPJEyy5oKLI1L5FP
          claim_id: c_KQ5q122cNnnE2ew06px7Nj
          source_id: s_4TXVvFYqGUTP297xcjE1Su
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第二甲第七十三名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_4TXVvFYqGUTP297xcjE1Su
            source_type: api_record
            title: 中国历代人物传记资料库：王寶（CBDB 315701）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315701&o=json
            external_identifier: CBDB:315701
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.947Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BhzbpVnWNojWd9QYAz11EY
        status: active
        display_name: 王寶
        merged_into_person_id: null
    - claim:
        id: c_ICVSynne5m_Rm-udNhmOHQ
        subject_person_id: p_j2pBDD21Qom1eWLd3CawJw
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_GXZCrH2ek2TqbFGJ8qqmqw
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Q4T2TrI0FWcWGxJUsrUdXw
          claim_id: c_ICVSynne5m_Rm-udNhmOHQ
          source_id: s_Q4dJ9vkeXEpGN7T2oG3MuY
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第二甲第七十三名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Q4dJ9vkeXEpGN7T2oG3MuY
            source_type: api_record
            title: 中国历代人物传记资料库：王慶（CBDB 315702）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315702&o=json
            external_identifier: CBDB:315702
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.948Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_j2pBDD21Qom1eWLd3CawJw
        status: active
        display_name: 王慶
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王宇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宇 | accepted |
| birth.date | 1518年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_QuF4DaKK4SqaM66dLXVH8d | 王億 | accepted |
| ancestors | p_BhzbpVnWNojWd9QYAz11EY | 王寶 | accepted |
| ancestors | p_j2pBDD21Qom1eWLd3CawJw | 王慶 | accepted |

## 外部来源

- [中国历代人物传记资料库：王寶（CBDB 315701）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315701&o=json)
- [中国历代人物传记资料库：王慶（CBDB 315702）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315702&o=json)
- [中国历代人物传记资料库：王億（CBDB 315703）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315703&o=json)
- [中国历代人物传记资料库：王宇（CBDB 204187）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204187&o=json)
