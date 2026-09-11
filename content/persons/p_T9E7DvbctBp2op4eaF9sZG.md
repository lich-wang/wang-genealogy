---
schema: wang-person/v1
id: p_T9E7DvbctBp2op4eaF9sZG
status: active
merged_into: null
display_name: 王時亮
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FcdxGfKoMGHuL89DhEfwJy
        subject_person_id: p_T9E7DvbctBp2op4eaF9sZG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時亮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ruSE3LuHQZz6XJJBcaZ2A8
          claim_id: c_FcdxGfKoMGHuL89DhEfwJy
          source_id: s_WBK8MeoGCfzqjEW7LM3Gxh
          stance: supports
          locator: CBDB:291904
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（291904）
          source: &a1
            id: s_WBK8MeoGCfzqjEW7LM3Gxh
            source_type: api_record
            title: 中国历代人物传记资料库：王時亮（CBDB 291904）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291904&o=json
            external_identifier: CBDB:291904
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.379Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xGm5HAegGSLFD5zb5Mvi16
        subject_person_id: p_T9E7DvbctBp2op4eaF9sZG
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
        - id: cs_8stp1aTXkcXY77Y6ot6ZqR
          claim_id: c_xGm5HAegGSLFD5zb5Mvi16
          source_id: s_WBK8MeoGCfzqjEW7LM3Gxh
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
        id: c_9pYlgtLO387z8hv27I9pc0
        subject_person_id: p_oDCtFv3cf2CiUbXVcBy9FF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_T9E7DvbctBp2op4eaF9sZG
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tul1mA2iePcq283fYIlF0l
          claim_id: c_9pYlgtLO387z8hv27I9pc0
          source_id: s_WBK8MeoGCfzqjEW7LM3Gxh
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第六名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_oDCtFv3cf2CiUbXVcBy9FF
        status: active
        display_name: 王廷榦
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王時亮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王時亮 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_oDCtFv3cf2CiUbXVcBy9FF | 王廷榦 | accepted |

## 外部来源

- [中国历代人物传记资料库：王時亮（CBDB 291904）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291904&o=json)
