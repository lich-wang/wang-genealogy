---
schema: wang-person/v1
id: p_YqQLMddZtjQ9ckawdVDSGb
status: active
merged_into: null
display_name: 王寶德
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dnq8rUEgicbzxEtgqRF4nh
        subject_person_id: p_YqQLMddZtjQ9ckawdVDSGb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寶德
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2d3j3fvQHdQvwRSNsEdhGX
          claim_id: c_dnq8rUEgicbzxEtgqRF4nh
          source_id: s_1rUhs4k68DR1FTmyiQtzdC
          stance: supports
          locator: CBDB:148737
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（148737）
          source: &a1
            id: s_1rUhs4k68DR1FTmyiQtzdC
            source_type: api_record
            title: 中国历代人物传记资料库：王寶德（CBDB 148737）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148737&o=json
            external_identifier: CBDB:148737
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.766Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FaYxnLYMQR8Dhc1VxPBr6C
        subject_person_id: p_YqQLMddZtjQ9ckawdVDSGb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寶德，唐人物。籍贯芒山，曾任縣丞。（中国历代人物传记资料库 CBDB 148737）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yRRxUscFI71pylUJUXgLJA
          claim_id: c_FaYxnLYMQR8Dhc1VxPBr6C
          source_id: s_1rUhs4k68DR1FTmyiQtzdC
          stance: supports
          locator: CBDB:148737
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_qZZNOO1XSkkoUvWfo0RVEf
        subject_person_id: p_YqQLMddZtjQ9ckawdVDSGb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mnvKHycESEfEuUPkT5JFdS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-aw3-raMHFg9gkoUeZ6Uvk
          claim_id: c_qZZNOO1XSkkoUvWfo0RVEf
          source_id: s_d7AMoMC5os4pkSBoNiLE5E
          stance: supports
          locator: 唐代墓誌匯編:二卷，Xianheng 100：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_d7AMoMC5os4pkSBoNiLE5E
            source_type: api_record
            title: 中国历代人物传记资料库：王則（CBDB 139677）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139677&o=json
            external_identifier: CBDB:139677
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.438Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_mnvKHycESEfEuUPkT5JFdS
        status: active
        display_name: 王則
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王寶德

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寶德 | accepted |
| bio.summary | 王寶德，唐人物。籍贯芒山，曾任縣丞。（中国历代人物传记资料库 CBDB 148737） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_mnvKHycESEfEuUPkT5JFdS | 王則 | accepted |

## 外部来源

- [中国历代人物传记资料库：王寶德（CBDB 148737）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148737&o=json)
- [中国历代人物传记资料库：王則（CBDB 139677）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139677&o=json)
