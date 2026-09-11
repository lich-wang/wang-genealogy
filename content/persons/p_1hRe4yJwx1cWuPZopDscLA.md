---
schema: wang-person/v1
id: p_1hRe4yJwx1cWuPZopDscLA
status: active
merged_into: null
display_name: 呂氏
revision: 1
cbdb_id: 385851
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_M1pF6oN4YtPQEq3LUzc0Bh
        subject_person_id: p_1hRe4yJwx1cWuPZopDscLA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 呂氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_X63fQj3aegZEfCqsgAjMiQ
          claim_id: c_M1pF6oN4YtPQEq3LUzc0Bh
          source_id: s_77sqBT_qLHVQ6H2yiw2hK5
          stance: supports
          locator: CBDB:385851
          quotation: null
          interpretation_note: CBDB 明确记录的王恬配偶
          source: &a1
            id: s_77sqBT_qLHVQ6H2yiw2hK5
            source_type: api_record
            title: 中国历代人物传记资料库：呂氏 (呂師傳女)（CBDB 385851）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=385851&o=json
            external_identifier: CBDB:385851
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
        id: c_0RgZo2eSiiOKVDUbAZKevd
        subject_person_id: p_WFnoT4AbtuEmwq5jbDJDqe
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_1hRe4yJwx1cWuPZopDscLA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_c2g9hkbZWqPsW4j7v5Txby
          claim_id: c_0RgZo2eSiiOKVDUbAZKevd
          source_id: s_77sqBT_qLHVQ6H2yiw2hK5
          stance: supports
          locator: 全宋文，卷 5677：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_WFnoT4AbtuEmwq5jbDJDqe
        status: active
        display_name: 王恬
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 呂氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 呂氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_WFnoT4AbtuEmwq5jbDJDqe | 王恬 | accepted |

## 外部来源

- [中国历代人物传记资料库：呂氏 (呂師傳女)（CBDB 385851）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=385851&o=json)
