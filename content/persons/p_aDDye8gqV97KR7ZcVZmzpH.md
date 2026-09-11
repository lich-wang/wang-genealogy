---
schema: wang-person/v1
id: p_aDDye8gqV97KR7ZcVZmzpH
status: active
merged_into: null
display_name: 王密
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_r3rMej22fKDTTYTT226sjM
        subject_person_id: p_aDDye8gqV97KR7ZcVZmzpH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王密
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kk8cDcEw78DKgB9zAdthvW
          claim_id: c_r3rMej22fKDTTYTT226sjM
          source_id: s_Uz3Zj3USJax82Ucuko7p17
          stance: supports
          locator: CBDB:236255
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（236255）
          source: &a1
            id: s_Uz3Zj3USJax82Ucuko7p17
            source_type: api_record
            title: 中国历代人物传记资料库：王密（CBDB 236255）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236255&o=json
            external_identifier: CBDB:236255
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.771Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JPn388H372Hg2RKj3DYvgo
        subject_person_id: p_aDDye8gqV97KR7ZcVZmzpH
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
        - id: cs_e6PrJsiDbSWQ3iu2D9BfgD
          claim_id: c_JPn388H372Hg2RKj3DYvgo
          source_id: s_Uz3Zj3USJax82Ucuko7p17
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
        id: c_pqcYyNclIRRBlUT_2cy9df
        subject_person_id: p_aDDye8gqV97KR7ZcVZmzpH
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Q4mq6fygocp26TN7xUYfs3
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_x9rIIf2oc0f0qQHW4m3HGY
          claim_id: c_pqcYyNclIRRBlUT_2cy9df
          source_id: s_Uz3Zj3USJax82Ucuko7p17
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第三甲第十二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Q4mq6fygocp26TN7xUYfs3
        status: active
        display_name: 王弘祖
        merged_into_person_id: null
  other: []
---

# 王密

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王密 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_Q4mq6fygocp26TN7xUYfs3 | 王弘祖 | accepted |

## 外部来源

- [中国历代人物传记资料库：王密（CBDB 236255）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236255&o=json)
