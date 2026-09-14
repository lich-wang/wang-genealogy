---
schema: wang-person/v1
id: p_DyDwnotNaEGHDTfCUEzzuL
status: active
merged_into: null
display_name: 王學閩
cbdb_id: 328256
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gkpMx988YnGUqzRAPf7JZP
        subject_person_id: p_DyDwnotNaEGHDTfCUEzzuL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學閩，明人物。嘉靖四十一年進士，籍贯朝邑。（中国历代人物传记资料库 CBDB 328256）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_MvaeXpSkFFFKUlYMMA_CWx
          claim_id: c_gkpMx988YnGUqzRAPf7JZP
          source_id: s_3Ef2F79pLeSfRN3UXJ24Wc
          stance: supports
          locator: CBDB:328256
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_3Ef2F79pLeSfRN3UXJ24Wc
            source_type: api_record
            title: 中国历代人物传记资料库：王學閩（CBDB 328256）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328256&o=json
            external_identifier: CBDB:328256
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.922Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_eCCJxkEaU74QrZ6uukXA63
        subject_person_id: p_DyDwnotNaEGHDTfCUEzzuL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學閩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_VqAprLQrFsCe8trXtzu11x
          claim_id: c_eCCJxkEaU74QrZ6uukXA63
          source_id: s_3Ef2F79pLeSfRN3UXJ24Wc
          stance: supports
          locator: CBDB:328256
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3801-3900）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_fU6SzLTHoMG-H2Sx7A07mp
        subject_person_id: p_4rZFET2VU5QfJTezy8ktoQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DyDwnotNaEGHDTfCUEzzuL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XbfBExNsvve3q3_kIXNLR9
          claim_id: c_fU6SzLTHoMG-H2Sx7A07mp
          source_id: s_MfD6O9BWI85vfRJrkyiLC9
          stance: supports
          locator: CBDB：兄弟 王學古（205095）之父／母 王來召
          quotation: null
          interpretation_note: 由兄弟关系推断：王學閩 与 王學古 为同胞（CBDB 记「兄」），王學古 之父／母即 王學閩 之父／母。
          source:
            id: s_MfD6O9BWI85vfRJrkyiLC9
            source_type: api_record
            title: 中国历代人物传记资料库：王學閩（CBDB 328256）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328256&o=json
            external_identifier: CBDB:328256
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4rZFET2VU5QfJTezy8ktoQ
        status: active
        display_name: 王來召
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Dxf6RovNP3zrmUDeLMLBcF
        subject_person_id: p_DyDwnotNaEGHDTfCUEzzuL
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_EubdaeFSWc8pKsGxhe2PFM
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wWczqIlqbeo_rz8Hkc7zXE
          claim_id: c_Dxf6RovNP3zrmUDeLMLBcF
          source_id: s_MfD6O9BWI85vfRJrkyiLC9
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205095 王學古）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_MfD6O9BWI85vfRJrkyiLC9
            source_type: api_record
            title: 中国历代人物传记资料库：王學閩（CBDB 328256）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328256&o=json
            external_identifier: CBDB:328256
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EubdaeFSWc8pKsGxhe2PFM
        status: active
        display_name: 王學古
        merged_into_person_id: null
---

# 王學閩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王學閩，明人物。嘉靖四十一年進士，籍贯朝邑。（中国历代人物传记资料库 CBDB 328256） | accepted |
| name.primary | 王學閩 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_4rZFET2VU5QfJTezy8ktoQ | 王來召 | accepted |
| other | p_EubdaeFSWc8pKsGxhe2PFM | 王學古 | accepted |

## 外部来源

- [中国历代人物传记资料库：王學閩（CBDB 328256）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328256&o=json)
