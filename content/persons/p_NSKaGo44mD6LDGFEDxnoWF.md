---
schema: wang-person/v1
id: p_NSKaGo44mD6LDGFEDxnoWF
status: active
merged_into: null
display_name: 王審邽
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Q2N6DbT17PRMJkBrSjnWLG
        subject_person_id: p_NSKaGo44mD6LDGFEDxnoWF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王審邽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8AhL19YKEpvseVQQvb43d6
          claim_id: c_Q2N6DbT17PRMJkBrSjnWLG
          source_id: s_ckrKDpARP1soAyYv7Cxvgb
          stance: supports
          locator: CBDB:194932
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（194932）
          source: &a1
            id: s_ckrKDpARP1soAyYv7Cxvgb
            source_type: api_record
            title: 中国历代人物传记资料库：王審邽（CBDB 194932）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=194932&o=json
            external_identifier: CBDB:194932
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.459Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_5Y8NfLBbPNqxKSJhbb4Ehi
        subject_person_id: p_NSKaGo44mD6LDGFEDxnoWF
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
        - id: cs_cyU6csLUjE5dniJysui7Wy
          claim_id: c_5Y8NfLBbPNqxKSJhbb4Ehi
          source_id: s_ckrKDpARP1soAyYv7Cxvgb
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
        id: c_VPaKc99pjujnYKUMWK3bCC
        subject_person_id: p_NSKaGo44mD6LDGFEDxnoWF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王審邽（卒于921年），唐人物。籍贯南安，曾任州刺史。（中国历代人物传记资料库 CBDB 194932）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_HFqTxueH50pxoGgNyPaZ08
          claim_id: c_VPaKc99pjujnYKUMWK3bCC
          source_id: s_ckrKDpARP1soAyYv7Cxvgb
          stance: supports
          locator: CBDB:194932
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_AC-t9T_kouR0U0_VqJyFEp
        subject_person_id: p_MuYkDS8mpb2qZmr2nMXp8j
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NSKaGo44mD6LDGFEDxnoWF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZOOnztzsfgmxZT2hjJoI4F
          claim_id: c_AC-t9T_kouR0U0_VqJyFEp
          source_id: s_j0L0UTik-xBS5XrP8YR2Cd
          stance: supports
          locator: CBDB 亲属：父（KinPerson 194931）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_j0L0UTik-xBS5XrP8YR2Cd
            source_type: api_record
            title: 中国历代人物传记资料库：王審邽（CBDB 194932）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=194932&o=json
            external_identifier: CBDB:194932
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

# 王審邽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王審邽 | accepted |
| death.date | 921年 | accepted |
| bio.summary | 王審邽（卒于921年），唐人物。籍贯南安，曾任州刺史。（中国历代人物传记资料库 CBDB 194932） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_MuYkDS8mpb2qZmr2nMXp8j | 王审邽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王審邽（CBDB 194932）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=194932&o=json)
