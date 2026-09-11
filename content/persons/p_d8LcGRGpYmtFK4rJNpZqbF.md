---
schema: wang-person/v1
id: p_d8LcGRGpYmtFK4rJNpZqbF
status: active
merged_into: null
display_name: 汪氏
revision: 1
cbdb_id: 39391
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UJMaHG-ELZ2TsvCnHEXQiY
        subject_person_id: p_d8LcGRGpYmtFK4rJNpZqbF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 汪氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ilW0FSi2WoiLC_Mr0I885M
          claim_id: c_UJMaHG-ELZ2TsvCnHEXQiY
          source_id: s_20wRmTORb39s6BOszPUerM
          stance: supports
          locator: CBDB:39391
          quotation: null
          interpretation_note: CBDB 明确记录的王炎配偶
          source: &a1
            id: s_20wRmTORb39s6BOszPUerM
            source_type: api_record
            title: 中国历代人物传记资料库：汪氏(王炎妻)（CBDB 39391）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39391&o=json
            external_identifier: CBDB:39391
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
        id: c_NzX_aN6yukd1XFcVpjY14c
        subject_person_id: p_eTn5grdY57WP95rxAMqTrj
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_d8LcGRGpYmtFK4rJNpZqbF
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MgLHWsScmeKWb_cwUAArNJ
          claim_id: c_NzX_aN6yukd1XFcVpjY14c
          source_id: s_20wRmTORb39s6BOszPUerM
          stance: supports
          locator: 宋人傳記資料索引(電子版)，683;684：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_eTn5grdY57WP95rxAMqTrj
        status: active
        display_name: 王炎
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 汪氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 汪氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_eTn5grdY57WP95rxAMqTrj | 王炎 | accepted |

## 外部来源

- [中国历代人物传记资料库：汪氏(王炎妻)（CBDB 39391）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39391&o=json)
