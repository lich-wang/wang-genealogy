---
schema: wang-person/v1
id: p_RCuhVLofQnHMJrQT8m1Ddc
status: active
merged_into: null
display_name: 王柟
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AZFg6Hn9zGm68NHw1sFExq
        subject_person_id: p_RCuhVLofQnHMJrQT8m1Ddc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王柟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cnA5GjAUiYT8gXP6y8oKCX
          claim_id: c_AZFg6Hn9zGm68NHw1sFExq
          source_id: s_NcF97vMjB1mKudiwGy6yGk
          stance: supports
          locator: CBDB:385780
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（385780）
          source: &a1
            id: s_NcF97vMjB1mKudiwGy6yGk
            source_type: api_record
            title: 中国历代人物传记资料库：王柟（CBDB 385780）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=385780&o=json
            external_identifier: CBDB:385780
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.881Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2vkVJpFxAPJiVX1gFuzjLM
        subject_person_id: p_RCuhVLofQnHMJrQT8m1Ddc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王柟，史料所见人物。本项目依据《中国历代人物传记资料库：王柟（CBDB 385780）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_cc-uaBvs6ks93BIansPX_T
          claim_id: c_2vkVJpFxAPJiVX1gFuzjLM
          source_id: s_NcF97vMjB1mKudiwGy6yGk
          stance: supports
          locator: CBDB:385780
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_hv5VWwg_MiIJfsYAVb-zeW
        subject_person_id: p_bkMbqmq6U23rFXaG17Pxzk
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_RCuhVLofQnHMJrQT8m1Ddc
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zgtziWNLTPyO2MoaJJ7EF-
          claim_id: c_hv5VWwg_MiIJfsYAVb-zeW
          source_id: s_bDr42YdofJ3M2VBGUPzaxN
          stance: supports
          locator: 全宋文，卷 4781：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_bDr42YdofJ3M2VBGUPzaxN
            source_type: api_record
            title: 中国历代人物传记资料库：王師心（CBDB 1872）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1872&o=json
            external_identifier: CBDB:1872
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.366Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_bkMbqmq6U23rFXaG17Pxzk
        status: active
        display_name: 王師心
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王柟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王柟 | accepted |
| bio.summary | 王柟，史料所见人物。本项目依据《中国历代人物传记资料库：王柟（CBDB 385780）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_bkMbqmq6U23rFXaG17Pxzk | 王師心 | accepted |

## 外部来源

- [中国历代人物传记资料库：王柟（CBDB 385780）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=385780&o=json)
- [中国历代人物传记资料库：王師心（CBDB 1872）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1872&o=json)
