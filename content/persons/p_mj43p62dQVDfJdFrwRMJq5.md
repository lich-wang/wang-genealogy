---
schema: wang-person/v1
id: p_mj43p62dQVDfJdFrwRMJq5
status: active
merged_into: null
display_name: 王學
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PCtb6LbKUMzdYq8aYywFAf
        subject_person_id: p_mj43p62dQVDfJdFrwRMJq5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2cUP5mTojDvaw2MHmVhHsR
          claim_id: c_PCtb6LbKUMzdYq8aYywFAf
          source_id: s_Z58o2X71P1Yga6T4xe26Xv
          stance: supports
          locator: CBDB:203587
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（203587）
          source: &a1
            id: s_Z58o2X71P1Yga6T4xe26Xv
            source_type: api_record
            title: 中国历代人物传记资料库：王學（CBDB 203587）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203587&o=json
            external_identifier: CBDB:203587
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.794Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_sfQvVdG9UPT7GXRv3Sj8Wd
        subject_person_id: p_mj43p62dQVDfJdFrwRMJq5
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1514年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GkJ6w1tYowC4uNNNiGbY9S
          claim_id: c_sfQvVdG9UPT7GXRv3Sj8Wd
          source_id: s_Z58o2X71P1Yga6T4xe26Xv
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
        id: c_A1q5WxZ3CBK6YUxhGxohK2
        subject_person_id: p_mj43p62dQVDfJdFrwRMJq5
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
        - id: cs_VN4muGQ6uH7J3FaJDAetwB
          claim_id: c_A1q5WxZ3CBK6YUxhGxohK2
          source_id: s_Z58o2X71P1Yga6T4xe26Xv
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
        id: c_CQW9md0ue-p9QiO-TwHfL2
        subject_person_id: p_XWoQFU6m26umasN1nUqzCk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mj43p62dQVDfJdFrwRMJq5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cNDcnV1NaMVnEliiu0r5AY
          claim_id: c_CQW9md0ue-p9QiO-TwHfL2
          source_id: s_Z58o2X71P1Yga6T4xe26Xv
          stance: supports
          locator: 嘉靖二十三年登科錄:一卷，第三甲第六十九名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_XWoQFU6m26umasN1nUqzCk
        status: active
        display_name: 王珵
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_z2C-OBybFSlbagRlno6xi8
        subject_person_id: p_mj43p62dQVDfJdFrwRMJq5
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_NQyVzbqU794mopnoizCtyE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eXUTTvVQrz2e1L7n8QcXty
          claim_id: c_z2C-OBybFSlbagRlno6xi8
          source_id: s_4_PsIKgn46vi6IJNu9VKA0
          stance: supports
          locator: 嘉靖二十三年登科錄:一卷，第三甲第六十九名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_4_PsIKgn46vi6IJNu9VKA0
            source_type: api_record
            title: 中国历代人物传记资料库：某氏(王學妻)（CBDB 306922）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306922&o=json
            external_identifier: CBDB:306922
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_NQyVzbqU794mopnoizCtyE
        status: active
        display_name: 某氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_jNrE0Aov0aUd1zDdd_881H
        subject_person_id: p_NqoNwLLj68W7dawMNBHSDK
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_mj43p62dQVDfJdFrwRMJq5
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_elxXs1zVYno6NGcCiMzANf
          claim_id: c_jNrE0Aov0aUd1zDdd_881H
          source_id: s_Z58o2X71P1Yga6T4xe26Xv
          stance: supports
          locator: 嘉靖二十三年登科錄:一卷，第三甲第六十九名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_NqoNwLLj68W7dawMNBHSDK
        status: active
        display_name: 王素
        merged_into_person_id: null
    - claim:
        id: c_I33g7tU7tB4o95PB5-EJq7
        subject_person_id: p_XAu3QsqAFjPkKsDGdU9zAQ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_mj43p62dQVDfJdFrwRMJq5
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XK_-g_MRwTevdQZJfvmkwt
          claim_id: c_I33g7tU7tB4o95PB5-EJq7
          source_id: s_Z58o2X71P1Yga6T4xe26Xv
          stance: supports
          locator: 嘉靖二十三年登科錄:一卷，第三甲第六十九名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_XAu3QsqAFjPkKsDGdU9zAQ
        status: active
        display_name: 王佐
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王學

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王學 | accepted |
| birth.date | 1514年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_XWoQFU6m26umasN1nUqzCk | 王珵 | accepted |
| spouses | p_NQyVzbqU794mopnoizCtyE | 某氏 | accepted |
| ancestors | p_NqoNwLLj68W7dawMNBHSDK | 王素 | accepted |
| ancestors | p_XAu3QsqAFjPkKsDGdU9zAQ | 王佐 | accepted |

## 外部来源

- [中国历代人物传记资料库：某氏(王學妻)（CBDB 306922）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306922&o=json)
- [中国历代人物传记资料库：王學（CBDB 203587）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203587&o=json)
