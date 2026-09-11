---
schema: wang-person/v1
id: p_R34uSpR6TYLYd5FHAwpGjA
status: active
merged_into: null
display_name: 王本宗
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8o6CkWgPuLV94Bgt9BMepb
        subject_person_id: p_R34uSpR6TYLYd5FHAwpGjA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王本宗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7GRM8XCtLkj6dW6kmbcBCj
          claim_id: c_8o6CkWgPuLV94Bgt9BMepb
          source_id: s_XZLb3Kmv4Cy4oZTJXxYEyb
          stance: supports
          locator: CBDB:237431
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（237431）
          source: &a1
            id: s_XZLb3Kmv4Cy4oZTJXxYEyb
            source_type: api_record
            title: 中国历代人物传记资料库：王本宗（CBDB 237431）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237431&o=json
            external_identifier: CBDB:237431
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.838Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zCuHkBumFoGSxK65Vy5sGp
        subject_person_id: p_R34uSpR6TYLYd5FHAwpGjA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王本宗，明人物。成化二年進士，曾任義官。（中国历代人物传记资料库 CBDB 237431）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_bzldCDDjnXVBnIEN3JXObQ
          claim_id: c_zCuHkBumFoGSxK65Vy5sGp
          source_id: s_XZLb3Kmv4Cy4oZTJXxYEyb
          stance: supports
          locator: CBDB:237431
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
        id: c_ijq9Z3ntOPzXvLUOI178Ka
        subject_person_id: p_R34uSpR6TYLYd5FHAwpGjA
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_V99Mmn5gsgVZ4CwJWSpRRc
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JHNUXyeqxpCZ8Ti24jQhJv
          claim_id: c_ijq9Z3ntOPzXvLUOI178Ka
          source_id: s_XZLb3Kmv4Cy4oZTJXxYEyb
          stance: supports
          locator: 成化二年進士登科錄:一卷，第三甲第八十七名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_V99Mmn5gsgVZ4CwJWSpRRc
        status: active
        display_name: 王賓
        merged_into_person_id: null
  other: []
---

# 王本宗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王本宗 | accepted |
| bio.summary | 王本宗，明人物。成化二年進士，曾任義官。（中国历代人物传记资料库 CBDB 237431） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_V99Mmn5gsgVZ4CwJWSpRRc | 王賓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王本宗（CBDB 237431）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237431&o=json)
