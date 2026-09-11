---
schema: wang-person/v1
id: p_CF7yfgasHmLpFwcb1NWfXr
status: active
merged_into: null
display_name: 王伯倫
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6XBqg42TQKLGDynzphe63M
        subject_person_id: p_CF7yfgasHmLpFwcb1NWfXr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伯倫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VLd4P379G5f7xovX6X8j8h
          claim_id: c_6XBqg42TQKLGDynzphe63M
          source_id: s_2stokffLHXaVq54BkbeLqf
          stance: supports
          locator: CBDB:191191
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（191191）
          source: &a1
            id: s_2stokffLHXaVq54BkbeLqf
            source_type: api_record
            title: 中国历代人物传记资料库：王伯倫（CBDB 191191）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191191&o=json
            external_identifier: CBDB:191191
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.351Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_6b548uCwgiuzcgJ4CDP9ZF
        subject_person_id: p_CF7yfgasHmLpFwcb1NWfXr
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 774年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pauU819onaHJTdPG6KPnKP
          claim_id: c_6b548uCwgiuzcgJ4CDP9ZF
          source_id: s_2stokffLHXaVq54BkbeLqf
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
        id: c_Vj6VrAkFHV2gW8GeGUUvxc
        subject_person_id: p_CF7yfgasHmLpFwcb1NWfXr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伯倫（卒于774年），唐人物。籍贯偃師。（中国历代人物传记资料库 CBDB 191191）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_y-A_i-39iQ4HStQRT02WA9
          claim_id: c_Vj6VrAkFHV2gW8GeGUUvxc
          source_id: s_2stokffLHXaVq54BkbeLqf
          stance: supports
          locator: CBDB:191191
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_v1BEOjCYalpRdj-JzaeqHg
        subject_person_id: p_CF7yfgasHmLpFwcb1NWfXr
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eJBnye85tBdoiRcsLUrLW1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3XWXVlNGjhQ-C29jPxFRl9
          claim_id: c_v1BEOjCYalpRdj-JzaeqHg
          source_id: s_2stokffLHXaVq54BkbeLqf
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_eJBnye85tBdoiRcsLUrLW1
        status: active
        display_name: 王絳
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王伯倫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王伯倫 | accepted |
| death.date | 774年 | accepted |
| bio.summary | 王伯倫（卒于774年），唐人物。籍贯偃師。（中国历代人物传记资料库 CBDB 191191） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_eJBnye85tBdoiRcsLUrLW1 | 王絳 | accepted |

## 外部来源

- [中国历代人物传记资料库：王伯倫（CBDB 191191）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191191&o=json)
