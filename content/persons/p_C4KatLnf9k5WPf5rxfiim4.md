---
schema: wang-person/v1
id: p_C4KatLnf9k5WPf5rxfiim4
status: active
merged_into: null
display_name: 王華
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VE7otDLF3Jw7Lcm6FucuBQ
        subject_person_id: p_C4KatLnf9k5WPf5rxfiim4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王華
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5G5q7fxk4SpQ6pDM7FKzsN
          claim_id: c_VE7otDLF3Jw7Lcm6FucuBQ
          source_id: s_peUP1PSSaBwkYHVcu112Q4
          stance: supports
          locator: CBDB:454174
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（454174）
          source: &a1
            id: s_peUP1PSSaBwkYHVcu112Q4
            source_type: api_record
            title: 中国历代人物传记资料库：王華（CBDB 454174）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=454174&o=json
            external_identifier: CBDB:454174
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.433Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oQty2Se2gx6iHxKDPvVyQQ
        subject_person_id: p_C4KatLnf9k5WPf5rxfiim4
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
        - id: cs_KA29BtTenZmPGVYrwymQX5
          claim_id: c_oQty2Se2gx6iHxKDPvVyQQ
          source_id: s_peUP1PSSaBwkYHVcu112Q4
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
  descendants: []
  other: []
---

# 王華

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王華 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王華（CBDB 454174）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=454174&o=json)
