---
schema: wang-person/v1
id: p_5YwESF55gMUFR6rDE4fuhn
status: active
merged_into: null
display_name: 王松秀
cbdb_id: 30062
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QcXsUGSmJH9chn53qdQpkc
        subject_person_id: p_5YwESF55gMUFR6rDE4fuhn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王松秀，清人物。籍贯寶坻。（中国历代人物传记资料库 CBDB 30062）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_jHVoSzKwG8CtuSMyHVNLHm
          claim_id: c_QcXsUGSmJH9chn53qdQpkc
          source_id: s_iR4uAgSJ21aRpexCocgEwP
          stance: supports
          locator: CBDB:30062
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_iR4uAgSJ21aRpexCocgEwP
            source_type: api_record
            title: 中国历代人物传记资料库：王松秀（CBDB 30062）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30062&o=json
            external_identifier: CBDB:30062
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.707Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_nhKZ2YhihyyLig1wtYaB8x
        subject_person_id: p_5YwESF55gMUFR6rDE4fuhn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王松秀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_vHudAKkZARzyNP9wfA797p
          claim_id: c_nhKZ2YhihyyLig1wtYaB8x
          source_id: s_iR4uAgSJ21aRpexCocgEwP
          stance: supports
          locator: CBDB:30062
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1101-1200）｜历史性依据：CBDB 朝代 = 清
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_hYLw9ndWs8poNy21s__fg4
        subject_person_id: p_riETjcz3yNBDDQpRwnut7q
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5YwESF55gMUFR6rDE4fuhn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ie-i0IZd4FS4Knx5N49o65
          claim_id: c_hYLw9ndWs8poNy21s__fg4
          source_id: s_Y7XBsWTQlThmCLSShKnxEQ
          stance: supports
          locator: CBDB 亲属：父（KinPerson 30050）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_Y7XBsWTQlThmCLSShKnxEQ
            source_type: api_record
            title: 中国历代人物传记资料库：王松秀（CBDB 30062）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30062&o=json
            external_identifier: CBDB:30062
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_riETjcz3yNBDDQpRwnut7q
        status: active
        display_name: 王振翮
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王松秀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王松秀，清人物。籍贯寶坻。（中国历代人物传记资料库 CBDB 30062） | accepted |
| name.primary | 王松秀 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_riETjcz3yNBDDQpRwnut7q | 王振翮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王松秀（CBDB 30062）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30062&o=json)
