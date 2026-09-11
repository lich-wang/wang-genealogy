---
schema: wang-person/v1
id: p_Kk6HtmUPLWpRJz2JGAVP8C
status: active
merged_into: null
display_name: 王常
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_suFE73sNN2SxStJHvALmDX
        subject_person_id: p_Kk6HtmUPLWpRJz2JGAVP8C
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王常
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6BVBao26VtFdGmnH94HUtb
          claim_id: c_suFE73sNN2SxStJHvALmDX
          source_id: s_NaPKYLGTLL6DQuEBG2pr43
          stance: supports
          locator: CBDB:287119
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（287119）
          source: &a1
            id: s_NaPKYLGTLL6DQuEBG2pr43
            source_type: api_record
            title: 中国历代人物传记资料库：王常（CBDB 287119）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287119&o=json
            external_identifier: CBDB:287119
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.258Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZVmQQ7nvRzMQwh3LcphnnH
        subject_person_id: p_Kk6HtmUPLWpRJz2JGAVP8C
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
        - id: cs_Kfbo5DsTBuyfu93sLcwT6e
          claim_id: c_ZVmQQ7nvRzMQwh3LcphnnH
          source_id: s_NaPKYLGTLL6DQuEBG2pr43
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
        id: c_8ZzWhD7fD1bBZ31sc2mwZ7
        subject_person_id: p_Kk6HtmUPLWpRJz2JGAVP8C
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_upmMFAstLHjgZ6eyALiaEs
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pzn5sH3sfe39ZUuSLr14JU
          claim_id: c_8ZzWhD7fD1bBZ31sc2mwZ7
          source_id: s_NaPKYLGTLL6DQuEBG2pr43
          stance: supports
          locator: 天順元年進士登科錄:一卷，第二甲第五十九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_upmMFAstLHjgZ6eyALiaEs
        status: active
        display_name: 王顯
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王常

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王常 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_upmMFAstLHjgZ6eyALiaEs | 王顯 | accepted |

## 外部来源

- [中国历代人物传记资料库：王常（CBDB 287119）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287119&o=json)
