---
schema: wang-person/v1
id: p_ANGm2F6EwiDGqSNJ4DFU3a
status: active
merged_into: null
display_name: 張氏
revision: 1
cbdb_id: 168101
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hgoDFiaLW6f0L6IQ-5xrpI
        subject_person_id: p_ANGm2F6EwiDGqSNJ4DFU3a
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 張氏，史料所见人物。本项目依据《中国历代人物传记资料库：張氏(王德妻)（CBDB 168101）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PIBK5h9MLwUS5fFuBisX4U
          claim_id: c_hgoDFiaLW6f0L6IQ-5xrpI
          source_id: s_P9bVMj4hZopx8hOxqTbgJJ
          stance: supports
          locator: CBDB:168101
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_P9bVMj4hZopx8hOxqTbgJJ
            source_type: api_record
            title: 中国历代人物传记资料库：張氏(王德妻)（CBDB 168101）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=168101&o=json
            external_identifier: CBDB:168101
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_i27N2hmiyyZWx9URr1AH5h
        subject_person_id: p_ANGm2F6EwiDGqSNJ4DFU3a
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 張氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CQttOour3Hl-pDVZrldcKR
          claim_id: c_i27N2hmiyyZWx9URr1AH5h
          source_id: s_P9bVMj4hZopx8hOxqTbgJJ
          stance: supports
          locator: CBDB:168101
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
        id: c_r0U5SCncUbF1Evf9zLdIHJ
        subject_person_id: p_uqx89h8aE16F23TeWrVKqk
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_ANGm2F6EwiDGqSNJ4DFU3a
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gTW3xbK2kr0fymUHjxoLJ5
          claim_id: c_r0U5SCncUbF1Evf9zLdIHJ
          source_id: s_P9bVMj4hZopx8hOxqTbgJJ
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Xiantong54：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_uqx89h8aE16F23TeWrVKqk
        status: active
        display_name: 王德
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 張氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 張氏，史料所见人物。本项目依据《中国历代人物传记资料库：張氏(王德妻)（CBDB 168101）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 張氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_uqx89h8aE16F23TeWrVKqk | 王德 | accepted |

## 外部来源

- [中国历代人物传记资料库：張氏(王德妻)（CBDB 168101）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=168101&o=json)
