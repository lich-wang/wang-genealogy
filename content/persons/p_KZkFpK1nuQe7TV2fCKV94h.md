---
schema: wang-person/v1
id: p_KZkFpK1nuQe7TV2fCKV94h
status: active
merged_into: null
display_name: 王枋
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Pfx9bQA1XhnKMpQLn7J9NK
        subject_person_id: p_KZkFpK1nuQe7TV2fCKV94h
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王枋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VC5fBxpNgyHz6FxyDPNiWA
          claim_id: c_Pfx9bQA1XhnKMpQLn7J9NK
          source_id: s_ip5sMtBL7874y5yGSSvMWS
          stance: supports
          locator: CBDB:638684
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638684）
          source: &a1
            id: s_ip5sMtBL7874y5yGSSvMWS
            source_type: api_record
            title: 中国历代人物传记资料库：王枋（CBDB 638684）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638684&o=json
            external_identifier: CBDB:638684
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.718Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_u1cFWRWvJfcCDw8JpeGgP5
        subject_person_id: p_KZkFpK1nuQe7TV2fCKV94h
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
        - id: cs_vUfb7iXsb2EjGPFqUM7QWX
          claim_id: c_u1cFWRWvJfcCDw8JpeGgP5
          source_id: s_ip5sMtBL7874y5yGSSvMWS
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
  descendants: []
  other: []
---

# 王枋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王枋 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王枋（CBDB 638684）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638684&o=json)
