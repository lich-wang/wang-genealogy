---
schema: wang-person/v1
id: p_zGe2fA1bCJMQ5BpMf3A16W
status: active
merged_into: null
display_name: 王懷
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_27X2Fp5fdki6TWx8qQbD2M
        subject_person_id: p_zGe2fA1bCJMQ5BpMf3A16W
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_p6VxeARSVo3X2KdeEtYanJ
          claim_id: c_27X2Fp5fdki6TWx8qQbD2M
          source_id: s_jPfc8aAhADg43CjH3Aqv8A
          stance: supports
          locator: CBDB:312972
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（312972）
          source: &a1
            id: s_jPfc8aAhADg43CjH3Aqv8A
            source_type: api_record
            title: 中国历代人物传记资料库：王懷（CBDB 312972）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312972&o=json
            external_identifier: CBDB:312972
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.891Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XB8DGz4od9TX16Ti82AiCm
        subject_person_id: p_zGe2fA1bCJMQ5BpMf3A16W
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懷，明人物。嘉靖二十九年進士，曾任典史。（中国历代人物传记资料库 CBDB 312972）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Nox89EetOgHvrQtsNHppK8
          claim_id: c_XB8DGz4od9TX16Ti82AiCm
          source_id: s_jPfc8aAhADg43CjH3Aqv8A
          stance: supports
          locator: CBDB:312972
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
        id: c_DwW7OB_IKHwvC1Qt5P6qUk
        subject_person_id: p_zGe2fA1bCJMQ5BpMf3A16W
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_WQT1Hm7LSS63rTgZwvcsM7
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Gk5FUYkQ_A6NvHK4AypFOv
          claim_id: c_DwW7OB_IKHwvC1Qt5P6qUk
          source_id: s_jPfc8aAhADg43CjH3Aqv8A
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第三十名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_WQT1Hm7LSS63rTgZwvcsM7
        status: active
        display_name: 王希堯
        merged_into_person_id: null
  other: []
---

# 王懷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王懷 | accepted |
| bio.summary | 王懷，明人物。嘉靖二十九年進士，曾任典史。（中国历代人物传记资料库 CBDB 312972） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_WQT1Hm7LSS63rTgZwvcsM7 | 王希堯 | accepted |

## 外部来源

- [中国历代人物传记资料库：王懷（CBDB 312972）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312972&o=json)
