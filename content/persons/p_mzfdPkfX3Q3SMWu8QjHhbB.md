---
schema: wang-person/v1
id: p_mzfdPkfX3Q3SMWu8QjHhbB
status: active
merged_into: null
display_name: 王世爵
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NuC1w7K5jjedw53Yjv6AjK
        subject_person_id: p_mzfdPkfX3Q3SMWu8QjHhbB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世爵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Jdh7HgzJUqoD2dAb1CPi9i
          claim_id: c_NuC1w7K5jjedw53Yjv6AjK
          source_id: s_5JxNZTtyHpqvCXc5UsL8Sc
          stance: supports
          locator: CBDB:202209
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（202209）
          source: &a1
            id: s_5JxNZTtyHpqvCXc5UsL8Sc
            source_type: api_record
            title: 中国历代人物传记资料库：王世爵（CBDB 202209）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202209&o=json
            external_identifier: CBDB:202209
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.728Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_tGUr4vZAEQ99t4YvqvSg9E
        subject_person_id: p_mzfdPkfX3Q3SMWu8QjHhbB
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1484年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_joGVUbgniF2aWpxYtr9wM8
          claim_id: c_tGUr4vZAEQ99t4YvqvSg9E
          source_id: s_5JxNZTtyHpqvCXc5UsL8Sc
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7CMrfh377iDMfDYBRTXa1f
        subject_person_id: p_mzfdPkfX3Q3SMWu8QjHhbB
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
        - id: cs_uso439c8GfwGkLfCNKABES
          claim_id: c_7CMrfh377iDMfDYBRTXa1f
          source_id: s_5JxNZTtyHpqvCXc5UsL8Sc
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
        id: c_j7gCB_Eo7fa4IoD802QrHi
        subject_person_id: p_5xNKeJnMLc2HP1gUGBRQHQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mzfdPkfX3Q3SMWu8QjHhbB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4K6h1Zeg14Q67cLGUrwHuv
          claim_id: c_j7gCB_Eo7fa4IoD802QrHi
          source_id: s_E7V6MKuF1bwSvDJaKLfGN7
          stance: supports
          locator: 正德十六年登科錄:一卷，第三甲第九十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_E7V6MKuF1bwSvDJaKLfGN7
            source_type: api_record
            title: 中国历代人物传记资料库：王緒（CBDB 285104）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285104&o=json
            external_identifier: CBDB:285104
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.209Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5xNKeJnMLc2HP1gUGBRQHQ
        status: active
        display_name: 王緒
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王世爵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世爵 | accepted |
| birth.date | 1484年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5xNKeJnMLc2HP1gUGBRQHQ | 王緒 | accepted |

## 外部来源

- [中国历代人物传记资料库：王世爵（CBDB 202209）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202209&o=json)
- [中国历代人物传记资料库：王緒（CBDB 285104）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285104&o=json)
