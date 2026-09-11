---
schema: wang-person/v1
id: p_5RFV7J2odPpRKDCszp2uRB
status: active
merged_into: null
display_name: 王榮
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KkXcUqmbmdtCZoTQJSNQdd
        subject_person_id: p_5RFV7J2odPpRKDCszp2uRB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王榮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vfKwG7fytsx2RDnZe3ThL2
          claim_id: c_KkXcUqmbmdtCZoTQJSNQdd
          source_id: s_iQ1pF26NvZNwVuM8fYWP9Y
          stance: supports
          locator: CBDB:246026
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（246026）
          source: &a1
            id: s_iQ1pF26NvZNwVuM8fYWP9Y
            source_type: api_record
            title: 中国历代人物传记资料库：王榮（CBDB 246026）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246026&o=json
            external_identifier: CBDB:246026
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.080Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QksVvsZ6U4ibKZF6g5LYp4
        subject_person_id: p_5RFV7J2odPpRKDCszp2uRB
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
        - id: cs_L5LbCiWvEGmyQtCgDkYn9w
          claim_id: c_QksVvsZ6U4ibKZF6g5LYp4
          source_id: s_iQ1pF26NvZNwVuM8fYWP9Y
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
        id: c_Bd8p0Yupl2Rsnu24TVVPMD
        subject_person_id: p_5RFV7J2odPpRKDCszp2uRB
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_UXEoSEHYsnZSPZrrqjPwf3
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ghHYytW0AVk99VtQLknqJX
          claim_id: c_Bd8p0Yupl2Rsnu24TVVPMD
          source_id: s_iQ1pF26NvZNwVuM8fYWP9Y
          stance: supports
          locator: 成化八年進士登科錄:一卷，第三甲第十五名：孫
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

# 王榮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王榮 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_UXEoSEHYsnZSPZrrqjPwf3 | 王輔 | accepted |

## 外部来源

- [中国历代人物传记资料库：王榮（CBDB 246026）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246026&o=json)
