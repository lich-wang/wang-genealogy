---
schema: wang-person/v1
id: p_4H6hmNE3a7KsJizuXuhwwM
status: active
merged_into: null
display_name: 王礎
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4Fbq5qaZFfN4o36xhCX1FE
        subject_person_id: p_4H6hmNE3a7KsJizuXuhwwM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王礎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MjubTtgEACyqDELtFA9LeR
          claim_id: c_4Fbq5qaZFfN4o36xhCX1FE
          source_id: s_Yic4HWUmUS3sWTFBmHNmnx
          stance: supports
          locator: CBDB:10336
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（10336）
          source: &a1
            id: s_Yic4HWUmUS3sWTFBmHNmnx
            source_type: api_record
            title: 中国历代人物传记资料库：王礎（CBDB 10336）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10336&o=json
            external_identifier: CBDB:10336
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.527Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8TXCemThKYfRjtTY7Wwjr7
        subject_person_id: p_4H6hmNE3a7KsJizuXuhwwM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王礎，宋人物。籍贯福清，身份为落第士人，入仕舉進士、諸科不第。（中国历代人物传记资料库 CBDB 10336）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_VMcHW--WvML46ACLjfoc3t
          claim_id: c_8TXCemThKYfRjtTY7Wwjr7
          source_id: s_Yic4HWUmUS3sWTFBmHNmnx
          stance: supports
          locator: CBDB:10336
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_B38zEZ10k5wRO8aStX7qhq
        subject_person_id: p_N4m8f1CJyyaPfxmbQEmr7X
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4H6hmNE3a7KsJizuXuhwwM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OSGvOlm0IQaKwILXnsbxZc
          claim_id: c_B38zEZ10k5wRO8aStX7qhq
          source_id: s_Yic4HWUmUS3sWTFBmHNmnx
          stance: supports
          locator: CBDB 双向互证（父 王珣 ⇄ 子 王礎）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_N4m8f1CJyyaPfxmbQEmr7X
        status: active
        display_name: 王珣
        merged_into_person_id: null
  children:
    - claim:
        id: c_S6Cs5pFPtyyFG1QcxQ4-L0
        subject_person_id: p_4H6hmNE3a7KsJizuXuhwwM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7XVwriKhMuAxk84ypFnPNi
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iSuexeod26EbiuonPjM7Cz
          claim_id: c_S6Cs5pFPtyyFG1QcxQ4-L0
          source_id: s_Yic4HWUmUS3sWTFBmHNmnx
          stance: supports
          locator: CBDB 双向互证（子 王伯起 ⇄ 父 王礎）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_7XVwriKhMuAxk84ypFnPNi
        status: active
        display_name: 王伯起
        merged_into_person_id: null
    - claim:
        id: c_ZPBgRNDX3G36SFgk62G7xd
        subject_person_id: p_4H6hmNE3a7KsJizuXuhwwM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9FP6DzArF1ZVMpeBEDaJVL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_avqBREmS0B3x6dh5adBAKL
          claim_id: c_ZPBgRNDX3G36SFgk62G7xd
          source_id: s_Yic4HWUmUS3sWTFBmHNmnx
          stance: supports
          locator: CBDB 双向互证（子 王伯虎 ⇄ 父 王礎）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_9FP6DzArF1ZVMpeBEDaJVL
        status: active
        display_name: 王伯虎
        merged_into_person_id: null
    - claim:
        id: c_PvnfspcLUenNvnAjRNGZ9T
        subject_person_id: p_4H6hmNE3a7KsJizuXuhwwM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PETdD8Jz2DJR4mSmHcNTrv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2eWQr4wyrtSdKl26s6PIn7
          claim_id: c_PvnfspcLUenNvnAjRNGZ9T
          source_id: s_Yic4HWUmUS3sWTFBmHNmnx
          stance: supports
          locator: CBDB 双向互证（子 王仲舉 ⇄ 父 王礎）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_PETdD8Jz2DJR4mSmHcNTrv
        status: active
        display_name: 王仲舉
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王礎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王礎 | accepted |
| bio.summary | 王礎，宋人物。籍贯福清，身份为落第士人，入仕舉進士、諸科不第。（中国历代人物传记资料库 CBDB 10336） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_N4m8f1CJyyaPfxmbQEmr7X | 王珣 | accepted |
| children | p_7XVwriKhMuAxk84ypFnPNi | 王伯起 | accepted |
| children | p_9FP6DzArF1ZVMpeBEDaJVL | 王伯虎 | accepted |
| children | p_PETdD8Jz2DJR4mSmHcNTrv | 王仲舉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王礎（CBDB 10336）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10336&o=json)
