---
schema: wang-person/v1
id: p_fKMuYXt6fUwgZatNXQSatB
status: active
merged_into: null
display_name: 王學曾
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xPJgaTeW4XUcaQYLTCx1kk
        subject_person_id: p_fKMuYXt6fUwgZatNXQSatB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學曾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Psod1RwJBjQiLGPXVv9i2J
          claim_id: c_xPJgaTeW4XUcaQYLTCx1kk
          source_id: s_HHc6VoHEj3fsAKfS3hyzQA
          stance: supports
          locator: CBDB:211991
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（211991）
          source: &a1
            id: s_HHc6VoHEj3fsAKfS3hyzQA
            source_type: api_record
            title: 中国历代人物传记资料库：王學曾（CBDB 211991）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211991&o=json
            external_identifier: CBDB:211991
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.045Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_B2ucJGbg6g9RyCqG29SKne
        subject_person_id: p_fKMuYXt6fUwgZatNXQSatB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學曾，明人物。隆慶五年進士，籍贯濱州。（中国历代人物传记资料库 CBDB 211991）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9cuWDdB1-R5N0BMG2p-JBl
          claim_id: c_B2ucJGbg6g9RyCqG29SKne
          source_id: s_HHc6VoHEj3fsAKfS3hyzQA
          stance: supports
          locator: CBDB:211991
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_SRwblMTDY59SCuUVTvXmnx
        subject_person_id: p_aEy4RxmjmGXnETHRGP3pm2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fKMuYXt6fUwgZatNXQSatB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_45_FZj69FsbdKF36Gd4lrZ
          claim_id: c_SRwblMTDY59SCuUVTvXmnx
          source_id: s_1OPNsv4sY1iDs9ttoXQ0DR
          stance: supports
          locator: CBDB：兄弟 王學書（206005）之父／母 王兌
          quotation: null
          interpretation_note: 由兄弟关系推断：王學曾 与 王學書 为同胞（CBDB 记「兄」），王學書 之父／母即 王學曾 之父／母。
          source:
            id: s_1OPNsv4sY1iDs9ttoXQ0DR
            source_type: api_record
            title: 中国历代人物传记资料库：王學曾（CBDB 211991）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211991&o=json
            external_identifier: CBDB:211991
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_aEy4RxmjmGXnETHRGP3pm2
        status: active
        display_name: 王兌
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_LxwrZC-5IvveekKaLBNMz-
        subject_person_id: p_fKMuYXt6fUwgZatNXQSatB
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_s3BG2bed1QUGktV4Jrg4UH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_46PJm8OsZceyKKeHjXSWqG
          claim_id: c_LxwrZC-5IvveekKaLBNMz-
          source_id: s_1OPNsv4sY1iDs9ttoXQ0DR
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206005 王學書）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_1OPNsv4sY1iDs9ttoXQ0DR
            source_type: api_record
            title: 中国历代人物传记资料库：王學曾（CBDB 211991）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211991&o=json
            external_identifier: CBDB:211991
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_s3BG2bed1QUGktV4Jrg4UH
        status: active
        display_name: 王學書
        merged_into_person_id: null
---

# 王學曾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王學曾 | accepted |
| bio.summary | 王學曾，明人物。隆慶五年進士，籍贯濱州。（中国历代人物传记资料库 CBDB 211991） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_aEy4RxmjmGXnETHRGP3pm2 | 王兌 | accepted |
| other | p_s3BG2bed1QUGktV4Jrg4UH | 王學書 | accepted |

## 外部来源

- [中国历代人物传记资料库：王學曾（CBDB 211991）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211991&o=json)
