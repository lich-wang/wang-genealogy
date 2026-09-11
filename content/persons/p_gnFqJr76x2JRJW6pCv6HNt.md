---
schema: wang-person/v1
id: p_gnFqJr76x2JRJW6pCv6HNt
status: active
merged_into: null
display_name: 王彥威
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xXvX5Cj4szW3W5KokEHnLG
        subject_person_id: p_gnFqJr76x2JRJW6pCv6HNt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥威
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wTmGnkSHdUKX4C7JuogZz7
          claim_id: c_xXvX5Cj4szW3W5KokEHnLG
          source_id: s_epjzLjwGWDkLp8WNpyA6tv
          stance: supports
          locator: CBDB:150821
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（150821）
          source: &a1
            id: s_epjzLjwGWDkLp8WNpyA6tv
            source_type: api_record
            title: 中国历代人物传记资料库：王彥威（CBDB 150821）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150821&o=json
            external_identifier: CBDB:150821
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.828Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BYd557Y5V74fLYngey3Fnb
        subject_person_id: p_gnFqJr76x2JRJW6pCv6HNt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Wv4vHnrGex3DsgekCb5hjB
          claim_id: c_BYd557Y5V74fLYngey3Fnb
          source_id: s_epjzLjwGWDkLp8WNpyA6tv
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
        id: c_VIEUC8sk0po7ZHGmk2lbXq
        subject_person_id: p_gnFqJr76x2JRJW6pCv6HNt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xD2UGXBYGMspPLNa3BxAbe
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_79I2HT0_3z3xSseLv9V8Uw
          claim_id: c_VIEUC8sk0po7ZHGmk2lbXq
          source_id: s_epjzLjwGWDkLp8WNpyA6tv
          stance: supports
          locator: 唐代墓誌匯編:二卷，Jinglong 29：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_xD2UGXBYGMspPLNa3BxAbe
        status: active
        display_name: 王齊丘
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王彥威

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王彥威 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_xD2UGXBYGMspPLNa3BxAbe | 王齊丘 | accepted |

## 外部来源

- [中国历代人物传记资料库：王彥威（CBDB 150821）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150821&o=json)
