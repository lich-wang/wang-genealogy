---
schema: wang-person/v1
id: p_RqzUcvrQLUybQHh3FDEV3e
status: active
merged_into: null
display_name: 王炳樞
cbdb_id: 210108
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MZEF15EUERmoi6iqUDQoY5
        subject_person_id: p_RqzUcvrQLUybQHh3FDEV3e
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王炳樞，明人物。隆慶五年進士，籍贯崑山。（中国历代人物传记资料库 CBDB 210108）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_JBU2UZxDlkbMNUgH4f-zEw
          claim_id: c_MZEF15EUERmoi6iqUDQoY5
          source_id: s_XT2wNsbKKwgSvBr3hRyb3b
          stance: supports
          locator: CBDB:210108
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_XT2wNsbKKwgSvBr3hRyb3b
            source_type: api_record
            title: 中国历代人物传记资料库：王炳樞（CBDB 210108）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210108&o=json
            external_identifier: CBDB:210108
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:55.593Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_F1ZHvQQhpo98v5yNeyrCfx
        subject_person_id: p_RqzUcvrQLUybQHh3FDEV3e
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王炳樞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_gJBmpWeZMdM388GCPSufPS
          claim_id: c_F1ZHvQQhpo98v5yNeyrCfx
          source_id: s_XT2wNsbKKwgSvBr3hRyb3b
          stance: supports
          locator: CBDB:210108
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2401-2500）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_lJB8T-rwG2pdAFkWIJUl9h
        subject_person_id: p_rn5bs45vsLNkK5gzRaTQ98
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RqzUcvrQLUybQHh3FDEV3e
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YOk07v9CjGw2WU-bhT5qmJ
          claim_id: c_lJB8T-rwG2pdAFkWIJUl9h
          source_id: s_Hqoq_CH0_wza-ffFg2C195
          stance: supports
          locator: CBDB：兄弟 王炳衡（126591）之父／母 王法
          quotation: null
          interpretation_note: 由兄弟关系推断：王炳樞 与 王炳衡 为同胞（CBDB 记「兄」），王炳衡 之父／母即 王炳樞 之父／母。
          source:
            id: s_Hqoq_CH0_wza-ffFg2C195
            source_type: api_record
            title: 中国历代人物传记资料库：王炳樞（CBDB 210108）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210108&o=json
            external_identifier: CBDB:210108
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rn5bs45vsLNkK5gzRaTQ98
        status: active
        display_name: 王法
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_HwQ6aVdAbLEsMqHW4ys0Qz
        subject_person_id: p_8fDiA64i7XEi5BnTAt9qhu
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_RqzUcvrQLUybQHh3FDEV3e
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TAII-nF14ocHfdaB8xJKTH
          claim_id: c_HwQ6aVdAbLEsMqHW4ys0Qz
          source_id: s_Hqoq_CH0_wza-ffFg2C195
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126591 王炳衡）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Hqoq_CH0_wza-ffFg2C195
            source_type: api_record
            title: 中国历代人物传记资料库：王炳樞（CBDB 210108）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210108&o=json
            external_identifier: CBDB:210108
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8fDiA64i7XEi5BnTAt9qhu
        status: active
        display_name: 王炳衡
        merged_into_person_id: null
    - claim:
        id: c_VrkoGIbzUdTofTmFf6ihjx
        subject_person_id: p_BSK3JVZbYgKQNPmF9hrz5q
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_RqzUcvrQLUybQHh3FDEV3e
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oeJsqwUFMC-ZDfNRVo8nsX
          claim_id: c_VrkoGIbzUdTofTmFf6ihjx
          source_id: s_Hqoq_CH0_wza-ffFg2C195
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126592 王炳璿）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Hqoq_CH0_wza-ffFg2C195
            source_type: api_record
            title: 中国历代人物传记资料库：王炳樞（CBDB 210108）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210108&o=json
            external_identifier: CBDB:210108
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_BSK3JVZbYgKQNPmF9hrz5q
        status: active
        display_name: 王炳璿
        merged_into_person_id: null
---

# 王炳樞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王炳樞，明人物。隆慶五年進士，籍贯崑山。（中国历代人物传记资料库 CBDB 210108） | accepted |
| name.primary | 王炳樞 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_rn5bs45vsLNkK5gzRaTQ98 | 王法 | accepted |
| other | p_8fDiA64i7XEi5BnTAt9qhu | 王炳衡 | accepted |
| other | p_BSK3JVZbYgKQNPmF9hrz5q | 王炳璿 | accepted |

## 外部来源

- [中国历代人物传记资料库：王炳樞（CBDB 210108）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210108&o=json)
