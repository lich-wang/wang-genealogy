---
schema: wang-person/v1
id: p_sZEnnJm6tMYD9G3rVKEL7w
status: active
merged_into: null
display_name: 王弘誨
cbdb_id: 126486
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PCEiGgX4rT3DiNUaCZVrWi
        subject_person_id: p_sZEnnJm6tMYD9G3rVKEL7w
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弘誨（生于1542年），史料所见人物。本项目依据《中国历代人物传记资料库：王弘誨（CBDB 126486）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_FiuXUGHkkBs6aKWLtltQhb
          claim_id: c_PCEiGgX4rT3DiNUaCZVrWi
          source_id: s_vNd4HcZd2jx5Eyn37t8RkZ
          stance: supports
          locator: CBDB:126486
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_vNd4HcZd2jx5Eyn37t8RkZ
            source_type: api_record
            title: 中国历代人物传记资料库：王弘誨（CBDB 126486）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126486&o=json
            external_identifier: CBDB:126486
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_88wB8MBHpGEPntn6RzoVHH
        subject_person_id: p_sZEnnJm6tMYD9G3rVKEL7w
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1542年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1542-01-01
            latest: 1542-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_z8i5SHBh8kVybL8QjBA3zo
          claim_id: c_88wB8MBHpGEPntn6RzoVHH
          source_id: s_vNd4HcZd2jx5Eyn37t8RkZ
          stance: supports
          locator: CBDB:126486
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1542
          source:
            id: s_vNd4HcZd2jx5Eyn37t8RkZ
            source_type: api_record
            title: 中国历代人物传记资料库：王弘誨（CBDB 126486）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126486&o=json
            external_identifier: CBDB:126486
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_EGy2DGGuVdSwsNFyMw998g
        subject_person_id: p_sZEnnJm6tMYD9G3rVKEL7w
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弘誨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_kfaoZzPYAy2HKXg5m6tA82
          claim_id: c_EGy2DGGuVdSwsNFyMw998g
          source_id: s_vNd4HcZd2jx5Eyn37t8RkZ
          stance: supports
          locator: CBDB:126486
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1542
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_6OFacmQtIohSGsQdd7y1JM
        subject_person_id: p_cCJhqBHpoSnrc87c6Zt2oi
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_sZEnnJm6tMYD9G3rVKEL7w
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8HfgQGalAuAbukyvPTu5ib
          claim_id: c_6OFacmQtIohSGsQdd7y1JM
          source_id: s_z7QUnVw6eguECGcc28q6PN
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第八十九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_z7QUnVw6eguECGcc28q6PN
            source_type: api_record
            title: 中国历代人物传记资料库：王允升（CBDB 331176）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331176&o=json
            external_identifier: CBDB:331176
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.360Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_cCJhqBHpoSnrc87c6Zt2oi
        status: active
        display_name: 王允升
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_0jQ3Pbjro8ozPdtHV9tNCk
        subject_person_id: p_FrEh4RoDfGH1irJy7muhxs
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_sZEnnJm6tMYD9G3rVKEL7w
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_m5mkkb9WSdobIS9JuEFXGe
          claim_id: c_0jQ3Pbjro8ozPdtHV9tNCk
          source_id: s_HBMs9tcq6jppg6KKBbxWQN
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第八十九名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_HBMs9tcq6jppg6KKBbxWQN
            source_type: api_record
            title: 中国历代人物传记资料库：王禧（CBDB 331175）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331175&o=json
            external_identifier: CBDB:331175
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.360Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_FrEh4RoDfGH1irJy7muhxs
        status: active
        display_name: 王禧
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王弘誨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王弘誨（生于1542年），史料所见人物。本项目依据《中国历代人物传记资料库：王弘誨（CBDB 126486）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 1542年 | accepted |
| name.primary | 王弘誨 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_cCJhqBHpoSnrc87c6Zt2oi | 王允升 | accepted |
| ancestors | p_FrEh4RoDfGH1irJy7muhxs | 王禧 | accepted |

## 外部来源

- [中国历代人物传记资料库：王弘誨（CBDB 126486）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126486&o=json)
- [中国历代人物传记资料库：王禧（CBDB 331175）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331175&o=json)
- [中国历代人物传记资料库：王允升（CBDB 331176）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331176&o=json)
