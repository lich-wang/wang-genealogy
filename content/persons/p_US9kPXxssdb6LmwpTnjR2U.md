---
schema: wang-person/v1
id: p_US9kPXxssdb6LmwpTnjR2U
status: active
merged_into: null
display_name: 王愔
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qNCaEJAu6cvPASMYnTxFos
        subject_person_id: p_US9kPXxssdb6LmwpTnjR2U
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王愔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XMkmvhf2NLj5BCM3MPq33b
          claim_id: c_qNCaEJAu6cvPASMYnTxFos
          source_id: s_miW6oef6WacDiRM8tLqBv3
          stance: supports
          locator: CBDB:175824
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175824）
          source: &a1
            id: s_miW6oef6WacDiRM8tLqBv3
            source_type: api_record
            title: 中国历代人物传记资料库：王愔（CBDB 175824）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175824&o=json
            external_identifier: CBDB:175824
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.146Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_LND2K2LS2VjrWnJ9Te64Hd
        subject_person_id: p_US9kPXxssdb6LmwpTnjR2U
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 895年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Q9mAFYsxyPNEkT5D4Pyeze
          claim_id: c_LND2K2LS2VjrWnJ9Te64Hd
          source_id: s_miW6oef6WacDiRM8tLqBv3
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
        id: c_1MAG9e9ykWKDA9qgRnQpvi
        subject_person_id: p_US9kPXxssdb6LmwpTnjR2U
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王愔（卒于895年），唐人物。籍贯硤石。（中国历代人物传记资料库 CBDB 175824）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hTQtcPyYkBo-K7usNE3A2H
          claim_id: c_1MAG9e9ykWKDA9qgRnQpvi
          source_id: s_miW6oef6WacDiRM8tLqBv3
          stance: supports
          locator: CBDB:175824
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_A8Xioy74VM_PO5a0BBd2Px
        subject_person_id: p_g2qc4piXEUaM3GmzDY5nSR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_US9kPXxssdb6LmwpTnjR2U
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AqcwYggzCd78InfoxTn96T
          claim_id: c_A8Xioy74VM_PO5a0BBd2Px
          source_id: s_miW6oef6WacDiRM8tLqBv3
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_g2qc4piXEUaM3GmzDY5nSR
        status: active
        display_name: 王鎡
        merged_into_person_id: null
  children:
    - claim:
        id: c_SH7G9FO7l_AAvvlrJvtBCk
        subject_person_id: p_US9kPXxssdb6LmwpTnjR2U
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_j6MwXYCWV4BTorutLMDBo2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6EQaMldAq66T7MhyVAvpPp
          claim_id: c_SH7G9FO7l_AAvvlrJvtBCk
          source_id: s_8xrJM3aWBSZgCckh3Ci74C
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_8xrJM3aWBSZgCckh3Ci74C
            source_type: api_record
            title: 中国历代人物传记资料库：王渙（CBDB 175825）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175825&o=json
            external_identifier: CBDB:175825
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.148Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_j6MwXYCWV4BTorutLMDBo2
        status: active
        display_name: 王渙
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王愔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王愔 | accepted |
| death.date | 895年 | accepted |
| bio.summary | 王愔（卒于895年），唐人物。籍贯硤石。（中国历代人物传记资料库 CBDB 175824） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_g2qc4piXEUaM3GmzDY5nSR | 王鎡 | accepted |
| children | p_j6MwXYCWV4BTorutLMDBo2 | 王渙 | accepted |

## 外部来源

- [中国历代人物传记资料库：王渙（CBDB 175825）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175825&o=json)
- [中国历代人物传记资料库：王愔（CBDB 175824）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175824&o=json)
