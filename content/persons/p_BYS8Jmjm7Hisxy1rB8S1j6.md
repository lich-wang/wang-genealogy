---
schema: wang-person/v1
id: p_BYS8Jmjm7Hisxy1rB8S1j6
status: active
merged_into: null
display_name: 王銳
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fpNzEBrHXyWvKcGBBk6pCu
        subject_person_id: p_BYS8Jmjm7Hisxy1rB8S1j6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王銳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_41mhC84YSB8MJ4vSgAdt2R
          claim_id: c_fpNzEBrHXyWvKcGBBk6pCu
          source_id: s_rZXZ4PK8ESi4b4FtD9GGBZ
          stance: supports
          locator: CBDB:28621
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（28621）
          source: &a1
            id: s_rZXZ4PK8ESi4b4FtD9GGBZ
            source_type: api_record
            title: 中国历代人物传记资料库：王銳（CBDB 28621）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28621&o=json
            external_identifier: CBDB:28621
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.970Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WnTR9nmoMgK17F1iPF7Y4w
        subject_person_id: p_BYS8Jmjm7Hisxy1rB8S1j6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王銳，金人物。籍贯真定。（中国历代人物传记资料库 CBDB 28621）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YwR6hUvlvQLiQunv_NtftS
          claim_id: c_WnTR9nmoMgK17F1iPF7Y4w
          source_id: s_rZXZ4PK8ESi4b4FtD9GGBZ
          stance: supports
          locator: CBDB:28621
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_rbTf6C__FyQNTyJq4kfZMg
        subject_person_id: p_BYS8Jmjm7Hisxy1rB8S1j6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kTZ8UGUB5jY8LbGPJTkPP8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RvhGFXZQ7t_HXHcLOY_83e
          claim_id: c_rbTf6C__FyQNTyJq4kfZMg
          source_id: s_rZXZ4PK8ESi4b4FtD9GGBZ
          stance: supports
          locator: CBDB 双向互证（子 王國綱 ⇄ 父 王銳）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_kTZ8UGUB5jY8LbGPJTkPP8
        status: active
        display_name: 王國綱
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王銳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王銳 | accepted |
| bio.summary | 王銳，金人物。籍贯真定。（中国历代人物传记资料库 CBDB 28621） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_kTZ8UGUB5jY8LbGPJTkPP8 | 王國綱 | accepted |

## 外部来源

- [中国历代人物传记资料库：王銳（CBDB 28621）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28621&o=json)
