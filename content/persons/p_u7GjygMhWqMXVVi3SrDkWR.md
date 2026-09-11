---
schema: wang-person/v1
id: p_u7GjygMhWqMXVVi3SrDkWR
status: active
merged_into: null
display_name: 王錫
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oAABGBTdnaLx411CRLmFZ7
        subject_person_id: p_u7GjygMhWqMXVVi3SrDkWR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CV8p55LPZHPsSbYQKY5KrG
          claim_id: c_oAABGBTdnaLx411CRLmFZ7
          source_id: s_iPq6etxJQ33nAe1tU2BqXd
          stance: supports
          locator: CBDB:23649
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（23649）
          source: &a1
            id: s_iPq6etxJQ33nAe1tU2BqXd
            source_type: api_record
            title: 中国历代人物传记资料库：王錫（CBDB 23649）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23649&o=json
            external_identifier: CBDB:23649
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.889Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AaGayyP7f5NPQJCwJCF1HP
        subject_person_id: p_u7GjygMhWqMXVVi3SrDkWR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錫，宋人物。籍贯錢塘，入仕進士，曾任朝散郎、府。（中国历代人物传记资料库 CBDB 23649）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_IHQZ2fCooJyD45-5Oalonb
          claim_id: c_AaGayyP7f5NPQJCwJCF1HP
          source_id: s_iPq6etxJQ33nAe1tU2BqXd
          stance: supports
          locator: CBDB:23649
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Umb62t3latfhQQn7xXCdJz
        subject_person_id: p_tuQz8K1QJhTDMtht3PXNax
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_u7GjygMhWqMXVVi3SrDkWR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kD3e8MNqKIgkOvpiOg0cbO
          claim_id: c_Umb62t3latfhQQn7xXCdJz
          source_id: s_xWo8bK1WmAhKEr5zJ99FvF
          stance: supports
          locator: CBDB 双向互证（子 王錫 ⇄ 父 王浹）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_xWo8bK1WmAhKEr5zJ99FvF
            source_type: api_record
            title: 中国历代人物传记资料库：王浹（CBDB 23648）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23648&o=json
            external_identifier: CBDB:23648
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.889Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_tuQz8K1QJhTDMtht3PXNax
        status: active
        display_name: 王浹
        merged_into_person_id: null
  children:
    - claim:
        id: c_5esIMzT5ZXsaI5rBPdRLVS
        subject_person_id: p_u7GjygMhWqMXVVi3SrDkWR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Jzy9nZapWwZfBJyYh44MuQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_beBcqawW1835zIIGULHqCx
          claim_id: c_5esIMzT5ZXsaI5rBPdRLVS
          source_id: s_GaBEDkbrHxJxk3yFFC3Eei
          stance: supports
          locator: CBDB 双向互证（父 王錫 ⇄ 子 王琮）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_GaBEDkbrHxJxk3yFFC3Eei
            source_type: api_record
            title: 中国历代人物传记资料库：王琮（CBDB 23650）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23650&o=json
            external_identifier: CBDB:23650
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.889Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Jzy9nZapWwZfBJyYh44MuQ
        status: active
        display_name: 王琮
        merged_into_person_id: null
    - claim:
        id: c_GuIHhxb_nfzZ-W4CMXnyjj
        subject_person_id: p_u7GjygMhWqMXVVi3SrDkWR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vzE8k2PA1j5mXS23b4Ds3S
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_g9zGGMMgK7_AX-IUIa0qwb
          claim_id: c_GuIHhxb_nfzZ-W4CMXnyjj
          source_id: s_iPq6etxJQ33nAe1tU2BqXd
          stance: supports
          locator: CBDB 双向互证（子 王璵 ⇄ 父 王錫）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_vzE8k2PA1j5mXS23b4Ds3S
        status: active
        display_name: 王璵
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_K_gndFijUAO7y8VfB8peoJ
        subject_person_id: p_u7GjygMhWqMXVVi3SrDkWR
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2RzrzUqsutK3yv9cd9dwXj
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4s_PIF3kkF6G5qFRJpCmNW
          claim_id: c_K_gndFijUAO7y8VfB8peoJ
          source_id: s_ctSqJWMJMSBisWmAAWSuL9
          stance: supports
          locator: 紹興十八年同年小錄，157：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ctSqJWMJMSBisWmAAWSuL9
            source_type: api_record
            title: 中国历代人物传记资料库：王允功（CBDB 23652）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23652&o=json
            external_identifier: CBDB:23652
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.890Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2RzrzUqsutK3yv9cd9dwXj
        status: active
        display_name: 王允功
        merged_into_person_id: null
  other: []
---

# 王錫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王錫 | accepted |
| bio.summary | 王錫，宋人物。籍贯錢塘，入仕進士，曾任朝散郎、府。（中国历代人物传记资料库 CBDB 23649） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_tuQz8K1QJhTDMtht3PXNax | 王浹 | accepted |
| children | p_Jzy9nZapWwZfBJyYh44MuQ | 王琮 | accepted |
| children | p_vzE8k2PA1j5mXS23b4Ds3S | 王璵 | accepted |
| descendants | p_2RzrzUqsutK3yv9cd9dwXj | 王允功 | accepted |

## 外部来源

- [中国历代人物传记资料库：王琮（CBDB 23650）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23650&o=json)
- [中国历代人物传记资料库：王浹（CBDB 23648）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23648&o=json)
- [中国历代人物传记资料库：王錫（CBDB 23649）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23649&o=json)
- [中国历代人物传记资料库：王允功（CBDB 23652）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23652&o=json)
