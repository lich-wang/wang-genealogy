---
schema: wang-person/v1
id: p_9veubhrKKm9FkiQnvDayeP
status: active
merged_into: null
display_name: 王諷
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_f7j48b61dVtM9h8NTikQt9
        subject_person_id: p_9veubhrKKm9FkiQnvDayeP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王諷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eqBTXi5qhoYsR44QfXFC2u
          claim_id: c_f7j48b61dVtM9h8NTikQt9
          source_id: s_nMZqBs13Cu7L4kANyR3K6V
          stance: supports
          locator: CBDB:194283
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（194283）
          source: &a1
            id: s_nMZqBs13Cu7L4kANyR3K6V
            source_type: api_record
            title: 中国历代人物传记资料库：王諷（CBDB 194283）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=194283&o=json
            external_identifier: CBDB:194283
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.449Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_AtRYLw73FWA1og5hDFvXqW
        subject_person_id: p_9veubhrKKm9FkiQnvDayeP
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 882年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wFEQH1LJw75ba8b4TyCLG8
          claim_id: c_AtRYLw73FWA1og5hDFvXqW
          source_id: s_nMZqBs13Cu7L4kANyR3K6V
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
        id: c_5vmjDQSaHp5ud1wS12a1yH
        subject_person_id: p_9veubhrKKm9FkiQnvDayeP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王諷（卒于882年），唐人物。曾任道節度使、州刺史。（中国历代人物传记资料库 CBDB 194283）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hp7msUBvN9YUS9o4HZpi_N
          claim_id: c_5vmjDQSaHp5ud1wS12a1yH
          source_id: s_nMZqBs13Cu7L4kANyR3K6V
          stance: supports
          locator: CBDB:194283
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

# 王諷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王諷 | accepted |
| death.date | 882年 | accepted |
| bio.summary | 王諷（卒于882年），唐人物。曾任道節度使、州刺史。（中国历代人物传记资料库 CBDB 194283） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王諷（CBDB 194283）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=194283&o=json)
