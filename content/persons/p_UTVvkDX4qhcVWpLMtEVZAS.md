---
schema: wang-person/v1
id: p_UTVvkDX4qhcVWpLMtEVZAS
status: active
merged_into: null
display_name: 王寬栗
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pFSMLjLzAVdahzGsjCSKvd
        subject_person_id: p_UTVvkDX4qhcVWpLMtEVZAS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寬栗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WoAdiGua7k2GyheJitFPK5
          claim_id: c_pFSMLjLzAVdahzGsjCSKvd
          source_id: s_BsVAfBWUU4ePWpTrfen8ur
          stance: supports
          locator: CBDB:637250
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637250）
          source: &a1
            id: s_BsVAfBWUU4ePWpTrfen8ur
            source_type: api_record
            title: 中国历代人物传记资料库：王寬栗（CBDB 637250）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637250&o=json
            external_identifier: CBDB:637250
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.257Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_n6iHkk6z9JApj1ayK8FuZP
        subject_person_id: p_UTVvkDX4qhcVWpLMtEVZAS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寬栗，清人物。籍贯廬陵，入仕監生，曾任經歷。（中国历代人物传记资料库 CBDB 637250）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_sft0syilwdJk_J-TI9-uSa
          claim_id: c_n6iHkk6z9JApj1ayK8FuZP
          source_id: s_BsVAfBWUU4ePWpTrfen8ur
          stance: supports
          locator: CBDB:637250
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

# 王寬栗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寬栗 | accepted |
| bio.summary | 王寬栗，清人物。籍贯廬陵，入仕監生，曾任經歷。（中国历代人物传记资料库 CBDB 637250） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王寬栗（CBDB 637250）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637250&o=json)
