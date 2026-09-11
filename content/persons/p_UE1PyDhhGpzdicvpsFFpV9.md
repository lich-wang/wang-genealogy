---
schema: wang-person/v1
id: p_UE1PyDhhGpzdicvpsFFpV9
status: active
merged_into: null
display_name: 王鳴玉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JJwoSboDyxXmKVk47aoex2
        subject_person_id: p_UE1PyDhhGpzdicvpsFFpV9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鳴玉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uTvz2AR57NmW6A7YLyHLR2
          claim_id: c_JJwoSboDyxXmKVk47aoex2
          source_id: s_2nZXenv14qJjcWFmDeZpP6
          stance: supports
          locator: CBDB:71767
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71767）
          source: &a1
            id: s_2nZXenv14qJjcWFmDeZpP6
            source_type: api_record
            title: 中国历代人物传记资料库：王鳴玉（CBDB 71767）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71767&o=json
            external_identifier: CBDB:71767
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.861Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_cADE7rzD4ezEduithnnBaR
        subject_person_id: p_UE1PyDhhGpzdicvpsFFpV9
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
        - id: cs_P4cEopvfMuA6qoFCg44eHk
          claim_id: c_cADE7rzD4ezEduithnnBaR
          source_id: s_2nZXenv14qJjcWFmDeZpP6
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
        id: c_1g8KzY6CZWu5mtE2Gjs8Ee
        subject_person_id: p_UE1PyDhhGpzdicvpsFFpV9
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1805年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_n1hHcPwBP9sMvvexSPJgnz
          claim_id: c_1g8KzY6CZWu5mtE2Gjs8Ee
          source_id: s_2nZXenv14qJjcWFmDeZpP6
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
        id: c_5LMD3mBZJjRFnHpDJx6BtA
        subject_person_id: p_UE1PyDhhGpzdicvpsFFpV9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鳴玉（1744年—1805年），清人物。籍贯泉州府。（中国历代人物传记资料库 CBDB 71767）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jD1bIw3_0BYTZDQ4CcdSig
          claim_id: c_5LMD3mBZJjRFnHpDJx6BtA
          source_id: s_2nZXenv14qJjcWFmDeZpP6
          stance: supports
          locator: CBDB:71767
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

# 王鳴玉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鳴玉 | accepted |
| birth.date | 1744年 | accepted |
| death.date | 1805年 | accepted |
| bio.summary | 王鳴玉（1744年—1805年），清人物。籍贯泉州府。（中国历代人物传记资料库 CBDB 71767） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鳴玉（CBDB 71767）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71767&o=json)
