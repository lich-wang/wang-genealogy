---
schema: wang-person/v1
id: p_aJLvov3QQMSFASDEQ1SHSn
status: active
merged_into: null
display_name: 王鉉
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JLE7vcPJex113AzTzMfTsC
        subject_person_id: p_aJLvov3QQMSFASDEQ1SHSn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鉉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uKkuV6c62ekvbuBpPLdhBt
          claim_id: c_JLE7vcPJex113AzTzMfTsC
          source_id: s_NxCnPKT1kxgzVztCXgYTPv
          stance: supports
          locator: CBDB:288289
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（288289）
          source: &a1
            id: s_NxCnPKT1kxgzVztCXgYTPv
            source_type: api_record
            title: 中国历代人物传记资料库：王鉉（CBDB 288289）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288289&o=json
            external_identifier: CBDB:288289
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.290Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_n7ytDB2xtnLqHjmX3tKBga
        subject_person_id: p_aJLvov3QQMSFASDEQ1SHSn
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
        - id: cs_Q9DAjJPGNFMFx4Z57QaEbW
          claim_id: c_n7ytDB2xtnLqHjmX3tKBga
          source_id: s_NxCnPKT1kxgzVztCXgYTPv
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
  ancestors: []
  descendants:
    - claim:
        id: c_ezw7zq-uvrsW3oaKRU0wDD
        subject_person_id: p_aJLvov3QQMSFASDEQ1SHSn
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_sn9KZzCF4Seq4v2EsCEM8N
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hbsWsNDTY1OY956IYyRhBt
          claim_id: c_ezw7zq-uvrsW3oaKRU0wDD
          source_id: s_NxCnPKT1kxgzVztCXgYTPv
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第二甲第八十九名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_sn9KZzCF4Seq4v2EsCEM8N
        status: active
        display_name: 王䋊
        merged_into_person_id: null
  other: []
---

# 王鉉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鉉 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_sn9KZzCF4Seq4v2EsCEM8N | 王䋊 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鉉（CBDB 288289）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288289&o=json)
