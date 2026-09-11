---
schema: wang-person/v1
id: p_aPM2KDrkDe8sXC8oMkpjoo
status: active
merged_into: null
display_name: 宋氏
revision: 1
cbdb_id: 320899
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_s96D0lM9UOZeACerQFwjM5
        subject_person_id: p_aPM2KDrkDe8sXC8oMkpjoo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 宋氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oHOgIrfIB27Um5gVBJTuzZ
          claim_id: c_s96D0lM9UOZeACerQFwjM5
          source_id: s_TQjkEbQ0Uji4q__dLz6xD9
          stance: supports
          locator: CBDB:320899
          quotation: null
          interpretation_note: CBDB 明确记录的王洀配偶
          source: &a1
            id: s_TQjkEbQ0Uji4q__dLz6xD9
            source_type: api_record
            title: 中国历代人物传记资料库：宋氏(王洀妻)（CBDB 320899）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320899&o=json
            external_identifier: CBDB:320899
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
        id: c_q0HzGKCvKOJzgXBVUmApC6
        subject_person_id: p_7xVa8ivPDPteJR7tikUd4a
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_aPM2KDrkDe8sXC8oMkpjoo
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-WHjFh2-EOBG5lGhty1yrW
          claim_id: c_q0HzGKCvKOJzgXBVUmApC6
          source_id: s_TQjkEbQ0Uji4q__dLz6xD9
          stance: supports
          locator: 嘉靖三十五年進士登科錄:一卷，第三甲第八十五名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_7xVa8ivPDPteJR7tikUd4a
        status: active
        display_name: 王洀
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 宋氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 宋氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_7xVa8ivPDPteJR7tikUd4a | 王洀 | accepted |

## 外部来源

- [中国历代人物传记资料库：宋氏(王洀妻)（CBDB 320899）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320899&o=json)
