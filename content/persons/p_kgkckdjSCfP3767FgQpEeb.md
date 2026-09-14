---
schema: wang-person/v1
id: p_kgkckdjSCfP3767FgQpEeb
status: active
merged_into: null
display_name: 王一恭
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1kmZDKLQkqYqGC7KXv4hYK
        subject_person_id: p_kgkckdjSCfP3767FgQpEeb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一恭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rJ8bY5vw8RL4mav4iKUQMX
          claim_id: c_1kmZDKLQkqYqGC7KXv4hYK
          source_id: s_NrZsS33JefowNPHckjX6RV
          stance: supports
          locator: CBDB:306154
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（306154）
          source: &a1
            id: s_NrZsS33JefowNPHckjX6RV
            source_type: api_record
            title: 中国历代人物传记资料库：王一恭（CBDB 306154）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306154&o=json
            external_identifier: CBDB:306154
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.761Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rSn3PGNPXGLhppL6vXZo94
        subject_person_id: p_kgkckdjSCfP3767FgQpEeb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一恭，明人物。嘉靖二十三年進士，籍贯江都。（中国历代人物传记资料库 CBDB 306154）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_labMDjowgKdLO4GVTghIBV
          claim_id: c_rSn3PGNPXGLhppL6vXZo94
          source_id: s_NrZsS33JefowNPHckjX6RV
          stance: supports
          locator: CBDB:306154
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_7LiPZadEhqinlFJMIi25Jo
        subject_person_id: p_toP613bi74YEw4TLd3hMCu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kgkckdjSCfP3767FgQpEeb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EUQmQM9M7cFYplIvqWxuua
          claim_id: c_7LiPZadEhqinlFJMIi25Jo
          source_id: s_76FNDukl-ALF3xjq92bnhw
          stance: supports
          locator: CBDB：兄弟 王一陽（203535）之父／母 王遷
          quotation: null
          interpretation_note: 由兄弟关系推断：王一恭 与 王一陽 为同胞（CBDB 记「兄」），王一陽 之父／母即 王一恭 之父／母。
          source:
            id: s_76FNDukl-ALF3xjq92bnhw
            source_type: api_record
            title: 中国历代人物传记资料库：王一恭（CBDB 306154）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306154&o=json
            external_identifier: CBDB:306154
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_toP613bi74YEw4TLd3hMCu
        status: active
        display_name: 王遷
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_L_hbESs8KAYDsYQdYZZQSx
        subject_person_id: p_4epX45r9bJPqQLoodeDXss
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_kgkckdjSCfP3767FgQpEeb
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wMrApEPXBLiz4FzcShBuQt
          claim_id: c_L_hbESs8KAYDsYQdYZZQSx
          source_id: s_76FNDukl-ALF3xjq92bnhw
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203535 王一陽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_76FNDukl-ALF3xjq92bnhw
            source_type: api_record
            title: 中国历代人物传记资料库：王一恭（CBDB 306154）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306154&o=json
            external_identifier: CBDB:306154
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4epX45r9bJPqQLoodeDXss
        status: active
        display_name: 王一陽
        merged_into_person_id: null
---

# 王一恭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王一恭 | accepted |
| bio.summary | 王一恭，明人物。嘉靖二十三年進士，籍贯江都。（中国历代人物传记资料库 CBDB 306154） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_toP613bi74YEw4TLd3hMCu | 王遷 | accepted |
| other | p_4epX45r9bJPqQLoodeDXss | 王一陽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王一恭（CBDB 306154）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306154&o=json)
