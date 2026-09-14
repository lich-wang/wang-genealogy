---
schema: wang-person/v1
id: p_VUQ1TS2xbw5LrqDN3rFv1V
status: active
merged_into: null
display_name: 王汝寧
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_L4v11GBkKFxJXrkNTWAbpC
        subject_person_id: p_VUQ1TS2xbw5LrqDN3rFv1V
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝寧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EiZASjv6Mqga7FUMKMokQ4
          claim_id: c_L4v11GBkKFxJXrkNTWAbpC
          source_id: s_zfZJPtMqrJqYz5ksc3J6TK
          stance: supports
          locator: CBDB:313771
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（313771）
          source: &a1
            id: s_zfZJPtMqrJqYz5ksc3J6TK
            source_type: api_record
            title: 中国历代人物传记资料库：王汝寧（CBDB 313771）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313771&o=json
            external_identifier: CBDB:313771
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.916Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZdoxHTfVhaJjTXe6e3zKNd
        subject_person_id: p_VUQ1TS2xbw5LrqDN3rFv1V
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝寧，明人物。嘉靖二十九年進士，籍贯雄縣。（中国历代人物传记资料库 CBDB 313771）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_eHmxCfvLX4nzCE_SPfTG7M
          claim_id: c_ZdoxHTfVhaJjTXe6e3zKNd
          source_id: s_zfZJPtMqrJqYz5ksc3J6TK
          stance: supports
          locator: CBDB:313771
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_JK-RhQ0SAQ2HixXJfWVAO3
        subject_person_id: p_Jr1uT74hLZawrDdoEK3XZV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VUQ1TS2xbw5LrqDN3rFv1V
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_G_D72vz1KbE9fs2IBAVJvP
          claim_id: c_JK-RhQ0SAQ2HixXJfWVAO3
          source_id: s_IuSv97lvtG2tBZyBbVTT3x
          stance: supports
          locator: CBDB：兄弟 王汝安（204050）之父／母 王舉
          quotation: null
          interpretation_note: 由兄弟关系推断：王汝寧 与 王汝安 为同胞（CBDB 记「兄」），王汝安 之父／母即 王汝寧 之父／母。
          source:
            id: s_IuSv97lvtG2tBZyBbVTT3x
            source_type: api_record
            title: 中国历代人物传记资料库：王汝寧（CBDB 313771）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313771&o=json
            external_identifier: CBDB:313771
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Jr1uT74hLZawrDdoEK3XZV
        status: active
        display_name: 王舉
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_qZWt7xrxHEi7CSVg3av_44
        subject_person_id: p_LuGtcLnNAnJs1yiVnMjgcK
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_VUQ1TS2xbw5LrqDN3rFv1V
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iF3zvUu1yY9pTP97iu7glu
          claim_id: c_qZWt7xrxHEi7CSVg3av_44
          source_id: s_IuSv97lvtG2tBZyBbVTT3x
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204050 王汝安）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_IuSv97lvtG2tBZyBbVTT3x
            source_type: api_record
            title: 中国历代人物传记资料库：王汝寧（CBDB 313771）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313771&o=json
            external_identifier: CBDB:313771
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_LuGtcLnNAnJs1yiVnMjgcK
        status: active
        display_name: 王汝安
        merged_into_person_id: null
---

# 王汝寧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汝寧 | accepted |
| bio.summary | 王汝寧，明人物。嘉靖二十九年進士，籍贯雄縣。（中国历代人物传记资料库 CBDB 313771） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Jr1uT74hLZawrDdoEK3XZV | 王舉 | accepted |
| other | p_LuGtcLnNAnJs1yiVnMjgcK | 王汝安 | accepted |

## 外部来源

- [中国历代人物传记资料库：王汝寧（CBDB 313771）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313771&o=json)
