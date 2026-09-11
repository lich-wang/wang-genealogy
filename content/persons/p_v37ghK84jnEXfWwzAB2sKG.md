---
schema: wang-person/v1
id: p_v37ghK84jnEXfWwzAB2sKG
status: active
merged_into: null
display_name: 周維延
revision: 1
cbdb_id: 54081
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EciUZzhns0rWSZ1ectyrQ4
        subject_person_id: p_v37ghK84jnEXfWwzAB2sKG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 周維延
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HU7jZcfL1rUIePwkzjJhCp
          claim_id: c_EciUZzhns0rWSZ1ectyrQ4
          source_id: s_DMImEr9hlDwekUaVdR2fOs
          stance: supports
          locator: CBDB:54081
          quotation: null
          interpretation_note: CBDB 明确记录的王瓊配偶
          source: &a1
            id: s_DMImEr9hlDwekUaVdR2fOs
            source_type: api_record
            title: 中国历代人物传记资料库：周維延（CBDB 54081）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=54081&o=json
            external_identifier: CBDB:54081
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
        id: c_T1ZPTjHY4sS22YrXpvkC2l
        subject_person_id: p_HL29vq33Fy7C1Q7S2XNM4e
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_v37ghK84jnEXfWwzAB2sKG
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OWgud1VMEzP_nfBeMjDiVa
          claim_id: c_T1ZPTjHY4sS22YrXpvkC2l
          source_id: s_DMImEr9hlDwekUaVdR2fOs
          stance: supports
          locator: CBDB 双向互证（丈夫 周維延）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_HL29vq33Fy7C1Q7S2XNM4e
        status: active
        display_name: 王瓊
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 周維延

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 周維延 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_HL29vq33Fy7C1Q7S2XNM4e | 王瓊 | accepted |

## 外部来源

- [中国历代人物传记资料库：周維延（CBDB 54081）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=54081&o=json)
