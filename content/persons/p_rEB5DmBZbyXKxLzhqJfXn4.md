---
schema: wang-person/v1
id: p_rEB5DmBZbyXKxLzhqJfXn4
status: active
merged_into: null
display_name: 王谷堡
cbdb_id: 254561
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uKKrBDVjcUuxjETx73xwL4
        subject_person_id: p_rEB5DmBZbyXKxLzhqJfXn4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王谷堡，明人物。建文二年殿試進士。（中国历代人物传记资料库 CBDB 254561）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_XheBqaBxQjzJbny1IRZ6fE
          claim_id: c_uKKrBDVjcUuxjETx73xwL4
          source_id: s_B6eMpVcmcXT3zwNWh6RSKg
          stance: supports
          locator: CBDB:254561
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_B6eMpVcmcXT3zwNWh6RSKg
            source_type: api_record
            title: 中国历代人物传记资料库：王谷堡（CBDB 254561）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=254561&o=json
            external_identifier: CBDB:254561
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:00.581Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_gkjCNGTFG85npBxScrh5m6
        subject_person_id: p_rEB5DmBZbyXKxLzhqJfXn4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王谷堡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_fq5Na3oParjASQqeut2KZw
          claim_id: c_gkjCNGTFG85npBxScrh5m6
          source_id: s_B6eMpVcmcXT3zwNWh6RSKg
          stance: supports
          locator: CBDB:254561
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3001-3100）｜历史性依据：CBDB 朝代 = 明
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
        id: c__P5_wABqDKkWBpGORsT4AB
        subject_person_id: p_rEB5DmBZbyXKxLzhqJfXn4
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_6Gg8iGSgGr3S6qEitAvCqZ
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sEbnVGI0vbjr1fO60pg1QD
          claim_id: c__P5_wABqDKkWBpGORsT4AB
          source_id: s_EDAR71GKiVBtQ9XHGXTeMe
          stance: supports
          locator: 建文二年殿試登科錄:一卷，第三甲第四十七名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_EDAR71GKiVBtQ9XHGXTeMe
            source_type: api_record
            title: 中国历代人物传记资料库：王政（CBDB 200180）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200180&o=json
            external_identifier: CBDB:200180
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.594Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6Gg8iGSgGr3S6qEitAvCqZ
        status: active
        display_name: 王政
        merged_into_person_id: null
  other: []
---

# 王谷堡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王谷堡，明人物。建文二年殿試進士。（中国历代人物传记资料库 CBDB 254561） | accepted |
| name.primary | 王谷堡 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_6Gg8iGSgGr3S6qEitAvCqZ | 王政 | accepted |

## 外部来源

- [中国历代人物传记资料库：王谷堡（CBDB 254561）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=254561&o=json)
- [中国历代人物传记资料库：王政（CBDB 200180）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200180&o=json)
