---
schema: wang-person/v1
id: p_d9sSRa7nAqK1TZDEdrGVU4
status: active
merged_into: null
display_name: 王繼芳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ns8swKNWLqxSKrfGC1PDey
        subject_person_id: p_d9sSRa7nAqK1TZDEdrGVU4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼芳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3stGM5e66PQMfN5bBMDM6W
          claim_id: c_ns8swKNWLqxSKrfGC1PDey
          source_id: s_vyJuGxRdhL1amKaz4dYTJj
          stance: supports
          locator: CBDB:202776
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（202776）
          source: &a1
            id: s_vyJuGxRdhL1amKaz4dYTJj
            source_type: api_record
            title: 中国历代人物传记资料库：王繼芳（CBDB 202776）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202776&o=json
            external_identifier: CBDB:202776
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.752Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_54Gzg3PPycWyHJy5pFAHyV
        subject_person_id: p_d9sSRa7nAqK1TZDEdrGVU4
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1494年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_avg1vYtVtjswZL4jbbvHHN
          claim_id: c_54Gzg3PPycWyHJy5pFAHyV
          source_id: s_vyJuGxRdhL1amKaz4dYTJj
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
        id: c_nYcsKaeqJWRXneAKL61KzE
        subject_person_id: p_d9sSRa7nAqK1TZDEdrGVU4
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
        - id: cs_Mh7SRY4kxh1XLHHCA5NYwU
          claim_id: c_nYcsKaeqJWRXneAKL61KzE
          source_id: s_vyJuGxRdhL1amKaz4dYTJj
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

# 王繼芳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王繼芳 | accepted |
| birth.date | 1494年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王繼芳（CBDB 202776）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202776&o=json)
