---
schema: wang-person/v1
id: p_yLx6R2Cr3giQeKiH6Z4SsW
status: active
merged_into: null
display_name: 王賓
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NYwB6SMX8jETjnfSAfUbHF
        subject_person_id: p_yLx6R2Cr3giQeKiH6Z4SsW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_P6EpZPBQ1Zb4tkhSjP8TQ9
          claim_id: c_NYwB6SMX8jETjnfSAfUbHF
          source_id: s_awp23GQCvHVAdn4boEMZNZ
          stance: supports
          locator: CBDB:336302
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（336302）
          source: &a1
            id: s_awp23GQCvHVAdn4boEMZNZ
            source_type: api_record
            title: 中国历代人物传记资料库：王賓（CBDB 336302）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336302&o=json
            external_identifier: CBDB:336302
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.481Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FCaj19T9Uz5LAZs8nEUtBy
        subject_person_id: p_yLx6R2Cr3giQeKiH6Z4SsW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賓，明人物。隆慶二年進士。（中国历代人物传记资料库 CBDB 336302）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tAKE7D4zL9Uw6gfJmYKgvD
          claim_id: c_FCaj19T9Uz5LAZs8nEUtBy
          source_id: s_awp23GQCvHVAdn4boEMZNZ
          stance: supports
          locator: CBDB:336302
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
  descendants:
    - claim:
        id: c_WaJEfwslBLuHNC9LL1h0S9
        subject_person_id: p_yLx6R2Cr3giQeKiH6Z4SsW
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_viaM6m196hS8EVYS6L8gg8
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_S_LZOmSaTO0bst2XDaSc3m
          claim_id: c_WaJEfwslBLuHNC9LL1h0S9
          source_id: s_awp23GQCvHVAdn4boEMZNZ
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第一百八十名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_viaM6m196hS8EVYS6L8gg8
        status: active
        display_name: 王宣化
        merged_into_person_id: null
  other: []
---

# 王賓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王賓 | accepted |
| bio.summary | 王賓，明人物。隆慶二年進士。（中国历代人物传记资料库 CBDB 336302） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_viaM6m196hS8EVYS6L8gg8 | 王宣化 | accepted |

## 外部来源

- [中国历代人物传记资料库：王賓（CBDB 336302）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336302&o=json)
