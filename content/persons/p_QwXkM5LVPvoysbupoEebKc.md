---
schema: wang-person/v1
id: p_QwXkM5LVPvoysbupoEebKc
status: active
merged_into: null
display_name: 王霽
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SBbof9Ex3VLEi7p3TTnM4S
        subject_person_id: p_QwXkM5LVPvoysbupoEebKc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王霽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RkTehpy4v9eULiYxejHp4K
          claim_id: c_SBbof9Ex3VLEi7p3TTnM4S
          source_id: s_QciCQGJKAWuNbLNMkU9Lus
          stance: supports
          locator: CBDB:14304
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（14304）
          source: &a1
            id: s_QciCQGJKAWuNbLNMkU9Lus
            source_type: api_record
            title: 中国历代人物传记资料库：王霽（CBDB 14304）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=14304&o=json
            external_identifier: CBDB:14304
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.635Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_4Ayb8Le7hcdJ6WzX8zcVKj
        subject_person_id: p_QwXkM5LVPvoysbupoEebKc
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1126年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HnoqfNQZrXyxnbiEjEXoZy
          claim_id: c_4Ayb8Le7hcdJ6WzX8zcVKj
          source_id: s_QciCQGJKAWuNbLNMkU9Lus
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
        id: c_rR63fiR8L1UE7NH1U6BLai
        subject_person_id: p_QwXkM5LVPvoysbupoEebKc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王霽（卒于1126年），宋人物。籍贯晉城，曾任太常寺博士、謀議司詳議官。（中国历代人物传记资料库 CBDB 14304）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JSjt1vWA3TG3uTCrheWI7F
          claim_id: c_rR63fiR8L1UE7NH1U6BLai
          source_id: s_QciCQGJKAWuNbLNMkU9Lus
          stance: supports
          locator: CBDB:14304
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_MoIng9Y2AV34dKTrUcNhNx
        subject_person_id: p_iL53NuuSgA33Ht2KRWRfLu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QwXkM5LVPvoysbupoEebKc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zidFud1DCsDheLJLsql3Sf
          claim_id: c_MoIng9Y2AV34dKTrUcNhNx
          source_id: s_ugdB4Qb9Ee4jXSruaMoQCu
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1326：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ugdB4Qb9Ee4jXSruaMoQCu
            source_type: api_record
            title: 中国历代人物传记资料库：王獻可（CBDB 14303）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=14303&o=json
            external_identifier: CBDB:14303
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.634Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_iL53NuuSgA33Ht2KRWRfLu
        status: active
        display_name: 王獻可
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王霽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王霽 | accepted |
| death.date | 1126年 | accepted |
| bio.summary | 王霽（卒于1126年），宋人物。籍贯晉城，曾任太常寺博士、謀議司詳議官。（中国历代人物传记资料库 CBDB 14304） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_iL53NuuSgA33Ht2KRWRfLu | 王獻可 | accepted |

## 外部来源

- [中国历代人物传记资料库：王霽（CBDB 14304）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=14304&o=json)
- [中国历代人物传记资料库：王獻可（CBDB 14303）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=14303&o=json)
