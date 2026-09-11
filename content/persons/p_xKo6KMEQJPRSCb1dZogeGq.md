---
schema: wang-person/v1
id: p_xKo6KMEQJPRSCb1dZogeGq
status: active
merged_into: null
display_name: 王鉞
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Kt8nBPVNhUFWLLrfuzpkRV
        subject_person_id: p_xKo6KMEQJPRSCb1dZogeGq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鉞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_D6Cmo11nsFEWHfcr9YZ5AM
          claim_id: c_Kt8nBPVNhUFWLLrfuzpkRV
          source_id: s_kk39KR8XfuqmqnS7G1pZAc
          stance: supports
          locator: CBDB:69431
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69431）
          source: &a1
            id: s_kk39KR8XfuqmqnS7G1pZAc
            source_type: api_record
            title: 中国历代人物传记资料库：王鉞（CBDB 69431）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69431&o=json
            external_identifier: CBDB:69431
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.268Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sDGsVDvDYp2DwwQq8fLamx
        subject_person_id: p_xKo6KMEQJPRSCb1dZogeGq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_A7ZXgNs56hzg8tXcv6i1qT
          claim_id: c_sDGsVDvDYp2DwwQq8fLamx
          source_id: s_kk39KR8XfuqmqnS7G1pZAc
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
        id: c_4ZEu8GYoKS6UdiTHeKJTdE
        subject_person_id: p_xKo6KMEQJPRSCb1dZogeGq
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_4shTc2a8LmgPSmNatPv2k8
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mSg-N9MKi_u_UrDmHK0YNO
          claim_id: c_4ZEu8GYoKS6UdiTHeKJTdE
          source_id: s_yVU59hN3WLNy5K5ybqm6Zy
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13140：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_yVU59hN3WLNy5K5ybqm6Zy
            source_type: api_record
            title: 中国历代人物传记资料库：王開甫（CBDB 526962）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526962&o=json
            external_identifier: CBDB:526962
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.319Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4shTc2a8LmgPSmNatPv2k8
        status: active
        display_name: 王開甫
        merged_into_person_id: null
  other: []
---

# 王鉞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鉞 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_4shTc2a8LmgPSmNatPv2k8 | 王開甫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王開甫（CBDB 526962）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526962&o=json)
- [中国历代人物传记资料库：王鉞（CBDB 69431）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69431&o=json)
