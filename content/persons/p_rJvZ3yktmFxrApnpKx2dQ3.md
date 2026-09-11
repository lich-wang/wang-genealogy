---
schema: wang-person/v1
id: p_rJvZ3yktmFxrApnpKx2dQ3
status: active
merged_into: null
display_name: 王整
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CByRHo4uBgsCWP9T8bXpgp
        subject_person_id: p_rJvZ3yktmFxrApnpKx2dQ3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王整
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_F3zqM46HHfhJzEwEFZRCV9
          claim_id: c_CByRHo4uBgsCWP9T8bXpgp
          source_id: s_ZMedo3CSZPMa4aqsohGbXN
          stance: supports
          locator: CBDB:246025
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（246025）
          source: &a1
            id: s_ZMedo3CSZPMa4aqsohGbXN
            source_type: api_record
            title: 中国历代人物传记资料库：王整（CBDB 246025）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246025&o=json
            external_identifier: CBDB:246025
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.079Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9FXjaAJjPAY5eGM93YNwg2
        subject_person_id: p_rJvZ3yktmFxrApnpKx2dQ3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王整，明人物。成化八年進士。（中国历代人物传记资料库 CBDB 246025）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_sXDa5flzfu9FBPL-luSka7
          claim_id: c_9FXjaAJjPAY5eGM93YNwg2
          source_id: s_ZMedo3CSZPMa4aqsohGbXN
          stance: supports
          locator: CBDB:246025
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
        id: c_u4PghzHVGylbAc0s4dPGK_
        subject_person_id: p_rJvZ3yktmFxrApnpKx2dQ3
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_UXEoSEHYsnZSPZrrqjPwf3
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_n0tng6dMapyp68Lxdscm7O
          claim_id: c_u4PghzHVGylbAc0s4dPGK_
          source_id: s_ZMedo3CSZPMa4aqsohGbXN
          stance: supports
          locator: 成化八年進士登科錄:一卷，第三甲第十五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_UXEoSEHYsnZSPZrrqjPwf3
        status: active
        display_name: 王輔
        merged_into_person_id: null
  other: []
---

# 王整

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王整 | accepted |
| bio.summary | 王整，明人物。成化八年進士。（中国历代人物传记资料库 CBDB 246025） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_UXEoSEHYsnZSPZrrqjPwf3 | 王輔 | accepted |

## 外部来源

- [中国历代人物传记资料库：王整（CBDB 246025）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246025&o=json)
