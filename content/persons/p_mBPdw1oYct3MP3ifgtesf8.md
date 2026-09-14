---
schema: wang-person/v1
id: p_mBPdw1oYct3MP3ifgtesf8
status: active
merged_into: null
display_name: 王敦仁
cbdb_id: 221779
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hCNsE13XkFH6HtMm4dBzMA
        subject_person_id: p_mBPdw1oYct3MP3ifgtesf8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敦仁，明人物。萬曆八年進士，籍贯滄州，曾任訓導。（中国历代人物传记资料库 CBDB 221779）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_JCZIIbgak1065qN-MOQcnX
          claim_id: c_hCNsE13XkFH6HtMm4dBzMA
          source_id: s_6ELgxnvFADDEvRkfZSUazQ
          stance: supports
          locator: CBDB:221779
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_6ELgxnvFADDEvRkfZSUazQ
            source_type: api_record
            title: 中国历代人物传记资料库：王敦仁（CBDB 221779）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221779&o=json
            external_identifier: CBDB:221779
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:57.241Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_SAJEbUQ82P57SFvvXsWmNG
        subject_person_id: p_mBPdw1oYct3MP3ifgtesf8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敦仁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_wEysxRb18JpfZQMCixHDe3
          claim_id: c_SAJEbUQ82P57SFvvXsWmNG
          source_id: s_6ELgxnvFADDEvRkfZSUazQ
          stance: supports
          locator: CBDB:221779
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2601-2700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_5TXVeCdEh7Bux-AvM0F264
        subject_person_id: p_yzyPEUAYsfL49q52tBj1kq
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mBPdw1oYct3MP3ifgtesf8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ioKUcUG4AoypDF2GOewGXB
          claim_id: c_5TXVeCdEh7Bux-AvM0F264
          source_id: s_rQABreIYOBuNMaN4e8dv1K
          stance: supports
          locator: CBDB：兄弟 王顯仁（206702）之父／母 王用中
          quotation: null
          interpretation_note: 由兄弟关系推断：王敦仁 与 王顯仁 为同胞（CBDB 记「兄」），王顯仁 之父／母即 王敦仁 之父／母。
          source:
            id: s_rQABreIYOBuNMaN4e8dv1K
            source_type: api_record
            title: 中国历代人物传记资料库：王敦仁（CBDB 221779）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221779&o=json
            external_identifier: CBDB:221779
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_yzyPEUAYsfL49q52tBj1kq
        status: active
        display_name: 王用中
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_XUf7_JQ4bNUTuQsLzXwLcN
        subject_person_id: p_88N8F7QC67BDANQ41w4EaZ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_mBPdw1oYct3MP3ifgtesf8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_deewcD7jM1ttOC627uCAR5
          claim_id: c_XUf7_JQ4bNUTuQsLzXwLcN
          source_id: s_rQABreIYOBuNMaN4e8dv1K
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206702 王顯仁）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_rQABreIYOBuNMaN4e8dv1K
            source_type: api_record
            title: 中国历代人物传记资料库：王敦仁（CBDB 221779）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221779&o=json
            external_identifier: CBDB:221779
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_88N8F7QC67BDANQ41w4EaZ
        status: active
        display_name: 王顯仁
        merged_into_person_id: null
---

# 王敦仁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王敦仁，明人物。萬曆八年進士，籍贯滄州，曾任訓導。（中国历代人物传记资料库 CBDB 221779） | accepted |
| name.primary | 王敦仁 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_yzyPEUAYsfL49q52tBj1kq | 王用中 | accepted |
| other | p_88N8F7QC67BDANQ41w4EaZ | 王顯仁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王敦仁（CBDB 221779）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221779&o=json)
