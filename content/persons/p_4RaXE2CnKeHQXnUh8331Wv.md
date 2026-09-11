---
schema: wang-person/v1
id: p_4RaXE2CnKeHQXnUh8331Wv
status: active
merged_into: null
display_name: 王杆
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mNZBfJxFSTiY7h4F9SUAM8
        subject_person_id: p_4RaXE2CnKeHQXnUh8331Wv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王杆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_59X2KC68NrJppKnuGJwG9K
          claim_id: c_mNZBfJxFSTiY7h4F9SUAM8
          source_id: s_VsVR67nj1BFG1cUkNQLuXB
          stance: supports
          locator: CBDB:38994
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38994）
          source: &a1
            id: s_VsVR67nj1BFG1cUkNQLuXB
            source_type: api_record
            title: 中国历代人物传记资料库：王杆（CBDB 38994）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38994&o=json
            external_identifier: CBDB:38994
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.579Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EwztSL26pX4HBufruxkmKJ
        subject_person_id: p_4RaXE2CnKeHQXnUh8331Wv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王杆，宋人物。籍贯無為軍，曾任奉直大夫、通判。（中国历代人物传记资料库 CBDB 38994）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_QMUMCsc3T_V65VjwsPhVhE
          claim_id: c_EwztSL26pX4HBufruxkmKJ
          source_id: s_VsVR67nj1BFG1cUkNQLuXB
          stance: supports
          locator: CBDB:38994
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_O__DXaeixibuBQUc81u5l5
        subject_person_id: p_AxGKebPJ8nSzqUKDzS1Lwr
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4RaXE2CnKeHQXnUh8331Wv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XwfDYPcoonRTsKtsm22qNV
          claim_id: c_O__DXaeixibuBQUc81u5l5
          source_id: s_VsVR67nj1BFG1cUkNQLuXB
          stance: supports
          locator: 宋人傳記資料索引(電子版)，652：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_AxGKebPJ8nSzqUKDzS1Lwr
        status: active
        display_name: 王藺
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王杆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王杆 | accepted |
| bio.summary | 王杆，宋人物。籍贯無為軍，曾任奉直大夫、通判。（中国历代人物传记资料库 CBDB 38994） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_AxGKebPJ8nSzqUKDzS1Lwr | 王藺 | accepted |

## 外部来源

- [中国历代人物传记资料库：王杆（CBDB 38994）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38994&o=json)
