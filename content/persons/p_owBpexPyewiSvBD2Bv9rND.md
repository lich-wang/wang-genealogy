---
schema: wang-person/v1
id: p_owBpexPyewiSvBD2Bv9rND
status: active
merged_into: null
display_name: 王懷信
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8NKxKnUx96UL5Kk2LzmQNQ
        subject_person_id: p_owBpexPyewiSvBD2Bv9rND
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懷信
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_K9DYyDATFGoRkwQePDbbDQ
          claim_id: c_8NKxKnUx96UL5Kk2LzmQNQ
          source_id: s_BAokGHmJjWyhyEPkUAUrks
          stance: supports
          locator: CBDB:152407
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（152407）
          source: &a1
            id: s_BAokGHmJjWyhyEPkUAUrks
            source_type: api_record
            title: 中国历代人物传记资料库：王懷信（CBDB 152407）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=152407&o=json
            external_identifier: CBDB:152407
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.850Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JXjVbUtETLJXAmxCkiTTFq
        subject_person_id: p_owBpexPyewiSvBD2Bv9rND
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
        - id: cs_bsEryrZZ2XXMdV5qUPmDos
          claim_id: c_JXjVbUtETLJXAmxCkiTTFq
          source_id: s_BAokGHmJjWyhyEPkUAUrks
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
        id: c_lYWiQleXzdoVBlsUusxYF_
        subject_person_id: p_owBpexPyewiSvBD2Bv9rND
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bmHq7gHZwjgbm5V1bkLzUT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_F1rHN3-2mLCa_7ZV_8nezI
          claim_id: c_lYWiQleXzdoVBlsUusxYF_
          source_id: s_DfjD8YeEYBuuUopsxMmVRn
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiyuan 342：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_DfjD8YeEYBuuUopsxMmVRn
            source_type: api_record
            title: 中国历代人物传记资料库：王韶（CBDB 140516）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140516&o=json
            external_identifier: CBDB:140516
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.508Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_bmHq7gHZwjgbm5V1bkLzUT
        status: active
        display_name: 王韶
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王懷信

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王懷信 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_bmHq7gHZwjgbm5V1bkLzUT | 王韶 | accepted |

## 外部来源

- [中国历代人物传记资料库：王懷信（CBDB 152407）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=152407&o=json)
- [中国历代人物传记资料库：王韶（CBDB 140516）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140516&o=json)
