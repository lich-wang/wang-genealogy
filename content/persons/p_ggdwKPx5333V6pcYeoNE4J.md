---
schema: wang-person/v1
id: p_ggdwKPx5333V6pcYeoNE4J
status: active
merged_into: null
display_name: 王明德
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aBBtDBxLHQUDdtxtuiZFNc
        subject_person_id: p_ggdwKPx5333V6pcYeoNE4J
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王明德
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sjoAiQjft9XsJ8SYKvThvi
          claim_id: c_aBBtDBxLHQUDdtxtuiZFNc
          source_id: s_b4CfamJFWKHH6MRr14AYDB
          stance: supports
          locator: CBDB:232623
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（232623）
          source: &a1
            id: s_b4CfamJFWKHH6MRr14AYDB
            source_type: api_record
            title: 中国历代人物传记资料库：王明德（CBDB 232623）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232623&o=json
            external_identifier: CBDB:232623
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.698Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ViFaNPqoHnyBwFVbwNBNyX
        subject_person_id: p_ggdwKPx5333V6pcYeoNE4J
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
        - id: cs_4aMvHU48nd3gnEc6gJ31Wn
          claim_id: c_ViFaNPqoHnyBwFVbwNBNyX
          source_id: s_b4CfamJFWKHH6MRr14AYDB
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_PKVrRDsJu2ERwdmcGb6XSD
        subject_person_id: p_ggdwKPx5333V6pcYeoNE4J
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_J7gMbpNRBvFNanWSCrNShv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cVqhSyS6WGrsec3ON3cN2Q
          claim_id: c_PKVrRDsJu2ERwdmcGb6XSD
          source_id: s_b4CfamJFWKHH6MRr14AYDB
          stance: supports
          locator: 萬曆二十年壬辰科進士歷履便覽:一卷，第三甲第二百三十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_J7gMbpNRBvFNanWSCrNShv
        status: active
        display_name: 王國瑚
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王明德

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王明德 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_J7gMbpNRBvFNanWSCrNShv | 王國瑚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王明德（CBDB 232623）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232623&o=json)
