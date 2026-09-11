---
schema: wang-person/v1
id: p_e7c3DhdEJw2765tvQyZA4M
status: active
merged_into: null
display_name: 王梅
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yGd8b6NtHzyCkSK6HsW5a5
        subject_person_id: p_e7c3DhdEJw2765tvQyZA4M
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王梅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PMXzdrLTTC6T5qJC2N5bLf
          claim_id: c_yGd8b6NtHzyCkSK6HsW5a5
          source_id: s_P2pAyQpzaCwjmDDqzKVTaK
          stance: supports
          locator: CBDB:202794
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（202794）
          source: &a1
            id: s_P2pAyQpzaCwjmDDqzKVTaK
            source_type: api_record
            title: 中国历代人物传记资料库：王梅（CBDB 202794）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202794&o=json
            external_identifier: CBDB:202794
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.756Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_fNDJGGrA7A89uD3YdP9Fip
        subject_person_id: p_e7c3DhdEJw2765tvQyZA4M
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1503年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LNDG3GJPJwMVqz5A526jcx
          claim_id: c_fNDJGGrA7A89uD3YdP9Fip
          source_id: s_P2pAyQpzaCwjmDDqzKVTaK
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1CHD1RDBKWFW1Asz9mxhoM
        subject_person_id: p_e7c3DhdEJw2765tvQyZA4M
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
        - id: cs_uhMK2MyF23BsCZnVWsN2qm
          claim_id: c_1CHD1RDBKWFW1Asz9mxhoM
          source_id: s_P2pAyQpzaCwjmDDqzKVTaK
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
        id: c_gEQBnQb1LNBsryjWTIP9eP
        subject_person_id: p_5oVCjNf3jZsLG4jhJ57YhB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_e7c3DhdEJw2765tvQyZA4M
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_f09KABOggZlo4ghgkgsKmD
          claim_id: c_gEQBnQb1LNBsryjWTIP9eP
          source_id: s_g3HqFCjbQwEuwe98fW3qQm
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第二百零六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_g3HqFCjbQwEuwe98fW3qQm
            source_type: api_record
            title: 中国历代人物传记资料库：王鸞（CBDB 294524）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294524&o=json
            external_identifier: CBDB:294524
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.464Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5oVCjNf3jZsLG4jhJ57YhB
        status: active
        display_name: 王鸞
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_4c1j48kPVeF-fWLHw2s_Xw
        subject_person_id: p_7Vg6fwwANVLx1wDXDAmRg9
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_e7c3DhdEJw2765tvQyZA4M
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aV4raMB6_VpZwzhDinT8UX
          claim_id: c_4c1j48kPVeF-fWLHw2s_Xw
          source_id: s_hs4NuTNZFNqhZQWgeTy2X6
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第二百零六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_hs4NuTNZFNqhZQWgeTy2X6
            source_type: api_record
            title: 中国历代人物传记资料库：王洪（CBDB 294522）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294522&o=json
            external_identifier: CBDB:294522
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.463Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7Vg6fwwANVLx1wDXDAmRg9
        status: active
        display_name: 王洪
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王梅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王梅 | accepted |
| birth.date | 1503年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5oVCjNf3jZsLG4jhJ57YhB | 王鸞 | accepted |
| ancestors | p_7Vg6fwwANVLx1wDXDAmRg9 | 王洪 | accepted |

## 外部来源

- [中国历代人物传记资料库：王洪（CBDB 294522）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294522&o=json)
- [中国历代人物传记资料库：王鸞（CBDB 294524）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294524&o=json)
- [中国历代人物传记资料库：王梅（CBDB 202794）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202794&o=json)
