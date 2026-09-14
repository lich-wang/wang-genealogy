---
schema: wang-person/v1
id: p_MnaMCeAh8tGpLvYiyvWACQ
status: active
merged_into: null
display_name: 王可
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FNPufRQSa2pXfQYNvjPngY
        subject_person_id: p_MnaMCeAh8tGpLvYiyvWACQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王可
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_44w29pHo7Yb9HQV9tdMih2
          claim_id: c_FNPufRQSa2pXfQYNvjPngY
          source_id: s_eU45sYnaJjGigfCueJPaMY
          stance: supports
          locator: CBDB:282003
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（282003）
          source: &a1
            id: s_eU45sYnaJjGigfCueJPaMY
            source_type: api_record
            title: 中国历代人物传记资料库：王可（CBDB 282003）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282003&o=json
            external_identifier: CBDB:282003
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.062Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6DTtsEmxCGLFQ5aiHjkePv
        subject_person_id: p_MnaMCeAh8tGpLvYiyvWACQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王可，明人物。正德十二年進士，籍贯潞州衛。（中国历代人物传记资料库 CBDB 282003）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zad3JUsK6sZNOrG-ggjBl6
          claim_id: c_6DTtsEmxCGLFQ5aiHjkePv
          source_id: s_eU45sYnaJjGigfCueJPaMY
          stance: supports
          locator: CBDB:282003
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_qawYZdS8IAtV7U2p7wqCUY
        subject_person_id: p_Jk84ENYUVyTz1ayR9hKQUA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MnaMCeAh8tGpLvYiyvWACQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OtJqDb_J2rIWZJMX5Jttju
          claim_id: c_qawYZdS8IAtV7U2p7wqCUY
          source_id: s_H9I43kdBFDxa4vGkMjUM2e
          stance: supports
          locator: CBDB：兄弟 王泮（202013）之父／母 王鋀
          quotation: null
          interpretation_note: 由兄弟关系推断：王可 与 王泮 为同胞（CBDB 记「兄」），王泮 之父／母即 王可 之父／母。
          source:
            id: s_H9I43kdBFDxa4vGkMjUM2e
            source_type: api_record
            title: 中国历代人物传记资料库：王可（CBDB 282003）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282003&o=json
            external_identifier: CBDB:282003
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Jk84ENYUVyTz1ayR9hKQUA
        status: active
        display_name: 王鋀
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_6YEks85v4IGQL9c8jJT1bb
        subject_person_id: p_MnaMCeAh8tGpLvYiyvWACQ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_STyrVbhawRK5QNwptzbque
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eRKup7HFa5inJE2LEslKO1
          claim_id: c_6YEks85v4IGQL9c8jJT1bb
          source_id: s_H9I43kdBFDxa4vGkMjUM2e
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202013 王泮）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_H9I43kdBFDxa4vGkMjUM2e
            source_type: api_record
            title: 中国历代人物传记资料库：王可（CBDB 282003）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282003&o=json
            external_identifier: CBDB:282003
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_STyrVbhawRK5QNwptzbque
        status: active
        display_name: 王泮
        merged_into_person_id: null
---

# 王可

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王可 | accepted |
| bio.summary | 王可，明人物。正德十二年進士，籍贯潞州衛。（中国历代人物传记资料库 CBDB 282003） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Jk84ENYUVyTz1ayR9hKQUA | 王鋀 | accepted |
| other | p_STyrVbhawRK5QNwptzbque | 王泮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王可（CBDB 282003）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282003&o=json)
