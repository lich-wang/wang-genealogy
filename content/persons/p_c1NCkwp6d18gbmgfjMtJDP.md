---
schema: wang-person/v1
id: p_c1NCkwp6d18gbmgfjMtJDP
status: active
merged_into: null
display_name: 王邵
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uMog3sMLuGCKeCCqCu4kNc
        subject_person_id: p_c1NCkwp6d18gbmgfjMtJDP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王邵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_n2EtLiH4SEDrX5z2UMXVU9
          claim_id: c_uMog3sMLuGCKeCCqCu4kNc
          source_id: s_9nX8VSXaabhFAQqS5jTsXh
          stance: supports
          locator: CBDB:169168
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（169168）
          source: &a1
            id: s_9nX8VSXaabhFAQqS5jTsXh
            source_type: api_record
            title: 中国历代人物传记资料库：王邵（CBDB 169168）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169168&o=json
            external_identifier: CBDB:169168
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.010Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_E9awWshBBEKAC864xy4NNg
        subject_person_id: p_c1NCkwp6d18gbmgfjMtJDP
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 784年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mancaGgm9E1cwgk1XGjNC5
          claim_id: c_E9awWshBBEKAC864xy4NNg
          source_id: s_9nX8VSXaabhFAQqS5jTsXh
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
        id: c_4xPyKEByLELgNCL5GTZLDR
        subject_person_id: p_c1NCkwp6d18gbmgfjMtJDP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王邵（卒于784年），唐人物。籍贯襄陽。（中国历代人物传记资料库 CBDB 169168）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-UcUKdZcf3ARHl8p9DSWWt
          claim_id: c_4xPyKEByLELgNCL5GTZLDR
          source_id: s_9nX8VSXaabhFAQqS5jTsXh
          stance: supports
          locator: CBDB:169168
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_V2TR9vOcYVeohZSboRO3lP
        subject_person_id: p_c1NCkwp6d18gbmgfjMtJDP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dy11K68D5QxkanwfNRjGMX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Rt6PLPf1JblsM4rENVhe0A
          claim_id: c_V2TR9vOcYVeohZSboRO3lP
          source_id: s_9nX8VSXaabhFAQqS5jTsXh
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_dy11K68D5QxkanwfNRjGMX
        status: active
        display_name: 王希庭
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王邵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王邵 | accepted |
| death.date | 784年 | accepted |
| bio.summary | 王邵（卒于784年），唐人物。籍贯襄陽。（中国历代人物传记资料库 CBDB 169168） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_dy11K68D5QxkanwfNRjGMX | 王希庭 | accepted |

## 外部来源

- [中国历代人物传记资料库：王邵（CBDB 169168）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169168&o=json)
