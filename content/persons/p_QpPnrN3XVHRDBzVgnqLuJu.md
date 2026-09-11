---
schema: wang-person/v1
id: p_QpPnrN3XVHRDBzVgnqLuJu
status: active
merged_into: null
display_name: 王晌
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1YQ8ixYUrcfnjq2sAM8W3a
        subject_person_id: p_QpPnrN3XVHRDBzVgnqLuJu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Ny7oDT6RQEm2GLbgc5yrEe
          claim_id: c_1YQ8ixYUrcfnjq2sAM8W3a
          source_id: s_tUNNfHxCmhmCDpr6qU5z4H
          stance: supports
          locator: CBDB:1864
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1864）
          source: &a1
            id: s_tUNNfHxCmhmCDpr6qU5z4H
            source_type: api_record
            title: 中国历代人物传记资料库：王晌（CBDB 1864）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1864&o=json
            external_identifier: CBDB:1864
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.356Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_5ijKgHRsGGiwt77oZovDGo
        subject_person_id: p_QpPnrN3XVHRDBzVgnqLuJu
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1157年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qMTsENYxjUTZPQeb3rJMCF
          claim_id: c_5ijKgHRsGGiwt77oZovDGo
          source_id: s_tUNNfHxCmhmCDpr6qU5z4H
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
        id: c_8gAneUikGEEpE7tj3ovhBZ
        subject_person_id: p_QpPnrN3XVHRDBzVgnqLuJu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晌（卒于1157年），宋人物。籍贯東明，曾任提舉、右奉直大夫、右中奉大夫。（中国历代人物传记资料库 CBDB 1864）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_82KFiohWdxRfwm91JcdsS3
          claim_id: c_8gAneUikGEEpE7tj3ovhBZ
          source_id: s_tUNNfHxCmhmCDpr6qU5z4H
          stance: supports
          locator: CBDB:1864
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王晌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王晌 | accepted |
| death.date | 1157年 | accepted |
| bio.summary | 王晌（卒于1157年），宋人物。籍贯東明，曾任提舉、右奉直大夫、右中奉大夫。（中国历代人物传记资料库 CBDB 1864） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王晌（CBDB 1864）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1864&o=json)
