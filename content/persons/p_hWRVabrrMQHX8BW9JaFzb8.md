---
schema: wang-person/v1
id: p_hWRVabrrMQHX8BW9JaFzb8
status: active
merged_into: null
display_name: 王蓬峯
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jye799LMa5qdTxJBd56wPN
        subject_person_id: p_hWRVabrrMQHX8BW9JaFzb8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蓬峯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Sz73czPq9LGUEg8uEUEdHX
          claim_id: c_jye799LMa5qdTxJBd56wPN
          source_id: s_Chw7mpnMpjVCJe2UtcbAD5
          stance: supports
          locator: CBDB:640147
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640147）
          source: &a1
            id: s_Chw7mpnMpjVCJe2UtcbAD5
            source_type: api_record
            title: 中国历代人物传记资料库：王蓬峯（CBDB 640147）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640147&o=json
            external_identifier: CBDB:640147
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VvnrXDp6w4TQhNWvrEj3EZ
        subject_person_id: p_hWRVabrrMQHX8BW9JaFzb8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蓬峯，清人物。籍贯衛輝府，曾任訓導。（中国历代人物传记资料库 CBDB 640147）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LDGNQ4ywPR1zjpZ3Fm1PmG
          claim_id: c_VvnrXDp6w4TQhNWvrEj3EZ
          source_id: s_Chw7mpnMpjVCJe2UtcbAD5
          stance: supports
          locator: CBDB:640147
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王蓬峯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王蓬峯 | accepted |
| bio.summary | 王蓬峯，清人物。籍贯衛輝府，曾任訓導。（中国历代人物传记资料库 CBDB 640147） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王蓬峯（CBDB 640147）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640147&o=json)
