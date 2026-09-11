---
schema: wang-person/v1
id: p_MfJiUsMRyT9mTNPXKac7Dw
status: active
merged_into: null
display_name: 王彥舉
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZHkZ2PAhWd4FAejo6HKc77
        subject_person_id: p_MfJiUsMRyT9mTNPXKac7Dw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥舉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Jp1F1pnauE33emHo8Vhx6G
          claim_id: c_ZHkZ2PAhWd4FAejo6HKc77
          source_id: s_Si8avKHpmgFu7nx1zTCC29
          stance: supports
          locator: CBDB:17822
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（17822）
          source: &a1
            id: s_Si8avKHpmgFu7nx1zTCC29
            source_type: api_record
            title: 中国历代人物传记资料库：王彥舉（CBDB 17822）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17822&o=json
            external_identifier: CBDB:17822
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.682Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_F9jrDTQBZ9rCCPn5HtHCSg
        subject_person_id: p_MfJiUsMRyT9mTNPXKac7Dw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PnonmNwf7thyvSqAwe6kMg
          claim_id: c_F9jrDTQBZ9rCCPn5HtHCSg
          source_id: s_Si8avKHpmgFu7nx1zTCC29
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
  ancestors:
    - claim:
        id: c_4EDJ2jZj9mLdA5zBbTe3ex
        subject_person_id: p_TXJvtdFRgZUQXsFzGvjCnR
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_MfJiUsMRyT9mTNPXKac7Dw
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dtyfx_aPPg50LQQumdS3EX
          claim_id: c_4EDJ2jZj9mLdA5zBbTe3ex
          source_id: s_Si8avKHpmgFu7nx1zTCC29
          stance: supports
          locator: CBDB 双向互证（曾祖 王世規 ⇄ 曾孫; 重孫 王彥舉）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_TXJvtdFRgZUQXsFzGvjCnR
        status: active
        display_name: 王世规
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王彥舉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王彥舉 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_TXJvtdFRgZUQXsFzGvjCnR | 王世规 | accepted |

## 外部来源

- [中国历代人物传记资料库：王彥舉（CBDB 17822）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17822&o=json)
