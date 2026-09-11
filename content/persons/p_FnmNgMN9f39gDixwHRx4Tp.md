---
schema: wang-person/v1
id: p_FnmNgMN9f39gDixwHRx4Tp
status: active
merged_into: null
display_name: 王稅
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5iJYb8T5KeiWXrYrBCsPYD
        subject_person_id: p_FnmNgMN9f39gDixwHRx4Tp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王稅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_crM1LRFq4VHCvx7xHPLwWM
          claim_id: c_5iJYb8T5KeiWXrYrBCsPYD
          source_id: s_AzZ9BbHBmUEKYWxdZeoDND
          stance: supports
          locator: CBDB:210653
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（210653）
          source: &a1
            id: s_AzZ9BbHBmUEKYWxdZeoDND
            source_type: api_record
            title: 中国历代人物传记资料库：王稅（CBDB 210653）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210653&o=json
            external_identifier: CBDB:210653
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.015Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dtd2SQLuMReVUKGJGjqq7n
        subject_person_id: p_FnmNgMN9f39gDixwHRx4Tp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王稅，明人物。隆慶五年進士，籍贯句容，曾任壽官。（中国历代人物传记资料库 CBDB 210653）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Zh_Bdp8AKMDVA47rcF0HzG
          claim_id: c_dtd2SQLuMReVUKGJGjqq7n
          source_id: s_AzZ9BbHBmUEKYWxdZeoDND
          stance: supports
          locator: CBDB:210653
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_1w4hI1qkzo1t5m97MDUMqo
        subject_person_id: p_FnmNgMN9f39gDixwHRx4Tp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6tt42hCZA528675DNELou4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BUUQayz8lr7lolfbcXGJVb
          claim_id: c_1w4hI1qkzo1t5m97MDUMqo
          source_id: s_AzZ9BbHBmUEKYWxdZeoDND
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第一百六十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_6tt42hCZA528675DNELou4
        status: active
        display_name: 王敬民
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王稅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王稅 | accepted |
| bio.summary | 王稅，明人物。隆慶五年進士，籍贯句容，曾任壽官。（中国历代人物传记资料库 CBDB 210653） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_6tt42hCZA528675DNELou4 | 王敬民 | accepted |

## 外部来源

- [中国历代人物传记资料库：王稅（CBDB 210653）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210653&o=json)
