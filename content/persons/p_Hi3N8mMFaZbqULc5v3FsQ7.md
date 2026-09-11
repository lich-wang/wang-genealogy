---
schema: wang-person/v1
id: p_Hi3N8mMFaZbqULc5v3FsQ7
status: active
merged_into: null
display_name: 王春
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sfBFQ8zywqRW4xMch3KDrs
        subject_person_id: p_Hi3N8mMFaZbqULc5v3FsQ7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王春
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZsdxCNd2pHmueHdBWkrF9u
          claim_id: c_sfBFQ8zywqRW4xMch3KDrs
          source_id: s_7pk9CWQSbr58piXrG3hayF
          stance: supports
          locator: CBDB:273788
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（273788）
          source: &a1
            id: s_7pk9CWQSbr58piXrG3hayF
            source_type: api_record
            title: 中国历代人物传记资料库：王春（CBDB 273788）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273788&o=json
            external_identifier: CBDB:273788
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.906Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_94x4gA7u7ZeiG21o4J9NfY
        subject_person_id: p_Hi3N8mMFaZbqULc5v3FsQ7
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
        - id: cs_Eq1ZL6tJgFNhsepFrbNoAp
          claim_id: c_94x4gA7u7ZeiG21o4J9NfY
          source_id: s_7pk9CWQSbr58piXrG3hayF
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
        id: c_tKzHhy449Jpn13rmBjG-DH
        subject_person_id: p_Hi3N8mMFaZbqULc5v3FsQ7
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_oUoF6dRdhe6WLHeR9E6Mai
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_h__Q-iy5Dma0xu2EvpyjiX
          claim_id: c_tKzHhy449Jpn13rmBjG-DH
          source_id: s_7pk9CWQSbr58piXrG3hayF
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第三甲第十六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_oUoF6dRdhe6WLHeR9E6Mai
        status: active
        display_name: 王鏜
        merged_into_person_id: null
  other: []
---

# 王春

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王春 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_oUoF6dRdhe6WLHeR9E6Mai | 王鏜 | accepted |

## 外部来源

- [中国历代人物传记资料库：王春（CBDB 273788）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273788&o=json)
