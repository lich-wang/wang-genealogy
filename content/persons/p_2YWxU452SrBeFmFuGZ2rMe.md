---
schema: wang-person/v1
id: p_2YWxU452SrBeFmFuGZ2rMe
status: active
merged_into: null
display_name: 王淹
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wANYdPq6Gd3ZzXDjQCQm2G
        subject_person_id: p_2YWxU452SrBeFmFuGZ2rMe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EBBWSuEK6h6p2hXe9oeAVf
          claim_id: c_wANYdPq6Gd3ZzXDjQCQm2G
          source_id: s_emUdXnyFKpZ6iuxgN8JwN8
          stance: supports
          locator: CBDB:3993
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（3993）
          source: &a1
            id: s_emUdXnyFKpZ6iuxgN8JwN8
            source_type: api_record
            title: 中国历代人物传记资料库：王淹（CBDB 3993）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3993&o=json
            external_identifier: CBDB:3993
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.455Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eza5rCT1GbeFqUKATffMYo
        subject_person_id: p_2YWxU452SrBeFmFuGZ2rMe
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淹，宋人物。籍贯鄞縣，曾任朝請大夫、通判。（中国历代人物传记资料库 CBDB 3993）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ssFa3XYPyFVUrQC2ODsuOf
          claim_id: c_eza5rCT1GbeFqUKATffMYo
          source_id: s_emUdXnyFKpZ6iuxgN8JwN8
          stance: supports
          locator: CBDB:3993
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_68A-YfSWNu-hWkjqBdOX_O
        subject_person_id: p_26tLQutRv9RfwmDpym5T1E
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2YWxU452SrBeFmFuGZ2rMe
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ploYgZC6A_D_Lk7GyQ7uZv
          claim_id: c_68A-YfSWNu-hWkjqBdOX_O
          source_id: s_NRMoGyPxVJjRUhF4g8gkDi
          stance: supports
          locator: 宋人傳記資料索引(電子版)，868：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_NRMoGyPxVJjRUhF4g8gkDi
            source_type: api_record
            title: 中国历代人物传记资料库：王從（CBDB 17844）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17844&o=json
            external_identifier: CBDB:17844
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.694Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_26tLQutRv9RfwmDpym5T1E
        status: active
        display_name: 王從
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王淹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王淹 | accepted |
| bio.summary | 王淹，宋人物。籍贯鄞縣，曾任朝請大夫、通判。（中国历代人物传记资料库 CBDB 3993） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_26tLQutRv9RfwmDpym5T1E | 王從 | accepted |

## 外部来源

- [中国历代人物传记资料库：王從（CBDB 17844）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17844&o=json)
- [中国历代人物传记资料库：王淹（CBDB 3993）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3993&o=json)
