---
schema: wang-person/v1
id: p_ufRLVRWc7tv4zcxsauhE29
status: active
merged_into: null
display_name: 王京
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1st4DaiRXp2yPBn3JPYhbX
        subject_person_id: p_ufRLVRWc7tv4zcxsauhE29
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王京
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_C1x1QepZLLtvhqm9L63wQy
          claim_id: c_1st4DaiRXp2yPBn3JPYhbX
          source_id: s_MA26ipnwCgcZSWdtGfA6Jk
          stance: supports
          locator: CBDB:202664
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（202664）
          source: &a1
            id: s_MA26ipnwCgcZSWdtGfA6Jk
            source_type: api_record
            title: 中国历代人物传记资料库：王京（CBDB 202664）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202664&o=json
            external_identifier: CBDB:202664
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.749Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_DRaYpsb3x1CeqFWcJHN6tt
        subject_person_id: p_ufRLVRWc7tv4zcxsauhE29
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1497年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ad389zB39LmQRHvNPRZZ3Z
          claim_id: c_DRaYpsb3x1CeqFWcJHN6tt
          source_id: s_MA26ipnwCgcZSWdtGfA6Jk
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
        id: c_7EUHKEhokzAyB2sTDAGA8j
        subject_person_id: p_ufRLVRWc7tv4zcxsauhE29
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
        - id: cs_UwDDwPvcYGj92ubjL3Amd5
          claim_id: c_7EUHKEhokzAyB2sTDAGA8j
          source_id: s_MA26ipnwCgcZSWdtGfA6Jk
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
  descendants: []
  other: []
---

# 王京

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王京 | accepted |
| birth.date | 1497年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王京（CBDB 202664）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202664&o=json)
