---
schema: wang-person/v1
id: p_sw4HRCAALrghGfmu6R2rBH
status: active
merged_into: null
display_name: 王叔邕
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BCsc46oEivTBsxNy3PSrif
        subject_person_id: p_sw4HRCAALrghGfmu6R2rBH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王叔邕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_F7MHiRAETtdhwJw6ZwCZfW
          claim_id: c_BCsc46oEivTBsxNy3PSrif
          source_id: s_cYRKxt77maLMaWiQK6L9MJ
          stance: supports
          locator: CBDB:383529
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（383529）
          source: &a1
            id: s_cYRKxt77maLMaWiQK6L9MJ
            source_type: api_record
            title: 中国历代人物传记资料库：王叔邕（CBDB 383529）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=383529&o=json
            external_identifier: CBDB:383529
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.843Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DMvRQuBaALrjFQKauhpc8r
        subject_person_id: p_sw4HRCAALrghGfmu6R2rBH
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
        - id: cs_Kc1BF7HWNVXtDKMD6wf2dm
          claim_id: c_DMvRQuBaALrjFQKauhpc8r
          source_id: s_cYRKxt77maLMaWiQK6L9MJ
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

# 王叔邕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王叔邕 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王叔邕（CBDB 383529）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=383529&o=json)
