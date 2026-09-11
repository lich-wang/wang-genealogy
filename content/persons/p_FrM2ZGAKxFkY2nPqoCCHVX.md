---
schema: wang-person/v1
id: p_FrM2ZGAKxFkY2nPqoCCHVX
status: active
merged_into: null
display_name: 李氏
revision: 1
cbdb_id: 555092
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2pFIq1wESF7lPXAwAwfo9P
        subject_person_id: p_FrM2ZGAKxFkY2nPqoCCHVX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 李氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zvTsKr_pAigamWLBub3mUP
          claim_id: c_2pFIq1wESF7lPXAwAwfo9P
          source_id: s_qclRHLY5obJt4ZGPdETV5W
          stance: supports
          locator: CBDB:555092
          quotation: null
          interpretation_note: CBDB 明确记录的王用善配偶
          source: &a1
            id: s_qclRHLY5obJt4ZGPdETV5W
            source_type: api_record
            title: 中国历代人物传记资料库：李氏(王用善妻)（CBDB 555092）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555092&o=json
            external_identifier: CBDB:555092
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
        id: c_GTuqF6HaW0efLDGp0CbsZB
        subject_person_id: p_BZTq4h8J9i4P7ewhfmoDT2
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_FrM2ZGAKxFkY2nPqoCCHVX
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_h739q-X3Ua3Rr2DEsiK9kI
          claim_id: c_GTuqF6HaW0efLDGp0CbsZB
          source_id: s_qclRHLY5obJt4ZGPdETV5W
          stance: supports
          locator: 南陽府志，lgid=878686：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_BZTq4h8J9i4P7ewhfmoDT2
        status: active
        display_name: 王用善
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 李氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 李氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_BZTq4h8J9i4P7ewhfmoDT2 | 王用善 | accepted |

## 外部来源

- [中国历代人物传记资料库：李氏(王用善妻)（CBDB 555092）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555092&o=json)
