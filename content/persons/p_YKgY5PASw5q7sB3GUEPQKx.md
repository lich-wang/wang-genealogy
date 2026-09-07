---
schema: wang-person/v1
id: p_YKgY5PASw5q7sB3GUEPQKx
status: active
merged_into: null
display_name: 王仁表
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rmMA32vH6EXUCzaCgis2Jd
        subject_person_id: p_YKgY5PASw5q7sB3GUEPQKx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仁表，史料所见人物。本项目依据《王仁表》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_SboT5cRi9acoCaF2yCIb0A
          claim_id: c_rmMA32vH6EXUCzaCgis2Jd
          source_id: s_KK1Ku18wh3DbxXSfmECsgr
          stance: supports
          locator: Q26121262
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_KK1Ku18wh3DbxXSfmECsgr
            source_type: api_record
            title: 维基数据：王仁表（Q26121262）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q26121262
            external_identifier: Q26121262
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:28.634Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_LmnAaev3VYNbanvv6FtjF9
        subject_person_id: p_YKgY5PASw5q7sB3GUEPQKx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仁表
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_DACpbtwh6BjF3we4R5nkQQ
          claim_id: c_LmnAaev3VYNbanvv6FtjF9
          source_id: s_KK1Ku18wh3DbxXSfmECsgr
          stance: supports
          locator: Q26121262
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_VqUwjiPdoVbfzpfNB7bZAZ
        subject_person_id: p_YKgY5PASw5q7sB3GUEPQKx
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_gtuvXLikvWh5oAFQk1AX2V
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9TrJvER4uLAZ2DENC58GXg
          claim_id: c_VqUwjiPdoVbfzpfNB7bZAZ
          source_id: s_fdGLHFjHM2j96uzSyHgbbY
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_fdGLHFjHM2j96uzSyHgbbY
            source_type: api_record
            title: 维基数据：王方翼（Q15904891）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15904891
            external_identifier: Q15904891
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:46:34.053Z
            metadata_json: null
        - id: cs_UDaXy5BGqph85MWtp72axf
          claim_id: c_VqUwjiPdoVbfzpfNB7bZAZ
          source_id: s_KK1Ku18wh3DbxXSfmECsgr
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_KK1Ku18wh3DbxXSfmECsgr
            source_type: api_record
            title: 维基数据：王仁表（Q26121262）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q26121262
            external_identifier: Q26121262
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:28.634Z
            metadata_json: null
      object_person:
        id: p_gtuvXLikvWh5oAFQk1AX2V
        status: active
        display_name: 王方翼
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王仁表

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王仁表，史料所见人物。本项目依据《王仁表》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王仁表 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_gtuvXLikvWh5oAFQk1AX2V | 王方翼 | accepted |

## 外部来源

- [维基数据：王方翼（Q15904891）](https://www.wikidata.org/wiki/Q15904891)
- [维基数据：王仁表（Q26121262）](https://www.wikidata.org/wiki/Q26121262)
