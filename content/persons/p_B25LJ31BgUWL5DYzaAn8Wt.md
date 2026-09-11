---
schema: wang-person/v1
id: p_B25LJ31BgUWL5DYzaAn8Wt
status: active
merged_into: null
display_name: 王克讓
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_i8NzYemzRNRCv35Yr2og71
        subject_person_id: p_B25LJ31BgUWL5DYzaAn8Wt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克讓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GXbcmui2PYnE22Ln1G9CAK
          claim_id: c_i8NzYemzRNRCv35Yr2og71
          source_id: s_HocuXiNoqLpcH9brXNxYPi
          stance: supports
          locator: CBDB:558447
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（558447）
          source: &a1
            id: s_HocuXiNoqLpcH9brXNxYPi
            source_type: api_record
            title: 中国历代人物传记资料库：王克讓（CBDB 558447）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=558447&o=json
            external_identifier: CBDB:558447
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.700Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QZ154g84jx1p5JVLQAC2YU
        subject_person_id: p_B25LJ31BgUWL5DYzaAn8Wt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克讓，清人物。籍贯信陽州。（中国历代人物传记资料库 CBDB 558447）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_t22YPe1lTG3G7Ec2ZzCtVn
          claim_id: c_QZ154g84jx1p5JVLQAC2YU
          source_id: s_HocuXiNoqLpcH9brXNxYPi
          stance: supports
          locator: CBDB:558447
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

# 王克讓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王克讓 | accepted |
| bio.summary | 王克讓，清人物。籍贯信陽州。（中国历代人物传记资料库 CBDB 558447） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王克讓（CBDB 558447）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=558447&o=json)
