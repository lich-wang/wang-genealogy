---
schema: wang-person/v1
id: p_y3wPwGRVQu8zpSRFXXRDEb
status: active
merged_into: null
display_name: 王夢祥
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Hn7EMCnnKf7yMWQKUFQ3EJ
        subject_person_id: p_y3wPwGRVQu8zpSRFXXRDEb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夢祥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_o9jFQDykR9Lt22BB9Y9FHY
          claim_id: c_Hn7EMCnnKf7yMWQKUFQ3EJ
          source_id: s_cb4NCj6AFA1rBgfugfXZ1F
          stance: supports
          locator: CBDB:326164
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（326164）
          source: &a1
            id: s_cb4NCj6AFA1rBgfugfXZ1F
            source_type: api_record
            title: 中国历代人物传记资料库：王夢祥（CBDB 326164）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326164&o=json
            external_identifier: CBDB:326164
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.210Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KgmVGmGQdJXv6FuMMHY9DK
        subject_person_id: p_y3wPwGRVQu8zpSRFXXRDEb
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
        - id: cs_AZU2AV1sAeudhPvda3LCtK
          claim_id: c_KgmVGmGQdJXv6FuMMHY9DK
          source_id: s_cb4NCj6AFA1rBgfugfXZ1F
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
        id: c_RaOiujhA9ozW2ksuruWFPu
        subject_person_id: p_y3wPwGRVQu8zpSRFXXRDEb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Kf6CG7GiTEZFms57CWBMuQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SglsQLhJIKzBWTDro8KMHh
          claim_id: c_RaOiujhA9ozW2ksuruWFPu
          source_id: s_cb4NCj6AFA1rBgfugfXZ1F
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第一甲第二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Kf6CG7GiTEZFms57CWBMuQ
        status: active
        display_name: 王錫爵
        merged_into_person_id: null
    - claim:
        id: c_djUWjMIXXrkqCGZQtpXHl9
        subject_person_id: p_y3wPwGRVQu8zpSRFXXRDEb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BnqT97Hd2v2PTKqLmsYzS9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8vBuvvXYX0UorZrtZXkuWR
          claim_id: c_djUWjMIXXrkqCGZQtpXHl9
          source_id: s_cb4NCj6AFA1rBgfugfXZ1F
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第二甲第九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_BnqT97Hd2v2PTKqLmsYzS9
        status: active
        display_name: 王鼎爵
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王夢祥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王夢祥 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_Kf6CG7GiTEZFms57CWBMuQ | 王錫爵 | accepted |
| children | p_BnqT97Hd2v2PTKqLmsYzS9 | 王鼎爵 | accepted |

## 外部来源

- [中国历代人物传记资料库：王夢祥（CBDB 326164）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326164&o=json)
