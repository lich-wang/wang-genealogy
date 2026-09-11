---
schema: wang-person/v1
id: p_niAWGy3PExNvwx864ZUMD4
status: active
merged_into: null
display_name: 王麟
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8JBiaLtXFGG5cforxmxUx6
        subject_person_id: p_niAWGy3PExNvwx864ZUMD4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王麟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QjME2fcwf1ScJzCtfpWQnJ
          claim_id: c_8JBiaLtXFGG5cforxmxUx6
          source_id: s_19CCRmEk9KFjP33x48aXKd
          stance: supports
          locator: CBDB:330747
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（330747）
          source: &a1
            id: s_19CCRmEk9KFjP33x48aXKd
            source_type: api_record
            title: 中国历代人物传记资料库：王麟（CBDB 330747）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330747&o=json
            external_identifier: CBDB:330747
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.354Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GGx6bXztPyrcy4DLYJVQM3
        subject_person_id: p_niAWGy3PExNvwx864ZUMD4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王麟，明人物。嘉靖四十四年進士，曾任戶部主事、教授。（中国历代人物传记资料库 CBDB 330747）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ofN7UWhh_anq6_JzgIvCtB
          claim_id: c_GGx6bXztPyrcy4DLYJVQM3
          source_id: s_19CCRmEk9KFjP33x48aXKd
          stance: supports
          locator: CBDB:330747
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
        id: c_YSp939RBf6StORAClh-lOF
        subject_person_id: p_niAWGy3PExNvwx864ZUMD4
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_hkxRnkwdABHFBvtuuQxejY
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gI54Er0dD2_ymgc321fypo
          claim_id: c_YSp939RBf6StORAClh-lOF
          source_id: s_19CCRmEk9KFjP33x48aXKd
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第四十七名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_hkxRnkwdABHFBvtuuQxejY
        status: active
        display_name: 王象坤
        merged_into_person_id: null
  other: []
---

# 王麟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王麟 | accepted |
| bio.summary | 王麟，明人物。嘉靖四十四年進士，曾任戶部主事、教授。（中国历代人物传记资料库 CBDB 330747） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_hkxRnkwdABHFBvtuuQxejY | 王象坤 | accepted |

## 外部来源

- [中国历代人物传记资料库：王麟（CBDB 330747）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330747&o=json)
