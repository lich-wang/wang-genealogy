---
schema: wang-person/v1
id: p_vX4Qavr621fJhbozYn1Wtw
status: active
merged_into: null
display_name: 王荀
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mkq1yi19nVi3J52Lfw7ikC
        subject_person_id: p_vX4Qavr621fJhbozYn1Wtw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王荀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JFG4PaaU7oCfFdmFMDTeHK
          claim_id: c_mkq1yi19nVi3J52Lfw7ikC
          source_id: s_rv7QET7i1aM99CZHLLg6Zm
          stance: supports
          locator: CBDB:36931
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（36931）
          source: &a1
            id: s_rv7QET7i1aM99CZHLLg6Zm
            source_type: api_record
            title: 中国历代人物传记资料库：王荀（CBDB 36931）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36931&o=json
            external_identifier: CBDB:36931
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.187Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NGvALWHEpxaFy7Mp8Lpi5H
        subject_person_id: p_vX4Qavr621fJhbozYn1Wtw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王荀，宋人物。籍贯巢縣。（中国历代人物传记资料库 CBDB 36931）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vN51-qlQNzpD-rETlBzk_c
          claim_id: c_NGvALWHEpxaFy7Mp8Lpi5H
          source_id: s_rv7QET7i1aM99CZHLLg6Zm
          stance: supports
          locator: CBDB:36931
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_sB5BRULgXTvA2WxhogSbdi
        subject_person_id: p_qdfj8n9aJt992f6xYnsVk6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vX4Qavr621fJhbozYn1Wtw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fyyFnGkIqAgzKmUprHM1ah
          claim_id: c_sB5BRULgXTvA2WxhogSbdi
          source_id: s_pgFzQwb5QlaCw4DRYP6o6y
          stance: supports
          locator: CBDB 亲属：父（KinPerson 1786）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_pgFzQwb5QlaCw4DRYP6o6y
            source_type: api_record
            title: 中国历代人物传记资料库：王荀（CBDB 36931）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36931&o=json
            external_identifier: CBDB:36931
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qdfj8n9aJt992f6xYnsVk6
        status: active
        display_name: 王之道
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王荀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王荀 | accepted |
| bio.summary | 王荀，宋人物。籍贯巢縣。（中国历代人物传记资料库 CBDB 36931） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_qdfj8n9aJt992f6xYnsVk6 | 王之道 | accepted |

## 外部来源

- [中国历代人物传记资料库：王荀（CBDB 36931）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36931&o=json)
