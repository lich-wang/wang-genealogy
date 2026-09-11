---
schema: wang-person/v1
id: p_J7Cko4Ha17YVPp52QfDnuY
status: active
merged_into: null
display_name: 王度
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wWcafR4k3KcxE72WMJCeAJ
        subject_person_id: p_J7Cko4Ha17YVPp52QfDnuY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王度
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4XeJikrt2RrQth47NH5YTg
          claim_id: c_wWcafR4k3KcxE72WMJCeAJ
          source_id: s_W9fFmywW1dpWFVeAgLDGyZ
          stance: supports
          locator: CBDB:458316
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（458316）
          source: &a1
            id: s_W9fFmywW1dpWFVeAgLDGyZ
            source_type: api_record
            title: 中国历代人物传记资料库：王度（CBDB 458316）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=458316&o=json
            external_identifier: CBDB:458316
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.645Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kVEJLZY19qqwi2U9y6tdkx
        subject_person_id: p_J7Cko4Ha17YVPp52QfDnuY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王度，清人物。入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任同知。（中国历代人物传记资料库 CBDB 458316）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_B0V50aRcOspRmehbe4ZTLp
          claim_id: c_kVEJLZY19qqwi2U9y6tdkx
          source_id: s_W9fFmywW1dpWFVeAgLDGyZ
          stance: supports
          locator: CBDB:458316
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

# 王度

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王度 | accepted |
| bio.summary | 王度，清人物。入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任同知。（中国历代人物传记资料库 CBDB 458316） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王度（CBDB 458316）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=458316&o=json)
