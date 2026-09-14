---
schema: wang-person/v1
id: p_E7Zxb7UEW62oJJhDuLDRdG
status: active
merged_into: null
display_name: 王期治
cbdb_id: 324017
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EVXER2XkQBBPeVKbuw3oHr
        subject_person_id: p_E7Zxb7UEW62oJJhDuLDRdG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王期治，明人物。嘉靖三十八年進士，籍贯潞州衛。（中国历代人物传记资料库 CBDB 324017）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_5VGaj3ezUmL85PXZIKgExE
          claim_id: c_EVXER2XkQBBPeVKbuw3oHr
          source_id: s_VGsAwA3vSJnZLPzUpoSB3i
          stance: supports
          locator: CBDB:324017
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_VGsAwA3vSJnZLPzUpoSB3i
            source_type: api_record
            title: 中国历代人物传记资料库：王期治（CBDB 324017）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324017&o=json
            external_identifier: CBDB:324017
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.922Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_bf5Jkg1MMrx512FGqJHxsT
        subject_person_id: p_E7Zxb7UEW62oJJhDuLDRdG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王期治
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_74rnecA2ETuxP1Dmhafg1B
          claim_id: c_bf5Jkg1MMrx512FGqJHxsT
          source_id: s_VGsAwA3vSJnZLPzUpoSB3i
          stance: supports
          locator: CBDB:324017
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3801-3900）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_oSOJ7ZBQVTIB04lXAwEgF4
        subject_person_id: p_CEMGnZJGkUBUQcSpdxgPnV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_E7Zxb7UEW62oJJhDuLDRdG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DOCRgRro6Dtue81NuJvmIB
          claim_id: c_oSOJ7ZBQVTIB04lXAwEgF4
          source_id: s_ylPxdfhdsJzQl9jNriV3e6
          stance: supports
          locator: CBDB：兄弟 王期古（204782）之父／母 王龍
          quotation: null
          interpretation_note: 由兄弟关系推断：王期治 与 王期古 为同胞（CBDB 记「兄」），王期古 之父／母即 王期治 之父／母。
          source:
            id: s_ylPxdfhdsJzQl9jNriV3e6
            source_type: api_record
            title: 中国历代人物传记资料库：王期治（CBDB 324017）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324017&o=json
            external_identifier: CBDB:324017
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CEMGnZJGkUBUQcSpdxgPnV
        status: active
        display_name: 王龍
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_VLFq5PyaHwUzFYnmacvgHx
        subject_person_id: p_E7Zxb7UEW62oJJhDuLDRdG
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_RQNnvu8c2y9N9EYgnmFtCC
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__1Zj4WqiKoHdJ8a26zNuLr
          claim_id: c_VLFq5PyaHwUzFYnmacvgHx
          source_id: s_ylPxdfhdsJzQl9jNriV3e6
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204782 王期古）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ylPxdfhdsJzQl9jNriV3e6
            source_type: api_record
            title: 中国历代人物传记资料库：王期治（CBDB 324017）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324017&o=json
            external_identifier: CBDB:324017
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_RQNnvu8c2y9N9EYgnmFtCC
        status: active
        display_name: 王期古
        merged_into_person_id: null
---

# 王期治

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王期治，明人物。嘉靖三十八年進士，籍贯潞州衛。（中国历代人物传记资料库 CBDB 324017） | accepted |
| name.primary | 王期治 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_CEMGnZJGkUBUQcSpdxgPnV | 王龍 | accepted |
| other | p_RQNnvu8c2y9N9EYgnmFtCC | 王期古 | accepted |

## 外部来源

- [中国历代人物传记资料库：王期治（CBDB 324017）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324017&o=json)
