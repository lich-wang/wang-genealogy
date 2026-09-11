---
schema: wang-person/v1
id: p_hh8fhsCR2PRgT3HnPmoPSX
status: active
merged_into: null
display_name: 王三接
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3Wsm25dDDH4ftjX2jA53oP
        subject_person_id: p_hh8fhsCR2PRgT3HnPmoPSX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三接
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_M37escHKefxpUsudJL8yVM
          claim_id: c_3Wsm25dDDH4ftjX2jA53oP
          source_id: s_sxJvyqBdTQxrPtSTfsCZYG
          stance: supports
          locator: CBDB:203931
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（203931）
          source: &a1
            id: s_sxJvyqBdTQxrPtSTfsCZYG
            source_type: api_record
            title: 中国历代人物传记资料库：王三接（CBDB 203931）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203931&o=json
            external_identifier: CBDB:203931
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.809Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_76PgyRFzvPmSjpDNj3eJyi
        subject_person_id: p_hh8fhsCR2PRgT3HnPmoPSX
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1526年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_chb9AfA7oYSzMM9BPDULGQ
          claim_id: c_76PgyRFzvPmSjpDNj3eJyi
          source_id: s_sxJvyqBdTQxrPtSTfsCZYG
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
        id: c_GrcSvwGJeJWpdEC4socJvL
        subject_person_id: p_hh8fhsCR2PRgT3HnPmoPSX
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
        - id: cs_fBQJmmZA7KqLYiANKtA8J5
          claim_id: c_GrcSvwGJeJWpdEC4socJvL
          source_id: s_sxJvyqBdTQxrPtSTfsCZYG
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
        id: c__Zx_zhqpuJroNA9Hjh9JGz
        subject_person_id: p_fn2qF87LdSpD7mFSUY9aBy
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hh8fhsCR2PRgT3HnPmoPSX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iSnrQpEgI_wN7w4RE88W9P
          claim_id: c__Zx_zhqpuJroNA9Hjh9JGz
          source_id: s_AWXpp7PGgrbvo4HhzKdng3
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第二甲第四十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_AWXpp7PGgrbvo4HhzKdng3
            source_type: api_record
            title: 中国历代人物传记资料库：王濟（CBDB 312131）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312131&o=json
            external_identifier: CBDB:312131
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.864Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_fn2qF87LdSpD7mFSUY9aBy
        status: active
        display_name: 王濟
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王三接

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王三接 | accepted |
| birth.date | 1526年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_fn2qF87LdSpD7mFSUY9aBy | 王濟 | accepted |

## 外部来源

- [中国历代人物传记资料库：王濟（CBDB 312131）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312131&o=json)
- [中国历代人物传记资料库：王三接（CBDB 203931）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203931&o=json)
