---
schema: wang-person/v1
id: p_jCK8R3MaCsiE6Le8VKcP4N
status: active
merged_into: null
display_name: 王霖
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_r2nY3ZUzFsCD5Vj8qBXAnn
        subject_person_id: p_jCK8R3MaCsiE6Le8VKcP4N
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王霖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_T8nzvrB3V7na2tUdjuqzha
          claim_id: c_r2nY3ZUzFsCD5Vj8qBXAnn
          source_id: s_3dGuJiVSs29A7N84d5o85M
          stance: supports
          locator: CBDB:261739
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（261739）
          source: &a1
            id: s_3dGuJiVSs29A7N84d5o85M
            source_type: api_record
            title: 中国历代人物传记资料库：王霖（CBDB 261739）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261739&o=json
            external_identifier: CBDB:261739
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.555Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7QBbUJAFNA36jBHcnoVVFK
        subject_person_id: p_jCK8R3MaCsiE6Le8VKcP4N
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
        - id: cs_HjNU8wzGSnvDoLEN4qFZfg
          claim_id: c_7QBbUJAFNA36jBHcnoVVFK
          source_id: s_3dGuJiVSs29A7N84d5o85M
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
        id: c_rQRzZw9um05XLlzsiT9T8j
        subject_person_id: p_jCK8R3MaCsiE6Le8VKcP4N
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AiG6QrCQGQD3MPcSgAchU7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FFkFM7a9gRCypm49J1_PTx
          claim_id: c_rQRzZw9um05XLlzsiT9T8j
          source_id: s_3dGuJiVSs29A7N84d5o85M
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第二甲第八十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_AiG6QrCQGQD3MPcSgAchU7
        status: active
        display_name: 王宸
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王霖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王霖 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_AiG6QrCQGQD3MPcSgAchU7 | 王宸 | accepted |

## 外部来源

- [中国历代人物传记资料库：王霖（CBDB 261739）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261739&o=json)
