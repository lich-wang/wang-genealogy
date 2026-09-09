---
schema: wang-person/v1
id: p_YYFiMJ84qJ2cMTDhmPMAHH
status: active
merged_into: null
display_name: 王耕
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MPahXmAVDGNfjBscWT66yn
        subject_person_id: p_YYFiMJ84qJ2cMTDhmPMAHH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王耕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9prDU45BFZ3JMAKXes4HWb
          claim_id: c_MPahXmAVDGNfjBscWT66yn
          source_id: s_dchQg5qhNEpeyLD8VkNdxd
          stance: supports
          locator: CBDB:537388
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（537388）
          source: &a1
            id: s_dchQg5qhNEpeyLD8VkNdxd
            source_type: api_record
            title: 中国历代人物传记资料库：王耕（CBDB 537388）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=537388&o=json
            external_identifier: CBDB:537388
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.417Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jiGhJvjiz1VUqMTmeyJWBu
        subject_person_id: p_YYFiMJ84qJ2cMTDhmPMAHH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vPbJttP6yGPodkA2Ne6w9k
          claim_id: c_jiGhJvjiz1VUqMTmeyJWBu
          source_id: s_dchQg5qhNEpeyLD8VkNdxd
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

# 王耕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王耕 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王耕（CBDB 537388）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=537388&o=json)
