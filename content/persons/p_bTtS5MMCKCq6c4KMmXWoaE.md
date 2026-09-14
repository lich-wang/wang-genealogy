---
schema: wang-person/v1
id: p_bTtS5MMCKCq6c4KMmXWoaE
status: active
merged_into: null
display_name: 王鳳鳴
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wAxBRb7HegC5gbyT3wDA4U
        subject_person_id: p_bTtS5MMCKCq6c4KMmXWoaE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鳳鳴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_duHW7g7SN6hCQpbNf7Ey9E
          claim_id: c_wAxBRb7HegC5gbyT3wDA4U
          source_id: s_SGbrz86JLHY9Q2k7cHoPDi
          stance: supports
          locator: CBDB:213956
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（213956）
          source: &a1
            id: s_SGbrz86JLHY9Q2k7cHoPDi
            source_type: api_record
            title: 中国历代人物传记资料库：王鳳鳴（CBDB 213956）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213956&o=json
            external_identifier: CBDB:213956
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.132Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EMweEDgBqjK52FGKAEMetx
        subject_person_id: p_bTtS5MMCKCq6c4KMmXWoaE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鳳鳴，明人物。萬曆二年進士，籍贯唐山，曾任吏目。（中国历代人物传记资料库 CBDB 213956）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gUSpMQ8_3cJPkqU08dct4w
          claim_id: c_EMweEDgBqjK52FGKAEMetx
          source_id: s_SGbrz86JLHY9Q2k7cHoPDi
          stance: supports
          locator: CBDB:213956
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_gGTi39zWDL_MKR3nEXxJ0m
        subject_person_id: p_3w6yDwcSmUtcvcpcvahG8r
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bTtS5MMCKCq6c4KMmXWoaE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8AMBqsZYP5GFWo9K5jg-e-
          claim_id: c_gGTi39zWDL_MKR3nEXxJ0m
          source_id: s_s4Dqbt0z238mGFmzRGTxz2
          stance: supports
          locator: CBDB：兄弟 王鳳竹（126794）之父／母 王都
          quotation: null
          interpretation_note: 由兄弟关系推断：王鳳鳴 与 王鳳竹 为同胞（CBDB 记「弟」），王鳳竹 之父／母即 王鳳鳴 之父／母。
          source:
            id: s_s4Dqbt0z238mGFmzRGTxz2
            source_type: api_record
            title: 中国历代人物传记资料库：王鳳鳴（CBDB 213956）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213956&o=json
            external_identifier: CBDB:213956
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3w6yDwcSmUtcvcpcvahG8r
        status: active
        display_name: 王都
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_b4rpvSolwi-KrZEvMwGGaP
        subject_person_id: p_bTtS5MMCKCq6c4KMmXWoaE
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_yJ3TVQF9TZGy72FnBo91RN
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_snCcBEH356uWh0IOp5iLl0
          claim_id: c_b4rpvSolwi-KrZEvMwGGaP
          source_id: s_s4Dqbt0z238mGFmzRGTxz2
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126794 王鳳竹）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_s4Dqbt0z238mGFmzRGTxz2
            source_type: api_record
            title: 中国历代人物传记资料库：王鳳鳴（CBDB 213956）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213956&o=json
            external_identifier: CBDB:213956
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_yJ3TVQF9TZGy72FnBo91RN
        status: active
        display_name: 王鳳竹
        merged_into_person_id: null
---

# 王鳳鳴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鳳鳴 | accepted |
| bio.summary | 王鳳鳴，明人物。萬曆二年進士，籍贯唐山，曾任吏目。（中国历代人物传记资料库 CBDB 213956） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_3w6yDwcSmUtcvcpcvahG8r | 王都 | accepted |
| other | p_yJ3TVQF9TZGy72FnBo91RN | 王鳳竹 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鳳鳴（CBDB 213956）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213956&o=json)
