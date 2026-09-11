---
schema: wang-person/v1
id: p_ncMzy2PByV6MKE3P1SGDzD
status: active
merged_into: null
display_name: 王曇
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_niugubvQzA2aVCxoGgoQjv
        subject_person_id: p_ncMzy2PByV6MKE3P1SGDzD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王曇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Zo4FkA1VgBkwQH1sgdkuQr
          claim_id: c_niugubvQzA2aVCxoGgoQjv
          source_id: s_PA2pL1HHuHTjHNQ5b5ZPTw
          stance: supports
          locator: CBDB:69464
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69464）
          source: &a1
            id: s_PA2pL1HHuHTjHNQ5b5ZPTw
            source_type: api_record
            title: 中国历代人物传记资料库：王曇（CBDB 69464）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69464&o=json
            external_identifier: CBDB:69464
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.282Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_o7tV7JMZ31HTor87fz2XHc
        subject_person_id: p_ncMzy2PByV6MKE3P1SGDzD
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1760年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1q1QpAkA2SLNb3VFE9GKep
          claim_id: c_o7tV7JMZ31HTor87fz2XHc
          source_id: s_PA2pL1HHuHTjHNQ5b5ZPTw
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_KqaVLVWKSCEyBqVn8B6848
        subject_person_id: p_ncMzy2PByV6MKE3P1SGDzD
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1817年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5PoJMM1RsgpE51GE5AFix1
          claim_id: c_KqaVLVWKSCEyBqVn8B6848
          source_id: s_PA2pL1HHuHTjHNQ5b5ZPTw
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QvbC6cDhQASyDLETzZ4JrV
        subject_person_id: p_ncMzy2PByV6MKE3P1SGDzD
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
        - id: cs_JNpHh9PEdwkS2os8zBXn7f
          claim_id: c_QvbC6cDhQASyDLETzZ4JrV
          source_id: s_PA2pL1HHuHTjHNQ5b5ZPTw
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
        id: c_BGw-gxNReCDZqNNp3V3gzu
        subject_person_id: p_ncMzy2PByV6MKE3P1SGDzD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fx5uiteSUr9e6mMa8PxR5B
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GzAr3kNozyLldSRW1n7o1u
          claim_id: c_BGw-gxNReCDZqNNp3V3gzu
          source_id: s_jS77fan1zYJSLu4hfBxRrq
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13176：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_jS77fan1zYJSLu4hfBxRrq
            source_type: api_record
            title: 中国历代人物传记资料库：王人樹（CBDB 527009）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=527009&o=json
            external_identifier: CBDB:527009
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.332Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_fx5uiteSUr9e6mMa8PxR5B
        status: active
        display_name: 王人樹
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王曇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王曇 | accepted |
| birth.date | 1760年 | accepted |
| death.date | 1817年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_fx5uiteSUr9e6mMa8PxR5B | 王人樹 | accepted |

## 外部来源

- [中国历代人物传记资料库：王人樹（CBDB 527009）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=527009&o=json)
- [中国历代人物传记资料库：王曇（CBDB 69464）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69464&o=json)
