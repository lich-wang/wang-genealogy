---
schema: wang-person/v1
id: p_Nbp8PutgNTADgTAmbA52VL
status: active
merged_into: null
display_name: 王卓
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_L2z1eFiFrpmhXibdco5oTB
        subject_person_id: p_Nbp8PutgNTADgTAmbA52VL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王卓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1wo4KMVkoXcx7fVMyFNX8a
          claim_id: c_L2z1eFiFrpmhXibdco5oTB
          source_id: s_wJoXSKiPFiJsJCcNTCnCm3
          stance: supports
          locator: CBDB:92033
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（92033）
          source: &a1
            id: s_wJoXSKiPFiJsJCcNTCnCm3
            source_type: api_record
            title: 中国历代人物传记资料库：王卓（CBDB 92033）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92033&o=json
            external_identifier: CBDB:92033
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.097Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_D7iMKnbJRevF8vX1dJ5gPK
        subject_person_id: p_Nbp8PutgNTADgTAmbA52VL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王卓，唐人物。身份为詩人，入仕進士，曾任縣尉。（中国历代人物传记资料库 CBDB 92033）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_a1ozND8LUVOKAKgmzAb4X4
          claim_id: c_D7iMKnbJRevF8vX1dJ5gPK
          source_id: s_wJoXSKiPFiJsJCcNTCnCm3
          stance: supports
          locator: CBDB:92033
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

# 王卓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王卓 | accepted |
| bio.summary | 王卓，唐人物。身份为詩人，入仕進士，曾任縣尉。（中国历代人物传记资料库 CBDB 92033） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王卓（CBDB 92033）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92033&o=json)
