---
schema: wang-person/v1
id: p_67wcNBy6jc6GHKoznNP6E9
status: active
merged_into: null
display_name: 王宣
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xGtDdytuLACMuAt83MVC58
        subject_person_id: p_67wcNBy6jc6GHKoznNP6E9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BDm1JBCdDmZUrTiTM4c8sw
          claim_id: c_xGtDdytuLACMuAt83MVC58
          source_id: s_WYFfdaup3UvMbVzh3Xd4Pt
          stance: supports
          locator: CBDB:230462
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（230462）
          source: &a1
            id: s_WYFfdaup3UvMbVzh3Xd4Pt
            source_type: api_record
            title: 中国历代人物传记资料库：王宣（CBDB 230462）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230462&o=json
            external_identifier: CBDB:230462
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.611Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TQMDX4aTUcyrxNxHJhmFz2
        subject_person_id: p_67wcNBy6jc6GHKoznNP6E9
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
        - id: cs_VQeWUxPn6TK3jf9mxpWSp5
          claim_id: c_TQMDX4aTUcyrxNxHJhmFz2
          source_id: s_WYFfdaup3UvMbVzh3Xd4Pt
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
        id: c_zHeUdL4Dq7ZSNa6qnGIfDn
        subject_person_id: p_67wcNBy6jc6GHKoznNP6E9
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_W5zx3veyZyjG5gBNh4mu99
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CSD1TYu21Q33Li1gOyqw_r
          claim_id: c_zHeUdL4Dq7ZSNa6qnGIfDn
          source_id: s_WYFfdaup3UvMbVzh3Xd4Pt
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第一百五十四名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_W5zx3veyZyjG5gBNh4mu99
        status: active
        display_name: 王道正
        merged_into_person_id: null
  other: []
---

# 王宣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宣 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_W5zx3veyZyjG5gBNh4mu99 | 王道正 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宣（CBDB 230462）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230462&o=json)
