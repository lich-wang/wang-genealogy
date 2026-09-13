---
schema: wang-person/v1
id: p_ftZ1PRscrPmBh4Qh3AiyfY
status: merged
merged_into: p_WgJjrR3eV8FZmEbV9t77oX
display_name: 王思任
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yNdHemXyF93bmpuAFQsYhC
        subject_person_id: p_ftZ1PRscrPmBh4Qh3AiyfY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思任
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7ADd23p3nCM9c1J57v42A6
          claim_id: c_yNdHemXyF93bmpuAFQsYhC
          source_id: s_wzB8H1VeEUUxxH32LdLqx3
          stance: supports
          locator: CBDB:71875
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71875）
          source: &a1
            id: s_wzB8H1VeEUUxxH32LdLqx3
            source_type: api_record
            title: 中国历代人物传记资料库：王思任（CBDB 71875）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71875&o=json
            external_identifier: CBDB:71875
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.907Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_B9beMvsmZdiQCugCWdHQzY
        subject_person_id: p_ftZ1PRscrPmBh4Qh3AiyfY
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1575年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tGGCMtbQdRNwTYZq9shi4f
          claim_id: c_B9beMvsmZdiQCugCWdHQzY
          source_id: s_wzB8H1VeEUUxxH32LdLqx3
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
        id: c_1MxL7J2jkrgftT5pEJJx1d
        subject_person_id: p_ftZ1PRscrPmBh4Qh3AiyfY
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1646年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1SpVdiH2SGo9C58yJ76JuL
          claim_id: c_1MxL7J2jkrgftT5pEJJx1d
          source_id: s_wzB8H1VeEUUxxH32LdLqx3
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
        id: c_9Q3wD5LcBabvBDaazWyv1q
        subject_person_id: p_ftZ1PRscrPmBh4Qh3AiyfY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思任（1575年—1646年），明人物。明清進士進士，籍贯山陰，入仕進士，曾任府推官、工部主事、禮部右侍郎。（中国历代人物传记资料库 CBDB 71875）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gQin2G3rQxsRjygmrsuG_2
          claim_id: c_9Q3wD5LcBabvBDaazWyv1q
          source_id: s_wzB8H1VeEUUxxH32LdLqx3
          stance: supports
          locator: CBDB:71875
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

# 王思任

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王思任 | accepted |
| birth.date | 1575年 | accepted |
| death.date | 1646年 | accepted |
| bio.summary | 王思任（1575年—1646年），明人物。明清進士進士，籍贯山陰，入仕進士，曾任府推官、工部主事、禮部右侍郎。（中国历代人物传记资料库 CBDB 71875） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王思任（CBDB 71875）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71875&o=json)
