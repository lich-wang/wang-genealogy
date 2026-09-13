---
schema: wang-person/v1
id: p_JUDsn7CdzZpbDPgjJYPZwa
status: active
merged_into: null
display_name: 王令短
cbdb_id: 14934
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DQ1qZxvzzDEJcAMTzwv6jR
        subject_person_id: p_JUDsn7CdzZpbDPgjJYPZwa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王令短，宋人物。籍贯開封。（中国历代人物传记资料库 CBDB 14934）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_jQCKY6ntHRJxHzpndLHiEu
          claim_id: c_DQ1qZxvzzDEJcAMTzwv6jR
          source_id: s_keY2x4cu459XEZv8X8wfbD
          stance: supports
          locator: CBDB:14934
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_keY2x4cu459XEZv8X8wfbD
            source_type: api_record
            title: 中国历代人物传记资料库：王令短（CBDB 14934）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=14934&o=json
            external_identifier: CBDB:14934
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_tEpaAGGdFZp9dnJQnuPYvA
        subject_person_id: p_JUDsn7CdzZpbDPgjJYPZwa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王令短
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_sMZcQGbuNTBuc9pd2r8cVr
          claim_id: c_tEpaAGGdFZp9dnJQnuPYvA
          source_id: s_keY2x4cu459XEZv8X8wfbD
          stance: supports
          locator: CBDB:14934
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（901-1000）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_P-0KrtqtzNW8-rnW25ai_V
        subject_person_id: p_k56NV9rgDghGTPDaQfrfU6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JUDsn7CdzZpbDPgjJYPZwa
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tGs-bGLqgiMSw7HMtelwc5
          claim_id: c_P-0KrtqtzNW8-rnW25ai_V
          source_id: s_keY2x4cu459XEZv8X8wfbD
          stance: supports
          locator: CBDB 双向互证（父 王守斌 ⇄ 子 王令短）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_keY2x4cu459XEZv8X8wfbD
            source_type: api_record
            title: 中国历代人物传记资料库：王令短（CBDB 14934）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=14934&o=json
            external_identifier: CBDB:14934
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_k56NV9rgDghGTPDaQfrfU6
        status: active
        display_name: 王守斌
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王令短

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王令短，宋人物。籍贯開封。（中国历代人物传记资料库 CBDB 14934） | accepted |
| name.primary | 王令短 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_k56NV9rgDghGTPDaQfrfU6 | 王守斌 | accepted |

## 外部来源

- [中国历代人物传记资料库：王令短（CBDB 14934）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=14934&o=json)
