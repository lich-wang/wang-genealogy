---
schema: wang-person/v1
id: p_RTkxkvApHDbDxZZrHrwzG2
status: active
merged_into: null
display_name: 王惠
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Djn5TL6M389T66wUuzq7r2
        subject_person_id: p_RTkxkvApHDbDxZZrHrwzG2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eTmQv7i3XYqZNUWKH8VC3i
          claim_id: c_Djn5TL6M389T66wUuzq7r2
          source_id: s_GqycFRtk33GWjyWmQYcpKA
          stance: supports
          locator: CBDB:225795
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（225795）
          source: &a1
            id: s_GqycFRtk33GWjyWmQYcpKA
            source_type: api_record
            title: 中国历代人物传记资料库：王惠（CBDB 225795）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=225795&o=json
            external_identifier: CBDB:225795
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.441Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TbeFP2jj1i74ZfXAtAZrM9
        subject_person_id: p_RTkxkvApHDbDxZZrHrwzG2
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
        - id: cs_R338ViBzFJkq4CThMCWkw2
          claim_id: c_TbeFP2jj1i74ZfXAtAZrM9
          source_id: s_GqycFRtk33GWjyWmQYcpKA
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
        id: c_UE_MpOsngYNRkbqpQ4dS9N
        subject_person_id: p_RTkxkvApHDbDxZZrHrwzG2
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_hWNF7HbB9E5if6kNK731ro
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9C9cXAezBLjT0MtmRvZuqi
          claim_id: c_UE_MpOsngYNRkbqpQ4dS9N
          source_id: s_GqycFRtk33GWjyWmQYcpKA
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第一百九十五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_hWNF7HbB9E5if6kNK731ro
        status: active
        display_name: 王祿兆
        merged_into_person_id: null
  other: []
---

# 王惠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王惠 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_hWNF7HbB9E5if6kNK731ro | 王祿兆 | accepted |

## 外部来源

- [中国历代人物传记资料库：王惠（CBDB 225795）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=225795&o=json)
