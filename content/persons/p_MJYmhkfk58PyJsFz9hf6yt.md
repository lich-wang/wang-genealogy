---
schema: wang-person/v1
id: p_MJYmhkfk58PyJsFz9hf6yt
status: active
merged_into: null
display_name: 王彥
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1sHDnRVahCEsVrqEDdxPnQ
        subject_person_id: p_MJYmhkfk58PyJsFz9hf6yt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NY715J8C3bALHKL97xE8PK
          claim_id: c_1sHDnRVahCEsVrqEDdxPnQ
          source_id: s_8rQ2qdFZVKp2o3Hj32Kxup
          stance: supports
          locator: CBDB:282561
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（282561）
          source: &a1
            id: s_8rQ2qdFZVKp2o3Hj32Kxup
            source_type: api_record
            title: 中国历代人物传记资料库：王彥（CBDB 282561）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282561&o=json
            external_identifier: CBDB:282561
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.098Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YSweejykXa7NvMWQDRxaXd
        subject_person_id: p_MJYmhkfk58PyJsFz9hf6yt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥，明人物。正德十二年進士，籍贯安福。（中国历代人物传记资料库 CBDB 282561）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4plFT4GpyjT3hCA5mtm8Wp
          claim_id: c_YSweejykXa7NvMWQDRxaXd
          source_id: s_8rQ2qdFZVKp2o3Hj32Kxup
          stance: supports
          locator: CBDB:282561
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_kQg5FWeahexqgUoz50WauM
        subject_person_id: p_qtS2vTEe75QERPYH2wknEH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MJYmhkfk58PyJsFz9hf6yt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_maFbUHIOHWRzbl5vuUWfgz
          claim_id: c_kQg5FWeahexqgUoz50WauM
          source_id: s_IFkjDrigtDEuXQVuJo8FHk
          stance: supports
          locator: CBDB：兄弟 王文（202049）之父／母 王朝用
          quotation: null
          interpretation_note: 由兄弟关系推断：王彥 与 王文 为同胞（CBDB 记「兄」），王文 之父／母即 王彥 之父／母。
          source:
            id: s_IFkjDrigtDEuXQVuJo8FHk
            source_type: api_record
            title: 中国历代人物传记资料库：王彥（CBDB 282561）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282561&o=json
            external_identifier: CBDB:282561
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qtS2vTEe75QERPYH2wknEH
        status: active
        display_name: 王朝用
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_vfWSAqr_Chg5Lgr56jsaQE
        subject_person_id: p_MJYmhkfk58PyJsFz9hf6yt
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_P7zJqgvbYP5g8TxtNP9GCp
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_z4v3nX-rkCfFfchqYwNmmJ
          claim_id: c_vfWSAqr_Chg5Lgr56jsaQE
          source_id: s_IFkjDrigtDEuXQVuJo8FHk
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202049 王文）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_IFkjDrigtDEuXQVuJo8FHk
            source_type: api_record
            title: 中国历代人物传记资料库：王彥（CBDB 282561）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282561&o=json
            external_identifier: CBDB:282561
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_P7zJqgvbYP5g8TxtNP9GCp
        status: active
        display_name: 王文
        merged_into_person_id: null
---

# 王彥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王彥 | accepted |
| bio.summary | 王彥，明人物。正德十二年進士，籍贯安福。（中国历代人物传记资料库 CBDB 282561） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_qtS2vTEe75QERPYH2wknEH | 王朝用 | accepted |
| other | p_P7zJqgvbYP5g8TxtNP9GCp | 王文 | accepted |

## 外部来源

- [中国历代人物传记资料库：王彥（CBDB 282561）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282561&o=json)
