---
schema: wang-person/v1
id: p_Z2BWBaJCxaiXc8hXEo9nSQ
status: active
merged_into: null
display_name: 萧昭文
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UBRh6qF-QgcUp_iA7yopDr
        subject_person_id: p_Z2BWBaJCxaiXc8hXEo9nSQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 萧昭文，南齐皇帝。维基数据以独立条目 Q1190405 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_rvZ6u0qj3dKzhWlkmwJ5Mp
          claim_id: c_UBRh6qF-QgcUp_iA7yopDr
          source_id: s_ptRQ11EWBPmVg9wgTcDaRD
          stance: supports
          locator: Q1190405
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikidata。
          source: &a1
            id: s_ptRQ11EWBPmVg9wgTcDaRD
            source_type: api_record
            title: 维基数据：萧昭文（Q1190405）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q1190405
            external_identifier: Q1190405
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:30:34.642Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E8%90%A7%E6%98%AD%E6%96%87
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_BsDm8oW7LzD5uxZigR2oQp
        subject_person_id: p_Z2BWBaJCxaiXc8hXEo9nSQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 萧昭文
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_84sfJvhrj9uMDHVLiaY74a
          claim_id: c_BsDm8oW7LzD5uxZigR2oQp
          source_id: s_WStDFt2RgBridNBeeo6so3
          stance: supports
          locator: Q1190405
          quotation: null
          interpretation_note: null
          source:
            id: s_WStDFt2RgBridNBeeo6so3
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：蕭昭文（34008）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34008&o=json
            external_identifier: CBDB:34008
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:30:34.833Z
            metadata_json: null
        - id: cs_ubhV1AN7UkNqLXuGgPBTfo
          claim_id: c_BsDm8oW7LzD5uxZigR2oQp
          source_id: s_ptRQ11EWBPmVg9wgTcDaRD
          stance: supports
          locator: Q1190405
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_2rCF4kkZqA6727JGVgGqLf
        subject_person_id: p_Lg5XqeMUBiSajHTPH9pFan
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_Z2BWBaJCxaiXc8hXEo9nSQ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_UNK57FDVaEdcgMyBBjmUzm
          claim_id: c_2rCF4kkZqA6727JGVgGqLf
          source_id: s_CH9k4CPKYDDfXCdd8GH7hR
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_CH9k4CPKYDDfXCdd8GH7hR
            source_type: api_record
            title: 维基数据：王韶明（Q4392491）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q4392491
            external_identifier: Q4392491
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:24:46.632Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%9F%B6%E6%98%8E
        - id: cs_RsH32RvfKW4f2G8p4MLWWd
          claim_id: c_2rCF4kkZqA6727JGVgGqLf
          source_id: s_ptRQ11EWBPmVg9wgTcDaRD
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_ptRQ11EWBPmVg9wgTcDaRD
            source_type: api_record
            title: 维基数据：萧昭文（Q1190405）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q1190405
            external_identifier: Q1190405
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:30:34.642Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E8%90%A7%E6%98%AD%E6%96%87
        - id: cs_R5Lnxo5N6rFKf2kUN3wyRf
          claim_id: c_2rCF4kkZqA6727JGVgGqLf
          source_id: s_4P2AtYDkeHXyhJFrFSbaRM
          stance: supports
          locator: 条文：条文识读（夫）
          quotation: 皇孙临汝公萧昭文娶王韶明为临汝公夫人
          interpretation_note: null
          source:
            id: s_4P2AtYDkeHXyhJFrFSbaRM
            source_type: website
            title: 中文维基百科：王韶明
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%9F%B6%E6%98%8E
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:26:08.376Z
            metadata_json: null
        - id: cs_6Y8EAAn5NHT3mVdfo2adPC
          claim_id: c_2rCF4kkZqA6727JGVgGqLf
          source_id: s_R7L8gdqTS9cXj2XUrWMvoC
          stance: supports
          locator: 条文：条文识读（spouse）
          quotation: 永明八年（490年），皇孙临汝公萧昭文娶王韶明为临汝公夫人
          interpretation_note: null
          source:
            id: s_R7L8gdqTS9cXj2XUrWMvoC
            source_type: website
            title: 中文维基百科：王韶明
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%9F%B6%E6%98%8E
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:55:06.182Z
            metadata_json: null
      object_person:
        id: p_Lg5XqeMUBiSajHTPH9pFan
        status: active
        display_name: 王韶明
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 萧昭文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 萧昭文，南齐皇帝。维基数据以独立条目 Q1190405 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。 | accepted |
| name.primary | 萧昭文 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_Lg5XqeMUBiSajHTPH9pFan | 王韶明 | accepted |

## 外部来源

- [维基数据：王韶明（Q4392491）](https://www.wikidata.org/wiki/Q4392491)
- [维基数据：萧昭文（Q1190405）](https://www.wikidata.org/wiki/Q1190405)
- [中文维基百科：王韶明](https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%9F%B6%E6%98%8E)
- [CBDB 中国历代人物传记资料库：蕭昭文（34008）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34008&o=json)
