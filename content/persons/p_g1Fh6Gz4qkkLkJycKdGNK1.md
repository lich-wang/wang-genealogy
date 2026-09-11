---
schema: wang-person/v1
id: p_g1Fh6Gz4qkkLkJycKdGNK1
status: active
merged_into: null
display_name: 王慶瑞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XjzoYqaiVsMXeBCqX8kdxp
        subject_person_id: p_g1Fh6Gz4qkkLkJycKdGNK1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慶瑞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GdLBsKHMvyHBLEPhJ6f1iG
          claim_id: c_XjzoYqaiVsMXeBCqX8kdxp
          source_id: s_eHgBMCeHSK9x1VFxuekvwU
          stance: supports
          locator: CBDB:637945
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637945）
          source: &a1
            id: s_eHgBMCeHSK9x1VFxuekvwU
            source_type: api_record
            title: 中国历代人物传记资料库：王慶瑞（CBDB 637945）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637945&o=json
            external_identifier: CBDB:637945
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.567Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hReXjUtSKje65GA4QhKyYR
        subject_person_id: p_g1Fh6Gz4qkkLkJycKdGNK1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慶瑞，清人物。籍贯宛平，入仕監生，曾任知縣、主簿。（中国历代人物传记资料库 CBDB 637945）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_q-onQnhSlHPU3ZxuuaxbhI
          claim_id: c_hReXjUtSKje65GA4QhKyYR
          source_id: s_eHgBMCeHSK9x1VFxuekvwU
          stance: supports
          locator: CBDB:637945
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

# 王慶瑞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王慶瑞 | accepted |
| bio.summary | 王慶瑞，清人物。籍贯宛平，入仕監生，曾任知縣、主簿。（中国历代人物传记资料库 CBDB 637945） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王慶瑞（CBDB 637945）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637945&o=json)
