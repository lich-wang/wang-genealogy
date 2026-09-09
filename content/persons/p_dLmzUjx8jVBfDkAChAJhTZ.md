---
schema: wang-person/v1
id: p_dLmzUjx8jVBfDkAChAJhTZ
status: active
merged_into: null
display_name: 王通
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Bnq98WJwqmHXGC5DSUe7sn
        subject_person_id: p_dLmzUjx8jVBfDkAChAJhTZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王通
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mfCFFDQWfacEno8QU9UsbZ
          claim_id: c_Bnq98WJwqmHXGC5DSUe7sn
          source_id: s_NNh6BA4fhXAYuVgDexyD3F
          stance: supports
          locator: CBDB:480096
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（480096）
          source: &a1
            id: s_NNh6BA4fhXAYuVgDexyD3F
            source_type: api_record
            title: 中国历代人物传记资料库：王通（CBDB 480096）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=480096&o=json
            external_identifier: CBDB:480096
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.634Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BZReX1VdV1QYWv39zH4Daz
        subject_person_id: p_dLmzUjx8jVBfDkAChAJhTZ
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
        - id: cs_Qju9CTA62JnWGSHC1uGMnK
          claim_id: c_BZReX1VdV1QYWv39zH4Daz
          source_id: s_NNh6BA4fhXAYuVgDexyD3F
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

# 王通

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王通 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王通（CBDB 480096）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=480096&o=json)
