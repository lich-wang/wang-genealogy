---
schema: wang-person/v1
id: p_AuvMJTzFGs5d4XX8kQYwFG
status: active
merged_into: null
display_name: 王繼文
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_r5sGpSuKELcn7nwSedKWBv
        subject_person_id: p_AuvMJTzFGs5d4XX8kQYwFG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼文
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Pn4q74D1g8igxf75TRU1F8
          claim_id: c_r5sGpSuKELcn7nwSedKWBv
          source_id: s_6Lo94Zr29kvdTAw33vL95L
          stance: supports
          locator: CBDB:17422
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（17422）
          source: &a1
            id: s_6Lo94Zr29kvdTAw33vL95L
            source_type: api_record
            title: 中国历代人物传记资料库：王繼文（CBDB 17422）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17422&o=json
            external_identifier: CBDB:17422
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.659Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ELW8drix3xu6QSWXDJfc8g
        subject_person_id: p_AuvMJTzFGs5d4XX8kQYwFG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iEYBPWzURb5nKcTdCpo4oX
          claim_id: c_ELW8drix3xu6QSWXDJfc8g
          source_id: s_6Lo94Zr29kvdTAw33vL95L
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
  descendants: []
  other: []
---

# 王繼文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王繼文 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王繼文（CBDB 17422）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17422&o=json)
