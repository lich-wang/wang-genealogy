---
schema: wang-person/v1
id: p_6ipmSHSk8aoGHxH3xRNiHG
status: active
merged_into: null
display_name: 王者賓
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Uec8a97E2Cx2gd5KFVCWrS
        subject_person_id: p_6ipmSHSk8aoGHxH3xRNiHG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王者賓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bLrGYFRgJHKr5HKJoreBmb
          claim_id: c_Uec8a97E2Cx2gd5KFVCWrS
          source_id: s_M94baiDLP7jCU6E3CmqgH1
          stance: supports
          locator: CBDB:496924
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（496924）
          source: &a1
            id: s_M94baiDLP7jCU6E3CmqgH1
            source_type: api_record
            title: 中国历代人物传记资料库：王者賓（CBDB 496924）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=496924&o=json
            external_identifier: CBDB:496924
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.596Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ozK6PB9u3DHGhSoCn9Rtyr
        subject_person_id: p_6ipmSHSk8aoGHxH3xRNiHG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王者賓，清人物。曾任主簿。（中国历代人物传记资料库 CBDB 496924）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Rg2H_ZJE2lt8ZERFVcx8KC
          claim_id: c_ozK6PB9u3DHGhSoCn9Rtyr
          source_id: s_M94baiDLP7jCU6E3CmqgH1
          stance: supports
          locator: CBDB:496924
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

# 王者賓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王者賓 | accepted |
| bio.summary | 王者賓，清人物。曾任主簿。（中国历代人物传记资料库 CBDB 496924） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王者賓（CBDB 496924）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=496924&o=json)
