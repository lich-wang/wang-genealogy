---
schema: wang-person/v1
id: p_R52ou9enwLDEw3UZNn8kjJ
status: active
merged_into: null
display_name: 王本深
cbdb_id: 292406
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_M5zrSeTQL9y3YJmY9qD7bj
        subject_person_id: p_R52ou9enwLDEw3UZNn8kjJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王本深，明人物。天順元年進士。（中国历代人物传记资料库 CBDB 292406）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_XHpJUnkpDm_93CWIkxwUHS
          claim_id: c_M5zrSeTQL9y3YJmY9qD7bj
          source_id: s_7mToG1qJBD9UAWD86Htgd4
          stance: supports
          locator: CBDB:292406
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_7mToG1qJBD9UAWD86Htgd4
            source_type: api_record
            title: 中国历代人物传记资料库：王本深（CBDB 292406）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292406&o=json
            external_identifier: CBDB:292406
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_jPeYSJbb5BTHBqEEEH6NN1
        subject_person_id: p_R52ou9enwLDEw3UZNn8kjJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王本深
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_2B6Tq4K7a85q7ntsGGrGVZ
          claim_id: c_jPeYSJbb5BTHBqEEEH6NN1
          source_id: s_7mToG1qJBD9UAWD86Htgd4
          stance: supports
          locator: CBDB:292406
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3401-3500）｜历史性依据：CBDB 朝代 = 明
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
        id: c_FPT0JdHrRuPS3ZVxXCnDvW
        subject_person_id: p_R52ou9enwLDEw3UZNn8kjJ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_MB31qtyXiP7DGzQ9oxGxHs
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XlXMagWpgVkcUfWNYnq6lQ
          claim_id: c_FPT0JdHrRuPS3ZVxXCnDvW
          source_id: s_CwWTF9VA67uJm1TkU6Bmz6
          stance: supports
          locator: 天順元年進士登科錄:一卷，第三甲第十六名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_CwWTF9VA67uJm1TkU6Bmz6
            source_type: api_record
            title: 中国历代人物传记资料库：王預（CBDB 198598）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198598&o=json
            external_identifier: CBDB:198598
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.503Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_MB31qtyXiP7DGzQ9oxGxHs
        status: active
        display_name: 王預
        merged_into_person_id: null
  other: []
---

# 王本深

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王本深，明人物。天順元年進士。（中国历代人物传记资料库 CBDB 292406） | accepted |
| name.primary | 王本深 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_MB31qtyXiP7DGzQ9oxGxHs | 王預 | accepted |

## 外部来源

- [中国历代人物传记资料库：王本深（CBDB 292406）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292406&o=json)
- [中国历代人物传记资料库：王預（CBDB 198598）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198598&o=json)
