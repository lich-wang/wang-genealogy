---
schema: wang-person/v1
id: p_8bLH6jDFtEPUQUPbN8XFMB
status: active
merged_into: null
display_name: 王思名
cbdb_id: 231087
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_B8DY3J419NHtHy9x2kFCXo
        subject_person_id: p_8bLH6jDFtEPUQUPbN8XFMB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思名，明人物。宣德八年進士，籍贯慈溪。（中国历代人物传记资料库 CBDB 231087）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_uV69tOTxlimFFReh2095RA
          claim_id: c_B8DY3J419NHtHy9x2kFCXo
          source_id: s_82aXDSV8zQ7Z8zHmmpa2SF
          stance: supports
          locator: CBDB:231087
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_82aXDSV8zQ7Z8zHmmpa2SF
            source_type: api_record
            title: 中国历代人物传记资料库：王思名（CBDB 231087）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231087&o=json
            external_identifier: CBDB:231087
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_VCH5kytC8nGY82iRvTs15t
        subject_person_id: p_8bLH6jDFtEPUQUPbN8XFMB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思名
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_NqXrKtDkt4oaa1zb3CDS2J
          claim_id: c_VCH5kytC8nGY82iRvTs15t
          source_id: s_82aXDSV8zQ7Z8zHmmpa2SF
          stance: supports
          locator: CBDB:231087
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2701-2800）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_snpkYZN-VLIj4kwIWhu8k2
        subject_person_id: p_8bLH6jDFtEPUQUPbN8XFMB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9Ebxw9nqUzpjPj6LJw3JKY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KruIZ16c81PaoEu3hr62pj
          claim_id: c_snpkYZN-VLIj4kwIWhu8k2
          source_id: s_Rma4qxGwFz8V88WW24kMWD
          stance: supports
          locator: 宣德八年進士登科錄:一卷，第二甲第十七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Rma4qxGwFz8V88WW24kMWD
            source_type: api_record
            title: 中国历代人物传记资料库：王用（CBDB 207307）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207307&o=json
            external_identifier: CBDB:207307
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.917Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_9Ebxw9nqUzpjPj6LJw3JKY
        status: active
        display_name: 王用
        merged_into_person_id: null
    - claim:
        id: c_MOuwIHeeqxvvzIR5xqVmfL
        subject_person_id: p_8bLH6jDFtEPUQUPbN8XFMB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jo3NStgcxkRz8E9qgyWKSq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3YFO-Cc12P4bUkCJ96nMCs
          claim_id: c_MOuwIHeeqxvvzIR5xqVmfL
          source_id: s_fZ6QhJ7HrMsOFsX8Kgvpaw
          stance: supports
          locator: CBDB：兄弟 王用（207307）之父／母 王思名
          quotation: null
          interpretation_note: 由兄弟关系推断：王珪 与 王用 为同胞（CBDB 记「兄」），王用 之父／母即 王珪 之父／母。
          source:
            id: s_fZ6QhJ7HrMsOFsX8Kgvpaw
            source_type: api_record
            title: 中国历代人物传记资料库：王珪（CBDB 231094）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231094&o=json
            external_identifier: CBDB:231094
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_jo3NStgcxkRz8E9qgyWKSq
        status: active
        display_name: 王珪
        merged_into_person_id: null
    - claim:
        id: c_W1_IxVfQw9Ox5W6Bs78BbH
        subject_person_id: p_8bLH6jDFtEPUQUPbN8XFMB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rFcX6dGKSpv1ZWghZB7TFM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yfzWytWGhy-VvGNvozdo2q
          claim_id: c_W1_IxVfQw9Ox5W6Bs78BbH
          source_id: s_qJiwRBX_Rn6sxT7YjlTv8l
          stance: supports
          locator: CBDB：兄弟 王用（207307）之父／母 王思名
          quotation: null
          interpretation_note: 由兄弟关系推断：王琴 与 王用 为同胞（CBDB 记「兄」），王用 之父／母即 王琴 之父／母。
          source:
            id: s_qJiwRBX_Rn6sxT7YjlTv8l
            source_type: api_record
            title: 中国历代人物传记资料库：王琴（CBDB 231093）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231093&o=json
            external_identifier: CBDB:231093
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rFcX6dGKSpv1ZWghZB7TFM
        status: active
        display_name: 王琴
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王思名

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王思名，明人物。宣德八年進士，籍贯慈溪。（中国历代人物传记资料库 CBDB 231087） | accepted |
| name.primary | 王思名 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_9Ebxw9nqUzpjPj6LJw3JKY | 王用 | accepted |
| children | p_jo3NStgcxkRz8E9qgyWKSq | 王珪 | accepted |
| children | p_rFcX6dGKSpv1ZWghZB7TFM | 王琴 | accepted |

## 外部来源

- [中国历代人物传记资料库：王珪（CBDB 231094）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231094&o=json)
- [中国历代人物传记资料库：王琴（CBDB 231093）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231093&o=json)
- [中国历代人物传记资料库：王思名（CBDB 231087）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231087&o=json)
- [中国历代人物传记资料库：王用（CBDB 207307）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207307&o=json)
