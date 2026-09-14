---
schema: wang-person/v1
id: p_zJQiLQ79hDnjc3ncC1aWSr
status: active
merged_into: null
display_name: 王廷梧
cbdb_id: 271034
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6tWRw1yAVoUztGu1TqQGag
        subject_person_id: p_zJQiLQ79hDnjc3ncC1aWSr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷梧，明人物。弘治十五年進士，籍贯潞州。（中国历代人物传记资料库 CBDB 271034）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_VCZza-vIckpUM26GauI-nV
          claim_id: c_6tWRw1yAVoUztGu1TqQGag
          source_id: s_rpSDdt3ScFzSQsyyzUZ28P
          stance: supports
          locator: CBDB:271034
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_rpSDdt3ScFzSQsyyzUZ28P
            source_type: api_record
            title: 中国历代人物传记资料库：王廷梧（CBDB 271034）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271034&o=json
            external_identifier: CBDB:271034
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_GMEvfK4UoYTn21kfaajHDX
        subject_person_id: p_zJQiLQ79hDnjc3ncC1aWSr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷梧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_oaSNwCuYAKKr8jQavMJM6u
          claim_id: c_GMEvfK4UoYTn21kfaajHDX
          source_id: s_rpSDdt3ScFzSQsyyzUZ28P
          stance: supports
          locator: CBDB:271034
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3201-3300）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_oq6Ljw0kJTRqYJ1lJ92yPk
        subject_person_id: p_BDJG2REu9qNBRNY8nyCZ1f
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zJQiLQ79hDnjc3ncC1aWSr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xI9J9zlh0_thJvJ84ZTdze
          claim_id: c_oq6Ljw0kJTRqYJ1lJ92yPk
          source_id: s_EVib2InV_4jrrWd4RPz0Hy
          stance: supports
          locator: CBDB：兄弟 王廷相（68246）之父／母 王增
          quotation: null
          interpretation_note: 由兄弟关系推断：王廷梧 与 王廷相 为同胞（CBDB 记「兄」），王廷相 之父／母即 王廷梧 之父／母。
          source:
            id: s_EVib2InV_4jrrWd4RPz0Hy
            source_type: api_record
            title: 中国历代人物传记资料库：王廷梧（CBDB 271034）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271034&o=json
            external_identifier: CBDB:271034
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_BDJG2REu9qNBRNY8nyCZ1f
        status: active
        display_name: 王增
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_VZjiUF2E0eEO_1bDPfqhlK
        subject_person_id: p_4PsCtJUsnu3eY9rXNjF4Fo
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_zJQiLQ79hDnjc3ncC1aWSr
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HDNciVaWOuMbl-BVUItZ5k
          claim_id: c_VZjiUF2E0eEO_1bDPfqhlK
          source_id: s_EVib2InV_4jrrWd4RPz0Hy
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 68246 王廷相）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_EVib2InV_4jrrWd4RPz0Hy
            source_type: api_record
            title: 中国历代人物传记资料库：王廷梧（CBDB 271034）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271034&o=json
            external_identifier: CBDB:271034
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4PsCtJUsnu3eY9rXNjF4Fo
        status: active
        display_name: 王廷相
        merged_into_person_id: null
---

# 王廷梧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王廷梧，明人物。弘治十五年進士，籍贯潞州。（中国历代人物传记资料库 CBDB 271034） | accepted |
| name.primary | 王廷梧 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_BDJG2REu9qNBRNY8nyCZ1f | 王增 | accepted |
| other | p_4PsCtJUsnu3eY9rXNjF4Fo | 王廷相 | accepted |

## 外部来源

- [中国历代人物传记资料库：王廷梧（CBDB 271034）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271034&o=json)
