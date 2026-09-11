---
schema: wang-person/v1
id: p_Ri3gwK5PCgwsWT5wZSr1M2
status: active
merged_into: null
display_name: 王傑
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YGx3LH4VzkDo8SPqWiVLGJ
        subject_person_id: p_Ri3gwK5PCgwsWT5wZSr1M2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王傑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bwfq61Pv4R5Q9iPykfmAYw
          claim_id: c_YGx3LH4VzkDo8SPqWiVLGJ
          source_id: s_gu244qyJYpu4R2gHCtfoEg
          stance: supports
          locator: CBDB:36886
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（36886）
          source: &a1
            id: s_gu244qyJYpu4R2gHCtfoEg
            source_type: api_record
            title: 中国历代人物传记资料库：王傑（CBDB 36886）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36886&o=json
            external_identifier: CBDB:36886
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.183Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nJcEnKkSssHrUVB9mRBix2
        subject_person_id: p_Ri3gwK5PCgwsWT5wZSr1M2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王傑，宋人物。曾任奉議郎。（中国历代人物传记资料库 CBDB 36886）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6d4ALBj5ntUSnUxWdsry_W
          claim_id: c_nJcEnKkSssHrUVB9mRBix2
          source_id: s_gu244qyJYpu4R2gHCtfoEg
          stance: supports
          locator: CBDB:36886
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

# 王傑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王傑 | accepted |
| bio.summary | 王傑，宋人物。曾任奉議郎。（中国历代人物传记资料库 CBDB 36886） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王傑（CBDB 36886）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36886&o=json)
