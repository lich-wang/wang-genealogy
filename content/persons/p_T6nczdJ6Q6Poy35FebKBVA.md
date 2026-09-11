---
schema: wang-person/v1
id: p_T6nczdJ6Q6Poy35FebKBVA
status: active
merged_into: null
display_name: 王惟儉
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LoezKd8D4zm28UPwL9vrqA
        subject_person_id: p_T6nczdJ6Q6Poy35FebKBVA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惟儉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Bz5fbwM5VmwJqmCKw4E1uL
          claim_id: c_LoezKd8D4zm28UPwL9vrqA
          source_id: s_MSFJMWoXKC5okNFAA4MqAX
          stance: supports
          locator: CBDB:151000
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（151000）
          source: &a1
            id: s_MSFJMWoXKC5okNFAA4MqAX
            source_type: api_record
            title: 中国历代人物传记资料库：王惟儉（CBDB 151000）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=151000&o=json
            external_identifier: CBDB:151000
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.830Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NM5FZLY6PS18EN3YfqpNUC
        subject_person_id: p_T6nczdJ6Q6Poy35FebKBVA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QkDpuJves8bz2cNnYvN2Lr
          claim_id: c_NM5FZLY6PS18EN3YfqpNUC
          source_id: s_MSFJMWoXKC5okNFAA4MqAX
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_zLSs4xp_6sDG5L051FLfT6
        subject_person_id: p_2pUFp58kQxZiv37UYSDcqB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_T6nczdJ6Q6Poy35FebKBVA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tdsc2I44-yfoPukyeqsKEK
          claim_id: c_zLSs4xp_6sDG5L051FLfT6
          source_id: s_EfXWDpLrLMEyYjyZRb9EJ5
          stance: supports
          locator: 唐代墓誌匯編:二卷，Taiji 5：嗣子(作為繼承人的兒子)
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_EfXWDpLrLMEyYjyZRb9EJ5
            source_type: api_record
            title: 中国历代人物传记资料库：王天（CBDB 139941）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139941&o=json
            external_identifier: CBDB:139941
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.197Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2pUFp58kQxZiv37UYSDcqB
        status: active
        display_name: 王天
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王惟儉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王惟儉 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_2pUFp58kQxZiv37UYSDcqB | 王天 | accepted |

## 外部来源

- [中国历代人物传记资料库：王天（CBDB 139941）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139941&o=json)
- [中国历代人物传记资料库：王惟儉（CBDB 151000）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=151000&o=json)
