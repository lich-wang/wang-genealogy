---
schema: wang-person/v1
id: p_Jzy9nZapWwZfBJyYh44MuQ
status: active
merged_into: null
display_name: 王琮
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_npt5yKtPmdQUJDBqvp7eC6
        subject_person_id: p_Jzy9nZapWwZfBJyYh44MuQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zrwZ7FPxsrqRhrAS8ahPAq
          claim_id: c_npt5yKtPmdQUJDBqvp7eC6
          source_id: s_GaBEDkbrHxJxk3yFFC3Eei
          stance: supports
          locator: CBDB:23650
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（23650）
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_W1mF8BN6zcz9SHCgcm1VTb
        subject_person_id: p_Jzy9nZapWwZfBJyYh44MuQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琮，宋人物。籍贯錢塘，入仕進士。（中国历代人物传记资料库 CBDB 23650）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mdYRg6zH7KASkx6g8jdrhq
          claim_id: c_W1mF8BN6zcz9SHCgcm1VTb
          source_id: s_GaBEDkbrHxJxk3yFFC3Eei
          stance: supports
          locator: CBDB:23650
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
          source: *a1
      object_person:
        id: p_u7GjygMhWqMXVVi3SrDkWR
        status: active
        display_name: 王錫
        merged_into_person_id: null
  children:
    - claim:
        id: c_LWyUhMQftduHbV_CBL186-
        subject_person_id: p_Jzy9nZapWwZfBJyYh44MuQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2RzrzUqsutK3yv9cd9dwXj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hFQmTsE0DZKZa6fn8g_7vb
          claim_id: c_LWyUhMQftduHbV_CBL186-
          source_id: s_ctSqJWMJMSBisWmAAWSuL9
          stance: supports
          locator: CBDB 双向互证（父 王琮 ⇄ 子 王允功）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
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
    - claim:
        id: c_3ucohSGV0I8zmOyO_gdat-
        subject_person_id: p_Jzy9nZapWwZfBJyYh44MuQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TYvJo43BKA6x6Dqj2QR2PJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4RSXCpvrvaSQdGbXhZVkeT
          claim_id: c_3ucohSGV0I8zmOyO_gdat-
          source_id: s_GaBEDkbrHxJxk3yFFC3Eei
          stance: supports
          locator: CBDB 双向互证（子 王允濟 ⇄ 父 王琮）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_TYvJo43BKA6x6Dqj2QR2PJ
        status: active
        display_name: 王允濟
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_twEfGS5QQIn6-a62xbZOZv
        subject_person_id: p_Jzy9nZapWwZfBJyYh44MuQ
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_PHSPyYQCLYcPekwBmWH6Fu
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3__prFnJyXQHp2S7suNZma
          claim_id: c_twEfGS5QQIn6-a62xbZOZv
          source_id: s_A0XYSzJx-APyqzQMm4I8Pe
          stance: supports
          locator: 紹興十八年同年小錄，157：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_A0XYSzJx-APyqzQMm4I8Pe
            source_type: api_record
            title: 中国历代人物传记资料库：李氏(王允功母)（CBDB 135564）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=135564&o=json
            external_identifier: CBDB:135564
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_PHSPyYQCLYcPekwBmWH6Fu
        status: active
        display_name: 李氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_X0KmWKEd5WRo58zsUYNlCp
        subject_person_id: p_tuQz8K1QJhTDMtht3PXNax
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Jzy9nZapWwZfBJyYh44MuQ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SDo6yOh76-n38DfuiA6gde
          claim_id: c_X0KmWKEd5WRo58zsUYNlCp
          source_id: s_GaBEDkbrHxJxk3yFFC3Eei
          stance: supports
          locator: 紹興十八年同年小錄，157：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_tuQz8K1QJhTDMtht3PXNax
        status: active
        display_name: 王浹
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王琮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琮 | accepted |
| bio.summary | 王琮，宋人物。籍贯錢塘，入仕進士。（中国历代人物传记资料库 CBDB 23650） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_u7GjygMhWqMXVVi3SrDkWR | 王錫 | accepted |
| children | p_2RzrzUqsutK3yv9cd9dwXj | 王允功 | accepted |
| children | p_TYvJo43BKA6x6Dqj2QR2PJ | 王允濟 | accepted |
| spouses | p_PHSPyYQCLYcPekwBmWH6Fu | 李氏 | accepted |
| ancestors | p_tuQz8K1QJhTDMtht3PXNax | 王浹 | accepted |

## 外部来源

- [中国历代人物传记资料库：李氏(王允功母)（CBDB 135564）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=135564&o=json)
- [中国历代人物传记资料库：王琮（CBDB 23650）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23650&o=json)
- [中国历代人物传记资料库：王允功（CBDB 23652）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23652&o=json)
