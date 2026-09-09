---
schema: wang-person/v1
id: p_738t8jZyTZKAPviDCRrrJx
status: active
merged_into: null
display_name: 王平
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XYvNyvqxXRhPfj9j2UepB3
        subject_person_id: p_738t8jZyTZKAPviDCRrrJx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王平
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NCX7Xtkd7o8M9K8mui7xGM
          claim_id: c_XYvNyvqxXRhPfj9j2UepB3
          source_id: s_GPNRKDZJP3EbeT9neoB5Aa
          stance: supports
          locator: CBDB:141348
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（141348）
          source: &a1
            id: s_GPNRKDZJP3EbeT9neoB5Aa
            source_type: api_record
            title: 中国历代人物传记资料库：王平（CBDB 141348）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141348&o=json
            external_identifier: CBDB:141348
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.556Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_W9ypC2K6JABDLXehcXSTuy
        subject_person_id: p_738t8jZyTZKAPviDCRrrJx
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 726年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dEYHz8pGZai9UhV7MneD9J
          claim_id: c_W9ypC2K6JABDLXehcXSTuy
          source_id: s_GPNRKDZJP3EbeT9neoB5Aa
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
        id: c_1qHchC6naL9JiLKTMZpj7P
        subject_person_id: p_738t8jZyTZKAPviDCRrrJx
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 789年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tyEKFN8A7XvfFxaG7KcJ7X
          claim_id: c_1qHchC6naL9JiLKTMZpj7P
          source_id: s_GPNRKDZJP3EbeT9neoB5Aa
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
        id: c_PDbgqE3HNMpkKrCi18r2x7
        subject_person_id: p_738t8jZyTZKAPviDCRrrJx
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
        - id: cs_6Two49hH3r7d3H4y3rWPBo
          claim_id: c_PDbgqE3HNMpkKrCi18r2x7
          source_id: s_GPNRKDZJP3EbeT9neoB5Aa
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

# 王平

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王平 | accepted |
| birth.date | 726年 | accepted |
| death.date | 789年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王平（CBDB 141348）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141348&o=json)
