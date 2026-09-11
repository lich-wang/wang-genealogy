---
schema: wang-person/v1
id: p_fTmpC1A5d2U7VnChtChQKk
status: active
merged_into: null
display_name: 王洪
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aN91EmzCqGYJxdhES7YdmQ
        subject_person_id: p_fTmpC1A5d2U7VnChtChQKk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王洪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_djYqtQCQYkLYQfE7MEGRrX
          claim_id: c_aN91EmzCqGYJxdhES7YdmQ
          source_id: s_yEPE58AsCaLaoNFBLcu9KY
          stance: supports
          locator: CBDB:328624
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（328624）
          source: &a1
            id: s_yEPE58AsCaLaoNFBLcu9KY
            source_type: api_record
            title: 中国历代人物传记资料库：王洪（CBDB 328624）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328624&o=json
            external_identifier: CBDB:328624
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.307Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_y2g9sDnJ1sXU4VNrAFZ3i7
        subject_person_id: p_fTmpC1A5d2U7VnChtChQKk
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
        - id: cs_X6JcWbGibNLuaL1DeYh9nu
          claim_id: c_y2g9sDnJ1sXU4VNrAFZ3i7
          source_id: s_yEPE58AsCaLaoNFBLcu9KY
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
        id: c_fM2imRz-HaBxjAem72AhJa
        subject_person_id: p_fTmpC1A5d2U7VnChtChQKk
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_kAp4jgFVdUZGBRH4zNTPTY
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BxY4E668j6VgLK-6M87LUY
          claim_id: c_fM2imRz-HaBxjAem72AhJa
          source_id: s_yEPE58AsCaLaoNFBLcu9KY
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第一百三十八名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_kAp4jgFVdUZGBRH4zNTPTY
        status: active
        display_name: 王承芳
        merged_into_person_id: null
  other: []
---

# 王洪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王洪 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_kAp4jgFVdUZGBRH4zNTPTY | 王承芳 | accepted |

## 外部来源

- [中国历代人物传记资料库：王洪（CBDB 328624）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328624&o=json)
