---
schema: wang-person/v1
id: p_UT7tNWyRxMM8ZHvrF86JdF
status: active
merged_into: null
display_name: 王執玉
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vVjD57Bpqp3eyHwcnCaRdJ
        subject_person_id: p_UT7tNWyRxMM8ZHvrF86JdF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王執玉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4HxgGYyCjDC4mZ6hsYssFr
          claim_id: c_vVjD57Bpqp3eyHwcnCaRdJ
          source_id: s_sPn7Azeue5eqNFkK27344f
          stance: supports
          locator: CBDB:336575
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（336575）
          source: &a1
            id: s_sPn7Azeue5eqNFkK27344f
            source_type: api_record
            title: 中国历代人物传记资料库：王執玉（CBDB 336575）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336575&o=json
            external_identifier: CBDB:336575
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.484Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_faqJdhAHJ1FS5KF1Haztr5
        subject_person_id: p_UT7tNWyRxMM8ZHvrF86JdF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王執玉，明人物。隆慶二年進士，籍贯莘縣。（中国历代人物传记资料库 CBDB 336575）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__Pg_FoplND5mMaBfgYCq4d
          claim_id: c_faqJdhAHJ1FS5KF1Haztr5
          source_id: s_sPn7Azeue5eqNFkK27344f
          stance: supports
          locator: CBDB:336575
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_zx_glRMrcK5VnKYLDLcMcN
        subject_person_id: p_tRuYVQrj6CoDxdrV87C339
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UT7tNWyRxMM8ZHvrF86JdF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qa9XKAMv-qmGWY0gR-uTGG
          claim_id: c_zx_glRMrcK5VnKYLDLcMcN
          source_id: s_HWYuyjvF1Qyw7lBiWeIGVl
          stance: supports
          locator: CBDB：兄弟 王琢玉（205655）之父／母 王國定
          quotation: null
          interpretation_note: 由兄弟关系推断：王執玉 与 王琢玉 为同胞（CBDB 记「兄」），王琢玉 之父／母即 王執玉 之父／母。
          source:
            id: s_HWYuyjvF1Qyw7lBiWeIGVl
            source_type: api_record
            title: 中国历代人物传记资料库：王執玉（CBDB 336575）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336575&o=json
            external_identifier: CBDB:336575
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_tRuYVQrj6CoDxdrV87C339
        status: active
        display_name: 王國定
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_fevFCyoSwzGrK9uz8fCBKp
        subject_person_id: p_ENp2zBhPwP2aKEL6iVVfT2
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_UT7tNWyRxMM8ZHvrF86JdF
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1givJKe-w-IKgtRWU1NM-N
          claim_id: c_fevFCyoSwzGrK9uz8fCBKp
          source_id: s_HWYuyjvF1Qyw7lBiWeIGVl
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205655 王琢玉）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_HWYuyjvF1Qyw7lBiWeIGVl
            source_type: api_record
            title: 中国历代人物传记资料库：王執玉（CBDB 336575）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336575&o=json
            external_identifier: CBDB:336575
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ENp2zBhPwP2aKEL6iVVfT2
        status: active
        display_name: 王琢玉
        merged_into_person_id: null
---

# 王執玉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王執玉 | accepted |
| bio.summary | 王執玉，明人物。隆慶二年進士，籍贯莘縣。（中国历代人物传记资料库 CBDB 336575） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_tRuYVQrj6CoDxdrV87C339 | 王國定 | accepted |
| other | p_ENp2zBhPwP2aKEL6iVVfT2 | 王琢玉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王執玉（CBDB 336575）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336575&o=json)
