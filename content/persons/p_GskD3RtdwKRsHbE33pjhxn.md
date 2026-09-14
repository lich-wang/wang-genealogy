---
schema: wang-person/v1
id: p_GskD3RtdwKRsHbE33pjhxn
status: active
merged_into: null
display_name: 王暏
cbdb_id: 208875
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Ajx3sbRJFwqh4MvNBM5JAR
        subject_person_id: p_GskD3RtdwKRsHbE33pjhxn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王暏，明人物。隆慶五年進士，籍贯淄川。（中国历代人物传记资料库 CBDB 208875）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_GvzAJc5z7iCbM6rf-zL9jU
          claim_id: c_Ajx3sbRJFwqh4MvNBM5JAR
          source_id: s_HgtriyhocuV6UF5JGuUfZd
          stance: supports
          locator: CBDB:208875
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_HgtriyhocuV6UF5JGuUfZd
            source_type: api_record
            title: 中国历代人物传记资料库：王暏（CBDB 208875）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208875&o=json
            external_identifier: CBDB:208875
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.741Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_qCPTBYajbMLXSkBFtRqeMB
        subject_person_id: p_GskD3RtdwKRsHbE33pjhxn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王暏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_8VyFxehL51awKNvAS53F7u
          claim_id: c_qCPTBYajbMLXSkBFtRqeMB
          source_id: s_HgtriyhocuV6UF5JGuUfZd
          stance: supports
          locator: CBDB:208875
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2301-2400）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_PNjYN3lGaHedHCYThF2v8m
        subject_person_id: p_548o1SKAP1oKBMmyuHA5jA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GskD3RtdwKRsHbE33pjhxn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FuWkaKwpQDD6isJZ1TRaJm
          claim_id: c_PNjYN3lGaHedHCYThF2v8m
          source_id: s_s2dB2kcODMwW9KhtZ5cf6z
          stance: supports
          locator: CBDB：兄弟 王曉（205806）之父／母 王崇義
          quotation: null
          interpretation_note: 由兄弟关系推断：王暏 与 王曉 为同胞（CBDB 记「兄」），王曉 之父／母即 王暏 之父／母。
          source:
            id: s_s2dB2kcODMwW9KhtZ5cf6z
            source_type: api_record
            title: 中国历代人物传记资料库：王暏（CBDB 208875）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208875&o=json
            external_identifier: CBDB:208875
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_548o1SKAP1oKBMmyuHA5jA
        status: active
        display_name: 王崇義
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_3tdr7CLr9aX_tsTexMYLOD
        subject_person_id: p_GskD3RtdwKRsHbE33pjhxn
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_RznqNoKYNYcxhtUnus5Vov
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_t0-W-qBLkN4JPWA7BEVU0c
          claim_id: c_3tdr7CLr9aX_tsTexMYLOD
          source_id: s_s2dB2kcODMwW9KhtZ5cf6z
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205806 王曉）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_s2dB2kcODMwW9KhtZ5cf6z
            source_type: api_record
            title: 中国历代人物传记资料库：王暏（CBDB 208875）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208875&o=json
            external_identifier: CBDB:208875
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_RznqNoKYNYcxhtUnus5Vov
        status: active
        display_name: 王曉
        merged_into_person_id: null
---

# 王暏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王暏，明人物。隆慶五年進士，籍贯淄川。（中国历代人物传记资料库 CBDB 208875） | accepted |
| name.primary | 王暏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_548o1SKAP1oKBMmyuHA5jA | 王崇義 | accepted |
| other | p_RznqNoKYNYcxhtUnus5Vov | 王曉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王暏（CBDB 208875）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208875&o=json)
