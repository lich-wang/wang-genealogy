---
schema: wang-person/v1
id: p_HzsL9wdC6DBPUaCXZww6jo
status: active
merged_into: null
display_name: 欒鳳
revision: 1
cbdb_id: 66328
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dCKyrm3Zk_kDC6sVcGxMW5
        subject_person_id: p_HzsL9wdC6DBPUaCXZww6jo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 欒鳳
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-57ZpHDkOBZiSvFmsi2qF-
          claim_id: c_dCKyrm3Zk_kDC6sVcGxMW5
          source_id: s_M9M6o6YH8IiEZRsIz3DJZI
          stance: supports
          locator: CBDB:66328
          quotation: null
          interpretation_note: CBDB 明确记录的王素英配偶
          source: &a1
            id: s_M9M6o6YH8IiEZRsIz3DJZI
            source_type: api_record
            title: 中国历代人物传记资料库：欒鳳（CBDB 66328）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=66328&o=json
            external_identifier: CBDB:66328
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
        id: c_Dc3V-s3sQEFJSu0O6Bd1cc
        subject_person_id: p_4yyYWVuQGfZJDD4mgAnDBk
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_HzsL9wdC6DBPUaCXZww6jo
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PaRQtnAtg6fJSHiMqJeypx
          claim_id: c_Dc3V-s3sQEFJSu0O6Bd1cc
          source_id: s_M9M6o6YH8IiEZRsIz3DJZI
          stance: supports
          locator: 元人傳記資料索引，1166：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_4yyYWVuQGfZJDD4mgAnDBk
        status: active
        display_name: 王素英
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 欒鳳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 欒鳳 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_4yyYWVuQGfZJDD4mgAnDBk | 王素英 | accepted |

## 外部来源

- [中国历代人物传记资料库：欒鳳（CBDB 66328）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=66328&o=json)
