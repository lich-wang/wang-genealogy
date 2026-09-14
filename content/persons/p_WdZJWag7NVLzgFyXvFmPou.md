---
schema: wang-person/v1
id: p_WdZJWag7NVLzgFyXvFmPou
status: active
merged_into: null
display_name: 王同心
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Gpi7BxFqyHgBt1NHjpQRLs
        subject_person_id: p_WdZJWag7NVLzgFyXvFmPou
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王同心
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Gh11ZEFdUfYami9Z9C1p4T
          claim_id: c_Gpi7BxFqyHgBt1NHjpQRLs
          source_id: s_BA2pKBoHdtjZKi3mTiuhXm
          stance: supports
          locator: CBDB:327387
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（327387）
          source: &a1
            id: s_BA2pKBoHdtjZKi3mTiuhXm
            source_type: api_record
            title: 中国历代人物传记资料库：王同心（CBDB 327387）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327387&o=json
            external_identifier: CBDB:327387
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.246Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_p2qPLvUkxLw2XqyBBEYjpn
        subject_person_id: p_WdZJWag7NVLzgFyXvFmPou
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王同心，明人物。嘉靖四十一年進士，籍贯黃岡。（中国历代人物传记资料库 CBDB 327387）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Z4W9yJmiopiQ1xCBPlhFU1
          claim_id: c_p2qPLvUkxLw2XqyBBEYjpn
          source_id: s_BA2pKBoHdtjZKi3mTiuhXm
          stance: supports
          locator: CBDB:327387
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_LqfSpU8mz0p6IMbQqGQ8jO
        subject_person_id: p_A2Zw5HgNNKQfknjQ8rX9z5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WdZJWag7NVLzgFyXvFmPou
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qU9VWzeHA5n7K-D_At0HwB
          claim_id: c_LqfSpU8mz0p6IMbQqGQ8jO
          source_id: s_I14IDWSCm3oL2WNPnc0I4C
          stance: supports
          locator: CBDB：兄弟 王同道（205031）之父／母 王廷槐
          quotation: null
          interpretation_note: 由兄弟关系推断：王同心 与 王同道 为同胞（CBDB 记「弟」），王同道 之父／母即 王同心 之父／母。
          source:
            id: s_I14IDWSCm3oL2WNPnc0I4C
            source_type: api_record
            title: 中国历代人物传记资料库：王同心（CBDB 327387）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327387&o=json
            external_identifier: CBDB:327387
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_A2Zw5HgNNKQfknjQ8rX9z5
        status: active
        display_name: 王廷槐
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Lf5j9ojKKf3Bmsr69ITNbQ
        subject_person_id: p_DpH4HNkjrsP3PNvkueYKFC
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_WdZJWag7NVLzgFyXvFmPou
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-6NYLJr43BRV1dC-iYoNC_
          claim_id: c_Lf5j9ojKKf3Bmsr69ITNbQ
          source_id: s_I14IDWSCm3oL2WNPnc0I4C
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205031 王同道）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_I14IDWSCm3oL2WNPnc0I4C
            source_type: api_record
            title: 中国历代人物传记资料库：王同心（CBDB 327387）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327387&o=json
            external_identifier: CBDB:327387
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DpH4HNkjrsP3PNvkueYKFC
        status: active
        display_name: 王同道
        merged_into_person_id: null
---

# 王同心

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王同心 | accepted |
| bio.summary | 王同心，明人物。嘉靖四十一年進士，籍贯黃岡。（中国历代人物传记资料库 CBDB 327387） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_A2Zw5HgNNKQfknjQ8rX9z5 | 王廷槐 | accepted |
| other | p_DpH4HNkjrsP3PNvkueYKFC | 王同道 | accepted |

## 外部来源

- [中国历代人物传记资料库：王同心（CBDB 327387）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327387&o=json)
