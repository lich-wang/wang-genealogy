---
schema: wang-person/v1
id: p_QaV1aWWYJYFYMq26viuk5b
status: active
merged_into: null
display_name: 周氏
revision: 1
cbdb_id: 297277
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uT5rx1b6p_d7dESC9gcmqd
        subject_person_id: p_QaV1aWWYJYFYMq26viuk5b
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 周氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DF9PDW5-EcIXmZ-zBsQl7A
          claim_id: c_uT5rx1b6p_d7dESC9gcmqd
          source_id: s_2iNytuBzRIrVRspGGKHbBV
          stance: supports
          locator: CBDB:297277
          quotation: null
          interpretation_note: CBDB 明确记录的王夢弼配偶
          source: &a1
            id: s_2iNytuBzRIrVRspGGKHbBV
            source_type: api_record
            title: 中国历代人物传记资料库：周氏(王夢弼妻)（CBDB 297277）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297277&o=json
            external_identifier: CBDB:297277
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
        id: c_NmCmA_3ZlYv0x2wQU3X7VA
        subject_person_id: p_BxBsFV6nqQmQf8oa142DSX
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_QaV1aWWYJYFYMq26viuk5b
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Q7b30h4eI-eG7aG_VBmzCy
          claim_id: c_NmCmA_3ZlYv0x2wQU3X7VA
          source_id: s_2iNytuBzRIrVRspGGKHbBV
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第三甲第一百一十四名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_BxBsFV6nqQmQf8oa142DSX
        status: active
        display_name: 王夢弼
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 周氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 周氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_BxBsFV6nqQmQf8oa142DSX | 王夢弼 | accepted |

## 外部来源

- [中国历代人物传记资料库：周氏(王夢弼妻)（CBDB 297277）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297277&o=json)
