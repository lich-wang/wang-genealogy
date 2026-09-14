---
schema: wang-person/v1
id: p_nwJRPY9m5PVUYB86Wk7N9k
status: active
merged_into: null
display_name: 王堯節
cbdb_id: 301853
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ykquroPBMpbX6x9kN6NJmJ
        subject_person_id: p_nwJRPY9m5PVUYB86Wk7N9k
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王堯節，明人物。嘉靖十七年進士，籍贯鹿邑。（中国历代人物传记资料库 CBDB 301853）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_YHO9D_B6ON1LNGy1T6G2fx
          claim_id: c_ykquroPBMpbX6x9kN6NJmJ
          source_id: s_Rg1Ui3kYEsJEECzJf9GiCp
          stance: supports
          locator: CBDB:301853
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Rg1Ui3kYEsJEECzJf9GiCp
            source_type: api_record
            title: 中国历代人物传记资料库：王堯節（CBDB 301853）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301853&o=json
            external_identifier: CBDB:301853
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:04.487Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_4qvNGGZ5huXrM1tasZruCQ
        subject_person_id: p_nwJRPY9m5PVUYB86Wk7N9k
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王堯節
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Z62Tv5UsFqaytBRZucU1rJ
          claim_id: c_4qvNGGZ5huXrM1tasZruCQ
          source_id: s_Rg1Ui3kYEsJEECzJf9GiCp
          stance: supports
          locator: CBDB:301853
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3501-3600）｜历史性依据：CBDB 朝代 = 明
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
  descendants: []
  other:
    - claim:
        id: c_iSwP8mdfC2dl5Hq8jq5E_R
        subject_person_id: p_9PcP1eVw2Xs1K2J2cm2szS
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_nwJRPY9m5PVUYB86Wk7N9k
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_v7gbgKe7ZV-Altfk8Mp_ee
          claim_id: c_iSwP8mdfC2dl5Hq8jq5E_R
          source_id: s_WMMPEo0HO6yBIHFelxQ_NJ
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126715 王堯日）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_WMMPEo0HO6yBIHFelxQ_NJ
            source_type: api_record
            title: 中国历代人物传记资料库：王堯節（CBDB 301853）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301853&o=json
            external_identifier: CBDB:301853
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9PcP1eVw2Xs1K2J2cm2szS
        status: active
        display_name: 王堯日
        merged_into_person_id: null
---

# 王堯節

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王堯節，明人物。嘉靖十七年進士，籍贯鹿邑。（中国历代人物传记资料库 CBDB 301853） | accepted |
| name.primary | 王堯節 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| other | p_9PcP1eVw2Xs1K2J2cm2szS | 王堯日 | accepted |

## 外部来源

- [中国历代人物传记资料库：王堯節（CBDB 301853）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301853&o=json)
