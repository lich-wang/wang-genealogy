---
schema: wang-person/v1
id: p_XiFFgCxGPLXnJMQFHkL5MX
status: active
merged_into: null
display_name: 王鵬
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KWM6ekrZb2P3qz9kh3YRgh
        subject_person_id: p_XiFFgCxGPLXnJMQFHkL5MX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鵬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Y3UrrWAnEtdhhDQYinmN3u
          claim_id: c_KWM6ekrZb2P3qz9kh3YRgh
          source_id: s_UZCBKEFAMpiFeLAGpmxNVQ
          stance: supports
          locator: CBDB:309076
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（309076）
          source: &a1
            id: s_UZCBKEFAMpiFeLAGpmxNVQ
            source_type: api_record
            title: 中国历代人物传记资料库：王鵬（CBDB 309076）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309076&o=json
            external_identifier: CBDB:309076
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.804Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bXA2mGLZPJyaJDFQrd1yxq
        subject_person_id: p_XiFFgCxGPLXnJMQFHkL5MX
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
        - id: cs_p25sv4xJmFW4UcTxmL8kQu
          claim_id: c_bXA2mGLZPJyaJDFQrd1yxq
          source_id: s_UZCBKEFAMpiFeLAGpmxNVQ
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
        id: c_fGFo1HrfJ1LTKYraCMAbxa
        subject_person_id: p_XiFFgCxGPLXnJMQFHkL5MX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_m1KPPjDFuB77sgosg8dB61
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_t3fP0h1zOuaYjLlsVVgLOG
          claim_id: c_fGFo1HrfJ1LTKYraCMAbxa
          source_id: s_gQ1iyNseF56QiyBot1tdVq
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第二甲第五十二名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_gQ1iyNseF56QiyBot1tdVq
            source_type: api_record
            title: 中国历代人物传记资料库：王有為（CBDB 203722）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203722&o=json
            external_identifier: CBDB:203722
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.798Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_m1KPPjDFuB77sgosg8dB61
        status: active
        display_name: 王有為
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王鵬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鵬 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_m1KPPjDFuB77sgosg8dB61 | 王有為 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鵬（CBDB 309076）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309076&o=json)
- [中国历代人物传记资料库：王有為（CBDB 203722）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203722&o=json)
