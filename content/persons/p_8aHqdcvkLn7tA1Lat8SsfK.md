---
schema: wang-person/v1
id: p_8aHqdcvkLn7tA1Lat8SsfK
status: active
merged_into: null
display_name: 王蘭
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_q6kqe3U1xzHZ5eDHMKrMGd
        subject_person_id: p_8aHqdcvkLn7tA1Lat8SsfK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蘭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sQdAxNZ5GnWXFUn4w4Kh2v
          claim_id: c_q6kqe3U1xzHZ5eDHMKrMGd
          source_id: s_ATx5qh87ur2b5mmS6C7Cj3
          stance: supports
          locator: CBDB:71053
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71053）
          source: &a1
            id: s_ATx5qh87ur2b5mmS6C7Cj3
            source_type: api_record
            title: 中国历代人物传记资料库：王蘭（CBDB 71053）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71053&o=json
            external_identifier: CBDB:71053
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.319Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_gNWKRNgjS4bJ5mT6hqJKKn
        subject_person_id: p_8aHqdcvkLn7tA1Lat8SsfK
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1835年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2JwBU9ireBktX7asNRkKks
          claim_id: c_gNWKRNgjS4bJ5mT6hqJKKn
          source_id: s_ATx5qh87ur2b5mmS6C7Cj3
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
        id: c_KhmDQ3ipxD9qavBPQoZTX9
        subject_person_id: p_8aHqdcvkLn7tA1Lat8SsfK
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1886年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MKZBCMs731RKD31pXjTZ9n
          claim_id: c_KhmDQ3ipxD9qavBPQoZTX9
          source_id: s_ATx5qh87ur2b5mmS6C7Cj3
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
        id: c_5EFPUjNPQz295aYKZ6RyC5
        subject_person_id: p_8aHqdcvkLn7tA1Lat8SsfK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蘭（1835年—1886年），清人物。籍贯歸安。（中国历代人物传记资料库 CBDB 71053）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mLcmc7_k9eyeK2GEW1RKFb
          claim_id: c_5EFPUjNPQz295aYKZ6RyC5
          source_id: s_ATx5qh87ur2b5mmS6C7Cj3
          stance: supports
          locator: CBDB:71053
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

# 王蘭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王蘭 | accepted |
| birth.date | 1835年 | accepted |
| death.date | 1886年 | accepted |
| bio.summary | 王蘭（1835年—1886年），清人物。籍贯歸安。（中国历代人物传记资料库 CBDB 71053） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王蘭（CBDB 71053）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71053&o=json)
