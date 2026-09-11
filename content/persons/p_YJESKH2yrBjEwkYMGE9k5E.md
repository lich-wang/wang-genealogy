---
schema: wang-person/v1
id: p_YJESKH2yrBjEwkYMGE9k5E
status: active
merged_into: null
display_name: 王儼
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1rSFM3RjBziHoSH6x1gx7Y
        subject_person_id: p_YJESKH2yrBjEwkYMGE9k5E
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZqS7KQ7fWErfwyFWXg5o95
          claim_id: c_1rSFM3RjBziHoSH6x1gx7Y
          source_id: s_SY4M5FbD5PFCMcQFkwBwSB
          stance: supports
          locator: CBDB:244046
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（244046）
          source: &a1
            id: s_SY4M5FbD5PFCMcQFkwBwSB
            source_type: api_record
            title: 中国历代人物传记资料库：王儼（CBDB 244046）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244046&o=json
            external_identifier: CBDB:244046
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.013Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LxCPhtFfAtzcNnGnYE2VnU
        subject_person_id: p_YJESKH2yrBjEwkYMGE9k5E
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儼，明人物。成化五年進士，籍贯內鄉，入仕鄉貢舉人，曾任光祿寺少卿。（中国历代人物传记资料库 CBDB 244046）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_SWYxFSFwgC_w-S_xRE-wMG
          claim_id: c_LxCPhtFfAtzcNnGnYE2VnU
          source_id: s_SY4M5FbD5PFCMcQFkwBwSB
          stance: supports
          locator: CBDB:244046
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_RISMi0ryut8pyhMGt84YmQ
        subject_person_id: p_YJESKH2yrBjEwkYMGE9k5E
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_v5g4H2q2EXrnEQmwfqdSHb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EvMsr_ZSEfK6Q3eIWQLKcA
          claim_id: c_RISMi0ryut8pyhMGt84YmQ
          source_id: s_SY4M5FbD5PFCMcQFkwBwSB
          stance: supports
          locator: 成化五年進士登科錄:一卷，第三甲第六十九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_v5g4H2q2EXrnEQmwfqdSHb
        status: active
        display_name: 王溥
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王儼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王儼 | accepted |
| bio.summary | 王儼，明人物。成化五年進士，籍贯內鄉，入仕鄉貢舉人，曾任光祿寺少卿。（中国历代人物传记资料库 CBDB 244046） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_v5g4H2q2EXrnEQmwfqdSHb | 王溥 | accepted |

## 外部来源

- [中国历代人物传记资料库：王儼（CBDB 244046）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244046&o=json)
