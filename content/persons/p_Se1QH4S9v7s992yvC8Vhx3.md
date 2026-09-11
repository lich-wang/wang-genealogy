---
schema: wang-person/v1
id: p_Se1QH4S9v7s992yvC8Vhx3
status: active
merged_into: null
display_name: 王方誕
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_orB8m4rRAwc6gMQGsMDujt
        subject_person_id: p_Se1QH4S9v7s992yvC8Vhx3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王方誕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tTn1eh4USGZvVpB8LvH5u8
          claim_id: c_orB8m4rRAwc6gMQGsMDujt
          source_id: s_oT5MsX4wxHbxwTukuy13EU
          stance: supports
          locator: CBDB:175644
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175644）
          source: &a1
            id: s_oT5MsX4wxHbxwTukuy13EU
            source_type: api_record
            title: 中国历代人物传记资料库：王方誕（CBDB 175644）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175644&o=json
            external_identifier: CBDB:175644
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.235Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_ha4d7PMr1TQiKNVUhhjdUb
        subject_person_id: p_Se1QH4S9v7s992yvC8Vhx3
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 625年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WuSuiEgmzcTwY25535zWec
          claim_id: c_ha4d7PMr1TQiKNVUhhjdUb
          source_id: s_oT5MsX4wxHbxwTukuy13EU
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
        id: c_oQoj1wFdCiFFpNArfCwVtL
        subject_person_id: p_Se1QH4S9v7s992yvC8Vhx3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王方誕（卒于625年），史料所见人物。本项目依据《中国历代人物传记资料库：王方誕（CBDB 175644）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XJn7hzAbT6NBQPodiXCR2S
          claim_id: c_oQoj1wFdCiFFpNArfCwVtL
          source_id: s_oT5MsX4wxHbxwTukuy13EU
          stance: supports
          locator: CBDB:175644
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_iM6n-jUgQSXFcKaRr9MWN9
        subject_person_id: p_d8L59zy2zZVwSD6YCuqjLx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Se1QH4S9v7s992yvC8Vhx3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OdI7QbBl1k7dZqs7cR0AGe
          claim_id: c_iM6n-jUgQSXFcKaRr9MWN9
          source_id: s_bM7JM4o4DuJX466VYuwPpY
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_bM7JM4o4DuJX466VYuwPpY
            source_type: api_record
            title: 中国历代人物传记资料库：王弘仁（CBDB 175643）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175643&o=json
            external_identifier: CBDB:175643
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.042Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_d8L59zy2zZVwSD6YCuqjLx
        status: active
        display_name: 王弘仁
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王方誕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王方誕 | accepted |
| death.date | 625年 | accepted |
| bio.summary | 王方誕（卒于625年），史料所见人物。本项目依据《中国历代人物传记资料库：王方誕（CBDB 175644）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_d8L59zy2zZVwSD6YCuqjLx | 王弘仁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王方誕（CBDB 175644）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175644&o=json)
- [中国历代人物传记资料库：王弘仁（CBDB 175643）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175643&o=json)
