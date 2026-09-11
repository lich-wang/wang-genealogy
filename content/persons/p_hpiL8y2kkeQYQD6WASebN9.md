---
schema: wang-person/v1
id: p_hpiL8y2kkeQYQD6WASebN9
status: active
merged_into: null
display_name: 王積善
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GU5HAscsc131rY3vBFa1J2
        subject_person_id: p_hpiL8y2kkeQYQD6WASebN9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王積善
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eNxWEZg9thNzXTctQR9swX
          claim_id: c_GU5HAscsc131rY3vBFa1J2
          source_id: s_PhGHS3pzAP8vADnJA54wAX
          stance: supports
          locator: CBDB:139268
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（139268）
          source: &a1
            id: s_PhGHS3pzAP8vADnJA54wAX
            source_type: api_record
            title: 中国历代人物传记资料库：王積善（CBDB 139268）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139268&o=json
            external_identifier: CBDB:139268
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.402Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_pwr1eLoakF5gJxCQVmudiL
        subject_person_id: p_hpiL8y2kkeQYQD6WASebN9
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 606年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LEeBqwQz4g7LqDxVPXV8PL
          claim_id: c_pwr1eLoakF5gJxCQVmudiL
          source_id: s_PhGHS3pzAP8vADnJA54wAX
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
        id: c_KRG6MwyUs4tmHVQWg5aBKB
        subject_person_id: p_hpiL8y2kkeQYQD6WASebN9
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 662年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9UvVN7SmML7v19LwEKkm8N
          claim_id: c_KRG6MwyUs4tmHVQWg5aBKB
          source_id: s_PhGHS3pzAP8vADnJA54wAX
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
        id: c_NZ8Jgo5JwkaK7LWfBX1dUa
        subject_person_id: p_hpiL8y2kkeQYQD6WASebN9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_THh4P4d8ce1k8kovf7Bfyc
          claim_id: c_NZ8Jgo5JwkaK7LWfBX1dUa
          source_id: s_PhGHS3pzAP8vADnJA54wAX
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_I-GuU5BcoK8lyaRn8EjT-T
        subject_person_id: p_2vaGGBR7jwibB8Zd6cf6aU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hpiL8y2kkeQYQD6WASebN9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IZCneId4aqjwMAgLTj3pIW
          claim_id: c_I-GuU5BcoK8lyaRn8EjT-T
          source_id: s_PhGHS3pzAP8vADnJA54wAX
          stance: supports
          locator: 唐代墓誌匯編:二卷，Longshuo 31：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_2vaGGBR7jwibB8Zd6cf6aU
        status: active
        display_name: 王猛略
        merged_into_person_id: null
  children:
    - claim:
        id: c_e3dB7iXxkzaj0ZIKIKmoR9
        subject_person_id: p_hpiL8y2kkeQYQD6WASebN9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hDJe5v9tZ1zb7NVKfSdi1s
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3Ff2oqDGAnTBPLuk-IoqSt
          claim_id: c_e3dB7iXxkzaj0ZIKIKmoR9
          source_id: s_cmrvRKCM8jKh2Cn55Hn75h
          stance: supports
          locator: 唐代墓誌匯編:二卷，Longshuo 31：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_cmrvRKCM8jKh2Cn55Hn75h
            source_type: api_record
            title: 中国历代人物传记资料库：王思溫（CBDB 147773）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=147773&o=json
            external_identifier: CBDB:147773
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.746Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_hDJe5v9tZ1zb7NVKfSdi1s
        status: active
        display_name: 王思溫
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王積善

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王積善 | accepted |
| birth.date | 606年 | accepted |
| death.date | 662年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_2vaGGBR7jwibB8Zd6cf6aU | 王猛略 | accepted |
| children | p_hDJe5v9tZ1zb7NVKfSdi1s | 王思溫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王積善（CBDB 139268）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139268&o=json)
- [中国历代人物传记资料库：王思溫（CBDB 147773）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=147773&o=json)
