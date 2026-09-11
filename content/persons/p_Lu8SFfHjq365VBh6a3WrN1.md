---
schema: wang-person/v1
id: p_Lu8SFfHjq365VBh6a3WrN1
status: active
merged_into: null
display_name: 王夢得
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_95rWmYcLdmXRoJ1oPvGEo4
        subject_person_id: p_Lu8SFfHjq365VBh6a3WrN1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夢得
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FXKPEKPg8nyvZJce8hPXJo
          claim_id: c_95rWmYcLdmXRoJ1oPvGEo4
          source_id: s_B4SkCu3fEDMdbHGw9aKnKB
          stance: supports
          locator: CBDB:45842
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（45842）
          source: &a1
            id: s_B4SkCu3fEDMdbHGw9aKnKB
            source_type: api_record
            title: 中国历代人物传记资料库：王夢得（CBDB 45842）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45842&o=json
            external_identifier: CBDB:45842
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.692Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_e1C1yhJQPn9x2tqXGQNJE2
        subject_person_id: p_Lu8SFfHjq365VBh6a3WrN1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_M4FgnWHohLRUT7LT2dfPLG
          claim_id: c_e1C1yhJQPn9x2tqXGQNJE2
          source_id: s_B4SkCu3fEDMdbHGw9aKnKB
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
        id: c_fXUMZGJbFMg8k_qp1dUft3
        subject_person_id: p_Lu8SFfHjq365VBh6a3WrN1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zPDFvfAVkhAbNCi4GV5P2e
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ehoJY99GF9o_Y8b26N_nCB
          claim_id: c_fXUMZGJbFMg8k_qp1dUft3
          source_id: s_B4SkCu3fEDMdbHGw9aKnKB
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1311;1312：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_zPDFvfAVkhAbNCi4GV5P2e
        status: active
        display_name: 王爚
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王夢得

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王夢得 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_zPDFvfAVkhAbNCi4GV5P2e | 王爚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王夢得（CBDB 45842）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45842&o=json)
