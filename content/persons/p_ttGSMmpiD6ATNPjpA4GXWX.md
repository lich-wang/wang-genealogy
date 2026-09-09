---
schema: wang-person/v1
id: p_ttGSMmpiD6ATNPjpA4GXWX
status: active
merged_into: null
display_name: 王立煜
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DL6woq7XLqmvv6iFKWR5B1
        subject_person_id: p_ttGSMmpiD6ATNPjpA4GXWX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王立煜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6R8UET4VkPkn13Fa8Dhf6e
          claim_id: c_DL6woq7XLqmvv6iFKWR5B1
          source_id: s_ofku9yBHYAvWujJC1oUmDN
          stance: supports
          locator: CBDB:577780
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（577780）
          source: &a1
            id: s_ofku9yBHYAvWujJC1oUmDN
            source_type: api_record
            title: 中国历代人物传记资料库：王立煜（CBDB 577780）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=577780&o=json
            external_identifier: CBDB:577780
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.971Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eBshq448StWcpiMVQCXy8u
        subject_person_id: p_ttGSMmpiD6ATNPjpA4GXWX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CAsFP1qVWYMGNDU4A2L8oK
          claim_id: c_eBshq448StWcpiMVQCXy8u
          source_id: s_ofku9yBHYAvWujJC1oUmDN
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王立煜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王立煜 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王立煜（CBDB 577780）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=577780&o=json)
