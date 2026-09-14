---
schema: wang-person/v1
id: p_CdZEKFenMpNvj8Nz9W1F16
status: active
merged_into: null
display_name: 王訓之
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ycgkEon2i1zdgaPgN1Tg3q
        subject_person_id: p_CdZEKFenMpNvj8Nz9W1F16
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王訓之
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AJBVfWjziUeqPRZPXXBHm4
          claim_id: c_ycgkEon2i1zdgaPgN1Tg3q
          source_id: s_8GVCPQ4WQVeZkb85tkNTQ9
          stance: supports
          locator: CBDB:209584
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（209584）
          source: &a1
            id: s_8GVCPQ4WQVeZkb85tkNTQ9
            source_type: api_record
            title: 中国历代人物传记资料库：王訓之（CBDB 209584）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209584&o=json
            external_identifier: CBDB:209584
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.984Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KKMXFvye9Vhzhgn947piAy
        subject_person_id: p_CdZEKFenMpNvj8Nz9W1F16
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王訓之，明人物。隆慶五年進士，籍贯高安。（中国历代人物传记资料库 CBDB 209584）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_uO4tI4dguuG7pkMTVdHHxA
          claim_id: c_KKMXFvye9Vhzhgn947piAy
          source_id: s_8GVCPQ4WQVeZkb85tkNTQ9
          stance: supports
          locator: CBDB:209584
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_QMz9xpM7oXlG2LJLy5HVia
        subject_person_id: p_Q7ze7pnk6x88hZDm3ZFKt3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CdZEKFenMpNvj8Nz9W1F16
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yjN9pGmK9-143H_pAG0pV2
          claim_id: c_QMz9xpM7oXlG2LJLy5HVia
          source_id: s_dCUwnNyscxsuD9XJc39Qgt
          stance: supports
          locator: CBDB：兄弟 王許之（205842）之父／母 王湯相
          quotation: null
          interpretation_note: 由兄弟关系推断：王訓之 与 王許之 为同胞（CBDB 记「兄」），王許之 之父／母即 王訓之 之父／母。
          source:
            id: s_dCUwnNyscxsuD9XJc39Qgt
            source_type: api_record
            title: 中国历代人物传记资料库：王訓之（CBDB 209584）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209584&o=json
            external_identifier: CBDB:209584
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Q7ze7pnk6x88hZDm3ZFKt3
        status: active
        display_name: 王湯相
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Z--EBWpKH-1n4rECUtZFHl
        subject_person_id: p_CdZEKFenMpNvj8Nz9W1F16
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fR2N3ddMBUUG3UGxzAGX1L
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0BQAmwEFgkUbYfidkWn2f6
          claim_id: c_Z--EBWpKH-1n4rECUtZFHl
          source_id: s_dCUwnNyscxsuD9XJc39Qgt
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205842 王許之）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_dCUwnNyscxsuD9XJc39Qgt
            source_type: api_record
            title: 中国历代人物传记资料库：王訓之（CBDB 209584）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209584&o=json
            external_identifier: CBDB:209584
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fR2N3ddMBUUG3UGxzAGX1L
        status: active
        display_name: 王許之
        merged_into_person_id: null
---

# 王訓之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王訓之 | accepted |
| bio.summary | 王訓之，明人物。隆慶五年進士，籍贯高安。（中国历代人物传记资料库 CBDB 209584） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Q7ze7pnk6x88hZDm3ZFKt3 | 王湯相 | accepted |
| other | p_fR2N3ddMBUUG3UGxzAGX1L | 王許之 | accepted |

## 外部来源

- [中国历代人物传记资料库：王訓之（CBDB 209584）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209584&o=json)
