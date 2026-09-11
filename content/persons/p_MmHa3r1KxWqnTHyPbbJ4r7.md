---
schema: wang-person/v1
id: p_MmHa3r1KxWqnTHyPbbJ4r7
status: active
merged_into: null
display_name: 王阜
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ntc5VwXrQVB1bFzrSRDwdp
        subject_person_id: p_MmHa3r1KxWqnTHyPbbJ4r7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王阜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sn51SHpe481Wz6i7PN4qBd
          claim_id: c_Ntc5VwXrQVB1bFzrSRDwdp
          source_id: s_a61QKMjn3b7koxMK1ayGW7
          stance: supports
          locator: CBDB:10125
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（10125）
          source: &a1
            id: s_a61QKMjn3b7koxMK1ayGW7
            source_type: api_record
            title: 中国历代人物传记资料库：王阜（CBDB 10125）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10125&o=json
            external_identifier: CBDB:10125
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.517Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5WuhoZneP14g1brKdTavJx
        subject_person_id: p_MmHa3r1KxWqnTHyPbbJ4r7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王阜，宋人物。籍贯開封。（中国历代人物传记资料库 CBDB 10125）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_B6ZQC-f_RHFd1Xzpp9tlOv
          claim_id: c_5WuhoZneP14g1brKdTavJx
          source_id: s_a61QKMjn3b7koxMK1ayGW7
          stance: supports
          locator: CBDB:10125
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ofPP49HwMVZF_JG3eagZ73
        subject_person_id: p_UtrLYL1yFM5P759c7x89Qr
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MmHa3r1KxWqnTHyPbbJ4r7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ehdWZKgjYVnLC9xIexH1Qc
          claim_id: c_ofPP49HwMVZF_JG3eagZ73
          source_id: s_a61QKMjn3b7koxMK1ayGW7
          stance: supports
          locator: CBDB 双向互证（父 王瓖 ⇄ 子 王阜）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_UtrLYL1yFM5P759c7x89Qr
        status: active
        display_name: 王瓖
        merged_into_person_id: null
  children:
    - claim:
        id: c_3n5bUCf9pve_lUtb5_sOp6
        subject_person_id: p_MmHa3r1KxWqnTHyPbbJ4r7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_57MTn7oNzVBW49Kp5crHea
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nQ7rSMScLF_0PV2eclGLC4
          claim_id: c_3n5bUCf9pve_lUtb5_sOp6
          source_id: s_a61QKMjn3b7koxMK1ayGW7
          stance: supports
          locator: CBDB 双向互证（子 王思正 ⇄ 父 王阜）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_57MTn7oNzVBW49Kp5crHea
        status: active
        display_name: 王思正
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王阜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王阜 | accepted |
| bio.summary | 王阜，宋人物。籍贯開封。（中国历代人物传记资料库 CBDB 10125） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_UtrLYL1yFM5P759c7x89Qr | 王瓖 | accepted |
| children | p_57MTn7oNzVBW49Kp5crHea | 王思正 | accepted |

## 外部来源

- [中国历代人物传记资料库：王阜（CBDB 10125）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10125&o=json)
