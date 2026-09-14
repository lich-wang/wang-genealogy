---
schema: wang-person/v1
id: p_SpPiLCiECtSxJFFSbvvw4H
status: active
merged_into: null
display_name: 王汝科
cbdb_id: 211986
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7ZqWPzN2XDwnuy64n7fDcv
        subject_person_id: p_SpPiLCiECtSxJFFSbvvw4H
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝科，明人物。隆慶五年進士，籍贯濱州。（中国历代人物传记资料库 CBDB 211986）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_dV80jzuhZcW5BorGgrTeMH
          claim_id: c_7ZqWPzN2XDwnuy64n7fDcv
          source_id: s_K3UX8oLGh46YyyLskNkPKD
          stance: supports
          locator: CBDB:211986
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_K3UX8oLGh46YyyLskNkPKD
            source_type: api_record
            title: 中国历代人物传记资料库：王汝科（CBDB 211986）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211986&o=json
            external_identifier: CBDB:211986
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:55.593Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_NfFdZLPY6bhWCTYtRoxHVu
        subject_person_id: p_SpPiLCiECtSxJFFSbvvw4H
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝科
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_BMBV8BJi2ymiiFSkDjEkNi
          claim_id: c_NfFdZLPY6bhWCTYtRoxHVu
          source_id: s_K3UX8oLGh46YyyLskNkPKD
          stance: supports
          locator: CBDB:211986
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2401-2500）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_pLOWFX56Y5_35HEerJxLRx
        subject_person_id: p_aEy4RxmjmGXnETHRGP3pm2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_SpPiLCiECtSxJFFSbvvw4H
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CAYSooX3AeXT8ubCBJGwXG
          claim_id: c_pLOWFX56Y5_35HEerJxLRx
          source_id: s_dDbnZa-ZS_21JKr9bfJ8ir
          stance: supports
          locator: CBDB：兄弟 王學書（206005）之父／母 王兌
          quotation: null
          interpretation_note: 由兄弟关系推断：王汝科 与 王學書 为同胞（CBDB 记「弟」），王學書 之父／母即 王汝科 之父／母。
          source:
            id: s_dDbnZa-ZS_21JKr9bfJ8ir
            source_type: api_record
            title: 中国历代人物传记资料库：王汝科（CBDB 211986）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211986&o=json
            external_identifier: CBDB:211986
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
        id: c_pF-b8d6YxQePaLvkDRi1k0
        subject_person_id: p_SpPiLCiECtSxJFFSbvvw4H
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
        - id: cs_lWiTVWqCDiVbuIvJ7CqKYI
          claim_id: c_pF-b8d6YxQePaLvkDRi1k0
          source_id: s_dDbnZa-ZS_21JKr9bfJ8ir
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 206005 王學書）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_dDbnZa-ZS_21JKr9bfJ8ir
            source_type: api_record
            title: 中国历代人物传记资料库：王汝科（CBDB 211986）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211986&o=json
            external_identifier: CBDB:211986
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_s3BG2bed1QUGktV4Jrg4UH
        status: active
        display_name: 王學書
        merged_into_person_id: null
---

# 王汝科

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王汝科，明人物。隆慶五年進士，籍贯濱州。（中国历代人物传记资料库 CBDB 211986） | accepted |
| name.primary | 王汝科 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_aEy4RxmjmGXnETHRGP3pm2 | 王兌 | accepted |
| other | p_s3BG2bed1QUGktV4Jrg4UH | 王學書 | accepted |

## 外部来源

- [中国历代人物传记资料库：王汝科（CBDB 211986）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211986&o=json)
