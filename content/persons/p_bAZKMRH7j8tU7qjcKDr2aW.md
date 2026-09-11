---
schema: wang-person/v1
id: p_bAZKMRH7j8tU7qjcKDr2aW
status: active
merged_into: null
display_name: 王鍊
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hWsXVLYk78sCjVXh6Sf9Po
        subject_person_id: p_bAZKMRH7j8tU7qjcKDr2aW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鍊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MxwHsnYCMYSEa57J2MG4F6
          claim_id: c_hWsXVLYk78sCjVXh6Sf9Po
          source_id: s_ACm8w4JZEVVCLWWJasq9v8
          stance: supports
          locator: CBDB:313479
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（313479）
          source: &a1
            id: s_ACm8w4JZEVVCLWWJasq9v8
            source_type: api_record
            title: 中国历代人物传记资料库：王鍊（CBDB 313479）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313479&o=json
            external_identifier: CBDB:313479
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.908Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9H7Gb8MMaZqtYHoKMth3Cj
        subject_person_id: p_bAZKMRH7j8tU7qjcKDr2aW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鍊，明人物。嘉靖二十九年進士，籍贯永嘉，曾任府教授。（中国历代人物传记资料库 CBDB 313479）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_aiuiBLiICn5cZ60HRNA9dm
          claim_id: c_9H7Gb8MMaZqtYHoKMth3Cj
          source_id: s_ACm8w4JZEVVCLWWJasq9v8
          stance: supports
          locator: CBDB:313479
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_ojG94FzsJyYRwQnIJFS0Fi
        subject_person_id: p_bAZKMRH7j8tU7qjcKDr2aW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5GKmc7UBMnwgzBKbep1LTG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MNsjqfYS77doF0oXjNzvzA
          claim_id: c_ojG94FzsJyYRwQnIJFS0Fi
          source_id: s_Nm1QHMi2nHmFQJMsjfaAoh
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第八十一名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Nm1QHMi2nHmFQJMsjfaAoh
            source_type: api_record
            title: 中国历代人物传记资料库：王諍（CBDB 126801）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126801&o=json
            external_identifier: CBDB:126801
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.214Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5GKmc7UBMnwgzBKbep1LTG
        status: active
        display_name: 王諍
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王鍊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鍊 | accepted |
| bio.summary | 王鍊，明人物。嘉靖二十九年進士，籍贯永嘉，曾任府教授。（中国历代人物传记资料库 CBDB 313479） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_5GKmc7UBMnwgzBKbep1LTG | 王諍 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鍊（CBDB 313479）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313479&o=json)
- [中国历代人物传记资料库：王諍（CBDB 126801）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126801&o=json)
