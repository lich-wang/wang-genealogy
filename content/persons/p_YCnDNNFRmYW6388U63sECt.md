---
schema: wang-person/v1
id: p_YCnDNNFRmYW6388U63sECt
status: active
merged_into: null
display_name: 郭氏
revision: 1
cbdb_id: 437537
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_k4bn0k8rp-uhHw8xwJTbZu
        subject_person_id: p_YCnDNNFRmYW6388U63sECt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 郭氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TsKAr9lLfnKkaIT3YOtsi3
          claim_id: c_k4bn0k8rp-uhHw8xwJTbZu
          source_id: s_zW8mettDwHY8JyYp_I47jL
          stance: supports
          locator: CBDB:437537
          quotation: null
          interpretation_note: CBDB 明确记录的王庠皇配偶
          source: &a1
            id: s_zW8mettDwHY8JyYp_I47jL
            source_type: api_record
            title: 中国历代人物传记资料库：郭氏(王庠皇妻)（CBDB 437537）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437537&o=json
            external_identifier: CBDB:437537
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_jlowqyOxZ307q1wWDg2Z4C
        subject_person_id: p_tgsYcGLBHirWiZHRoYiDdX
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_YCnDNNFRmYW6388U63sECt
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_M1ktavKul3H9P8mdr0Bm8u
          claim_id: c_jlowqyOxZ307q1wWDg2Z4C
          source_id: s_zW8mettDwHY8JyYp_I47jL
          stance: supports
          locator: CBDB 双向互证（妻子 郭氏(王庠皇妻)）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_tgsYcGLBHirWiZHRoYiDdX
        status: active
        display_name: 王庠皇
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 郭氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 郭氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_tgsYcGLBHirWiZHRoYiDdX | 王庠皇 | accepted |

## 外部来源

- [中国历代人物传记资料库：郭氏(王庠皇妻)（CBDB 437537）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437537&o=json)
