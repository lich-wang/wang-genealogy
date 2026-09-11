---
schema: wang-person/v1
id: p_AHxos763CxLVJAAUFYkhkc
status: active
merged_into: null
display_name: 王儒
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_f6XP5UMCZGzE37yHEToH8V
        subject_person_id: p_AHxos763CxLVJAAUFYkhkc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_THUxB4MCmK7z2Z4KyFunSh
          claim_id: c_f6XP5UMCZGzE37yHEToH8V
          source_id: s_DQ75yHAZBFY3rbLu7KmB8b
          stance: supports
          locator: CBDB:268138
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（268138）
          source: &a1
            id: s_DQ75yHAZBFY3rbLu7KmB8b
            source_type: api_record
            title: 中国历代人物传记资料库：王儒（CBDB 268138）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268138&o=json
            external_identifier: CBDB:268138
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.798Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uD5cGAXcJF6bVMdofUWAsa
        subject_person_id: p_AHxos763CxLVJAAUFYkhkc
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
        - id: cs_UjsR1bCWYQwiFSwoqL9etL
          claim_id: c_uD5cGAXcJF6bVMdofUWAsa
          source_id: s_DQ75yHAZBFY3rbLu7KmB8b
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
        id: c_jbM0GrY0LbfZ-8u9Z63tMz
        subject_person_id: p_AHxos763CxLVJAAUFYkhkc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BDk6YNhR5VP5UAnHiZAmaN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sIXqOL1qTg6fbIEdHRFCF2
          claim_id: c_jbM0GrY0LbfZ-8u9Z63tMz
          source_id: s_DQ75yHAZBFY3rbLu7KmB8b
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第三甲第三十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_BDk6YNhR5VP5UAnHiZAmaN
        status: active
        display_name: 王九思
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王儒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王儒 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_BDk6YNhR5VP5UAnHiZAmaN | 王九思 | accepted |

## 外部来源

- [中国历代人物传记资料库：王儒（CBDB 268138）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268138&o=json)
