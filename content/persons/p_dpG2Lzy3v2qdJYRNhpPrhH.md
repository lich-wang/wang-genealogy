---
schema: wang-person/v1
id: p_dpG2Lzy3v2qdJYRNhpPrhH
status: active
merged_into: null
display_name: 王濂
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kGQ4GCXygkPiMHtiRHF2NF
        subject_person_id: p_dpG2Lzy3v2qdJYRNhpPrhH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王濂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_a9quxuKMWEXkZNxVNMTQiP
          claim_id: c_kGQ4GCXygkPiMHtiRHF2NF
          source_id: s_GLR22ansMGMakp5g9WEb4n
          stance: supports
          locator: CBDB:66431
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（66431）
          source: &a1
            id: s_GLR22ansMGMakp5g9WEb4n
            source_type: api_record
            title: 中国历代人物传记资料库：王濂（CBDB 66431）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=66431&o=json
            external_identifier: CBDB:66431
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.952Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_wFEZp4AZNF3E2y6YN28hbP
        subject_person_id: p_dpG2Lzy3v2qdJYRNhpPrhH
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1314年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7uy9XyKaTgB72qukeUNcxN
          claim_id: c_wFEZp4AZNF3E2y6YN28hbP
          source_id: s_GLR22ansMGMakp5g9WEb4n
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Sv26BrFBaC3SCYT979CKBY
        subject_person_id: p_dpG2Lzy3v2qdJYRNhpPrhH
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1370年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_645ZoCk1kwHg52TP51wFH4
          claim_id: c_Sv26BrFBaC3SCYT979CKBY
          source_id: s_GLR22ansMGMakp5g9WEb4n
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
        id: c_KUYRot6nmhs7fQxz4i8GyE
        subject_person_id: p_dpG2Lzy3v2qdJYRNhpPrhH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王濂（1314年—1370年），明人物。籍贯定遠，曾任提刑按察使司僉事、員外郎。（中国历代人物传记资料库 CBDB 66431）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tpq_VpeKQfCpO4z_FkED0e
          claim_id: c_KUYRot6nmhs7fQxz4i8GyE
          source_id: s_GLR22ansMGMakp5g9WEb4n
          stance: supports
          locator: CBDB:66431
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
  descendants: []
  other: []
---

# 王濂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王濂 | accepted |
| birth.date | 1314年 | accepted |
| death.date | 1370年 | accepted |
| bio.summary | 王濂（1314年—1370年），明人物。籍贯定遠，曾任提刑按察使司僉事、員外郎。（中国历代人物传记资料库 CBDB 66431） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王濂（CBDB 66431）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=66431&o=json)
