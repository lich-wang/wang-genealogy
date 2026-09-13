---
schema: wang-person/v1
id: p_TBNa1ZLvYFvMXjUg1ANwNe
status: active
merged_into: null
display_name: 王琙
cbdb_id: 523340
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VBqw1pEK2GFc9x6E4uKHDh
        subject_person_id: p_TBNa1ZLvYFvMXjUg1ANwNe
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琙，史料所见人物。本项目依据《中国历代人物传记资料库：王琙（CBDB 523340）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_rXSaUB1eTbHJ_ucyi2MCiN
          claim_id: c_VBqw1pEK2GFc9x6E4uKHDh
          source_id: s_aJ6d8xoL8hAHiZD5YxLgF2
          stance: supports
          locator: CBDB:523340
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_aJ6d8xoL8hAHiZD5YxLgF2
            source_type: api_record
            title: 中国历代人物传记资料库：王琙（CBDB 523340）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=523340&o=json
            external_identifier: CBDB:523340
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:17.868Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_HaD323fhSa54LqXfAzmcmF
        subject_person_id: p_TBNa1ZLvYFvMXjUg1ANwNe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_GgdaJEJMz2L1arDY7kbGDQ
          claim_id: c_HaD323fhSa54LqXfAzmcmF
          source_id: s_aJ6d8xoL8hAHiZD5YxLgF2
          stance: supports
          locator: CBDB:523340
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（7001-7100）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_bRkHhe_rpiBSmwopGwOpeO
        subject_person_id: p_An8Ci3Jqr6izRMKcU8bMFf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TBNa1ZLvYFvMXjUg1ANwNe
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DMlGMWzwNiE2nZ1NMZVo9G
          claim_id: c_bRkHhe_rpiBSmwopGwOpeO
          source_id: s_yAFb4ZTX6oawAfCN79XJ9y
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），9953：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_yAFb4ZTX6oawAfCN79XJ9y
            source_type: api_record
            title: 中国历代人物传记资料库：王志（CBDB 66395）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=66395&o=json
            external_identifier: CBDB:66395
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.950Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_An8Ci3Jqr6izRMKcU8bMFf
        status: active
        display_name: 王志
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王琙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王琙，史料所见人物。本项目依据《中国历代人物传记资料库：王琙（CBDB 523340）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王琙 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_An8Ci3Jqr6izRMKcU8bMFf | 王志 | accepted |

## 外部来源

- [中国历代人物传记资料库：王琙（CBDB 523340）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=523340&o=json)
- [中国历代人物传记资料库：王志（CBDB 66395）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=66395&o=json)
