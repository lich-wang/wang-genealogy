---
schema: wang-person/v1
id: p_TvvFqJKVzvkCUGhQmyvuEr
status: active
merged_into: null
display_name: 王思恭
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZC97sXBGQpvsS5SoCLCyu2
        subject_person_id: p_TvvFqJKVzvkCUGhQmyvuEr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思恭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KnbkjeYoYAF2d3QC2qx8sK
          claim_id: c_ZC97sXBGQpvsS5SoCLCyu2
          source_id: s_vxtbS3tfWxxCDy92A22Tpk
          stance: supports
          locator: CBDB:101272
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101272）
          source: &a1
            id: s_vxtbS3tfWxxCDy92A22Tpk
            source_type: api_record
            title: 中国历代人物传记资料库：王思恭（CBDB 101272）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101272&o=json
            external_identifier: CBDB:101272
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.782Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_aNLiKC4Rr6gwT6KW6Yk46F
        subject_person_id: p_TvvFqJKVzvkCUGhQmyvuEr
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1242年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ozExpeAUpCz1eSh9YqGbro
          claim_id: c_aNLiKC4Rr6gwT6KW6Yk46F
          source_id: s_vxtbS3tfWxxCDy92A22Tpk
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
        id: c_69Joz7GSF3PRRjmMWK7vze
        subject_person_id: p_TvvFqJKVzvkCUGhQmyvuEr
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1316年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sQiZoFCDuEuVF3oFt23kgD
          claim_id: c_69Joz7GSF3PRRjmMWK7vze
          source_id: s_vxtbS3tfWxxCDy92A22Tpk
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
        id: c_1QqLbG5U6N6sRnZsepQ1Kv
        subject_person_id: p_TvvFqJKVzvkCUGhQmyvuEr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_N7cgUvjmt21PZ6q7QUFe6q
          claim_id: c_1QqLbG5U6N6sRnZsepQ1Kv
          source_id: s_vxtbS3tfWxxCDy92A22Tpk
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

# 王思恭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王思恭 | accepted |
| birth.date | 1242年 | accepted |
| death.date | 1316年 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王思恭（CBDB 101272）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101272&o=json)
