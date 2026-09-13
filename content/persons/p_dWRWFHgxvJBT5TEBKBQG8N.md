---
schema: wang-person/v1
id: p_dWRWFHgxvJBT5TEBKBQG8N
status: active
merged_into: null
display_name: 王尚逸
cbdb_id: 175854
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hLCaNbKGcLwdMaWVEcS5o1
        subject_person_id: p_dWRWFHgxvJBT5TEBKBQG8N
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王尚逸
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pXrtZLjEaHc3wUkCQQCjLt
          claim_id: c_hLCaNbKGcLwdMaWVEcS5o1
          source_id: s_KmcqknQ9fQeRpV5LNFDVcV
          stance: supports
          locator: Q45677646
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_KmcqknQ9fQeRpV5LNFDVcV
            source_type: api_record
            title: 维基数据：王尚逸（Q45677646）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45677646
            external_identifier: Q45677646
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_VD35DprHwM6BcAZSNBCQ6J
          claim_id: c_hLCaNbKGcLwdMaWVEcS5o1
          source_id: s_X8R4xhQrFxhSP9ScwaJD1M
          stance: supports
          locator: CBDB:175854
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a2
            id: s_X8R4xhQrFxhSP9ScwaJD1M
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王尚逸（175854）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175854&o=json
            external_identifier: CBDB:175854
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_J8VhDrY3p3bwcHBK3avFE1
        subject_person_id: p_dWRWFHgxvJBT5TEBKBQG8N
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王尚逸（卒于704年），唐人物。籍贯祁縣，曾任州長史。（中国历代人物传记资料库 CBDB 175854）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mBoDy5KRM9DdsbbU99Bqwy
          claim_id: c_J8VhDrY3p3bwcHBK3avFE1
          source_id: s_KmcqknQ9fQeRpV5LNFDVcV
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 维基数据条目描述
          source: *a1
        - id: cs_ZEVB40GZKC-wCvtlDHKFG8
          claim_id: c_J8VhDrY3p3bwcHBK3avFE1
          source_id: s_X8R4xhQrFxhSP9ScwaJD1M
          stance: supports
          locator: CBDB:175854
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a2
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_qK2exSP94h3QwsE7Dex26M
        subject_person_id: p_dWRWFHgxvJBT5TEBKBQG8N
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 704年
            calendar_note: 维基数据 P570 结构化日期，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DGA9ZWRcza6dJdF7LqXGzL
          claim_id: c_qK2exSP94h3QwsE7Dex26M
          source_id: s_KmcqknQ9fQeRpV5LNFDVcV
          stance: supports
          locator: P570（死亡日期）
          quotation: null
          interpretation_note: 维基数据 P570
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_f9dfopSauTmSEWp71GvfpS
        subject_person_id: p_JfWbDHNGFyJz6Cq8yoPLva
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dWRWFHgxvJBT5TEBKBQG8N
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KpCmRjdjb7wJctUyFjawt5
          claim_id: c_f9dfopSauTmSEWp71GvfpS
          source_id: s_e6LDhxKxZyo3PzSjXeRfWW
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_e6LDhxKxZyo3PzSjXeRfWW
            source_type: api_record
            title: 维基数据：王崇基（Q45422606）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45422606
            external_identifier: Q45422606
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:14.259Z
            metadata_json: null
        - id: cs_7T16RiuHpcSz8VrFTXUGcp
          claim_id: c_f9dfopSauTmSEWp71GvfpS
          source_id: s_KmcqknQ9fQeRpV5LNFDVcV
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a1
      object_person:
        id: p_JfWbDHNGFyJz6Cq8yoPLva
        status: active
        display_name: 王崇基
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王尚逸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王尚逸 | accepted |
| bio.summary | 王尚逸（卒于704年），唐人物。籍贯祁縣，曾任州長史。（中国历代人物传记资料库 CBDB 175854） | accepted |
| death.date | 704年 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_JfWbDHNGFyJz6Cq8yoPLva | 王崇基 | accepted |

## 外部来源

- [维基数据：王崇基（Q45422606）](https://www.wikidata.org/wiki/Q45422606)
- [维基数据：王尚逸（Q45677646）](https://www.wikidata.org/wiki/Q45677646)
- [CBDB 中国历代人物传记资料库：王尚逸（175854）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175854&o=json)
