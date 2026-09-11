---
schema: wang-person/v1
id: p_R3W14qEKZGmgDH8rKAUCAv
status: active
merged_into: null
display_name: 王佑曾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_v6FFuvBM8jEFB1EfkN9jYs
        subject_person_id: p_R3W14qEKZGmgDH8rKAUCAv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佑曾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gFZKzj7HWrXrLA4677hneH
          claim_id: c_v6FFuvBM8jEFB1EfkN9jYs
          source_id: s_rbojfBH9XVBzpYNP4GRYmG
          stance: supports
          locator: CBDB:71677
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71677）
          source: &a1
            id: s_rbojfBH9XVBzpYNP4GRYmG
            source_type: api_record
            title: 中国历代人物传记资料库：王佑曾（CBDB 71677）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71677&o=json
            external_identifier: CBDB:71677
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.823Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_J6Bu55JK4GP7HqEPxUGu2w
        subject_person_id: p_R3W14qEKZGmgDH8rKAUCAv
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1810年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fkCHKfH13YaKp6eVpc528c
          claim_id: c_J6Bu55JK4GP7HqEPxUGu2w
          source_id: s_rbojfBH9XVBzpYNP4GRYmG
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
        id: c_rU5QVj4iLQ2w841uFXTyg7
        subject_person_id: p_R3W14qEKZGmgDH8rKAUCAv
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1871年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6ukbf76ZzUZhSeVruU6avj
          claim_id: c_rU5QVj4iLQ2w841uFXTyg7
          source_id: s_rbojfBH9XVBzpYNP4GRYmG
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
        id: c_HQMb4ZCvpAMCm8D5NQGvdz
        subject_person_id: p_R3W14qEKZGmgDH8rKAUCAv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佑曾（1810年—1871年），清人物。籍贯丹徒。（中国历代人物传记资料库 CBDB 71677）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_OptnCkxXviLBMLHCgyVBHf
          claim_id: c_HQMb4ZCvpAMCm8D5NQGvdz
          source_id: s_rbojfBH9XVBzpYNP4GRYmG
          stance: supports
          locator: CBDB:71677
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

# 王佑曾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王佑曾 | accepted |
| birth.date | 1810年 | accepted |
| death.date | 1871年 | accepted |
| bio.summary | 王佑曾（1810年—1871年），清人物。籍贯丹徒。（中国历代人物传记资料库 CBDB 71677） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王佑曾（CBDB 71677）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71677&o=json)
