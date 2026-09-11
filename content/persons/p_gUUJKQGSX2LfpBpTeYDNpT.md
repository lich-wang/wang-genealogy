---
schema: wang-person/v1
id: p_gUUJKQGSX2LfpBpTeYDNpT
status: active
merged_into: null
display_name: 王美
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_y3WwWdUK6brdfPkVQUVe8h
        subject_person_id: p_gUUJKQGSX2LfpBpTeYDNpT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王美
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zqtKb7ZRX7Tj3bqnEjTzra
          claim_id: c_y3WwWdUK6brdfPkVQUVe8h
          source_id: s_6LNf1iku1BDXY79VE1yfsi
          stance: supports
          locator: CBDB:331574
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（331574）
          source: &a1
            id: s_6LNf1iku1BDXY79VE1yfsi
            source_type: api_record
            title: 中国历代人物传记资料库：王美（CBDB 331574）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331574&o=json
            external_identifier: CBDB:331574
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.368Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_e8FSNW12d7QHoNxStf11NM
        subject_person_id: p_gUUJKQGSX2LfpBpTeYDNpT
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
        - id: cs_fwiUPNbQLybuchZ482BxEK
          claim_id: c_e8FSNW12d7QHoNxStf11NM
          source_id: s_6LNf1iku1BDXY79VE1yfsi
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
        id: c_y7Fe60hVNtdhHEE_zieS73
        subject_person_id: p_gUUJKQGSX2LfpBpTeYDNpT
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_8FE6kbWmNCoQTRuebayd8Y
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KaWp1qFN9dJZo-Cy02Yq4U
          claim_id: c_y7Fe60hVNtdhHEE_zieS73
          source_id: s_6LNf1iku1BDXY79VE1yfsi
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第一百二十九名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_8FE6kbWmNCoQTRuebayd8Y
        status: active
        display_name: 王元賓
        merged_into_person_id: null
  other: []
---

# 王美

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王美 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_8FE6kbWmNCoQTRuebayd8Y | 王元賓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王美（CBDB 331574）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331574&o=json)
