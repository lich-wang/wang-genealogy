---
schema: wang-person/v1
id: p_C5NJgthLEeWbSTDMxHE6iV
status: active
merged_into: null
display_name: 王寧
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wkeHnFV3JJxtZWXVdT8fX6
        subject_person_id: p_C5NJgthLEeWbSTDMxHE6iV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2UF485AfPWLdZoAoqonJwo
          claim_id: c_wkeHnFV3JJxtZWXVdT8fX6
          source_id: s_M8X3wh89XBfdrbhLFWVZiq
          stance: supports
          locator: CBDB:290256
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（290256）
          source: &a1
            id: s_M8X3wh89XBfdrbhLFWVZiq
            source_type: api_record
            title: 中国历代人物传记资料库：王寧（CBDB 290256）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290256&o=json
            external_identifier: CBDB:290256
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.326Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NL5Y62dv6obUSezUvah5KB
        subject_person_id: p_C5NJgthLEeWbSTDMxHE6iV
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
        - id: cs_jZHTerb37LGTVX8W4iUMF7
          claim_id: c_NL5Y62dv6obUSezUvah5KB
          source_id: s_M8X3wh89XBfdrbhLFWVZiq
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
        id: c_r9rOMRoNuOV_KkcBkWx7VN
        subject_person_id: p_C5NJgthLEeWbSTDMxHE6iV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Td2fuKuEoYV2zfraAXswcd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SFpW8uv3T7LghPBbqR2vC7
          claim_id: c_r9rOMRoNuOV_KkcBkWx7VN
          source_id: s_M8X3wh89XBfdrbhLFWVZiq
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第三甲第一百八十四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Td2fuKuEoYV2zfraAXswcd
        status: active
        display_name: 王汝楫
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王寧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寧 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_Td2fuKuEoYV2zfraAXswcd | 王汝楫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王寧（CBDB 290256）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290256&o=json)
