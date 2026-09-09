---
schema: wang-person/v1
id: p_MfQH68BworaTTw9jCx5G7g
status: active
merged_into: null
display_name: 王獻唐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BwfqKZNvkG36zsrq7qqV6L
        subject_person_id: p_MfQH68BworaTTw9jCx5G7g
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王獻唐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_brhA5Z2JsS1USBRK21b5tz
          claim_id: c_BwfqKZNvkG36zsrq7qqV6L
          source_id: s_zhEELGH99kFa4eqZqbXFyB
          stance: supports
          locator: CBDB:124396
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（124396）
          source: &a1
            id: s_zhEELGH99kFa4eqZqbXFyB
            source_type: api_record
            title: 中国历代人物传记资料库：王獻唐（CBDB 124396）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=124396&o=json
            external_identifier: CBDB:124396
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.944Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_T9f4TyCo98MgAdTLMWj8zD
        subject_person_id: p_MfQH68BworaTTw9jCx5G7g
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1896年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FohJj3wsGKs9NTpt3ZQDd5
          claim_id: c_T9f4TyCo98MgAdTLMWj8zD
          source_id: s_zhEELGH99kFa4eqZqbXFyB
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
        id: c_NRs84R3yBbTsv51781QCp3
        subject_person_id: p_MfQH68BworaTTw9jCx5G7g
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1960年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_j66e3A1EviqUVT6BHqeQPc
          claim_id: c_NRs84R3yBbTsv51781QCp3
          source_id: s_zhEELGH99kFa4eqZqbXFyB
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
        id: c_GyPDh8JAJaQyJbezLYM2Ze
        subject_person_id: p_MfQH68BworaTTw9jCx5G7g
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vREDaFVtgnhiWTNq2jpCFD
          claim_id: c_GyPDh8JAJaQyJbezLYM2Ze
          source_id: s_zhEELGH99kFa4eqZqbXFyB
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

# 王獻唐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王獻唐 | accepted |
| birth.date | 1896年 | accepted |
| death.date | 1960年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王獻唐（CBDB 124396）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=124396&o=json)
