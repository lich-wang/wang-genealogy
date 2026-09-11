---
schema: wang-person/v1
id: p_xgf4m1uzkErDMpwT8PcnYx
status: active
merged_into: null
display_name: 王禎
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3c5c5LCrNS4weYEDCFmUbs
        subject_person_id: p_xgf4m1uzkErDMpwT8PcnYx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王禎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MbJjgHEfw423d79vJN1HYB
          claim_id: c_3c5c5LCrNS4weYEDCFmUbs
          source_id: s_LQbmXSZqDJeG4GQXXxPBCM
          stance: supports
          locator: CBDB:290448
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（290448）
          source: &a1
            id: s_LQbmXSZqDJeG4GQXXxPBCM
            source_type: api_record
            title: 中国历代人物传记资料库：王禎（CBDB 290448）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290448&o=json
            external_identifier: CBDB:290448
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.337Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MNgJt7FohMxkm5kZGwKP85
        subject_person_id: p_xgf4m1uzkErDMpwT8PcnYx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王禎，明人物。嘉靖八年進士，籍贯保定右衛。（中国历代人物传记资料库 CBDB 290448）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_O3HAYGoKmZurDbXUa4E5oh
          claim_id: c_MNgJt7FohMxkm5kZGwKP85
          source_id: s_LQbmXSZqDJeG4GQXXxPBCM
          stance: supports
          locator: CBDB:290448
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

# 王禎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王禎 | accepted |
| bio.summary | 王禎，明人物。嘉靖八年進士，籍贯保定右衛。（中国历代人物传记资料库 CBDB 290448） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王禎（CBDB 290448）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290448&o=json)
