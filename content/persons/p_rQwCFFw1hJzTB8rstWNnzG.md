---
schema: wang-person/v1
id: p_rQwCFFw1hJzTB8rstWNnzG
status: active
merged_into: null
display_name: 李府君
revision: 1
cbdb_id: 148509
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ijtvI_066E0ZsDP7NJy7K8
        subject_person_id: p_rQwCFFw1hJzTB8rstWNnzG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 李府君
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zO2O9VwB24o6GmcGrf8j2t
          claim_id: c_ijtvI_066E0ZsDP7NJy7K8
          source_id: s_xM2VJbaxG1fRrIwgflH4MH
          stance: supports
          locator: CBDB:148509
          quotation: null
          interpretation_note: CBDB 明确记录的王婉配偶
          source: &a1
            id: s_xM2VJbaxG1fRrIwgflH4MH
            source_type: api_record
            title: 中国历代人物传记资料库：李府君(王婉夫)（CBDB 148509）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148509&o=json
            external_identifier: CBDB:148509
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
        id: c_PulWSfFhDaNBAnXcXbcpbs
        subject_person_id: p_CuRhibkL6B7uRpyoNUdWAQ
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_rQwCFFw1hJzTB8rstWNnzG
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6oVeoA8TYpLq6UFvgkDuKt
          claim_id: c_PulWSfFhDaNBAnXcXbcpbs
          source_id: s_xM2VJbaxG1fRrIwgflH4MH
          stance: supports
          locator: 唐代墓誌匯編:二卷，Xianheng 27：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_CuRhibkL6B7uRpyoNUdWAQ
        status: active
        display_name: 王婉
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 李府君

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 李府君 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_CuRhibkL6B7uRpyoNUdWAQ | 王婉 | accepted |

## 外部来源

- [中国历代人物传记资料库：李府君(王婉夫)（CBDB 148509）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148509&o=json)
