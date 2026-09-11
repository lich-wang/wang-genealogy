---
schema: wang-person/v1
id: p_MqRS15PUANoRYgFRXSX27e
status: active
merged_into: null
display_name: 劉氏
revision: 1
cbdb_id: 557944
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dwS0liU52oiJEV-dRAb-e8
        subject_person_id: p_MqRS15PUANoRYgFRXSX27e
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 劉氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gICPzqO03N87boMX5iMLhZ
          claim_id: c_dwS0liU52oiJEV-dRAb-e8
          source_id: s_tG3WA4OqLvseG05gHs99vl
          stance: supports
          locator: CBDB:557944
          quotation: null
          interpretation_note: CBDB 明确记录的王國傑配偶
          source: &a1
            id: s_tG3WA4OqLvseG05gHs99vl
            source_type: api_record
            title: 中国历代人物传记资料库：劉氏(王國傑妻)（CBDB 557944）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557944&o=json
            external_identifier: CBDB:557944
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_N3Mem6-j0XPL5DqQJzVa1K
        subject_person_id: p_8fJB53akJUD8Aq1ULvN69y
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_MqRS15PUANoRYgFRXSX27e
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JSP2TRLGzLidFc8-_8rT_8
          claim_id: c_N3Mem6-j0XPL5DqQJzVa1K
          source_id: s_tG3WA4OqLvseG05gHs99vl
          stance: supports
          locator: 南陽府志，lgid=878797：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_8fJB53akJUD8Aq1ULvN69y
        status: active
        display_name: 王國傑
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 劉氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 劉氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_8fJB53akJUD8Aq1ULvN69y | 王國傑 | accepted |

## 外部来源

- [中国历代人物传记资料库：劉氏(王國傑妻)（CBDB 557944）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557944&o=json)
