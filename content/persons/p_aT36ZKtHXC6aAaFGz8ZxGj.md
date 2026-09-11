---
schema: wang-person/v1
id: p_aT36ZKtHXC6aAaFGz8ZxGj
status: active
merged_into: null
display_name: 王祚
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Y8NfGwE2x3k4xA6EEsPmLe
        subject_person_id: p_aT36ZKtHXC6aAaFGz8ZxGj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QiowWB2p6X3QcRgSz8Z1h9
          claim_id: c_Y8NfGwE2x3k4xA6EEsPmLe
          source_id: s_6idbvdgTP8dUpYmnrUJYbr
          stance: supports
          locator: CBDB:175889
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175889）
          source: &a1
            id: s_6idbvdgTP8dUpYmnrUJYbr
            source_type: api_record
            title: 中国历代人物传记资料库：王祚（CBDB 175889）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175889&o=json
            external_identifier: CBDB:175889
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.178Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_6jg5LwrRWkc13a3HSEQEP1
        subject_person_id: p_aT36ZKtHXC6aAaFGz8ZxGj
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 761年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GJXGQaVKGdxiFEjZDJyN44
          claim_id: c_6jg5LwrRWkc13a3HSEQEP1
          source_id: s_6idbvdgTP8dUpYmnrUJYbr
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
        id: c_aXYMpbtzXGzMmHzWmKhyNc
        subject_person_id: p_aT36ZKtHXC6aAaFGz8ZxGj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祚（卒于761年），唐人物。籍贯太原，曾任州司馬。（中国历代人物传记资料库 CBDB 175889）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2XNbdTUQiEc93iGquiMzg4
          claim_id: c_aXYMpbtzXGzMmHzWmKhyNc
          source_id: s_6idbvdgTP8dUpYmnrUJYbr
          stance: supports
          locator: CBDB:175889
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_k3E9CUx43lIyFjqAXQIrQ6
        subject_person_id: p_rwqaM71TLacKY3Qhq8k9PP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_aT36ZKtHXC6aAaFGz8ZxGj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TKTKnToetZ0KmE9nZYV1Qv
          claim_id: c_k3E9CUx43lIyFjqAXQIrQ6
          source_id: s_6idbvdgTP8dUpYmnrUJYbr
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_rwqaM71TLacKY3Qhq8k9PP
        status: active
        display_name: 王實
        merged_into_person_id: null
  children:
    - claim:
        id: c_lDDWsGfFTjYwvWix-jY8kj
        subject_person_id: p_aT36ZKtHXC6aAaFGz8ZxGj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_E8jSpcxrGiAGkwV96Q4xB8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RxwKghcObz6g1giUQPyqqJ
          claim_id: c_lDDWsGfFTjYwvWix-jY8kj
          source_id: s_6idbvdgTP8dUpYmnrUJYbr
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_E8jSpcxrGiAGkwV96Q4xB8
        status: active
        display_name: 王晃
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王祚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王祚 | accepted |
| death.date | 761年 | accepted |
| bio.summary | 王祚（卒于761年），唐人物。籍贯太原，曾任州司馬。（中国历代人物传记资料库 CBDB 175889） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_rwqaM71TLacKY3Qhq8k9PP | 王實 | accepted |
| children | p_E8jSpcxrGiAGkwV96Q4xB8 | 王晃 | accepted |

## 外部来源

- [中国历代人物传记资料库：王祚（CBDB 175889）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175889&o=json)
