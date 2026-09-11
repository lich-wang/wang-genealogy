---
schema: wang-person/v1
id: p_JpKAwvv1MK7gdEG1QmEGyd
status: active
merged_into: null
display_name: 王湘
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ynuLVQzyMJZK7TGPtv8J14
        subject_person_id: p_JpKAwvv1MK7gdEG1QmEGyd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王湘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DQz1sDUtYqKULDP3bM5URN
          claim_id: c_ynuLVQzyMJZK7TGPtv8J14
          source_id: s_NermVzVV9QPvKMju5axFM1
          stance: supports
          locator: CBDB:205964
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（205964）
          source: &a1
            id: s_NermVzVV9QPvKMju5axFM1
            source_type: api_record
            title: 中国历代人物传记资料库：王湘（CBDB 205964）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205964&o=json
            external_identifier: CBDB:205964
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.877Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_JM7A9T1mrM3z8FThJJBABD
        subject_person_id: p_JpKAwvv1MK7gdEG1QmEGyd
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1538年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qM8c3NmYXo2PZneWKjj4w2
          claim_id: c_JM7A9T1mrM3z8FThJJBABD
          source_id: s_NermVzVV9QPvKMju5axFM1
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wKjh39e9TzU3Nw1PwE1hKQ
        subject_person_id: p_JpKAwvv1MK7gdEG1QmEGyd
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
        - id: cs_UJTt57wz4NNyNPPXLN3X8G
          claim_id: c_wKjh39e9TzU3Nw1PwE1hKQ
          source_id: s_NermVzVV9QPvKMju5axFM1
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
  ancestors:
    - claim:
        id: c_OVQVKdCb3YOzMl-aB_uvgH
        subject_person_id: p_2VzKy4YwQz7AyQLgZ3PwP8
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_JpKAwvv1MK7gdEG1QmEGyd
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_x9BzP0903gqSDbdrkWjSai
          claim_id: c_OVQVKdCb3YOzMl-aB_uvgH
          source_id: s_ns33LqNnfQQifrPbQifqvP
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第二百三十三名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ns33LqNnfQQifrPbQifqvP
            source_type: api_record
            title: 中国历代人物传记资料库：王集（CBDB 211372）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211372&o=json
            external_identifier: CBDB:211372
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.028Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2VzKy4YwQz7AyQLgZ3PwP8
        status: active
        display_name: 王集
        merged_into_person_id: null
    - claim:
        id: c_Q2sA7PsoTDnf-LX0DABZ-c
        subject_person_id: p_oDyYQMWWKHbk5i3EWe5MJK
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_JpKAwvv1MK7gdEG1QmEGyd
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Plxr2cBSx-TpkxV5ZEyylO
          claim_id: c_Q2sA7PsoTDnf-LX0DABZ-c
          source_id: s_a5cMUzi6ns9Rzoqypj3T6R
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第二百三十三名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_a5cMUzi6ns9Rzoqypj3T6R
            source_type: api_record
            title: 中国历代人物传记资料库：王輔（CBDB 211373）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211373&o=json
            external_identifier: CBDB:211373
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.029Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_oDyYQMWWKHbk5i3EWe5MJK
        status: active
        display_name: 王輔
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王湘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王湘 | accepted |
| birth.date | 1538年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_2VzKy4YwQz7AyQLgZ3PwP8 | 王集 | accepted |
| ancestors | p_oDyYQMWWKHbk5i3EWe5MJK | 王輔 | accepted |

## 外部来源

- [中国历代人物传记资料库：王輔（CBDB 211373）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211373&o=json)
- [中国历代人物传记资料库：王集（CBDB 211372）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211372&o=json)
- [中国历代人物传记资料库：王湘（CBDB 205964）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205964&o=json)
