---
schema: wang-person/v1
id: p_ygv1KiyZJv28kaqA4sHG53
status: active
merged_into: null
display_name: 王榮壽
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_85tWfZuQfeWmQz6X7MqkAd
        subject_person_id: p_ygv1KiyZJv28kaqA4sHG53
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王榮壽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KqiX95onDyYwbpyGDh572D
          claim_id: c_85tWfZuQfeWmQz6X7MqkAd
          source_id: s_QYjYpTRmTAimmB4PAMmCAk
          stance: supports
          locator: CBDB:260396
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（260396）
          source: &a1
            id: s_QYjYpTRmTAimmB4PAMmCAk
            source_type: api_record
            title: 中国历代人物传记资料库：王榮壽（CBDB 260396）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260396&o=json
            external_identifier: CBDB:260396
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.502Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_x3A2uPDTkGa3FxE1JqhKny
        subject_person_id: p_ygv1KiyZJv28kaqA4sHG53
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
        - id: cs_Zz7yvFkNGK3BDXxsJadUDK
          claim_id: c_x3A2uPDTkGa3FxE1JqhKny
          source_id: s_QYjYpTRmTAimmB4PAMmCAk
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
        id: c_7de8uBDudAHOJvRVPQfwfP
        subject_person_id: p_ygv1KiyZJv28kaqA4sHG53
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_bkiJd7fMDoFB71EF4g2i5Z
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_w-GHATj1ELRluB7tQ7qzBr
          claim_id: c_7de8uBDudAHOJvRVPQfwfP
          source_id: s_9tEBUreHpbdKWNi5b9umHP
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第一百八十七名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_9tEBUreHpbdKWNi5b9umHP
            source_type: api_record
            title: 中国历代人物传记资料库：王約（CBDB 126619）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126619&o=json
            external_identifier: CBDB:126619
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.065Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_bkiJd7fMDoFB71EF4g2i5Z
        status: active
        display_name: 王約
        merged_into_person_id: null
  other: []
---

# 王榮壽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王榮壽 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_bkiJd7fMDoFB71EF4g2i5Z | 王約 | accepted |

## 外部来源

- [中国历代人物传记资料库：王榮壽（CBDB 260396）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260396&o=json)
- [中国历代人物传记资料库：王約（CBDB 126619）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126619&o=json)
