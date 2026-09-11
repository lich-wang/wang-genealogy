---
schema: wang-person/v1
id: p_hg4Gu6GsxgepF2CeMMq7az
status: active
merged_into: null
display_name: 劉氏
revision: 1
cbdb_id: 148365
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mVn7StwVO8bC5eVdGZEgYx
        subject_person_id: p_hg4Gu6GsxgepF2CeMMq7az
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 劉氏，史料所见人物。本项目依据《中国历代人物传记资料库：劉氏(王德妻)（CBDB 148365）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lF-_8K-nLQhhx-rYSs7W6I
          claim_id: c_mVn7StwVO8bC5eVdGZEgYx
          source_id: s_69aDynxgW_HwUjuAzuSmMs
          stance: supports
          locator: CBDB:148365
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_69aDynxgW_HwUjuAzuSmMs
            source_type: api_record
            title: 中国历代人物传记资料库：劉氏(王德妻)（CBDB 148365）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148365&o=json
            external_identifier: CBDB:148365
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_srPqqrS7xJhjNIQ2p6tqmF
        subject_person_id: p_hg4Gu6GsxgepF2CeMMq7az
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 劉氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KXh4HhudiNVvaVY1vRpHR4
          claim_id: c_srPqqrS7xJhjNIQ2p6tqmF
          source_id: s_69aDynxgW_HwUjuAzuSmMs
          stance: supports
          locator: CBDB:148365
          quotation: null
          interpretation_note: CBDB 明确记录的王德配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_IDXz1w0_H6HEc48IW3VLwl
        subject_person_id: p_KuGbu9PjyVdi4EKz2hPeD4
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_hg4Gu6GsxgepF2CeMMq7az
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kQDKZOEnvYx5xXb0swMnmZ
          claim_id: c_IDXz1w0_H6HEc48IW3VLwl
          source_id: s_69aDynxgW_HwUjuAzuSmMs
          stance: supports
          locator: 唐代墓誌匯編:二卷，Zongzhang 24：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_KuGbu9PjyVdi4EKz2hPeD4
        status: active
        display_name: 王德
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 劉氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 劉氏，史料所见人物。本项目依据《中国历代人物传记资料库：劉氏(王德妻)（CBDB 148365）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 劉氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_KuGbu9PjyVdi4EKz2hPeD4 | 王德 | accepted |

## 外部来源

- [中国历代人物传记资料库：劉氏(王德妻)（CBDB 148365）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148365&o=json)
