---
schema: wang-person/v1
id: p_FfVHT416uDZJd2Zz4UfCuv
status: active
merged_into: null
display_name: 王廷亨
cbdb_id: 517396
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GpwVUZ8wBA4KuBMXRZss8C
        subject_person_id: p_FfVHT416uDZJd2Zz4UfCuv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷亨，史料所见人物。本项目依据《中国历代人物传记资料库：王廷亨（CBDB 517396）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_LcQGAX37v3s458Kej5ABuM
          claim_id: c_GpwVUZ8wBA4KuBMXRZss8C
          source_id: s_9rTqs8kjXHyTA2Mnkpbx9T
          stance: supports
          locator: CBDB:517396
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_9rTqs8kjXHyTA2Mnkpbx9T
            source_type: api_record
            title: 中国历代人物传记资料库：王廷亨（CBDB 517396）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=517396&o=json
            external_identifier: CBDB:517396
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:16.852Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_3fjBZnuBHov2bSDCh87zvh
        subject_person_id: p_FfVHT416uDZJd2Zz4UfCuv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷亨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_b54a4w5dkyqN6QeL721V7E
          claim_id: c_3fjBZnuBHov2bSDCh87zvh
          source_id: s_9rTqs8kjXHyTA2Mnkpbx9T
          stance: supports
          locator: CBDB:517396
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（6901-7000）｜历史性依据：CBDB 朝代 = 清
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_2TuMfj-v3N62tt0qJ4OSyk
        subject_person_id: p_cBGCXtQ6wkhv554viPc99n
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FfVHT416uDZJd2Zz4UfCuv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CaHUE-UrEomqQhZkNmPNMF
          claim_id: c_2TuMfj-v3N62tt0qJ4OSyk
          source_id: s_2_C9tp_VochkI0noZwZxkU
          stance: supports
          locator: CBDB：兄弟 王友亮（58603）之父／母 王文德
          quotation: null
          interpretation_note: 由兄弟关系推断：王廷亨 与 王友亮 为同胞（CBDB 记「弟」），王友亮 之父／母即 王廷亨 之父／母。
          source:
            id: s_2_C9tp_VochkI0noZwZxkU
            source_type: api_record
            title: 中国历代人物传记资料库：王廷亨（CBDB 517396）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=517396&o=json
            external_identifier: CBDB:517396
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_cBGCXtQ6wkhv554viPc99n
        status: active
        display_name: 王文德
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_qHDHP9ZYOTVyJeriUADw74
        subject_person_id: p_FfVHT416uDZJd2Zz4UfCuv
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_moE7rJDFp2R9Aac3W4FxPZ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mGkXbKalQqzdLvt2oJZSKE
          claim_id: c_qHDHP9ZYOTVyJeriUADw74
          source_id: s_2_C9tp_VochkI0noZwZxkU
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 58603 王友亮）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_2_C9tp_VochkI0noZwZxkU
            source_type: api_record
            title: 中国历代人物传记资料库：王廷亨（CBDB 517396）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=517396&o=json
            external_identifier: CBDB:517396
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_moE7rJDFp2R9Aac3W4FxPZ
        status: active
        display_name: 王友亮
        merged_into_person_id: null
---

# 王廷亨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王廷亨，史料所见人物。本项目依据《中国历代人物传记资料库：王廷亨（CBDB 517396）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王廷亨 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_cBGCXtQ6wkhv554viPc99n | 王文德 | accepted |
| other | p_moE7rJDFp2R9Aac3W4FxPZ | 王友亮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王廷亨（CBDB 517396）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=517396&o=json)
