---
schema: wang-person/v1
id: p_rFDtpHcmA3zSJdT1XjKQ9W
status: active
merged_into: null
display_name: 王恭
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_L4x3EjTM4vrALf2aD5fZ9E
        subject_person_id: p_rFDtpHcmA3zSJdT1XjKQ9W
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XKv4MoDdG41Q5DhYcTdLbL
          claim_id: c_L4x3EjTM4vrALf2aD5fZ9E
          source_id: s_GEdhdjVy5saReK9kQFkisg
          stance: supports
          locator: CBDB:238064
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（238064）
          source: &a1
            id: s_GEdhdjVy5saReK9kQFkisg
            source_type: api_record
            title: 中国历代人物传记资料库：王恭（CBDB 238064）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238064&o=json
            external_identifier: CBDB:238064
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.875Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1MRC1LGtoDRtv17pqoY3hw
        subject_person_id: p_rFDtpHcmA3zSJdT1XjKQ9W
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恭，明人物。成化二年進士，籍贯威縣。（中国历代人物传记资料库 CBDB 238064）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LrX3zOqqOww-u7kO-avkTs
          claim_id: c_1MRC1LGtoDRtv17pqoY3hw
          source_id: s_GEdhdjVy5saReK9kQFkisg
          stance: supports
          locator: CBDB:238064
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_I4ZwTJaRKm3YD2CrHH8GXL
        subject_person_id: p_rfGZtWQ8pfDBATdxzFKLBp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rFDtpHcmA3zSJdT1XjKQ9W
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8p-j-WuM0n7YVIxAylPHq7
          claim_id: c_I4ZwTJaRKm3YD2CrHH8GXL
          source_id: s_q5EBLgX64IPfRHytyB9yWK
          stance: supports
          locator: CBDB：兄弟 王濬（126841）之父／母 王榮
          quotation: null
          interpretation_note: 由兄弟关系推断：王恭 与 王濬 为同胞（CBDB 记「弟」），王濬 之父／母即 王恭 之父／母。
          source:
            id: s_q5EBLgX64IPfRHytyB9yWK
            source_type: api_record
            title: 中国历代人物传记资料库：王恭（CBDB 238064）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238064&o=json
            external_identifier: CBDB:238064
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rfGZtWQ8pfDBATdxzFKLBp
        status: active
        display_name: 王榮
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_gCBDFVDuJazHUvaz2N-guX
        subject_person_id: p_XbUzXxzW1NKiE1b2phZgUS
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_rFDtpHcmA3zSJdT1XjKQ9W
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5Km6IeG18WjYN0B09TaX6H
          claim_id: c_gCBDFVDuJazHUvaz2N-guX
          source_id: s_q5EBLgX64IPfRHytyB9yWK
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126841 王濬）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_q5EBLgX64IPfRHytyB9yWK
            source_type: api_record
            title: 中国历代人物传记资料库：王恭（CBDB 238064）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238064&o=json
            external_identifier: CBDB:238064
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_XbUzXxzW1NKiE1b2phZgUS
        status: active
        display_name: 王濬
        merged_into_person_id: null
---

# 王恭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王恭 | accepted |
| bio.summary | 王恭，明人物。成化二年進士，籍贯威縣。（中国历代人物传记资料库 CBDB 238064） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_rfGZtWQ8pfDBATdxzFKLBp | 王榮 | accepted |
| other | p_XbUzXxzW1NKiE1b2phZgUS | 王濬 | accepted |

## 外部来源

- [中国历代人物传记资料库：王恭（CBDB 238064）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238064&o=json)
