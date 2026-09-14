---
schema: wang-person/v1
id: p_cDXcgiX7Uo6NbRZKNL5dpP
status: active
merged_into: null
display_name: 王之荀
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UyZjPRGSYyY9GoCZVpS3rG
        subject_person_id: p_cDXcgiX7Uo6NbRZKNL5dpP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之荀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BnWCYQxaQgpGYALSCGp7ij
          claim_id: c_UyZjPRGSYyY9GoCZVpS3rG
          source_id: s_uAY9hNAsJdYxngRBKrJfFM
          stance: supports
          locator: CBDB:13757
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（13757）
          source: &a1
            id: s_uAY9hNAsJdYxngRBKrJfFM
            source_type: api_record
            title: 中国历代人物传记资料库：王之荀（CBDB 13757）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=13757&o=json
            external_identifier: CBDB:13757
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.629Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LVAYReHVbcyFfcUn9DvuT4
        subject_person_id: p_cDXcgiX7Uo6NbRZKNL5dpP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之荀，宋人物。籍贯都昌。（中国历代人物传记资料库 CBDB 13757）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vGEDEloPac4oZP5ZomnAud
          claim_id: c_LVAYReHVbcyFfcUn9DvuT4
          source_id: s_uAY9hNAsJdYxngRBKrJfFM
          stance: supports
          locator: CBDB:13757
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_7R7TRG7l2OKYZbqMuJkWeb
        subject_person_id: p_YyANARVNyNvBnk5riMJd4z
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cDXcgiX7Uo6NbRZKNL5dpP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LO0ZAp8hcyRCtFkuFm9Vnr
          claim_id: c_7R7TRG7l2OKYZbqMuJkWeb
          source_id: s_cuCFE6z5YCWv7bb3AhkGCx
          stance: supports
          locator: CBDB 亲属：父（KinPerson 1878）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_cuCFE6z5YCWv7bb3AhkGCx
            source_type: api_record
            title: 中国历代人物传记资料库：王之荀（CBDB 13757）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=13757&o=json
            external_identifier: CBDB:13757
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_YyANARVNyNvBnk5riMJd4z
        status: active
        display_name: 王庶
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_D2ySI8kcwAMQ3YrBbffjWL
        subject_person_id: p_cDXcgiX7Uo6NbRZKNL5dpP
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_dGeVmKUMk8CpVvhVSEDqhC
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_84ToyFG_-5XL0P3Nv8FIpE
          claim_id: c_D2ySI8kcwAMQ3YrBbffjWL
          source_id: s_cuCFE6z5YCWv7bb3AhkGCx
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 13756 王之奇）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_cuCFE6z5YCWv7bb3AhkGCx
            source_type: api_record
            title: 中国历代人物传记资料库：王之荀（CBDB 13757）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=13757&o=json
            external_identifier: CBDB:13757
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dGeVmKUMk8CpVvhVSEDqhC
        status: active
        display_name: 王之奇
        merged_into_person_id: null
    - claim:
        id: c_WThSpCrVsC-j5AQSUPXMh7
        subject_person_id: p_8NZ4VgcCXbsb12m8DpzJUp
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_cDXcgiX7Uo6NbRZKNL5dpP
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5fB3uTLfrvkcJ-_r2tven7
          claim_id: c_WThSpCrVsC-j5AQSUPXMh7
          source_id: s_cuCFE6z5YCWv7bb3AhkGCx
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 13758 王之道）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_cuCFE6z5YCWv7bb3AhkGCx
            source_type: api_record
            title: 中国历代人物传记资料库：王之荀（CBDB 13757）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=13757&o=json
            external_identifier: CBDB:13757
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8NZ4VgcCXbsb12m8DpzJUp
        status: active
        display_name: 王之道
        merged_into_person_id: null
---

# 王之荀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之荀 | accepted |
| bio.summary | 王之荀，宋人物。籍贯都昌。（中国历代人物传记资料库 CBDB 13757） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_YyANARVNyNvBnk5riMJd4z | 王庶 | accepted |
| other | p_dGeVmKUMk8CpVvhVSEDqhC | 王之奇 | accepted |
| other | p_8NZ4VgcCXbsb12m8DpzJUp | 王之道 | accepted |

## 外部来源

- [中国历代人物传记资料库：王之荀（CBDB 13757）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=13757&o=json)
