---
schema: wang-person/v1
id: p_P3JXgAo8uqV4W8uPXgoVMo
status: active
merged_into: null
display_name: 王學呂
cbdb_id: 328250
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gqofn5DHoQSQ797xSY2D7r
        subject_person_id: p_P3JXgAo8uqV4W8uPXgoVMo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學呂，明人物。嘉靖四十一年進士，籍贯朝邑。（中国历代人物传记资料库 CBDB 328250）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_Oo-b4Barbz4GpPMBwzmxsX
          claim_id: c_gqofn5DHoQSQ797xSY2D7r
          source_id: s_FkMfAkKkzw1BdbhC4gMDZb
          stance: supports
          locator: CBDB:328250
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_FkMfAkKkzw1BdbhC4gMDZb
            source_type: api_record
            title: 中国历代人物传记资料库：王學呂（CBDB 328250）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328250&o=json
            external_identifier: CBDB:328250
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.922Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_kq8Y6zvfWzqanshaSoLs3X
        subject_person_id: p_P3JXgAo8uqV4W8uPXgoVMo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學呂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_UPM31y9kcujru6kBi7dbvg
          claim_id: c_kq8Y6zvfWzqanshaSoLs3X
          source_id: s_FkMfAkKkzw1BdbhC4gMDZb
          stance: supports
          locator: CBDB:328250
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3801-3900）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_nlSvHTYZFUAqHdMewkmX8Y
        subject_person_id: p_4rZFET2VU5QfJTezy8ktoQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_P3JXgAo8uqV4W8uPXgoVMo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LwcNmJeUBX2iQ_06ECZZkX
          claim_id: c_nlSvHTYZFUAqHdMewkmX8Y
          source_id: s_smZ2rhQrLzIWBgVofv33LB
          stance: supports
          locator: CBDB：兄弟 王學古（205095）之父／母 王來召
          quotation: null
          interpretation_note: 由兄弟关系推断：王學呂 与 王學古 为同胞（CBDB 记「兄」），王學古 之父／母即 王學呂 之父／母。
          source:
            id: s_smZ2rhQrLzIWBgVofv33LB
            source_type: api_record
            title: 中国历代人物传记资料库：王學呂（CBDB 328250）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328250&o=json
            external_identifier: CBDB:328250
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
        id: c_xRqlCa-sUIUca0vmH5B3Z3
        subject_person_id: p_EubdaeFSWc8pKsGxhe2PFM
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_P3JXgAo8uqV4W8uPXgoVMo
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Us1c6VFylVSdLU9IyW_zU6
          claim_id: c_xRqlCa-sUIUca0vmH5B3Z3
          source_id: s_smZ2rhQrLzIWBgVofv33LB
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205095 王學古）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_smZ2rhQrLzIWBgVofv33LB
            source_type: api_record
            title: 中国历代人物传记资料库：王學呂（CBDB 328250）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328250&o=json
            external_identifier: CBDB:328250
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EubdaeFSWc8pKsGxhe2PFM
        status: active
        display_name: 王學古
        merged_into_person_id: null
---

# 王學呂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王學呂，明人物。嘉靖四十一年進士，籍贯朝邑。（中国历代人物传记资料库 CBDB 328250） | accepted |
| name.primary | 王學呂 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_4rZFET2VU5QfJTezy8ktoQ | 王來召 | accepted |
| other | p_EubdaeFSWc8pKsGxhe2PFM | 王學古 | accepted |

## 外部来源

- [中国历代人物传记资料库：王學呂（CBDB 328250）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328250&o=json)
