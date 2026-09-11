---
schema: wang-person/v1
id: p_SjFZoaLLBtjLWFQNFsiohQ
status: active
merged_into: null
display_name: 王仲江
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_S7393wLSuniL4gMrN4rjE6
        subject_person_id: p_SjFZoaLLBtjLWFQNFsiohQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲江
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_b5Tu9fLhqQrdMgrLoTzN9U
          claim_id: c_S7393wLSuniL4gMrN4rjE6
          source_id: s_Vw9Mdq1NroVy2hqWMAF4PX
          stance: supports
          locator: CBDB:635949
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635949）
          source: &a1
            id: s_Vw9Mdq1NroVy2hqWMAF4PX
            source_type: api_record
            title: 中国历代人物传记资料库：王仲江（CBDB 635949）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635949&o=json
            external_identifier: CBDB:635949
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.839Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fyD7kctBaMv2amZDs7vPR5
        subject_person_id: p_SjFZoaLLBtjLWFQNFsiohQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲江，清人物。籍贯婁縣，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 635949）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rcQutkU9jOChLiRgZCcIJ8
          claim_id: c_fyD7kctBaMv2amZDs7vPR5
          source_id: s_Vw9Mdq1NroVy2hqWMAF4PX
          stance: supports
          locator: CBDB:635949
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

# 王仲江

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仲江 | accepted |
| bio.summary | 王仲江，清人物。籍贯婁縣，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 635949） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王仲江（CBDB 635949）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635949&o=json)
