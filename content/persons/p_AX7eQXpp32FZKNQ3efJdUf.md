---
schema: wang-person/v1
id: p_AX7eQXpp32FZKNQ3efJdUf
status: active
merged_into: null
display_name: 王翮
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vGUeqvEJxax1yNL2eNCQpv
        subject_person_id: p_AX7eQXpp32FZKNQ3efJdUf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6kjGHM9tHZ6FtdZi8Wekht
          claim_id: c_vGUeqvEJxax1yNL2eNCQpv
          source_id: s_hGJHSMqT5cbNUHiXBBknC5
          stance: supports
          locator: CBDB:295490
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（295490）
          source: &a1
            id: s_hGJHSMqT5cbNUHiXBBknC5
            source_type: api_record
            title: 中国历代人物传记资料库：王翮（CBDB 295490）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295490&o=json
            external_identifier: CBDB:295490
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.504Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PJt39JncQ4ErcCc8g2caBH
        subject_person_id: p_AX7eQXpp32FZKNQ3efJdUf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BL3QeNWWW9qSiHFYm5eJp3
          claim_id: c_PJt39JncQ4ErcCc8g2caBH
          source_id: s_hGJHSMqT5cbNUHiXBBknC5
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_l0CM4JQdEGBy7VcQ7AQCN6
        subject_person_id: p_AX7eQXpp32FZKNQ3efJdUf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AQPzHURj5Q55p8A3sruTTG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7BOCVZHfMRTbtuIEIDKlGP
          claim_id: c_l0CM4JQdEGBy7VcQ7AQCN6
          source_id: s_xCtA74fHb4nmCqYULtCsu1
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第二甲第四十四名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_xCtA74fHb4nmCqYULtCsu1
            source_type: api_record
            title: 中国历代人物传记资料库：王朝相（CBDB 202839）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202839&o=json
            external_identifier: CBDB:202839
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.761Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_AQPzHURj5Q55p8A3sruTTG
        status: active
        display_name: 王朝相
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王翮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王翮 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_AQPzHURj5Q55p8A3sruTTG | 王朝相 | accepted |

## 外部来源

- [中国历代人物传记资料库：王朝相（CBDB 202839）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202839&o=json)
- [中国历代人物传记资料库：王翮（CBDB 295490）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295490&o=json)
