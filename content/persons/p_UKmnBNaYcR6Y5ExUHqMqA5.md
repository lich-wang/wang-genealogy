---
schema: wang-person/v1
id: p_UKmnBNaYcR6Y5ExUHqMqA5
status: active
merged_into: null
display_name: 王意
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AejQdC9dy373QYkXH2Qk5X
        subject_person_id: p_UKmnBNaYcR6Y5ExUHqMqA5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王意
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_onAeG4Np6dGEUYww74UTMP
          claim_id: c_AejQdC9dy373QYkXH2Qk5X
          source_id: s_RNHy1tsJ1hZ6pTxp1ZMtH1
          stance: supports
          locator: CBDB:239293
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（239293）
          source: &a1
            id: s_RNHy1tsJ1hZ6pTxp1ZMtH1
            source_type: api_record
            title: 中国历代人物传记资料库：王意（CBDB 239293）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239293&o=json
            external_identifier: CBDB:239293
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.894Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Ld6THAVDZxocF5XoRQRSEf
        subject_person_id: p_UKmnBNaYcR6Y5ExUHqMqA5
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
        - id: cs_bZzpPssAsCMX7f4UB4FYJv
          claim_id: c_Ld6THAVDZxocF5XoRQRSEf
          source_id: s_RNHy1tsJ1hZ6pTxp1ZMtH1
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_HEyi5XBq1FqAVLHglO2eM5
        subject_person_id: p_UKmnBNaYcR6Y5ExUHqMqA5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_H841UufcMkWpzbemaqposM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GxdO02j--WpwyYaH13cwxW
          claim_id: c_HEyi5XBq1FqAVLHglO2eM5
          source_id: s_88e9mqJVWV2xoBh8UzFFtc
          stance: supports
          locator: 正统十年進士登科錄:一卷，第二甲第四十九名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_88e9mqJVWV2xoBh8UzFFtc
            source_type: api_record
            title: 中国历代人物传记资料库：王福（CBDB 208015）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208015&o=json
            external_identifier: CBDB:208015
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.938Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_H841UufcMkWpzbemaqposM
        status: active
        display_name: 王福
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王意

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王意 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_H841UufcMkWpzbemaqposM | 王福 | accepted |

## 外部来源

- [中国历代人物传记资料库：王福（CBDB 208015）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208015&o=json)
- [中国历代人物传记资料库：王意（CBDB 239293）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239293&o=json)
