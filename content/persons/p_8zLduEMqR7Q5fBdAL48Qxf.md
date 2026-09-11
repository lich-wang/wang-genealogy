---
schema: wang-person/v1
id: p_8zLduEMqR7Q5fBdAL48Qxf
status: active
merged_into: null
display_name: 林氏
revision: 1
cbdb_id: 700122
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QZfPoQIfWZgLSuE6BbgYWU
        subject_person_id: p_8zLduEMqR7Q5fBdAL48Qxf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 林氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xnOnSIFofoIaas9aWULBm0
          claim_id: c_QZfPoQIfWZgLSuE6BbgYWU
          source_id: s_TkroFV2tlG9Hz9H9zI_GHg
          stance: supports
          locator: CBDB:700122
          quotation: null
          interpretation_note: CBDB 明确记录的王端配偶
          source: &a1
            id: s_TkroFV2tlG9Hz9H9zI_GHg
            source_type: api_record
            title: 中国历代人物传记资料库：林氏(林倩二孫女)（CBDB 700122）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700122&o=json
            external_identifier: CBDB:700122
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
        id: c_sKxftQLqygQpKgIddSg3dg
        subject_person_id: p_3Pt7K7E8EkVZMay1yZAJ4D
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_8zLduEMqR7Q5fBdAL48Qxf
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wKN49KejzUquKqg62EqQ59
          claim_id: c_sKxftQLqygQpKgIddSg3dg
          source_id: s_TkroFV2tlG9Hz9H9zI_GHg
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，北宋204 林倩墓志：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_3Pt7K7E8EkVZMay1yZAJ4D
        status: active
        display_name: 王端
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 林氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 林氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_3Pt7K7E8EkVZMay1yZAJ4D | 王端 | accepted |

## 外部来源

- [中国历代人物传记资料库：林氏(林倩二孫女)（CBDB 700122）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700122&o=json)
