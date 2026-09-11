---
schema: wang-person/v1
id: p_kSC4jKpAH5bDUyzQGm5FXh
status: active
merged_into: null
display_name: 王顯
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_51NHjfG18xBokHuEkg2Raa
        subject_person_id: p_kSC4jKpAH5bDUyzQGm5FXh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王顯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iFiYJkpmUa17ctJBTj2eKk
          claim_id: c_51NHjfG18xBokHuEkg2Raa
          source_id: s_wzWm1MZ4FxiPM5qiq3vK9Z
          stance: supports
          locator: CBDB:274509
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（274509）
          source: &a1
            id: s_wzWm1MZ4FxiPM5qiq3vK9Z
            source_type: api_record
            title: 中国历代人物传记资料库：王顯（CBDB 274509）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274509&o=json
            external_identifier: CBDB:274509
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.926Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Rr5fEpCAGHuYLqHyuHD4qE
        subject_person_id: p_kSC4jKpAH5bDUyzQGm5FXh
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
        - id: cs_2dZdTBGmPJq1tk7cqZy5mM
          claim_id: c_Rr5fEpCAGHuYLqHyuHD4qE
          source_id: s_wzWm1MZ4FxiPM5qiq3vK9Z
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
        id: c_Yp9YtcmmBWqx8hJ0leURei
        subject_person_id: p_kSC4jKpAH5bDUyzQGm5FXh
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_zZSCY67HkNBWB8Tm85kU28
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GI5YbRrQKdR_LJEHuoffc_
          claim_id: c_Yp9YtcmmBWqx8hJ0leURei
          source_id: s_wzWm1MZ4FxiPM5qiq3vK9Z
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第三甲第八十五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_zZSCY67HkNBWB8Tm85kU28
        status: active
        display_name: 王民質
        merged_into_person_id: null
  other: []
---

# 王顯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王顯 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_zZSCY67HkNBWB8Tm85kU28 | 王民質 | accepted |

## 外部来源

- [中国历代人物传记资料库：王顯（CBDB 274509）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274509&o=json)
