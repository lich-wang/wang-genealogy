---
schema: wang-person/v1
id: p_c4nuAouGKCCG5s22Xm3jUo
status: active
merged_into: null
display_name: 王璐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mLJNFH9Udvu3HPpvR2JC16
        subject_person_id: p_c4nuAouGKCCG5s22Xm3jUo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6H7EXAoNKnRt6MPoKJuPPP
          claim_id: c_mLJNFH9Udvu3HPpvR2JC16
          source_id: s_LceaLUeYDGGgreDfxe43jq
          stance: supports
          locator: CBDB:505815
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（505815）
          source: &a1
            id: s_LceaLUeYDGGgreDfxe43jq
            source_type: api_record
            title: 中国历代人物传记资料库：王璐（CBDB 505815）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=505815&o=json
            external_identifier: CBDB:505815
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.979Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Lt8fkQfbpBWEA1uhHVfTP4
        subject_person_id: p_c4nuAouGKCCG5s22Xm3jUo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gVMfPKy3WAhU2QBffje2FT
          claim_id: c_Lt8fkQfbpBWEA1uhHVfTP4
          source_id: s_LceaLUeYDGGgreDfxe43jq
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

# 王璐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璐 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王璐（CBDB 505815）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=505815&o=json)
