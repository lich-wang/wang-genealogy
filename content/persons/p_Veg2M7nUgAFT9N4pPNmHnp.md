---
schema: wang-person/v1
id: p_Veg2M7nUgAFT9N4pPNmHnp
status: active
merged_into: null
display_name: 王敬先
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dypHRSme8z13JCD2fPzLbn
        subject_person_id: p_Veg2M7nUgAFT9N4pPNmHnp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬先
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_a3cgbSsc1BrKfSJ3NHgGcN
          claim_id: c_dypHRSme8z13JCD2fPzLbn
          source_id: s_Eq4DJnPSVfoRdbw3jriU3x
          stance: supports
          locator: CBDB:244418
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（244418）
          source: &a1
            id: s_Eq4DJnPSVfoRdbw3jriU3x
            source_type: api_record
            title: 中国历代人物传记资料库：王敬先（CBDB 244418）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244418&o=json
            external_identifier: CBDB:244418
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.031Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_d85P2H6gpaUEEjKrhXGu6q
        subject_person_id: p_Veg2M7nUgAFT9N4pPNmHnp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬先，明人物。成化五年進士。（中国历代人物传记资料库 CBDB 244418）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DHgejkw5QJ4bBs5hflHbCr
          claim_id: c_d85P2H6gpaUEEjKrhXGu6q
          source_id: s_Eq4DJnPSVfoRdbw3jriU3x
          stance: supports
          locator: CBDB:244418
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
  descendants:
    - claim:
        id: c_csIROvfm54W9cMamhpvEVg
        subject_person_id: p_Veg2M7nUgAFT9N4pPNmHnp
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_aYH4Kd4bjhZaTFXvNipRQE
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PuB9FsY9HUbyFWg-gDPdEb
          claim_id: c_csIROvfm54W9cMamhpvEVg
          source_id: s_CGQ86w881YJNLc94NAKZrQ
          stance: supports
          locator: 成化五年進士登科錄:一卷，第三甲第一百零六名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_CGQ86w881YJNLc94NAKZrQ
            source_type: api_record
            title: 中国历代人物传记资料库：王坦（CBDB 126565）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126565&o=json
            external_identifier: CBDB:126565
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.027Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_aYH4Kd4bjhZaTFXvNipRQE
        status: active
        display_name: 王坦
        merged_into_person_id: null
  other: []
---

# 王敬先

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敬先 | accepted |
| bio.summary | 王敬先，明人物。成化五年進士。（中国历代人物传记资料库 CBDB 244418） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_aYH4Kd4bjhZaTFXvNipRQE | 王坦 | accepted |

## 外部来源

- [中国历代人物传记资料库：王敬先（CBDB 244418）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244418&o=json)
- [中国历代人物传记资料库：王坦（CBDB 126565）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126565&o=json)
