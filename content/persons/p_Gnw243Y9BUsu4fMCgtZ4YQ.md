---
schema: wang-person/v1
id: p_Gnw243Y9BUsu4fMCgtZ4YQ
status: active
merged_into: null
display_name: 王若谷
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_m9Kp1TSTXPZhPtS315uk6E
        subject_person_id: p_Gnw243Y9BUsu4fMCgtZ4YQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王若谷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dFXYw9m3WAPRL4KK5S93Jo
          claim_id: c_m9Kp1TSTXPZhPtS315uk6E
          source_id: s_YoKzMD2CuhqtQCNNGCcmvd
          stance: supports
          locator: CBDB:526935
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（526935）
          source: &a1
            id: s_YoKzMD2CuhqtQCNNGCcmvd
            source_type: api_record
            title: 中国历代人物传记资料库：王若谷（CBDB 526935）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526935&o=json
            external_identifier: CBDB:526935
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.344Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_J5BLgL6H2tS1xV58dmLSPJ
        subject_person_id: p_Gnw243Y9BUsu4fMCgtZ4YQ
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
        - id: cs_MAzTEjMbH6P4TugjE9s187
          claim_id: c_J5BLgL6H2tS1xV58dmLSPJ
          source_id: s_YoKzMD2CuhqtQCNNGCcmvd
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
        id: c_qEN9MrGWXetFvXFIS_lKmQ
        subject_person_id: p_Gnw243Y9BUsu4fMCgtZ4YQ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_BqV4dkbfe88g1hjKaVeqoe
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-DhYA8dsZ3hxgyeBC7qLEQ
          claim_id: c_qEN9MrGWXetFvXFIS_lKmQ
          source_id: s_EFjyPV44zJq4g5PRSDfZMe
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13103：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_EFjyPV44zJq4g5PRSDfZMe
            source_type: api_record
            title: 中国历代人物传记资料库：王維德（CBDB 69398）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69398&o=json
            external_identifier: CBDB:69398
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.248Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BqV4dkbfe88g1hjKaVeqoe
        status: active
        display_name: 王維德
        merged_into_person_id: null
  other: []
---

# 王若谷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王若谷 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_BqV4dkbfe88g1hjKaVeqoe | 王維德 | accepted |

## 外部来源

- [中国历代人物传记资料库：王若谷（CBDB 526935）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526935&o=json)
- [中国历代人物传记资料库：王維德（CBDB 69398）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69398&o=json)
