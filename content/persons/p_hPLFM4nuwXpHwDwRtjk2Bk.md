---
schema: wang-person/v1
id: p_hPLFM4nuwXpHwDwRtjk2Bk
status: active
merged_into: null
display_name: 王象豐
cbdb_id: 235537
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ww4vHaR5mdF7gENufQdn6P
        subject_person_id: p_hPLFM4nuwXpHwDwRtjk2Bk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王象豐，明人物。籍贯新城，曾任守備。（中国历代人物传记资料库 CBDB 235537）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_wGBdmCigGho70xfaW2ZlX1
          claim_id: c_ww4vHaR5mdF7gENufQdn6P
          source_id: s_T5DQVwUvDnp1ZnPUXB9CS3
          stance: supports
          locator: CBDB:235537
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_T5DQVwUvDnp1ZnPUXB9CS3
            source_type: api_record
            title: 中国历代人物传记资料库：王象豐（CBDB 235537）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235537&o=json
            external_identifier: CBDB:235537
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.856Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_eGm4AcuBjSadLhUxAZsmV5
        subject_person_id: p_hPLFM4nuwXpHwDwRtjk2Bk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王象豐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_LA7WEFEfADLPGQeNxLrwKd
          claim_id: c_eGm4AcuBjSadLhUxAZsmV5
          source_id: s_T5DQVwUvDnp1ZnPUXB9CS3
          stance: supports
          locator: CBDB:235537
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2801-2900）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_NVgnsKRreFg71B9uMuQdeV
        subject_person_id: p_5r1wESpKqnWgbhR5AChbjE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hPLFM4nuwXpHwDwRtjk2Bk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cM8Ii7mjTdv_kIFfOimu67
          claim_id: c_NVgnsKRreFg71B9uMuQdeV
          source_id: s_jsUXHj7pBtrgGL_XGnTcDJ
          stance: supports
          locator: CBDB：兄弟 王象春（126731）之父／母 王之猷
          quotation: null
          interpretation_note: 由兄弟关系推断：王象豐 与 王象春 为同胞（CBDB 记「弟」），王象春 之父／母即 王象豐 之父／母。
          source:
            id: s_jsUXHj7pBtrgGL_XGnTcDJ
            source_type: api_record
            title: 中国历代人物传记资料库：王象豐（CBDB 235537）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235537&o=json
            external_identifier: CBDB:235537
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5r1wESpKqnWgbhR5AChbjE
        status: active
        display_name: 王之猷
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_X3LpCTDZZIOSd2y7Rjv-VU
        subject_person_id: p_1vwHH8EjSEP1q2oifpwF8P
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hPLFM4nuwXpHwDwRtjk2Bk
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9Ggo9eAYX90Du11MmoA89X
          claim_id: c_X3LpCTDZZIOSd2y7Rjv-VU
          source_id: s_jsUXHj7pBtrgGL_XGnTcDJ
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126731 王象春）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_jsUXHj7pBtrgGL_XGnTcDJ
            source_type: api_record
            title: 中国历代人物传记资料库：王象豐（CBDB 235537）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235537&o=json
            external_identifier: CBDB:235537
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1vwHH8EjSEP1q2oifpwF8P
        status: active
        display_name: 王象春
        merged_into_person_id: null
---

# 王象豐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王象豐，明人物。籍贯新城，曾任守備。（中国历代人物传记资料库 CBDB 235537） | accepted |
| name.primary | 王象豐 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5r1wESpKqnWgbhR5AChbjE | 王之猷 | accepted |
| other | p_1vwHH8EjSEP1q2oifpwF8P | 王象春 | accepted |

## 外部来源

- [中国历代人物传记资料库：王象豐（CBDB 235537）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235537&o=json)
