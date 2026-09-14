---
schema: wang-person/v1
id: p_6hbbFCzdnc5oLpCKWDFd7m
status: active
merged_into: null
display_name: 王泗
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6DH2chAyvCDqdXgtFpVmjr
        subject_person_id: p_6hbbFCzdnc5oLpCKWDFd7m
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王泗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Et9qF4NTLbumTrCdyC6sY1
          claim_id: c_6DH2chAyvCDqdXgtFpVmjr
          source_id: s_2C92YNW5AWHF56TKYCB2od
          stance: supports
          locator: CBDB:288609
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（288609）
          source: &a1
            id: s_2C92YNW5AWHF56TKYCB2od
            source_type: api_record
            title: 中国历代人物传记资料库：王泗（CBDB 288609）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288609&o=json
            external_identifier: CBDB:288609
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.298Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MKEZ8aq4cJ5gQFgcxtSNCT
        subject_person_id: p_6hbbFCzdnc5oLpCKWDFd7m
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王泗，明人物。嘉靖八年進士，籍贯南平。（中国历代人物传记资料库 CBDB 288609）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZesXmOHGaBSZ-8BnM-bNe9
          claim_id: c_MKEZ8aq4cJ5gQFgcxtSNCT
          source_id: s_2C92YNW5AWHF56TKYCB2od
          stance: supports
          locator: CBDB:288609
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_x-SFDDR1EB8yrL1WVjfhNT
        subject_person_id: p_JKUVszPbyGjyE2dA3wdDiy
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6hbbFCzdnc5oLpCKWDFd7m
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_767dqHVGLc6BDpKrb8RZrd
          claim_id: c_x-SFDDR1EB8yrL1WVjfhNT
          source_id: s_hSXB-5xVTII9SkqogwM3pf
          stance: supports
          locator: CBDB：兄弟 王滋（202462）之父／母 王鎮
          quotation: null
          interpretation_note: 由兄弟关系推断：王泗 与 王滋 为同胞（CBDB 记「兄」），王滋 之父／母即 王泗 之父／母。
          source:
            id: s_hSXB-5xVTII9SkqogwM3pf
            source_type: api_record
            title: 中国历代人物传记资料库：王泗（CBDB 288609）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288609&o=json
            external_identifier: CBDB:288609
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_JKUVszPbyGjyE2dA3wdDiy
        status: active
        display_name: 王鎮
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_-P-IFBoXSSg5UmlBpq7buM
        subject_person_id: p_6hbbFCzdnc5oLpCKWDFd7m
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_wrYjpDvL8MtRavfwnm1dKh
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KcoOBbvv4MqbGJOUNbymzE
          claim_id: c_-P-IFBoXSSg5UmlBpq7buM
          source_id: s_hSXB-5xVTII9SkqogwM3pf
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202462 王滋）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_hSXB-5xVTII9SkqogwM3pf
            source_type: api_record
            title: 中国历代人物传记资料库：王泗（CBDB 288609）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288609&o=json
            external_identifier: CBDB:288609
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_wrYjpDvL8MtRavfwnm1dKh
        status: active
        display_name: 王滋
        merged_into_person_id: null
---

# 王泗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王泗 | accepted |
| bio.summary | 王泗，明人物。嘉靖八年進士，籍贯南平。（中国历代人物传记资料库 CBDB 288609） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_JKUVszPbyGjyE2dA3wdDiy | 王鎮 | accepted |
| other | p_wrYjpDvL8MtRavfwnm1dKh | 王滋 | accepted |

## 外部来源

- [中国历代人物传记资料库：王泗（CBDB 288609）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288609&o=json)
