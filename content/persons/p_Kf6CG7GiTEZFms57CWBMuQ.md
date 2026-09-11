---
schema: wang-person/v1
id: p_Kf6CG7GiTEZFms57CWBMuQ
status: active
merged_into: null
display_name: 王錫爵
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LGK5ucL4psriwnawdJ9C6X
        subject_person_id: p_Kf6CG7GiTEZFms57CWBMuQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錫爵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YUA14iGt5Lb9jFdUhRySmh
          claim_id: c_LGK5ucL4psriwnawdJ9C6X
          source_id: s_NfsfKWp96mVi3U4pj3LGG3
          stance: supports
          locator: CBDB:123984
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（123984）
          source: &a1
            id: s_NfsfKWp96mVi3U4pj3LGG3
            source_type: api_record
            title: 中国历代人物传记资料库：王錫爵（CBDB 123984）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=123984&o=json
            external_identifier: CBDB:123984
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.940Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_9uCMaXkUUDFvjGX7YHFQFK
        subject_person_id: p_Kf6CG7GiTEZFms57CWBMuQ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1534年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fqp952VYDDM1AF59cEEJyA
          claim_id: c_9uCMaXkUUDFvjGX7YHFQFK
          source_id: s_NfsfKWp96mVi3U4pj3LGG3
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_mxL9owfwy72HqatJFYmJfq
        subject_person_id: p_Kf6CG7GiTEZFms57CWBMuQ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1610年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SabReJcMKWiBF2KDhVNQtm
          claim_id: c_mxL9owfwy72HqatJFYmJfq
          source_id: s_NfsfKWp96mVi3U4pj3LGG3
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kokSvGEXbVj1JnHmj3Ry9g
        subject_person_id: p_Kf6CG7GiTEZFms57CWBMuQ
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
        - id: cs_MLRNEeGDx7PWzb3HyKZMnN
          claim_id: c_kokSvGEXbVj1JnHmj3Ry9g
          source_id: s_NfsfKWp96mVi3U4pj3LGG3
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
          source:
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
      object_person:
        id: p_y3wPwGRVQu8zpSRFXXRDEb
        status: active
        display_name: 王夢祥
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_Z-JtfR8yltk-SPOsrs1pVP
        subject_person_id: p_bFMsDnYZwCi9GhoLahN7Ae
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Kf6CG7GiTEZFms57CWBMuQ
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GBTttGA7j2U0JH_nZGlLGO
          claim_id: c_Z-JtfR8yltk-SPOsrs1pVP
          source_id: s_z5KK2n2V92Nnig33tVF5aT
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第一甲第二名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_z5KK2n2V92Nnig33tVF5aT
            source_type: api_record
            title: 中国历代人物传记资料库：王侁（CBDB 326161）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326161&o=json
            external_identifier: CBDB:326161
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.209Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_bFMsDnYZwCi9GhoLahN7Ae
        status: active
        display_name: 王侁
        merged_into_person_id: null
  descendants:
    - claim:
        id: c_ZhjdfdZOJxmhLMaMH1wcKy
        subject_person_id: p_Kf6CG7GiTEZFms57CWBMuQ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_HWF5mXUhrhbQxoWV5rhmVR
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QWbnFQlkzWJsL3GphlNx1F
          claim_id: c_ZhjdfdZOJxmhLMaMH1wcKy
          source_id: s_9nCMaerC4DaYCofcJD8XP7
          stance: supports
          locator: 國朝畫徵錄：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_9nCMaerC4DaYCofcJD8XP7
            source_type: api_record
            title: 中国历代人物传记资料库：王時敏（CBDB 55432）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=55432&o=json
            external_identifier: CBDB:55432
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.740Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_HWF5mXUhrhbQxoWV5rhmVR
        status: active
        display_name: 王時敏
        merged_into_person_id: null
  other: []
---

# 王錫爵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王錫爵 | accepted |
| birth.date | 1534年 | accepted |
| death.date | 1610年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_y3wPwGRVQu8zpSRFXXRDEb | 王夢祥 | accepted |
| ancestors | p_bFMsDnYZwCi9GhoLahN7Ae | 王侁 | accepted |
| descendants | p_HWF5mXUhrhbQxoWV5rhmVR | 王時敏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王夢祥（CBDB 326164）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326164&o=json)
- [中国历代人物传记资料库：王侁（CBDB 326161）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326161&o=json)
- [中国历代人物传记资料库：王時敏（CBDB 55432）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=55432&o=json)
- [中国历代人物传记资料库：王錫爵（CBDB 123984）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=123984&o=json)
