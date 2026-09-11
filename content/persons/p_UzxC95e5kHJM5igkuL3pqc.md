---
schema: wang-person/v1
id: p_UzxC95e5kHJM5igkuL3pqc
status: active
merged_into: null
display_name: 徐氏
revision: 1
cbdb_id: 578125
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xD20JjUnFUYZVdR1jhjk75
        subject_person_id: p_UzxC95e5kHJM5igkuL3pqc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 徐氏（1138—1206），宋人物。籍贯紹興府。（中国历代人物传记资料库 CBDB 578125）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Znqck_UnEWoH5smBG3iO6x
          claim_id: c_xD20JjUnFUYZVdR1jhjk75
          source_id: s_Ap2j2tyKRanyRv7vztEg4w
          stance: supports
          locator: CBDB:578125
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Ap2j2tyKRanyRv7vztEg4w
            source_type: api_record
            title: 中国历代人物传记资料库：徐氏(王琳妻)（CBDB 578125）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=578125&o=json
            external_identifier: CBDB:578125
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_6R9vFaoCNDrEyjuQDc7piK
        subject_person_id: p_UzxC95e5kHJM5igkuL3pqc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 徐氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eQ7oHvKSnz1HXDXx5b7Kf7
          claim_id: c_6R9vFaoCNDrEyjuQDc7piK
          source_id: s_Ap2j2tyKRanyRv7vztEg4w
          stance: supports
          locator: CBDB:578125
          quotation: null
          interpretation_note: CBDB 明确记录的王琳配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_PO-aRK-hHQ908aoJfCBONS
        subject_person_id: p_Wmr3LqFp7qRwt5BuEkBnQA
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_UzxC95e5kHJM5igkuL3pqc
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9pE4GecCFr0bSAGCnfBzOR
          claim_id: c_PO-aRK-hHQ908aoJfCBONS
          source_id: s_Ap2j2tyKRanyRv7vztEg4w
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，王琳及夫人徐氏墓誌：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Wmr3LqFp7qRwt5BuEkBnQA
        status: active
        display_name: 王琳
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 徐氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 徐氏（1138—1206），宋人物。籍贯紹興府。（中国历代人物传记资料库 CBDB 578125） | accepted |
| name.primary | 徐氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_Wmr3LqFp7qRwt5BuEkBnQA | 王琳 | accepted |

## 外部来源

- [中国历代人物传记资料库：徐氏(王琳妻)（CBDB 578125）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=578125&o=json)
