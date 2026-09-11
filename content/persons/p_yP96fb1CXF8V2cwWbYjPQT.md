---
schema: wang-person/v1
id: p_yP96fb1CXF8V2cwWbYjPQT
status: active
merged_into: null
display_name: 王則
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_W9GRP6n4XA1pAbLru3xceV
        subject_person_id: p_yP96fb1CXF8V2cwWbYjPQT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王則
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rHHoZTq5sqnpz5fLvzZiJS
          claim_id: c_W9GRP6n4XA1pAbLru3xceV
          source_id: s_cH9U4zfeCNQA7yKuAQQi6P
          stance: supports
          locator: CBDB:140371
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（140371）
          source: &a1
            id: s_cH9U4zfeCNQA7yKuAQQi6P
            source_type: api_record
            title: 中国历代人物传记资料库：王則（CBDB 140371）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140371&o=json
            external_identifier: CBDB:140371
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.497Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_kkq6p4Z1LG8Hufmz4qyEN5
        subject_person_id: p_yP96fb1CXF8V2cwWbYjPQT
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 630年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WLcmm76ZQM6in6fxxRXuui
          claim_id: c_kkq6p4Z1LG8Hufmz4qyEN5
          source_id: s_cH9U4zfeCNQA7yKuAQQi6P
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
        id: c_E2rkmyQ7GHat8J9M1Jy4H2
        subject_person_id: p_yP96fb1CXF8V2cwWbYjPQT
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 700年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WGekT4PoXHdpy13CCn4do3
          claim_id: c_E2rkmyQ7GHat8J9M1Jy4H2
          source_id: s_cH9U4zfeCNQA7yKuAQQi6P
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
        id: c_Ynd4EsQWA5kCis41dHdAbP
        subject_person_id: p_yP96fb1CXF8V2cwWbYjPQT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为周人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bM2BKHJ2WNsJt4zYMuKuTq
          claim_id: c_Ynd4EsQWA5kCis41dHdAbP
          source_id: s_cH9U4zfeCNQA7yKuAQQi6P
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
        id: c_1PwxlmfvVBJv70AFaUvUqE
        subject_person_id: p_yP96fb1CXF8V2cwWbYjPQT
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_g4sFp2xrphY4opHL4cs7cS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9GNfB0AZwdNVu__c2rALCg
          claim_id: c_1PwxlmfvVBJv70AFaUvUqE
          source_id: s_97bLxMiNyqAZfABh9xtU2y
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiyuan 97：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_97bLxMiNyqAZfABh9xtU2y
            source_type: api_record
            title: 中国历代人物传记资料库：王子奇（CBDB 151449）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=151449&o=json
            external_identifier: CBDB:151449
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.838Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_g4sFp2xrphY4opHL4cs7cS
        status: active
        display_name: 王子奇
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王則

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王則 | accepted |
| birth.date | 630年 | accepted |
| death.date | 700年 | accepted |
| bio.summary | CBDB 记载为周人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_g4sFp2xrphY4opHL4cs7cS | 王子奇 | accepted |

## 外部来源

- [中国历代人物传记资料库：王則（CBDB 140371）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140371&o=json)
- [中国历代人物传记资料库：王子奇（CBDB 151449）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=151449&o=json)
