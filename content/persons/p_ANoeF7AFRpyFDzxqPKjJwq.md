---
schema: wang-person/v1
id: p_ANoeF7AFRpyFDzxqPKjJwq
status: active
merged_into: null
display_name: 王肅
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PuFwMFidPYos4WQoB49cPy
        subject_person_id: p_ANoeF7AFRpyFDzxqPKjJwq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王肅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_p1kYqWU4QiCnn9DGMjbSQk
          claim_id: c_PuFwMFidPYos4WQoB49cPy
          source_id: s_RDtFU3PSe9JFSB6pTPN9Ws
          stance: supports
          locator: CBDB:240938
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（240938）
          source: &a1
            id: s_RDtFU3PSe9JFSB6pTPN9Ws
            source_type: api_record
            title: 中国历代人物传记资料库：王肅（CBDB 240938）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240938&o=json
            external_identifier: CBDB:240938
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.933Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dznvadMBS3y3h2X8655UEm
        subject_person_id: p_ANoeF7AFRpyFDzxqPKjJwq
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
        - id: cs_QEcm8P9a47qgTefFLrvUaw
          claim_id: c_dznvadMBS3y3h2X8655UEm
          source_id: s_RDtFU3PSe9JFSB6pTPN9Ws
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
        id: c_op5r6h2YXnK9756_BPrpVK
        subject_person_id: p_ANoeF7AFRpyFDzxqPKjJwq
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Z5S5a3vTHgwZid8XEKrJG6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_utqryLozJtpY0biXsdCNUq
          claim_id: c_op5r6h2YXnK9756_BPrpVK
          source_id: s_RDtFU3PSe9JFSB6pTPN9Ws
          stance: supports
          locator: 正統十三年進士登科錄:一卷，第三甲第三十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Z5S5a3vTHgwZid8XEKrJG6
        status: active
        display_name: 王讓
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王肅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王肅 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_Z5S5a3vTHgwZid8XEKrJG6 | 王讓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王肅（CBDB 240938）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240938&o=json)
