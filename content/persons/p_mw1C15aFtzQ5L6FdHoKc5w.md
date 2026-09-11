---
schema: wang-person/v1
id: p_mw1C15aFtzQ5L6FdHoKc5w
status: active
merged_into: null
display_name: 王俊民
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XFrdXGVn7xAspqK1TkqyCC
        subject_person_id: p_mw1C15aFtzQ5L6FdHoKc5w
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俊民
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_s2Fcq6N85JjFWYAFt3U8d1
          claim_id: c_XFrdXGVn7xAspqK1TkqyCC
          source_id: s_E54D4FbYErNXGZ2dXiHh6h
          stance: supports
          locator: CBDB:25488
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（25488）
          source: &a1
            id: s_E54D4FbYErNXGZ2dXiHh6h
            source_type: api_record
            title: 中国历代人物传记资料库：王俊民（CBDB 25488）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25488&o=json
            external_identifier: CBDB:25488
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.912Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sKqCv9njDM8oDSCGtFACp3
        subject_person_id: p_mw1C15aFtzQ5L6FdHoKc5w
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俊民，宋人物。籍贯山陰。（中国历代人物传记资料库 CBDB 25488）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_dycYwoSyK9iH2-AIDR8-jm
          claim_id: c_sKqCv9njDM8oDSCGtFACp3
          source_id: s_E54D4FbYErNXGZ2dXiHh6h
          stance: supports
          locator: CBDB:25488
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_h4kiUe7TmnPFhmBV8VFzBP
        subject_person_id: p_sG13vw1kNPD6YQdSJvphMP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mw1C15aFtzQ5L6FdHoKc5w
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_U649VKVz3WbDQfningk6aU
          claim_id: c_h4kiUe7TmnPFhmBV8VFzBP
          source_id: s_E54D4FbYErNXGZ2dXiHh6h
          stance: supports
          locator: CBDB 双向互证（父 王鞏 ⇄ 子 王俊民）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_sG13vw1kNPD6YQdSJvphMP
        status: active
        display_name: 王鞏
        merged_into_person_id: null
  children:
    - claim:
        id: c_1RKqkaQwXBF-gfW3apLfnS
        subject_person_id: p_mw1C15aFtzQ5L6FdHoKc5w
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AVbJ8PQzkH6HyDwFvk3DDq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_z4VOZum02JoBWlGh2tf-O0
          claim_id: c_1RKqkaQwXBF-gfW3apLfnS
          source_id: s_RT3YnR43QP4wp8cNS83TG6
          stance: supports
          locator: CBDB 双向互证（父 王俊民 ⇄ 子 王度）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_RT3YnR43QP4wp8cNS83TG6
            source_type: api_record
            title: 中国历代人物传记资料库：王度（CBDB 25489）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25489&o=json
            external_identifier: CBDB:25489
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.912Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_AVbJ8PQzkH6HyDwFvk3DDq
        status: active
        display_name: 王度
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王俊民

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王俊民 | accepted |
| bio.summary | 王俊民，宋人物。籍贯山陰。（中国历代人物传记资料库 CBDB 25488） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_sG13vw1kNPD6YQdSJvphMP | 王鞏 | accepted |
| children | p_AVbJ8PQzkH6HyDwFvk3DDq | 王度 | accepted |

## 外部来源

- [中国历代人物传记资料库：王度（CBDB 25489）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25489&o=json)
- [中国历代人物传记资料库：王俊民（CBDB 25488）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25488&o=json)
