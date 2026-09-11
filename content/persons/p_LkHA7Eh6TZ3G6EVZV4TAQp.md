---
schema: wang-person/v1
id: p_LkHA7Eh6TZ3G6EVZV4TAQp
status: active
merged_into: null
display_name: 王斌
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1FdveumCwsgCTCJd5fVeDa
        subject_person_id: p_LkHA7Eh6TZ3G6EVZV4TAQp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王斌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yfmTyg2LTqoFjnSkACdbKY
          claim_id: c_1FdveumCwsgCTCJd5fVeDa
          source_id: s_5krZFWPxL7Gb15bWQvDxeA
          stance: supports
          locator: CBDB:209360
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（209360）
          source: &a1
            id: s_5krZFWPxL7Gb15bWQvDxeA
            source_type: api_record
            title: 中国历代人物传记资料库：王斌（CBDB 209360）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209360&o=json
            external_identifier: CBDB:209360
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.982Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_s9fd68vQqURHj2kHo6fYM1
        subject_person_id: p_LkHA7Eh6TZ3G6EVZV4TAQp
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
        - id: cs_SjcRtDtaxWz588wBkvHAjU
          claim_id: c_s9fd68vQqURHj2kHo6fYM1
          source_id: s_5krZFWPxL7Gb15bWQvDxeA
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_SAeamRJxRHjvWZKx6NaoHn
        subject_person_id: p_LkHA7Eh6TZ3G6EVZV4TAQp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rueH5VJGf9EEceCDH3UTnn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MQm7KJ5iixKYLfYg5wk23s
          claim_id: c_SAeamRJxRHjvWZKx6NaoHn
          source_id: s_5krZFWPxL7Gb15bWQvDxeA
          stance: supports
          locator: 天順八年進士登科錄:一卷，第三甲第七十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_rueH5VJGf9EEceCDH3UTnn
        status: active
        display_name: 王昭
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王斌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王斌 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_rueH5VJGf9EEceCDH3UTnn | 王昭 | accepted |

## 外部来源

- [中国历代人物传记资料库：王斌（CBDB 209360）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209360&o=json)
