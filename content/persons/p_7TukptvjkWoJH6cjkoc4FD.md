---
schema: wang-person/v1
id: p_7TukptvjkWoJH6cjkoc4FD
status: active
merged_into: null
display_name: 王汾
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wQSbkhpTN3272cLyL66ueE
        subject_person_id: p_7TukptvjkWoJH6cjkoc4FD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tKcepVE5moeEKqVgDF1ocN
          claim_id: c_wQSbkhpTN3272cLyL66ueE
          source_id: s_ASHu7e63aVUb7NQ1NTuthZ
          stance: supports
          locator: CBDB:119728
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（119728）
          source: &a1
            id: s_ASHu7e63aVUb7NQ1NTuthZ
            source_type: api_record
            title: 中国历代人物传记资料库：王汾（CBDB 119728）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119728&o=json
            external_identifier: CBDB:119728
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.888Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ALhzgwfUeXk6uCHymfxfny
        subject_person_id: p_7TukptvjkWoJH6cjkoc4FD
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
        - id: cs_nsc6ajBKoFU9mh6HuyHjaU
          claim_id: c_ALhzgwfUeXk6uCHymfxfny
          source_id: s_ASHu7e63aVUb7NQ1NTuthZ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_gIFYiLTYyeqYZTOZYGDLwA
        subject_person_id: p_APTq991Q3yJCPFR1a9881c
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7TukptvjkWoJH6cjkoc4FD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XBmG9GKyGqtlQ7DDdF-obd
          claim_id: c_gIFYiLTYyeqYZTOZYGDLwA
          source_id: s_ASHu7e63aVUb7NQ1NTuthZ
          stance: supports
          locator: 宋史：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_APTq991Q3yJCPFR1a9881c
        status: active
        display_name: 王回
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王汾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汾 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_APTq991Q3yJCPFR1a9881c | 王回 | accepted |

## 外部来源

- [中国历代人物传记资料库：王汾（CBDB 119728）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119728&o=json)
