---
schema: wang-person/v1
id: p_ZtPLst7z8SqwBQZGyED72K
status: active
merged_into: null
display_name: 王漸逵
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HkJD11wqoi32B4HRMLExY1
        subject_person_id: p_ZtPLst7z8SqwBQZGyED72K
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王漸逵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_maHEAcHYiB8eVD7QxLcgZT
          claim_id: c_HkJD11wqoi32B4HRMLExY1
          source_id: s_BN7xnKk26q4D4Jj4ZHESJA
          stance: supports
          locator: CBDB:327867
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（327867）
          source: &a1
            id: s_BN7xnKk26q4D4Jj4ZHESJA
            source_type: api_record
            title: 中国历代人物传记资料库：王漸逵（CBDB 327867）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327867&o=json
            external_identifier: CBDB:327867
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.268Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_To1MoHqZdC2e8TKFAn5joY
        subject_person_id: p_ZtPLst7z8SqwBQZGyED72K
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
        - id: cs_Api6DFn6tt8gpVJTZjF9NA
          claim_id: c_To1MoHqZdC2e8TKFAn5joY
          source_id: s_BN7xnKk26q4D4Jj4ZHESJA
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
        id: c_U92M8mO18-C9h8EBEe6vvf
        subject_person_id: p_ZtPLst7z8SqwBQZGyED72K
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ghyYDQ5eZ8uxN8ip6BX7KC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_e-4wN6N-a9rLTeGAwUrs8l
          claim_id: c_U92M8mO18-C9h8EBEe6vvf
          source_id: s_BN7xnKk26q4D4Jj4ZHESJA
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第六十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ghyYDQ5eZ8uxN8ip6BX7KC
        status: active
        display_name: 王原相
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王漸逵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王漸逵 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_ghyYDQ5eZ8uxN8ip6BX7KC | 王原相 | accepted |

## 外部来源

- [中国历代人物传记资料库：王漸逵（CBDB 327867）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327867&o=json)
