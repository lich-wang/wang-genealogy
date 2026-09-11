---
schema: wang-person/v1
id: p_Yj7oM7DrB91YsRWUgCgDRH
status: active
merged_into: null
display_name: 王鸞
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Bg6L2k8Qfj6qtcDkBGhagc
        subject_person_id: p_Yj7oM7DrB91YsRWUgCgDRH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鸞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MqyMsK93sCABERTLD8bCGn
          claim_id: c_Bg6L2k8Qfj6qtcDkBGhagc
          source_id: s_MECJMcL9CFEjcKENcAGnxP
          stance: supports
          locator: CBDB:557754
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（557754）
          source: &a1
            id: s_MECJMcL9CFEjcKENcAGnxP
            source_type: api_record
            title: 中国历代人物传记资料库：王鸞（CBDB 557754）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557754&o=json
            external_identifier: CBDB:557754
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.682Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fQ4igXM1t1PBq4NhEvsz9D
        subject_person_id: p_Yj7oM7DrB91YsRWUgCgDRH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5xeTyKKKjgF2oFXAHAx6Gz
          claim_id: c_fQ4igXM1t1PBq4NhEvsz9D
          source_id: s_MECJMcL9CFEjcKENcAGnxP
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
        id: c_rWNLR4y3rD4kV8xSxWEVOS
        subject_person_id: p_VUK6iLnZPLmpCgGeKr9o2C
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Yj7oM7DrB91YsRWUgCgDRH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XMaWzvqhVVXLdlb-Kr6pDR
          claim_id: c_rWNLR4y3rD4kV8xSxWEVOS
          source_id: s_CFPxNPTdMGCGbHWLD38mCw
          stance: supports
          locator: (乾隆)信陽州志，lgid=868520：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_CFPxNPTdMGCGbHWLD38mCw
            source_type: api_record
            title: 中国历代人物传记资料库：王榮（CBDB 557755）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557755&o=json
            external_identifier: CBDB:557755
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.682Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_VUK6iLnZPLmpCgGeKr9o2C
        status: active
        display_name: 王榮
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王鸞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鸞 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_VUK6iLnZPLmpCgGeKr9o2C | 王榮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鸞（CBDB 557754）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557754&o=json)
- [中国历代人物传记资料库：王榮（CBDB 557755）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557755&o=json)
