---
schema: wang-person/v1
id: p_2kM1yTzwMkGpxWY3CwtJUi
status: active
merged_into: null
display_name: 王象
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sp4hLiK6tVRC417r2EZk9S
        subject_person_id: p_2kM1yTzwMkGpxWY3CwtJUi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王象
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MvnbgGpn8GZEHdybCsVYuS
          claim_id: c_sp4hLiK6tVRC417r2EZk9S
          source_id: s_VQ8HdxL39bDDXT7c2YeTnQ
          stance: supports
          locator: CBDB:19426
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（19426）
          source: &a1
            id: s_VQ8HdxL39bDDXT7c2YeTnQ
            source_type: api_record
            title: 中国历代人物传记资料库：王象（CBDB 19426）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19426&o=json
            external_identifier: CBDB:19426
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.735Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_uyPxJcQfBfhLmCmWUb2RKc
        subject_person_id: p_2kM1yTzwMkGpxWY3CwtJUi
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1164年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NGo54FGvav3e3xbf5eNV8k
          claim_id: c_uyPxJcQfBfhLmCmWUb2RKc
          source_id: s_VQ8HdxL39bDDXT7c2YeTnQ
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
        id: c_TKqoUPFtGgZGBa6MT9izaC
        subject_person_id: p_2kM1yTzwMkGpxWY3CwtJUi
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1239年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MBruUBLCUynrDcsWxrYeyG
          claim_id: c_TKqoUPFtGgZGBa6MT9izaC
          source_id: s_VQ8HdxL39bDDXT7c2YeTnQ
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
        id: c_uywkS4z9qdQNnxbGTxK1C4
        subject_person_id: p_2kM1yTzwMkGpxWY3CwtJUi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2PCHdpqXDRbN4qp6EEwZrN
          claim_id: c_uywkS4z9qdQNnxbGTxK1C4
          source_id: s_VQ8HdxL39bDDXT7c2YeTnQ
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
        id: c_xuMMyfG4pQYOZMf81j0U-C
        subject_person_id: p_JR5BeKFHjyY5p6yqfVc1XZ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2kM1yTzwMkGpxWY3CwtJUi
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3xJsiNae9JhJFgMmsAbKmv
          claim_id: c_xuMMyfG4pQYOZMf81j0U-C
          source_id: s_VQ8HdxL39bDDXT7c2YeTnQ
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1187;1190：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_JR5BeKFHjyY5p6yqfVc1XZ
        status: active
        display_name: 王衜
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王象

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王象 | accepted |
| birth.date | 1164年 | accepted |
| death.date | 1239年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_JR5BeKFHjyY5p6yqfVc1XZ | 王衜 | accepted |

## 外部来源

- [中国历代人物传记资料库：王象（CBDB 19426）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19426&o=json)
