---
schema: wang-person/v1
id: p_ByJaT4QXh2tpErjHQvb6GY
status: active
merged_into: null
display_name: 王用學
cbdb_id: 415127
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HZ1448pyV6FRMT9JHwaxot
        subject_person_id: p_ByJaT4QXh2tpErjHQvb6GY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用學，明人物。曾任驛丞。（中国历代人物传记资料库 CBDB 415127）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_j4B56829ZZ2lkKq6NRWVPz
          claim_id: c_HZ1448pyV6FRMT9JHwaxot
          source_id: s_8nksNFVv96uxE2M31MMufQ
          stance: supports
          locator: CBDB:415127
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_8nksNFVv96uxE2M31MMufQ
            source_type: api_record
            title: 中国历代人物传记资料库：王用學（CBDB 415127）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=415127&o=json
            external_identifier: CBDB:415127
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:51.632Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_2MQGsLHWnp4PNmAuFLDp4B
        subject_person_id: p_ByJaT4QXh2tpErjHQvb6GY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用學
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_QNUQmPHo9bRM7b6Y47cDWx
          claim_id: c_2MQGsLHWnp4PNmAuFLDp4B
          source_id: s_8nksNFVv96uxE2M31MMufQ
          stance: supports
          locator: CBDB:415127
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（6001-6100）｜历史性依据：CBDB 朝代 = 明
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

# 王用學

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王用學，明人物。曾任驛丞。（中国历代人物传记资料库 CBDB 415127） | accepted |
| name.primary | 王用學 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王用學（CBDB 415127）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=415127&o=json)
