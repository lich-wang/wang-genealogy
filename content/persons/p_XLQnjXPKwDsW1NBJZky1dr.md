---
schema: wang-person/v1
id: p_XLQnjXPKwDsW1NBJZky1dr
status: active
merged_into: null
display_name: 王平言
cbdb_id: 119737
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zr27hUcdbx6EbmEEhWJTZJ
        subject_person_id: p_XLQnjXPKwDsW1NBJZky1dr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王平言，宋人物。籍贯汝陰。（中国历代人物传记资料库 CBDB 119737）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_GCK5KY6LNJSJ30rYYPDsJR
          claim_id: c_zr27hUcdbx6EbmEEhWJTZJ
          source_id: s_CpY7iePhmLV33sR8b5PcHW
          stance: supports
          locator: CBDB:119737
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_CpY7iePhmLV33sR8b5PcHW
            source_type: api_record
            title: 中国历代人物传记资料库：王平言（CBDB 119737）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119737&o=json
            external_identifier: CBDB:119737
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:51.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_SMyvxuuWof4jG6T2Qr8edN
        subject_person_id: p_XLQnjXPKwDsW1NBJZky1dr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王平言
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_QzSD9tHWKQfkzdReUGfMn4
          claim_id: c_SMyvxuuWof4jG6T2Qr8edN
          source_id: s_CpY7iePhmLV33sR8b5PcHW
          stance: supports
          locator: CBDB:119737
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1901-2000）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_X0Zxh53emXsc1KcpXWUjPT
        subject_person_id: p_XLQnjXPKwDsW1NBJZky1dr
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_APTq991Q3yJCPFR1a9881c
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sYWmbT5v3rWc0qMkAWOUug
          claim_id: c_X0Zxh53emXsc1KcpXWUjPT
          source_id: s_oazMioi15qHtjQA9yVxQr6
          stance: supports
          locator: 宋史：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_oazMioi15qHtjQA9yVxQr6
            source_type: api_record
            title: 中国历代人物传记资料库：王回（CBDB 3958）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3958&o=json
            external_identifier: CBDB:3958
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.433Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_APTq991Q3yJCPFR1a9881c
        status: active
        display_name: 王回
        merged_into_person_id: null
    - claim:
        id: c_VM89x9-g2oSRtOsuKKP3zC
        subject_person_id: p_XLQnjXPKwDsW1NBJZky1dr
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_K5LjMqeJMi1bJQpP3h2SuW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4FJF67fcCUjpeoJF32sGFU
          claim_id: c_VM89x9-g2oSRtOsuKKP3zC
          source_id: s_zM4pAm39VAA78r5cpman3J
          stance: supports
          locator: 宋史：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_zM4pAm39VAA78r5cpman3J
            source_type: api_record
            title: 中国历代人物传记资料库：王向（CBDB 22043）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22043&o=json
            external_identifier: CBDB:22043
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.809Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_K5LjMqeJMi1bJQpP3h2SuW
        status: active
        display_name: 王向
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王平言

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王平言，宋人物。籍贯汝陰。（中国历代人物传记资料库 CBDB 119737） | accepted |
| name.primary | 王平言 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_APTq991Q3yJCPFR1a9881c | 王回 | accepted |
| children | p_K5LjMqeJMi1bJQpP3h2SuW | 王向 | accepted |

## 外部来源

- [中国历代人物传记资料库：王回（CBDB 3958）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3958&o=json)
- [中国历代人物传记资料库：王平言（CBDB 119737）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119737&o=json)
- [中国历代人物传记资料库：王向（CBDB 22043）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22043&o=json)
