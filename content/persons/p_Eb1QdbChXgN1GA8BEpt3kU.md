---
schema: wang-person/v1
id: p_Eb1QdbChXgN1GA8BEpt3kU
status: active
merged_into: null
display_name: 王鎮
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hADMZA8jUz7KzxnPXxvCvk
        subject_person_id: p_Eb1QdbChXgN1GA8BEpt3kU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SN7mLrETaYXp33wsQJNtoL
          claim_id: c_hADMZA8jUz7KzxnPXxvCvk
          source_id: s_adNh4E11SRLkbh2TAezLns
          stance: supports
          locator: CBDB:309645
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（309645）
          source: &a1
            id: s_adNh4E11SRLkbh2TAezLns
            source_type: api_record
            title: 中国历代人物传记资料库：王鎮（CBDB 309645）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309645&o=json
            external_identifier: CBDB:309645
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.822Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RbpsULUMqYiP4TQCL2AWe6
        subject_person_id: p_Eb1QdbChXgN1GA8BEpt3kU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎮，明人物。嘉靖二十六年進士。（中国历代人物传记资料库 CBDB 309645）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_lDxsS1oG5y5GBPgN6MaeLI
          claim_id: c_RbpsULUMqYiP4TQCL2AWe6
          source_id: s_adNh4E11SRLkbh2TAezLns
          stance: supports
          locator: CBDB:309645
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
        id: c_W5gj3nmCx_8itkP3hEgRsQ
        subject_person_id: p_Eb1QdbChXgN1GA8BEpt3kU
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_923xZ5qSMZFGgS46h7nLWU
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6I31ULflWEwLVZt5G_UHB2
          claim_id: c_W5gj3nmCx_8itkP3hEgRsQ
          source_id: s_eb5Xn1ejYbkj9jFGqum44L
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第三甲第十五名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_eb5Xn1ejYbkj9jFGqum44L
            source_type: api_record
            title: 中国历代人物传记资料库：王樵（CBDB 34720）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34720&o=json
            external_identifier: CBDB:34720
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.097Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_923xZ5qSMZFGgS46h7nLWU
        status: active
        display_name: 王樵
        merged_into_person_id: null
  other: []
---

# 王鎮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鎮 | accepted |
| bio.summary | 王鎮，明人物。嘉靖二十六年進士。（中国历代人物传记资料库 CBDB 309645） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_923xZ5qSMZFGgS46h7nLWU | 王樵 | accepted |

## 外部来源

- [中国历代人物传记资料库：王樵（CBDB 34720）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34720&o=json)
- [中国历代人物传记资料库：王鎮（CBDB 309645）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309645&o=json)
