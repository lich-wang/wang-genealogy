---
schema: wang-person/v1
id: p_yfv4AKPLpmPbw2Ga9k5Jfg
status: active
merged_into: null
display_name: 王一中
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bBpF8K8V45bY3eTLAx6R8v
        subject_person_id: p_yfv4AKPLpmPbw2Ga9k5Jfg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Nse9M5Rx2cp2cdw6kc8eEe
          claim_id: c_bBpF8K8V45bY3eTLAx6R8v
          source_id: s_4F1vJovFYoemeF3XY9edcx
          stance: supports
          locator: CBDB:230477
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（230477）
          source: &a1
            id: s_4F1vJovFYoemeF3XY9edcx
            source_type: api_record
            title: 中国历代人物传记资料库：王一中（CBDB 230477）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230477&o=json
            external_identifier: CBDB:230477
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.618Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7DN5ESBjzsKHCoqMpj1Np1
        subject_person_id: p_yfv4AKPLpmPbw2Ga9k5Jfg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一中，明人物。萬曆丙戌科進士進士，籍贯黃岡，入仕廩生。（中国历代人物传记资料库 CBDB 230477）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FNgxOw3oELpMuyBH0gmyC4
          claim_id: c_7DN5ESBjzsKHCoqMpj1Np1
          source_id: s_4F1vJovFYoemeF3XY9edcx
          stance: supports
          locator: CBDB:230477
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

# 王一中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王一中 | accepted |
| bio.summary | 王一中，明人物。萬曆丙戌科進士進士，籍贯黃岡，入仕廩生。（中国历代人物传记资料库 CBDB 230477） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王一中（CBDB 230477）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230477&o=json)
