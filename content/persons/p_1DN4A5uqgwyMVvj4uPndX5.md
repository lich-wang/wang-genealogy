---
schema: wang-person/v1
id: p_1DN4A5uqgwyMVvj4uPndX5
status: active
merged_into: null
display_name: 王克捷
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4SaNhoEEawFW7sY3CTi2Nb
        subject_person_id: p_1DN4A5uqgwyMVvj4uPndX5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克捷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_g16bhRPsmeLX4DMUTQPNR4
          claim_id: c_4SaNhoEEawFW7sY3CTi2Nb
          source_id: s_Zmr4RKHXuqvTKfSYoWE2Au
          stance: supports
          locator: CBDB:71661
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71661）
          source: &a1
            id: s_Zmr4RKHXuqvTKfSYoWE2Au
            source_type: api_record
            title: 中国历代人物传记资料库：王克捷（CBDB 71661）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71661&o=json
            external_identifier: CBDB:71661
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.812Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_wtB3MizX52NAzHj6zTv4uB
        subject_person_id: p_1DN4A5uqgwyMVvj4uPndX5
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1726年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_N6xuBtxVJjnk3Tx4jrBfwE
          claim_id: c_wtB3MizX52NAzHj6zTv4uB
          source_id: s_Zmr4RKHXuqvTKfSYoWE2Au
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
        id: c_rRRNFnqCT3idBRv8FyxMnv
        subject_person_id: p_1DN4A5uqgwyMVvj4uPndX5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克捷（生于1726年），清人物。籍贯諸羅。（中国历代人物传记资料库 CBDB 71661）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KPaSYsF4XuYok60KxVwE4H
          claim_id: c_rRRNFnqCT3idBRv8FyxMnv
          source_id: s_Zmr4RKHXuqvTKfSYoWE2Au
          stance: supports
          locator: CBDB:71661
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

# 王克捷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王克捷 | accepted |
| birth.date | 1726年 | accepted |
| bio.summary | 王克捷（生于1726年），清人物。籍贯諸羅。（中国历代人物传记资料库 CBDB 71661） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王克捷（CBDB 71661）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71661&o=json)
