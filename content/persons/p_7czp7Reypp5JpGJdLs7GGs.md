---
schema: wang-person/v1
id: p_7czp7Reypp5JpGJdLs7GGs
status: active
merged_into: null
display_name: 王文叡
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3caEzKv44TTS4NKmQ83qyF
        subject_person_id: p_7czp7Reypp5JpGJdLs7GGs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文叡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4A2TjGMcyDGuh2dUqxK2eh
          claim_id: c_3caEzKv44TTS4NKmQ83qyF
          source_id: s_4nmV87xJbv7tfaSXpnqFJd
          stance: supports
          locator: CBDB:158366
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（158366）
          source: &a1
            id: s_4nmV87xJbv7tfaSXpnqFJd
            source_type: api_record
            title: 中国历代人物传记资料库：王文叡（CBDB 158366）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158366&o=json
            external_identifier: CBDB:158366
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.922Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_teLtaF4F7VJPuBqkEJ21oy
        subject_person_id: p_7czp7Reypp5JpGJdLs7GGs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qUhVvQ2J8yQMNg1BiYgeQR
          claim_id: c_teLtaF4F7VJPuBqkEJ21oy
          source_id: s_4nmV87xJbv7tfaSXpnqFJd
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
        id: c_Ni52FTfiRC085ZmUBkNAlM
        subject_person_id: p_rUMuK7CzfJfHKJ88kFi4jQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7czp7Reypp5JpGJdLs7GGs
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TKegVzHst94lDmruuz8Cw2
          claim_id: c_Ni52FTfiRC085ZmUBkNAlM
          source_id: s_4nmV87xJbv7tfaSXpnqFJd
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaicheng 37：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_rUMuK7CzfJfHKJ88kFi4jQ
        status: active
        display_name: 王如琬
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王文叡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文叡 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_rUMuK7CzfJfHKJ88kFi4jQ | 王如琬 | accepted |

## 外部来源

- [中国历代人物传记资料库：王文叡（CBDB 158366）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158366&o=json)
