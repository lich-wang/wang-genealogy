---
schema: wang-person/v1
id: p_5S6FXhcD9zMBVMKP5KkuEV
status: active
merged_into: null
display_name: 王德秀
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5eDg5yXMvK8W4NdrZYoFxb
        subject_person_id: p_5S6FXhcD9zMBVMKP5KkuEV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德秀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MtGosBpt1PxBp4Jf6p4fRR
          claim_id: c_5eDg5yXMvK8W4NdrZYoFxb
          source_id: s_VvtYyGJ8aPdqbyGbUrG8di
          stance: supports
          locator: CBDB:35304
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（35304）
          source: &a1
            id: s_VvtYyGJ8aPdqbyGbUrG8di
            source_type: api_record
            title: 中国历代人物传记资料库：王德秀（CBDB 35304）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35304&o=json
            external_identifier: CBDB:35304
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.122Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_W9pCT2HTg86FuiGTM8QYnt
        subject_person_id: p_5S6FXhcD9zMBVMKP5KkuEV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德秀，宋人物。籍贯豐城。（中国历代人物传记资料库 CBDB 35304）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wFvaLakZtTuuG_pg05cfP1
          claim_id: c_W9pCT2HTg86FuiGTM8QYnt
          source_id: s_VvtYyGJ8aPdqbyGbUrG8di
          stance: supports
          locator: CBDB:35304
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Ub3Q2hPIox6kcXAgKa6ybw
        subject_person_id: p_RwyXU98cqpzAo3smZBKob4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5S6FXhcD9zMBVMKP5KkuEV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MWCNFYL8WrZMreK-mBLd66
          claim_id: c_Ub3Q2hPIox6kcXAgKa6ybw
          source_id: s_VvtYyGJ8aPdqbyGbUrG8di
          stance: supports
          locator: CBDB 双向互证（父 王幡然 ⇄ 子 王德秀）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_RwyXU98cqpzAo3smZBKob4
        status: active
        display_name: 王幡然
        merged_into_person_id: null
  children:
    - claim:
        id: c_vmDsFwtUws6mlByR9UQ6wA
        subject_person_id: p_5S6FXhcD9zMBVMKP5KkuEV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Sx9YSMsniFRchvVWbXBzn1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1AIROBzyV_l7_kgIbQtWS3
          claim_id: c_vmDsFwtUws6mlByR9UQ6wA
          source_id: s_VvtYyGJ8aPdqbyGbUrG8di
          stance: supports
          locator: CBDB 双向互证（子 王道昌 ⇄ 父 王德秀）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_Sx9YSMsniFRchvVWbXBzn1
        status: active
        display_name: 王道昌
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王德秀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王德秀 | accepted |
| bio.summary | 王德秀，宋人物。籍贯豐城。（中国历代人物传记资料库 CBDB 35304） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_RwyXU98cqpzAo3smZBKob4 | 王幡然 | accepted |
| children | p_Sx9YSMsniFRchvVWbXBzn1 | 王道昌 | accepted |

## 外部来源

- [中国历代人物传记资料库：王德秀（CBDB 35304）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35304&o=json)
