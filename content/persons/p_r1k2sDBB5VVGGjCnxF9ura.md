---
schema: wang-person/v1
id: p_r1k2sDBB5VVGGjCnxF9ura
status: active
merged_into: null
display_name: 王定昇
cbdb_id: 526699
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_w5Y7d5No3Z7adSmBLQcXNh
        subject_person_id: p_r1k2sDBB5VVGGjCnxF9ura
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王定昇，史料所见人物。本项目依据《中国历代人物传记资料库：王定昇（CBDB 526699）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_yKn2C4XMV88uzBKtIRGWIL
          claim_id: c_w5Y7d5No3Z7adSmBLQcXNh
          source_id: s_ej6JoHabzBAvqsKEkNEqfG
          stance: supports
          locator: CBDB:526699
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_ej6JoHabzBAvqsKEkNEqfG
            source_type: api_record
            title: 中国历代人物传记资料库：王定昇（CBDB 526699）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526699&o=json
            external_identifier: CBDB:526699
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:18.829Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_PfVLRmNwJChbtNJA4H41o6
        subject_person_id: p_r1k2sDBB5VVGGjCnxF9ura
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王定昇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_qU3EVQnrCBMFsYioTB5rbX
          claim_id: c_PfVLRmNwJChbtNJA4H41o6
          source_id: s_ej6JoHabzBAvqsKEkNEqfG
          stance: supports
          locator: CBDB:526699
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（7101-7200）｜历史性依据：CBDB 朝代 = 清
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_J_KgKLVCPE4DHo2q-jX4KR
        subject_person_id: p_r1k2sDBB5VVGGjCnxF9ura
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bdjfnB4ngXGiLnaEFv7KV8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gfmgCN0v0j89X6wesHnSY4
          claim_id: c_J_KgKLVCPE4DHo2q-jX4KR
          source_id: s_Kb2gNMBSPpG7oSZuEwbwAB
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），12803：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Kb2gNMBSPpG7oSZuEwbwAB
            source_type: api_record
            title: 中国历代人物传记资料库：王永章（CBDB 69105）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69105&o=json
            external_identifier: CBDB:69105
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:34.254Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_bdjfnB4ngXGiLnaEFv7KV8
        status: active
        display_name: 王永章
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王定昇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王定昇，史料所见人物。本项目依据《中国历代人物传记资料库：王定昇（CBDB 526699）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王定昇 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_bdjfnB4ngXGiLnaEFv7KV8 | 王永章 | accepted |

## 外部来源

- [中国历代人物传记资料库：王定昇（CBDB 526699）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526699&o=json)
- [中国历代人物传记资料库：王永章（CBDB 69105）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69105&o=json)
