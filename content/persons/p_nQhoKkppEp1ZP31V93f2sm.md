---
schema: wang-person/v1
id: p_nQhoKkppEp1ZP31V93f2sm
status: active
merged_into: null
display_name: 王希昂
cbdb_id: 315371
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LWF4ZXWdseC73iG8V8kHbr
        subject_person_id: p_nQhoKkppEp1ZP31V93f2sm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希昂，明人物。嘉靖三十二年進士，籍贯臨川。（中国历代人物传记资料库 CBDB 315371）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_nrJFmT_XQF46kq-io7uqg0
          claim_id: c_LWF4ZXWdseC73iG8V8kHbr
          source_id: s_6xp6xbAKnwGZjKPVDbSL6F
          stance: supports
          locator: CBDB:315371
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_6xp6xbAKnwGZjKPVDbSL6F
            source_type: api_record
            title: 中国历代人物传记资料库：王希昂（CBDB 315371）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315371&o=json
            external_identifier: CBDB:315371
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.030Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_eqDTQ5d9MncuhnJTkAFBBf
        subject_person_id: p_nQhoKkppEp1ZP31V93f2sm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希昂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_y1WempzuWXiSyV23itBJzx
          claim_id: c_eqDTQ5d9MncuhnJTkAFBBf
          source_id: s_6xp6xbAKnwGZjKPVDbSL6F
          stance: supports
          locator: CBDB:315371
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3701-3800）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_yOQOvI3c9KapxsPLq_aD_8
        subject_person_id: p_uAujjG392SPymDDHoGZN88
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nQhoKkppEp1ZP31V93f2sm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DYS9pP7VRzCMSgaPazk3SZ
          claim_id: c_yOQOvI3c9KapxsPLq_aD_8
          source_id: s_gxlU6LaTBJkXC01CGSY06B
          stance: supports
          locator: CBDB：兄弟 王希烈（126546）之父／母 王廷望
          quotation: null
          interpretation_note: 由兄弟关系推断：王希昂 与 王希烈 为同胞（CBDB 记「弟」），王希烈 之父／母即 王希昂 之父／母。
          source:
            id: s_gxlU6LaTBJkXC01CGSY06B
            source_type: api_record
            title: 中国历代人物传记资料库：王希昂（CBDB 315371）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315371&o=json
            external_identifier: CBDB:315371
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_uAujjG392SPymDDHoGZN88
        status: active
        display_name: 王廷望
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_fcu7kxMeO8U3LF9cug4ewG
        subject_person_id: p_nQhoKkppEp1ZP31V93f2sm
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_nqXSbp6gt3VE2aHb7rdeET
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_X1kiU5tben9rlLdhxVApQ4
          claim_id: c_fcu7kxMeO8U3LF9cug4ewG
          source_id: s_gxlU6LaTBJkXC01CGSY06B
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126546 王希烈）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_gxlU6LaTBJkXC01CGSY06B
            source_type: api_record
            title: 中国历代人物传记资料库：王希昂（CBDB 315371）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315371&o=json
            external_identifier: CBDB:315371
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_nqXSbp6gt3VE2aHb7rdeET
        status: active
        display_name: 王希烈
        merged_into_person_id: null
---

# 王希昂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王希昂，明人物。嘉靖三十二年進士，籍贯臨川。（中国历代人物传记资料库 CBDB 315371） | accepted |
| name.primary | 王希昂 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_uAujjG392SPymDDHoGZN88 | 王廷望 | accepted |
| other | p_nqXSbp6gt3VE2aHb7rdeET | 王希烈 | accepted |

## 外部来源

- [中国历代人物传记资料库：王希昂（CBDB 315371）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315371&o=json)
