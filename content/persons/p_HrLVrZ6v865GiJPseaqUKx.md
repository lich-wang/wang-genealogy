---
schema: wang-person/v1
id: p_HrLVrZ6v865GiJPseaqUKx
status: active
merged_into: null
display_name: 王子中
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nGtXb52nSuLARCeYTbnAAN
        subject_person_id: p_HrLVrZ6v865GiJPseaqUKx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Wx9JmRk6X54hqNCFLYFFKi
          claim_id: c_nGtXb52nSuLARCeYTbnAAN
          source_id: s_RXNxtEUfi28BA9HSLN2ajt
          stance: supports
          locator: CBDB:291663
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（291663）
          source: &a1
            id: s_RXNxtEUfi28BA9HSLN2ajt
            source_type: api_record
            title: 中国历代人物传记资料库：王子中（CBDB 291663）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291663&o=json
            external_identifier: CBDB:291663
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.361Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uqZ5ShRpW3PVwyB6C5AJrS
        subject_person_id: p_HrLVrZ6v865GiJPseaqUKx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子中，明人物。天順元年進士，籍贯鹽山。（中国历代人物传记资料库 CBDB 291663）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ERhVxiuUabefL0gtzRgI_B
          claim_id: c_uqZ5ShRpW3PVwyB6C5AJrS
          source_id: s_RXNxtEUfi28BA9HSLN2ajt
          stance: supports
          locator: CBDB:291663
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_g_KVZYfEv8YU3LBQ5O5gnn
        subject_person_id: p_HrLVrZ6v865GiJPseaqUKx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yfs4AMpkp3NQmpWdTLnP5v
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9uHijZn1XuMrN7DDBLj3uP
          claim_id: c_g_KVZYfEv8YU3LBQ5O5gnn
          source_id: s_RXNxtEUfi28BA9HSLN2ajt
          stance: supports
          locator: 天順元年進士登科錄:一卷，第三甲第九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_yfs4AMpkp3NQmpWdTLnP5v
        status: active
        display_name: 王豎
        merged_into_person_id: null
    - claim:
        id: c_cOTohgUxrCRMv9mqEKV9iC
        subject_person_id: p_HrLVrZ6v865GiJPseaqUKx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7EzhniUn95XmDudH6GGpyc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MEru2zgl_IoqGy4hcn7PUZ
          claim_id: c_cOTohgUxrCRMv9mqEKV9iC
          source_id: s_AFKviyGv5RFRpxUXcKGnPk
          stance: supports
          locator: CBDB：兄弟 王豎（198592）之父／母 王子中
          quotation: null
          interpretation_note: 由兄弟关系推断：王清 与 王豎 为同胞（CBDB 记「兄」），王豎 之父／母即 王清 之父／母。
          source:
            id: s_AFKviyGv5RFRpxUXcKGnPk
            source_type: api_record
            title: 中国历代人物传记资料库：王清（CBDB 291718）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291718&o=json
            external_identifier: CBDB:291718
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7EzhniUn95XmDudH6GGpyc
        status: active
        display_name: 王清
        merged_into_person_id: null
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
        id: p_VNMdpKWG5xeW3UQEdA9VQa
        status: active
        display_name: 王鑑
        merged_into_person_id: null
    - claim:
        id: c_JUCoxKAkqawtDpbkWnBA66
        subject_person_id: p_HrLVrZ6v865GiJPseaqUKx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hrAztpnLjdEZzEe3rRjXtQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5oq0Wd-8UvWjluSPtPNq0W
          claim_id: c_JUCoxKAkqawtDpbkWnBA66
          source_id: s_DlvoanuQhbP88i9iZ_YV-a
          stance: supports
          locator: CBDB：兄弟 王豎（198592）之父／母 王子中
          quotation: null
          interpretation_note: 由兄弟关系推断：王里 与 王豎 为同胞（CBDB 记「兄」），王豎 之父／母即 王里 之父／母。
          source:
            id: s_DlvoanuQhbP88i9iZ_YV-a
            source_type: api_record
            title: 中国历代人物传记资料库：王里（CBDB 291707）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291707&o=json
            external_identifier: CBDB:291707
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hrAztpnLjdEZzEe3rRjXtQ
        status: active
        display_name: 王里
        merged_into_person_id: null
    - claim:
        id: c_i8T5sZUYWjknv9pB23-EII
        subject_person_id: p_HrLVrZ6v865GiJPseaqUKx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_s5tjSKHAH6mUhMsNMv2JHq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TvU1Pw3HV8OCLyO_Z_L2Dq
          claim_id: c_i8T5sZUYWjknv9pB23-EII
          source_id: s_0LzRVspw-Tk2eMyoTfXOqI
          stance: supports
          locator: CBDB：兄弟 王豎（198592）之父／母 王子中
          quotation: null
          interpretation_note: 由兄弟关系推断：王真 与 王豎 为同胞（CBDB 记「兄」），王豎 之父／母即 王真 之父／母。
          source:
            id: s_0LzRVspw-Tk2eMyoTfXOqI
            source_type: api_record
            title: 中国历代人物传记资料库：王真（CBDB 291729）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291729&o=json
            external_identifier: CBDB:291729
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_s5tjSKHAH6mUhMsNMv2JHq
        status: active
        display_name: 王真
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王子中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王子中 | accepted |
| bio.summary | 王子中，明人物。天順元年進士，籍贯鹽山。（中国历代人物传记资料库 CBDB 291663） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_yfs4AMpkp3NQmpWdTLnP5v | 王豎 | accepted |
| children | p_7EzhniUn95XmDudH6GGpyc | 王清 | accepted |
| children | p_VNMdpKWG5xeW3UQEdA9VQa | 王鑑 | accepted |
| children | p_hrAztpnLjdEZzEe3rRjXtQ | 王里 | accepted |
| children | p_s5tjSKHAH6mUhMsNMv2JHq | 王真 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鑑（CBDB 291696）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291696&o=json)
- [中国历代人物传记资料库：王里（CBDB 291707）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291707&o=json)
- [中国历代人物传记资料库：王清（CBDB 291718）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291718&o=json)
- [中国历代人物传记资料库：王真（CBDB 291729）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291729&o=json)
- [中国历代人物传记资料库：王子中（CBDB 291663）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291663&o=json)
