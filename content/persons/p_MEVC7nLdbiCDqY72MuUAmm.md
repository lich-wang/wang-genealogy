---
schema: wang-person/v1
id: p_MEVC7nLdbiCDqY72MuUAmm
status: active
merged_into: null
display_name: 王宗湯
cbdb_id: 317698
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MSXhkgUEAU1qcBExzPWv7p
        subject_person_id: p_MEVC7nLdbiCDqY72MuUAmm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗湯，明人物。嘉靖三十二年進士，籍贯聞喜。（中国历代人物传记资料库 CBDB 317698）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_Tjrg1wOfslxqdflGrfOKFH
          claim_id: c_MSXhkgUEAU1qcBExzPWv7p
          source_id: s_7FvBiuVGMJStjRkBKN5emv
          stance: supports
          locator: CBDB:317698
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_7FvBiuVGMJStjRkBKN5emv
            source_type: api_record
            title: 中国历代人物传记资料库：王宗湯（CBDB 317698）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317698&o=json
            external_identifier: CBDB:317698
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.030Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_a8qNo2j4PZhPWZcFJb3hKB
        subject_person_id: p_MEVC7nLdbiCDqY72MuUAmm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗湯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_NsWQfK5LwKaqJ4T7Kh4nDf
          claim_id: c_a8qNo2j4PZhPWZcFJb3hKB
          source_id: s_7FvBiuVGMJStjRkBKN5emv
          stance: supports
          locator: CBDB:317698
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3701-3800）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_EsnrksUulUUOVQwls0T3cr
        subject_person_id: p_oBz6NLHmFuUeBahrr88xPZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MEVC7nLdbiCDqY72MuUAmm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_krBYVgTPO3rzkY8UGFfTG_
          claim_id: c_EsnrksUulUUOVQwls0T3cr
          source_id: s_5goB6ZCoEAj-RRYJAN_89m
          stance: supports
          locator: CBDB：兄弟 王宗舜（126560）之父／母 王澄
          quotation: null
          interpretation_note: 由兄弟关系推断：王宗湯 与 王宗舜 为同胞（CBDB 记「兄」），王宗舜 之父／母即 王宗湯 之父／母。
          source:
            id: s_5goB6ZCoEAj-RRYJAN_89m
            source_type: api_record
            title: 中国历代人物传记资料库：王宗湯（CBDB 317698）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317698&o=json
            external_identifier: CBDB:317698
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_oBz6NLHmFuUeBahrr88xPZ
        status: active
        display_name: 王澄
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_xbyIqav2lQLBKbPi3UPL3x
        subject_person_id: p_9DQWxHegXc6PNKo9W5YA34
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_MEVC7nLdbiCDqY72MuUAmm
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_t4iiE--ZPl481_O5EP5mad
          claim_id: c_xbyIqav2lQLBKbPi3UPL3x
          source_id: s_5goB6ZCoEAj-RRYJAN_89m
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126560 王宗舜）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_5goB6ZCoEAj-RRYJAN_89m
            source_type: api_record
            title: 中国历代人物传记资料库：王宗湯（CBDB 317698）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317698&o=json
            external_identifier: CBDB:317698
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9DQWxHegXc6PNKo9W5YA34
        status: active
        display_name: 王宗舜
        merged_into_person_id: null
---

# 王宗湯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王宗湯，明人物。嘉靖三十二年進士，籍贯聞喜。（中国历代人物传记资料库 CBDB 317698） | accepted |
| name.primary | 王宗湯 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_oBz6NLHmFuUeBahrr88xPZ | 王澄 | accepted |
| other | p_9DQWxHegXc6PNKo9W5YA34 | 王宗舜 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宗湯（CBDB 317698）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317698&o=json)
