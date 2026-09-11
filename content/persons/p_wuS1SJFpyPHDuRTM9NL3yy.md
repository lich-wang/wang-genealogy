---
schema: wang-person/v1
id: p_wuS1SJFpyPHDuRTM9NL3yy
status: active
merged_into: null
display_name: 王道純
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BfB1B7itCwfbHc2Nb9LaCm
        subject_person_id: p_wuS1SJFpyPHDuRTM9NL3yy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道純
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Bf3MxZkka9cfErk6vucirh
          claim_id: c_BfB1B7itCwfbHc2Nb9LaCm
          source_id: s_g1T3s2RGpkuCFyiN9vCMnh
          stance: supports
          locator: CBDB:313344
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（313344）
          source: &a1
            id: s_g1T3s2RGpkuCFyiN9vCMnh
            source_type: api_record
            title: 中国历代人物传记资料库：王道純（CBDB 313344）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313344&o=json
            external_identifier: CBDB:313344
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.906Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SMpkThfViFNm2wMJ7PDEzE
        subject_person_id: p_wuS1SJFpyPHDuRTM9NL3yy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道純，明人物。嘉靖二十九年進士，籍贯咸陽。（中国历代人物传记资料库 CBDB 313344）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9w0hifCkGjzhPlk1cy-krn
          claim_id: c_SMpkThfViFNm2wMJ7PDEzE
          source_id: s_g1T3s2RGpkuCFyiN9vCMnh
          stance: supports
          locator: CBDB:313344
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

# 王道純

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王道純 | accepted |
| bio.summary | 王道純，明人物。嘉靖二十九年進士，籍贯咸陽。（中国历代人物传记资料库 CBDB 313344） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王道純（CBDB 313344）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313344&o=json)
