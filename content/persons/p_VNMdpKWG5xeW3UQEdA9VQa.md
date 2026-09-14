---
schema: wang-person/v1
id: p_VNMdpKWG5xeW3UQEdA9VQa
status: active
merged_into: null
display_name: 王鑑
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ztpef2arujLGraQic9671h
        subject_person_id: p_VNMdpKWG5xeW3UQEdA9VQa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NC8mq29eF179KHjN4bQrSF
          claim_id: c_Ztpef2arujLGraQic9671h
          source_id: s_c11EA9c4DhjHC68EYJ187G
          stance: supports
          locator: CBDB:291696
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（291696）
          source: &a1
            id: s_c11EA9c4DhjHC68EYJ187G
            source_type: api_record
            title: 中国历代人物传记资料库：王鑑（CBDB 291696）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291696&o=json
            external_identifier: CBDB:291696
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.361Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FuF3oXDQyBEAGruxsEHu1j
        subject_person_id: p_VNMdpKWG5xeW3UQEdA9VQa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑑，明人物。天順元年進士，籍贯鹽山。（中国历代人物传记资料库 CBDB 291696）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_kivDQTizhQL90hWTRtfYWX
          claim_id: c_FuF3oXDQyBEAGruxsEHu1j
          source_id: s_c11EA9c4DhjHC68EYJ187G
          stance: supports
          locator: CBDB:291696
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_3E5VHtW0IWmLQNmnfgdw4y
        subject_person_id: p_HrLVrZ6v865GiJPseaqUKx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VNMdpKWG5xeW3UQEdA9VQa
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Hl3zuk14Ou1yoVmG9KkDVK
          claim_id: c_3E5VHtW0IWmLQNmnfgdw4y
          source_id: s_JUUDq7j6hyfWeye9M7tmu0
          stance: supports
          locator: CBDB：兄弟 王豎（198592）之父／母 王子中
          quotation: null
          interpretation_note: 由兄弟关系推断：王鑑 与 王豎 为同胞（CBDB 记「弟」），王豎 之父／母即 王鑑 之父／母。
          source:
            id: s_JUUDq7j6hyfWeye9M7tmu0
            source_type: api_record
            title: 中国历代人物传记资料库：王鑑（CBDB 291696）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291696&o=json
            external_identifier: CBDB:291696
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HrLVrZ6v865GiJPseaqUKx
        status: active
        display_name: 王子中
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_IlDKFfqgmeBcKQM2E6Cg1K
        subject_person_id: p_VNMdpKWG5xeW3UQEdA9VQa
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_yfs4AMpkp3NQmpWdTLnP5v
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sAL5fzESCg9y1qP7AJJesX
          claim_id: c_IlDKFfqgmeBcKQM2E6Cg1K
          source_id: s_JUUDq7j6hyfWeye9M7tmu0
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 198592 王豎）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_JUUDq7j6hyfWeye9M7tmu0
            source_type: api_record
            title: 中国历代人物传记资料库：王鑑（CBDB 291696）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291696&o=json
            external_identifier: CBDB:291696
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_yfs4AMpkp3NQmpWdTLnP5v
        status: active
        display_name: 王豎
        merged_into_person_id: null
---

# 王鑑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鑑 | accepted |
| bio.summary | 王鑑，明人物。天順元年進士，籍贯鹽山。（中国历代人物传记资料库 CBDB 291696） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_HrLVrZ6v865GiJPseaqUKx | 王子中 | accepted |
| other | p_yfs4AMpkp3NQmpWdTLnP5v | 王豎 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鑑（CBDB 291696）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291696&o=json)
