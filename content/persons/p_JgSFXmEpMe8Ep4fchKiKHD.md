---
schema: wang-person/v1
id: p_JgSFXmEpMe8Ep4fchKiKHD
status: active
merged_into: null
display_name: 王思誠
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fFetz8ENWq3SUsAUdPjazd
        subject_person_id: p_JgSFXmEpMe8Ep4fchKiKHD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思誠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9r2BmvLsQpCpreeegWrViy
          claim_id: c_fFetz8ENWq3SUsAUdPjazd
          source_id: s_vkHSH3GmRDRVcseqqAfEdB
          stance: supports
          locator: CBDB:237221
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（237221）
          source: &a1
            id: s_vkHSH3GmRDRVcseqqAfEdB
            source_type: api_record
            title: 中国历代人物传记资料库：王思誠（CBDB 237221）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237221&o=json
            external_identifier: CBDB:237221
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.827Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kxjnaQErqwsULJ9NNry5ik
        subject_person_id: p_JgSFXmEpMe8Ep4fchKiKHD
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
        - id: cs_S3f4JC1c42Mf6BqgL39Po8
          claim_id: c_kxjnaQErqwsULJ9NNry5ik
          source_id: s_vkHSH3GmRDRVcseqqAfEdB
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
  ancestors: []
  descendants:
    - claim:
        id: c_kLSd-q-C8pZxOfy-xXVbky
        subject_person_id: p_JgSFXmEpMe8Ep4fchKiKHD
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_3c99mAbtCMe882FKM3LMji
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_C9XvKXpCSjckDWbRRyWDoo
          claim_id: c_kLSd-q-C8pZxOfy-xXVbky
          source_id: s_2T2xWRGb8XqgmHCNfr1KU2
          stance: supports
          locator: 正統四年進士登科錄:一卷，第三甲第三十四名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_2T2xWRGb8XqgmHCNfr1KU2
            source_type: api_record
            title: 中国历代人物传记资料库：王晏（CBDB 207868）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207868&o=json
            external_identifier: CBDB:207868
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.933Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3c99mAbtCMe882FKM3LMji
        status: active
        display_name: 王晏
        merged_into_person_id: null
  other: []
---

# 王思誠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王思誠 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_3c99mAbtCMe882FKM3LMji | 王晏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王思誠（CBDB 237221）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237221&o=json)
- [中国历代人物传记资料库：王晏（CBDB 207868）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207868&o=json)
