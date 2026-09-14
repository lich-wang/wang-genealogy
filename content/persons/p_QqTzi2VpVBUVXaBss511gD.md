---
schema: wang-person/v1
id: p_QqTzi2VpVBUVXaBss511gD
status: active
merged_into: null
display_name: 王宜
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_K44ApUigCf8KWWGo5mhLFh
        subject_person_id: p_QqTzi2VpVBUVXaBss511gD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nxihGZ968VwJCFHeq4QeJE
          claim_id: c_K44ApUigCf8KWWGo5mhLFh
          source_id: s_CkcLDeT5r5RQ5yQjkB6Nxm
          stance: supports
          locator: CBDB:267025
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（267025）
          source: &a1
            id: s_CkcLDeT5r5RQ5yQjkB6Nxm
            source_type: api_record
            title: 中国历代人物传记资料库：王宜（CBDB 267025）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267025&o=json
            external_identifier: CBDB:267025
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.765Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_889ejCewKK1M6GGtQ5taU6
        subject_person_id: p_QqTzi2VpVBUVXaBss511gD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宜，明人物。弘治九年進士，籍贯定州。（中国历代人物传记资料库 CBDB 267025）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_OGdJSSJg_d94EcwjLHm5bj
          claim_id: c_889ejCewKK1M6GGtQ5taU6
          source_id: s_CkcLDeT5r5RQ5yQjkB6Nxm
          stance: supports
          locator: CBDB:267025
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_JnpMmgQv0DQOvuALlf2fZU
        subject_person_id: p_7zDtBoXJhHQDuC7LGFFtF6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QqTzi2VpVBUVXaBss511gD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bF5RZjmkOTTbze_Di3I179
          claim_id: c_JnpMmgQv0DQOvuALlf2fZU
          source_id: s_hGr2ld0W3ZfMq_UWSC8H36
          stance: supports
          locator: CBDB：兄弟 王宣（201094）之父／母 王朝輔
          quotation: null
          interpretation_note: 由兄弟关系推断：王宜 与 王宣 为同胞（CBDB 记「兄」），王宣 之父／母即 王宜 之父／母。
          source:
            id: s_hGr2ld0W3ZfMq_UWSC8H36
            source_type: api_record
            title: 中国历代人物传记资料库：王宜（CBDB 267025）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267025&o=json
            external_identifier: CBDB:267025
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7zDtBoXJhHQDuC7LGFFtF6
        status: active
        display_name: 王朝輔
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_y8EcJ7TxwRikBfmMVMLCWT
        subject_person_id: p_Hzz13QG3KkgrJrrmRHzuBL
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_QqTzi2VpVBUVXaBss511gD
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GEn1oO9cAPSOtwD7w7Pqsw
          claim_id: c_y8EcJ7TxwRikBfmMVMLCWT
          source_id: s_hGr2ld0W3ZfMq_UWSC8H36
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201094 王宣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_hGr2ld0W3ZfMq_UWSC8H36
            source_type: api_record
            title: 中国历代人物传记资料库：王宜（CBDB 267025）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267025&o=json
            external_identifier: CBDB:267025
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Hzz13QG3KkgrJrrmRHzuBL
        status: active
        display_name: 王宣
        merged_into_person_id: null
---

# 王宜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宜 | accepted |
| bio.summary | 王宜，明人物。弘治九年進士，籍贯定州。（中国历代人物传记资料库 CBDB 267025） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_7zDtBoXJhHQDuC7LGFFtF6 | 王朝輔 | accepted |
| other | p_Hzz13QG3KkgrJrrmRHzuBL | 王宣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宜（CBDB 267025）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267025&o=json)
