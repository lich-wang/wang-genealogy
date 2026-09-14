---
schema: wang-person/v1
id: p_HR4AmT7nnCGAtrL186TArG
status: active
merged_into: null
display_name: 王聘
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qp9bbFGLr8faRFDCSo6vQV
        subject_person_id: p_HR4AmT7nnCGAtrL186TArG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王聘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ChrExDmQano64EbsNQ6xX4
          claim_id: c_qp9bbFGLr8faRFDCSo6vQV
          source_id: s_DX5P9rnvLb47GbQEAHAzbD
          stance: supports
          locator: CBDB:328847
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（328847）
          source: &a1
            id: s_DX5P9rnvLb47GbQEAHAzbD
            source_type: api_record
            title: 中国历代人物传记资料库：王聘（CBDB 328847）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328847&o=json
            external_identifier: CBDB:328847
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.313Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NVXmMF9YwvBcwmNWA2io9g
        subject_person_id: p_HR4AmT7nnCGAtrL186TArG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王聘，明人物。嘉靖四十一年進士，籍贯邛州，入仕監生。（中国历代人物传记资料库 CBDB 328847）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vo_qIhx79LSXmVFbnJqf7Q
          claim_id: c_NVXmMF9YwvBcwmNWA2io9g
          source_id: s_DX5P9rnvLb47GbQEAHAzbD
          stance: supports
          locator: CBDB:328847
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_e6bOCVRr1rxHSvK2by4ub9
        subject_person_id: p_HR4AmT7nnCGAtrL186TArG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4DFuV6CGsBNLfJsdyJ3xiy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MCkpJvwCAc6KlMZnZLBQ5O
          claim_id: c_e6bOCVRr1rxHSvK2by4ub9
          source_id: s_ARQKtERHmNGY6Hxj2bzaXN
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第一百六十名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ARQKtERHmNGY6Hxj2bzaXN
            source_type: api_record
            title: 中国历代人物传记资料库：王廷簡（CBDB 205141）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205141&o=json
            external_identifier: CBDB:205141
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.854Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4DFuV6CGsBNLfJsdyJ3xiy
        status: active
        display_name: 王廷簡
        merged_into_person_id: null
    - claim:
        id: c_vjPn5jVmMxKT2w9W8-0MQn
        subject_person_id: p_HR4AmT7nnCGAtrL186TArG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_a1V8aWyAH9ozUp4jDzM7Hh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gMdXWeyUwocIDPCJiWeV6Y
          claim_id: c_vjPn5jVmMxKT2w9W8-0MQn
          source_id: s_m4G1WJW-0mIlp4skxLuJ1s
          stance: supports
          locator: CBDB：兄弟 王廷簡（205141）之父／母 王聘
          quotation: null
          interpretation_note: 由兄弟关系推断：王廷符 与 王廷簡 为同胞（CBDB 记「兄」），王廷簡 之父／母即 王廷符 之父／母。
          source:
            id: s_m4G1WJW-0mIlp4skxLuJ1s
            source_type: api_record
            title: 中国历代人物传记资料库：王廷符（CBDB 328856）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328856&o=json
            external_identifier: CBDB:328856
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_a1V8aWyAH9ozUp4jDzM7Hh
        status: active
        display_name: 王廷符
        merged_into_person_id: null
    - claim:
        id: c_DbJHdgBOqHmqTATWD1pp3f
        subject_person_id: p_HR4AmT7nnCGAtrL186TArG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_b8y86PwC1nCHijPJDZW9AB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_S_UHrHhuW0r-iT-gJtg0tQ
          claim_id: c_DbJHdgBOqHmqTATWD1pp3f
          source_id: s_JDAVL8EFuNPkELZO04Fd3u
          stance: supports
          locator: CBDB：兄弟 王廷簡（205141）之父／母 王聘
          quotation: null
          interpretation_note: 由兄弟关系推断：王廷籌 与 王廷簡 为同胞（CBDB 记「兄」），王廷簡 之父／母即 王廷籌 之父／母。
          source:
            id: s_JDAVL8EFuNPkELZO04Fd3u
            source_type: api_record
            title: 中国历代人物传记资料库：王廷籌（CBDB 328858）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328858&o=json
            external_identifier: CBDB:328858
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_b8y86PwC1nCHijPJDZW9AB
        status: active
        display_name: 王廷籌
        merged_into_person_id: null
    - claim:
        id: c_kxEYzA2u14K7Yje_qGnEXq
        subject_person_id: p_HR4AmT7nnCGAtrL186TArG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xdXa1F24zXvDiJQRR78pUJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EGHnfp4qBQjepGtfYT1O92
          claim_id: c_kxEYzA2u14K7Yje_qGnEXq
          source_id: s_5xP8eZfaPr3h47vKZSGvGs
          stance: supports
          locator: CBDB：兄弟 王廷簡（205141）之父／母 王聘
          quotation: null
          interpretation_note: 由兄弟关系推断：王廷節 与 王廷簡 为同胞（CBDB 记「兄」），王廷簡 之父／母即 王廷節 之父／母。
          source:
            id: s_5xP8eZfaPr3h47vKZSGvGs
            source_type: api_record
            title: 中国历代人物传记资料库：王廷節（CBDB 328857）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328857&o=json
            external_identifier: CBDB:328857
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_xdXa1F24zXvDiJQRR78pUJ
        status: active
        display_name: 王廷節
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王聘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王聘 | accepted |
| bio.summary | 王聘，明人物。嘉靖四十一年進士，籍贯邛州，入仕監生。（中国历代人物传记资料库 CBDB 328847） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_4DFuV6CGsBNLfJsdyJ3xiy | 王廷簡 | accepted |
| children | p_a1V8aWyAH9ozUp4jDzM7Hh | 王廷符 | accepted |
| children | p_b8y86PwC1nCHijPJDZW9AB | 王廷籌 | accepted |
| children | p_xdXa1F24zXvDiJQRR78pUJ | 王廷節 | accepted |

## 外部来源

- [中国历代人物传记资料库：王聘（CBDB 328847）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328847&o=json)
- [中国历代人物传记资料库：王廷籌（CBDB 328858）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328858&o=json)
- [中国历代人物传记资料库：王廷符（CBDB 328856）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328856&o=json)
- [中国历代人物传记资料库：王廷簡（CBDB 205141）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205141&o=json)
- [中国历代人物传记资料库：王廷節（CBDB 328857）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328857&o=json)
