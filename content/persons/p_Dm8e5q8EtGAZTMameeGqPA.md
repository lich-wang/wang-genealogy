---
schema: wang-person/v1
id: p_Dm8e5q8EtGAZTMameeGqPA
status: active
merged_into: null
display_name: 王正常
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_feeKop6uip7F2Q8PcAKZ6Z
        subject_person_id: p_Dm8e5q8EtGAZTMameeGqPA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正常
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Gw6qAVw35KEGSbjbKCJabG
          claim_id: c_feeKop6uip7F2Q8PcAKZ6Z
          source_id: s_ChmLm6PckgfYsoMJM7igSm
          stance: supports
          locator: CBDB:69151
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69151）
          source: &a1
            id: s_ChmLm6PckgfYsoMJM7igSm
            source_type: api_record
            title: 中国历代人物传记资料库：王正常（CBDB 69151）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69151&o=json
            external_identifier: CBDB:69151
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.128Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1v7Db4zeYCMDQsFDJNLmHu
        subject_person_id: p_Dm8e5q8EtGAZTMameeGqPA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正常，清人物。籍贯瀘州直隸州，入仕鄉貢舉人，曾任知縣、同知、知府。（中国历代人物传记资料库 CBDB 69151）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_VdEoZbznEdgt8ElxodrOn3
          claim_id: c_1v7Db4zeYCMDQsFDJNLmHu
          source_id: s_ChmLm6PckgfYsoMJM7igSm
          stance: supports
          locator: CBDB:69151
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

# 王正常

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王正常 | accepted |
| bio.summary | 王正常，清人物。籍贯瀘州直隸州，入仕鄉貢舉人，曾任知縣、同知、知府。（中国历代人物传记资料库 CBDB 69151） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王正常（CBDB 69151）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69151&o=json)
