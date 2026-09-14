---
schema: wang-person/v1
id: p_nwbBpVuQmPuhrAL5FV2K92
status: active
merged_into: null
display_name: 王潮
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zYv9ZVjKxtG8A1DYMyHkSt
        subject_person_id: p_nwbBpVuQmPuhrAL5FV2K92
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王潮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uZeP2nobPCLNiUaPgR9m38
          claim_id: c_zYv9ZVjKxtG8A1DYMyHkSt
          source_id: s_H5Nzq26w82nnx9wc6Hn3Zs
          stance: supports
          locator: CBDB:194930
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（194930）
          source: &a1
            id: s_H5Nzq26w82nnx9wc6Hn3Zs
            source_type: api_record
            title: 中国历代人物传记资料库：王潮（CBDB 194930）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=194930&o=json
            external_identifier: CBDB:194930
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.458Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_HGeue6NKMZtxTB2eem2uJn
        subject_person_id: p_nwbBpVuQmPuhrAL5FV2K92
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 921年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_K6Cry3EbuVkVfV4Cvbictg
          claim_id: c_HGeue6NKMZtxTB2eem2uJn
          source_id: s_H5Nzq26w82nnx9wc6Hn3Zs
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
        id: c_7WLmBckqTeeA2t2pyRLfKD
        subject_person_id: p_nwbBpVuQmPuhrAL5FV2K92
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王潮（卒于921年），唐人物。籍贯南安，曾任觀察使、州刺史。（中国历代人物传记资料库 CBDB 194930）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_99nxHUsJX5Hc4ocbZRmoJS
          claim_id: c_7WLmBckqTeeA2t2pyRLfKD
          source_id: s_H5Nzq26w82nnx9wc6Hn3Zs
          stance: supports
          locator: CBDB:194930
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_QMQBoVMboxoqtnezFjwNGF
        subject_person_id: p_MuYkDS8mpb2qZmr2nMXp8j
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nwbBpVuQmPuhrAL5FV2K92
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cYExWg05Tym0QQvyp-m4bs
          claim_id: c_QMQBoVMboxoqtnezFjwNGF
          source_id: s_c4ITu6wa-J6vCXzgh8ecTX
          stance: supports
          locator: CBDB 亲属：父（KinPerson 194931）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_c4ITu6wa-J6vCXzgh8ecTX
            source_type: api_record
            title: 中国历代人物传记资料库：王潮（CBDB 194930）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=194930&o=json
            external_identifier: CBDB:194930
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MuYkDS8mpb2qZmr2nMXp8j
        status: active
        display_name: 王审邽
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王潮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王潮 | accepted |
| death.date | 921年 | accepted |
| bio.summary | 王潮（卒于921年），唐人物。籍贯南安，曾任觀察使、州刺史。（中国历代人物传记资料库 CBDB 194930） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_MuYkDS8mpb2qZmr2nMXp8j | 王审邽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王潮（CBDB 194930）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=194930&o=json)
