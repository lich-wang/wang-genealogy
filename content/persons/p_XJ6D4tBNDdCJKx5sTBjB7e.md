---
schema: wang-person/v1
id: p_XJ6D4tBNDdCJKx5sTBjB7e
status: active
merged_into: null
display_name: 王瀚
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ehs8PPfShXT2GsWdHuFbi4
        subject_person_id: p_XJ6D4tBNDdCJKx5sTBjB7e
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瀚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NNb26WhoPjNmSyuwmrZbf9
          claim_id: c_Ehs8PPfShXT2GsWdHuFbi4
          source_id: s_L9CevzhFSMSbRD76TWgCcq
          stance: supports
          locator: CBDB:309646
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（309646）
          source: &a1
            id: s_L9CevzhFSMSbRD76TWgCcq
            source_type: api_record
            title: 中国历代人物传记资料库：王瀚（CBDB 309646）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309646&o=json
            external_identifier: CBDB:309646
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.823Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_brcFmJ42GTGuMS6QMDY2zT
        subject_person_id: p_XJ6D4tBNDdCJKx5sTBjB7e
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
        - id: cs_FWUejaA5hYhtabeYhS3cTK
          claim_id: c_brcFmJ42GTGuMS6QMDY2zT
          source_id: s_L9CevzhFSMSbRD76TWgCcq
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
        id: c_bA8JxrQeQeYJ68A5jiv00C
        subject_person_id: p_XJ6D4tBNDdCJKx5sTBjB7e
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_923xZ5qSMZFGgS46h7nLWU
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qPGyOjQM9c8V3o6nE3A0Ed
          claim_id: c_bA8JxrQeQeYJ68A5jiv00C
          source_id: s_eb5Xn1ejYbkj9jFGqum44L
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第三甲第十五名：祖父
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

# 王瀚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瀚 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_923xZ5qSMZFGgS46h7nLWU | 王樵 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瀚（CBDB 309646）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309646&o=json)
- [中国历代人物传记资料库：王樵（CBDB 34720）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34720&o=json)
