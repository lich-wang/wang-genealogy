---
schema: wang-person/v1
id: p_pLswWqSBPoyLmU6amLYFt3
status: active
merged_into: null
display_name: 王漢忠
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zCNeKHj1QW9C7krHCNW5S4
        subject_person_id: p_pLswWqSBPoyLmU6amLYFt3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王漢忠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RoMaPnE6ADdGS2C35wv2Y7
          claim_id: c_zCNeKHj1QW9C7krHCNW5S4
          source_id: s_au5XPbQsEKbHz175HzA8GX
          stance: supports
          locator: CBDB:14839
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（14839）
          source: &a1
            id: s_au5XPbQsEKbHz175HzA8GX
            source_type: api_record
            title: 中国历代人物传记资料库：王漢忠（CBDB 14839）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=14839&o=json
            external_identifier: CBDB:14839
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.639Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_MBXk6AKoZsyzDjoMKQMAe3
        subject_person_id: p_pLswWqSBPoyLmU6amLYFt3
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1002年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Eus7FPatUQ3j6CL6dyJ1hR
          claim_id: c_MBXk6AKoZsyzDjoMKQMAe3
          source_id: s_au5XPbQsEKbHz175HzA8GX
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
        id: c_42QYvSU9LNsQi3izfBvVz2
        subject_person_id: p_pLswWqSBPoyLmU6amLYFt3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xi6FQVjYNNj2ApnnXMZ46N
          claim_id: c_42QYvSU9LNsQi3izfBvVz2
          source_id: s_au5XPbQsEKbHz175HzA8GX
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
        id: c_w-NqfgCeC1qQ3QkN8yRL-6
        subject_person_id: p_pLswWqSBPoyLmU6amLYFt3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XviaqWWyDjdJ24E836cQV3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LVYG1LZUWT60szcEKcE1ET
          claim_id: c_w-NqfgCeC1qQ3QkN8yRL-6
          source_id: s_1DEMUPHjjsGoz38cCobuk6
          stance: supports
          locator: 宋史：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_1DEMUPHjjsGoz38cCobuk6
            source_type: api_record
            title: 中国历代人物传记资料库：王從政（CBDB 119735）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119735&o=json
            external_identifier: CBDB:119735
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.889Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_XviaqWWyDjdJ24E836cQV3
        status: active
        display_name: 王從政
        merged_into_person_id: null
    - claim:
        id: c_V504xtDkvPAB7hcJojAsxW
        subject_person_id: p_pLswWqSBPoyLmU6amLYFt3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eK7BmxmwBKQ83huTyGiRu6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wIJPkpkhnZ9Y-toOS03MSe
          claim_id: c_V504xtDkvPAB7hcJojAsxW
          source_id: s_AD4GWS6qmi9VBJoFtXawVw
          stance: supports
          locator: 宋史：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_AD4GWS6qmi9VBJoFtXawVw
            source_type: api_record
            title: 中国历代人物传记资料库：王從吉（CBDB 119736）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119736&o=json
            external_identifier: CBDB:119736
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:51.102Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_eK7BmxmwBKQ83huTyGiRu6
        status: active
        display_name: 王從吉
        merged_into_person_id: null
    - claim:
        id: c_BO0v2SdbHsaierANUkQ7QX
        subject_person_id: p_pLswWqSBPoyLmU6amLYFt3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XvB9fiR4qtayP99DjkRnm9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zyIUFmk7fFEn-XyP9nT22Y
          claim_id: c_BO0v2SdbHsaierANUkQ7QX
          source_id: s_ist5NHiDFA1o7yXqN4pPdr
          stance: supports
          locator: 宋史：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ist5NHiDFA1o7yXqN4pPdr
            source_type: api_record
            title: 中国历代人物传记资料库：王從益（CBDB 37406）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37406&o=json
            external_identifier: CBDB:37406
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.707Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_XvB9fiR4qtayP99DjkRnm9
        status: active
        display_name: 王從益
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王漢忠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王漢忠 | accepted |
| death.date | 1002年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_XviaqWWyDjdJ24E836cQV3 | 王從政 | accepted |
| children | p_eK7BmxmwBKQ83huTyGiRu6 | 王從吉 | accepted |
| children | p_XvB9fiR4qtayP99DjkRnm9 | 王從益 | accepted |

## 外部来源

- [中国历代人物传记资料库：王從吉（CBDB 119736）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119736&o=json)
- [中国历代人物传记资料库：王從益（CBDB 37406）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37406&o=json)
- [中国历代人物传记资料库：王從政（CBDB 119735）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119735&o=json)
- [中国历代人物传记资料库：王漢忠（CBDB 14839）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=14839&o=json)
