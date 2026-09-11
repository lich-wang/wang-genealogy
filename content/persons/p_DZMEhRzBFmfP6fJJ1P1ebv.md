---
schema: wang-person/v1
id: p_DZMEhRzBFmfP6fJJ1P1ebv
status: active
merged_into: null
display_name: 王坦修
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_g5G6aZ3tdEJ1tampCX5S7L
        subject_person_id: p_DZMEhRzBFmfP6fJJ1P1ebv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王坦修
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mjnKe3BCBo9SJ375SVBX2x
          claim_id: c_g5G6aZ3tdEJ1tampCX5S7L
          source_id: s_VHWrLG1J2azY4NPcE1MkYU
          stance: supports
          locator: CBDB:61493
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（61493）
          source: &a1
            id: s_VHWrLG1J2azY4NPcE1MkYU
            source_type: api_record
            title: 中国历代人物传记资料库：王坦修（CBDB 61493）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=61493&o=json
            external_identifier: CBDB:61493
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.902Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_JWLTq4B2ZvJ5BHsCrzgSDS
        subject_person_id: p_DZMEhRzBFmfP6fJJ1P1ebv
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1744年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HaNqiR65P38w1Bjd2orDJU
          claim_id: c_JWLTq4B2ZvJ5BHsCrzgSDS
          source_id: s_VHWrLG1J2azY4NPcE1MkYU
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
        id: c_1ZCg7eBE9FMdtd2pzd4WwA
        subject_person_id: p_DZMEhRzBFmfP6fJJ1P1ebv
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1809年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hUoTYxSNkQf47UtVL1ggxC
          claim_id: c_1ZCg7eBE9FMdtd2pzd4WwA
          source_id: s_VHWrLG1J2azY4NPcE1MkYU
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
        id: c_mpZX1YmdXuUwEZgs6FyvoG
        subject_person_id: p_DZMEhRzBFmfP6fJJ1P1ebv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王坦修（1744年—1809年），清人物。籍贯寧鄉。（中国历代人物传记资料库 CBDB 61493）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3bmApxJJ1mYeH7u0zXIU4x
          claim_id: c_mpZX1YmdXuUwEZgs6FyvoG
          source_id: s_VHWrLG1J2azY4NPcE1MkYU
          stance: supports
          locator: CBDB:61493
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

# 王坦修

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王坦修 | accepted |
| birth.date | 1744年 | accepted |
| death.date | 1809年 | accepted |
| bio.summary | 王坦修（1744年—1809年），清人物。籍贯寧鄉。（中国历代人物传记资料库 CBDB 61493） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王坦修（CBDB 61493）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=61493&o=json)
