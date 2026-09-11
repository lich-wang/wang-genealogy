---
schema: wang-person/v1
id: p_HcAEMBHcDKKDLKkSsPVY4M
status: active
merged_into: null
display_name: 李氏
revision: 1
cbdb_id: 161528
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_k8fUvSAaSrD8CMvRz5-Ty5
        subject_person_id: p_HcAEMBHcDKKDLKkSsPVY4M
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 李氏，史料所见人物。本项目依据《中国历代人物传记资料库：李氏(王文進妻)（CBDB 161528）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_c5aSvLJFGHbMefezQsd5U4
          claim_id: c_k8fUvSAaSrD8CMvRz5-Ty5
          source_id: s_mVY_C8SSaUJwJxI-kgEE16
          stance: supports
          locator: CBDB:161528
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_mVY_C8SSaUJwJxI-kgEE16
            source_type: api_record
            title: 中国历代人物传记资料库：李氏(王文進妻)（CBDB 161528）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=161528&o=json
            external_identifier: CBDB:161528
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Gr3mDIL-qoIzkxqtaHIY37
        subject_person_id: p_HcAEMBHcDKKDLKkSsPVY4M
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 李氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IiytEy8ZMWAFioaXAE1mBl
          claim_id: c_Gr3mDIL-qoIzkxqtaHIY37
          source_id: s_mVY_C8SSaUJwJxI-kgEE16
          stance: supports
          locator: CBDB:161528
          quotation: null
          interpretation_note: CBDB 明确记录的王文進配偶
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
        id: c_iwPzLGi94FHNmdAaC1-iNx
        subject_person_id: p_vjzSJPL4Yr4rG66CFjoYUz
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_HcAEMBHcDKKDLKkSsPVY4M
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ni_D2lcrR5Ea2NmPfDT1SE
          claim_id: c_iwPzLGi94FHNmdAaC1-iNx
          source_id: s_mVY_C8SSaUJwJxI-kgEE16
          stance: supports
          locator: 唐代墓誌匯編:二卷，Guangqi 3：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_vjzSJPL4Yr4rG66CFjoYUz
        status: active
        display_name: 王文進
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 李氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 李氏，史料所见人物。本项目依据《中国历代人物传记资料库：李氏(王文進妻)（CBDB 161528）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 李氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_vjzSJPL4Yr4rG66CFjoYUz | 王文進 | accepted |

## 外部来源

- [中国历代人物传记资料库：李氏(王文進妻)（CBDB 161528）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=161528&o=json)
