---
schema: wang-person/v1
id: p_mDjJMa5W7oiG1ART7oS915
status: active
merged_into: null
display_name: 王鉅
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_e8aCPWM8RrUmLxtxCPU1Ch
        subject_person_id: p_mDjJMa5W7oiG1ART7oS915
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鉅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Ha8VfC3h6SSqENZML8Dja8
          claim_id: c_e8aCPWM8RrUmLxtxCPU1Ch
          source_id: s_D73YukppnRMuwVb3ywqCaW
          stance: supports
          locator: CBDB:570983
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（570983）
          source: &a1
            id: s_D73YukppnRMuwVb3ywqCaW
            source_type: api_record
            title: 中国历代人物传记资料库：王鉅（CBDB 570983）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=570983&o=json
            external_identifier: CBDB:570983
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.879Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9BUbGCzxDK9XFQAP6CHq2Z
        subject_person_id: p_mDjJMa5W7oiG1ART7oS915
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
        - id: cs_Ed9uVcmhoPFWDybXMXi5uE
          claim_id: c_9BUbGCzxDK9XFQAP6CHq2Z
          source_id: s_D73YukppnRMuwVb3ywqCaW
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
  spouses:
    - claim:
        id: c_BFD1X111I763DS3HuYJF6y
        subject_person_id: p_mDjJMa5W7oiG1ART7oS915
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_zsrSqJkc1NQx3a53Ebr8Z8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6n84wvb_dznoJHdmal7e8C
          claim_id: c_BFD1X111I763DS3HuYJF6y
          source_id: s_5C2IMeWr87m6KefdULWm5Y
          stance: supports
          locator: 紹興府志:八十卷，lgid=316870：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_5C2IMeWr87m6KefdULWm5Y
            source_type: api_record
            title: 中国历代人物传记资料库：施氏(王鉅妻)（CBDB 570977）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=570977&o=json
            external_identifier: CBDB:570977
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_zsrSqJkc1NQx3a53Ebr8Z8
        status: active
        display_name: 施氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王鉅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鉅 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_zsrSqJkc1NQx3a53Ebr8Z8 | 施氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：施氏(王鉅妻)（CBDB 570977）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=570977&o=json)
- [中国历代人物传记资料库：王鉅（CBDB 570983）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=570983&o=json)
