---
schema: wang-person/v1
id: p_9K9PGQwsoS3ZaM5p5w7UtG
status: active
merged_into: null
display_name: 王夢羔
cbdb_id: 309661
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_E1FvWHizG3yFQUfGw39tiy
        subject_person_id: p_9K9PGQwsoS3ZaM5p5w7UtG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夢羔，明人物。嘉靖二十六年進士，籍贯金壇。（中国历代人物传记资料库 CBDB 309661）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_V4M0ON2x_R4vAJ_Z4Rum0x
          claim_id: c_E1FvWHizG3yFQUfGw39tiy
          source_id: s_ddeXvVzosxYQ3wu4bP6Zeg
          stance: supports
          locator: CBDB:309661
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_ddeXvVzosxYQ3wu4bP6Zeg
            source_type: api_record
            title: 中国历代人物传记资料库：王夢羔（CBDB 309661）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309661&o=json
            external_identifier: CBDB:309661
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:05.361Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_8qpPMZbmv3uQj4pkNktnm2
        subject_person_id: p_9K9PGQwsoS3ZaM5p5w7UtG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夢羔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_iurgQxutu3o45CxTs33t4Q
          claim_id: c_8qpPMZbmv3uQj4pkNktnm2
          source_id: s_ddeXvVzosxYQ3wu4bP6Zeg
          stance: supports
          locator: CBDB:309661
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3601-3700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_LbDdc_5atvmjOz9ECCXTJg
        subject_person_id: p_vpzDXBrQjqPJnEN64LCsPF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9K9PGQwsoS3ZaM5p5w7UtG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dDbLvzj--Wsrl_HHTOn6h6
          claim_id: c_LbDdc_5atvmjOz9ECCXTJg
          source_id: s_C0q4gQWjxzXZ7aRsW8DJPo
          stance: supports
          locator: CBDB：兄弟 王樵（34720）之父／母 王臬
          quotation: null
          interpretation_note: 由兄弟关系推断：王夢羔 与 王樵 为同胞（CBDB 记「兄」），王樵 之父／母即 王夢羔 之父／母。
          source:
            id: s_C0q4gQWjxzXZ7aRsW8DJPo
            source_type: api_record
            title: 中国历代人物传记资料库：王夢羔（CBDB 309661）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309661&o=json
            external_identifier: CBDB:309661
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_vpzDXBrQjqPJnEN64LCsPF
        status: active
        display_name: 王臬
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Uus0y1FeIHbYhS7I_oFFx0
        subject_person_id: p_923xZ5qSMZFGgS46h7nLWU
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_9K9PGQwsoS3ZaM5p5w7UtG
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_R9ksEPRBJC8FXBovsfaUXx
          claim_id: c_Uus0y1FeIHbYhS7I_oFFx0
          source_id: s_C0q4gQWjxzXZ7aRsW8DJPo
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 34720 王樵）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_C0q4gQWjxzXZ7aRsW8DJPo
            source_type: api_record
            title: 中国历代人物传记资料库：王夢羔（CBDB 309661）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309661&o=json
            external_identifier: CBDB:309661
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_923xZ5qSMZFGgS46h7nLWU
        status: active
        display_name: 王樵
        merged_into_person_id: null
---

# 王夢羔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王夢羔，明人物。嘉靖二十六年進士，籍贯金壇。（中国历代人物传记资料库 CBDB 309661） | accepted |
| name.primary | 王夢羔 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_vpzDXBrQjqPJnEN64LCsPF | 王臬 | accepted |
| other | p_923xZ5qSMZFGgS46h7nLWU | 王樵 | accepted |

## 外部来源

- [中国历代人物传记资料库：王夢羔（CBDB 309661）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309661&o=json)
