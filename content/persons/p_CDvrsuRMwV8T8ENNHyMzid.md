---
schema: wang-person/v1
id: p_CDvrsuRMwV8T8ENNHyMzid
status: active
merged_into: null
display_name: 王栢
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eRUo3iPgs5ueHpwMMH6iTE
        subject_person_id: p_CDvrsuRMwV8T8ENNHyMzid
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王栢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ngmiwB7fwcoaLBKNV2Mj63
          claim_id: c_eRUo3iPgs5ueHpwMMH6iTE
          source_id: s_139QQL3cNz9Ce15gmuCVWp
          stance: supports
          locator: CBDB:213211
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（213211）
          source: &a1
            id: s_139QQL3cNz9Ce15gmuCVWp
            source_type: api_record
            title: 中国历代人物传记资料库：王栢（CBDB 213211）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213211&o=json
            external_identifier: CBDB:213211
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.110Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gpYtUBGMPHmfyXF8BB7ruD
        subject_person_id: p_CDvrsuRMwV8T8ENNHyMzid
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王栢，明人物。萬曆二年進士，籍贯長洲。（中国历代人物传记资料库 CBDB 213211）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KoFGlEbuMiepHilU9zB-5E
          claim_id: c_gpYtUBGMPHmfyXF8BB7ruD
          source_id: s_139QQL3cNz9Ce15gmuCVWp
          stance: supports
          locator: CBDB:213211
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_BocsTjjA1H-Y6sQe7zhVYp
        subject_person_id: p_LMXRCBjsfzMqaRuKsJc8Wx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CDvrsuRMwV8T8ENNHyMzid
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ivZq-XKrMK_XCiXga5FrJ1
          claim_id: c_BocsTjjA1H-Y6sQe7zhVYp
          source_id: s_NXuFljl__jjW0MsbGWxfhC
          stance: supports
          locator: CBDB：兄弟 王問卿（206092）之父／母 王津
          quotation: null
          interpretation_note: 由兄弟关系推断：王栢 与 王問卿 为同胞（CBDB 记「弟」），王問卿 之父／母即 王栢 之父／母。
          source:
            id: s_NXuFljl__jjW0MsbGWxfhC
            source_type: api_record
            title: 中国历代人物传记资料库：王栢（CBDB 213211）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213211&o=json
            external_identifier: CBDB:213211
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_LMXRCBjsfzMqaRuKsJc8Wx
        status: active
        display_name: 王津
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_vtvoopsMxBKWEteJggZLrn
        subject_person_id: p_CDvrsuRMwV8T8ENNHyMzid
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_v7QTG8DDAv27Aki2Sqpnvw
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_c9nxSoObvThHRg7tXMUc-7
          claim_id: c_vtvoopsMxBKWEteJggZLrn
          source_id: s_NXuFljl__jjW0MsbGWxfhC
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 206092 王問卿）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_NXuFljl__jjW0MsbGWxfhC
            source_type: api_record
            title: 中国历代人物传记资料库：王栢（CBDB 213211）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213211&o=json
            external_identifier: CBDB:213211
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_v7QTG8DDAv27Aki2Sqpnvw
        status: active
        display_name: 王問卿
        merged_into_person_id: null
---

# 王栢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王栢 | accepted |
| bio.summary | 王栢，明人物。萬曆二年進士，籍贯長洲。（中国历代人物传记资料库 CBDB 213211） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_LMXRCBjsfzMqaRuKsJc8Wx | 王津 | accepted |
| other | p_v7QTG8DDAv27Aki2Sqpnvw | 王問卿 | accepted |

## 外部来源

- [中国历代人物传记资料库：王栢（CBDB 213211）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213211&o=json)
