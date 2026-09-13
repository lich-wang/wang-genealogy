---
schema: wang-person/v1
id: p_cd1PD93j6nB83AV9QE4hXd
status: active
merged_into: null
display_name: 王九霄
cbdb_id: 413784
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9KcEJSFebwBs2VkDHqPNdj
        subject_person_id: p_cd1PD93j6nB83AV9QE4hXd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王九霄，史料所见人物。本项目依据《中国历代人物传记资料库：王九霄（CBDB 413784）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_hkic66okHnrM54ANiueCP7
          claim_id: c_9KcEJSFebwBs2VkDHqPNdj
          source_id: s_75ivUmRPf3bhzJg2rQQ3Ys
          stance: supports
          locator: CBDB:413784
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_75ivUmRPf3bhzJg2rQQ3Ys
            source_type: api_record
            title: 中国历代人物传记资料库：王九霄（CBDB 413784）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=413784&o=json
            external_identifier: CBDB:413784
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:23.724Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_MLt4gzJKF9F2CxbxwLXAQy
        subject_person_id: p_cd1PD93j6nB83AV9QE4hXd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王九霄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_1PfBWb8N4kFzUTCnRfHSHo
          claim_id: c_MLt4gzJKF9F2CxbxwLXAQy
          source_id: s_75ivUmRPf3bhzJg2rQQ3Ys
          stance: supports
          locator: CBDB:413784
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（4901-5000）｜历史性依据：CBDB 朝代 = 明
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

# 王九霄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王九霄，史料所见人物。本项目依据《中国历代人物传记资料库：王九霄（CBDB 413784）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王九霄 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王九霄（CBDB 413784）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=413784&o=json)
