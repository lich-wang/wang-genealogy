---
schema: wang-person/v1
id: p_Z5KpoCpX2Pjq1iKHAdBCQx
status: active
merged_into: null
display_name: 王肯堂
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KgaPJVRGB7GG2zsgjjawNr
        subject_person_id: p_Z5KpoCpX2Pjq1iKHAdBCQx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王肯堂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jMA96Up22SL3yJGWCUTySX
          claim_id: c_KgaPJVRGB7GG2zsgjjawNr
          source_id: s_TnvALdHVwP2HBkCMHEGwk1
          stance: supports
          locator: CBDB:222822
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（222822）
          source: &a1
            id: s_TnvALdHVwP2HBkCMHEGwk1
            source_type: api_record
            title: 中国历代人物传记资料库：王肯堂（CBDB 222822）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222822&o=json
            external_identifier: CBDB:222822
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.399Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AsJnmZM2Hbgb8Zq9oMF9vh
        subject_person_id: p_Z5KpoCpX2Pjq1iKHAdBCQx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王肯堂，明人物。萬曆十一年進士，籍贯金壇，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 222822）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_94qJu5y7F_fzzM9AgGtU6g
          claim_id: c_AsJnmZM2Hbgb8Zq9oMF9vh
          source_id: s_TnvALdHVwP2HBkCMHEGwk1
          stance: supports
          locator: CBDB:222822
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_OdTS4o3OmxAhMS2MH9_YxY
        subject_person_id: p_oruQD3pLHzNQ8AvU3GVazK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Z5KpoCpX2Pjq1iKHAdBCQx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2dcxeFFlP3U6heqIq3sbDc
          claim_id: c_OdTS4o3OmxAhMS2MH9_YxY
          source_id: s_tDtK8tycxZ5NHpjlBCGHOY
          stance: supports
          locator: CBDB：兄弟 王堯封（126717）之父／母 王維熊
          quotation: null
          interpretation_note: 由兄弟关系推断：王肯堂 与 王堯封 为同胞（CBDB 记「兄」），王堯封 之父／母即 王肯堂 之父／母。
          source:
            id: s_tDtK8tycxZ5NHpjlBCGHOY
            source_type: api_record
            title: 中国历代人物传记资料库：王肯堂（CBDB 222822）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222822&o=json
            external_identifier: CBDB:222822
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_oruQD3pLHzNQ8AvU3GVazK
        status: active
        display_name: 王維熊
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_bX-rlW57MakRU-O2P8FimJ
        subject_person_id: p_DpuSp4mmLYMfmUMioXctjR
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Z5KpoCpX2Pjq1iKHAdBCQx
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lNLdAOkwoHYQY0xMgr2KD3
          claim_id: c_bX-rlW57MakRU-O2P8FimJ
          source_id: s_tDtK8tycxZ5NHpjlBCGHOY
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126717 王堯封）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_tDtK8tycxZ5NHpjlBCGHOY
            source_type: api_record
            title: 中国历代人物传记资料库：王肯堂（CBDB 222822）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222822&o=json
            external_identifier: CBDB:222822
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DpuSp4mmLYMfmUMioXctjR
        status: active
        display_name: 王堯封
        merged_into_person_id: null
---

# 王肯堂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王肯堂 | accepted |
| bio.summary | 王肯堂，明人物。萬曆十一年進士，籍贯金壇，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 222822） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_oruQD3pLHzNQ8AvU3GVazK | 王維熊 | accepted |
| other | p_DpuSp4mmLYMfmUMioXctjR | 王堯封 | accepted |

## 外部来源

- [中国历代人物传记资料库：王肯堂（CBDB 222822）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222822&o=json)
