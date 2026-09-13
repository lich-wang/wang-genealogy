---
schema: wang-person/v1
id: p_98QQdRkf8cCt61bD928i6c
status: active
merged_into: null
display_name: 李氏
cbdb_id: 577087
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8a6P8jq_U4QKONAipbNK_3
        subject_person_id: p_98QQdRkf8cCt61bD928i6c
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 李氏（993—1073），宋人物。曾任縣太君。（中国历代人物传记资料库 CBDB 577087）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KTSIAbc7TowqCbQ59kKk5F
          claim_id: c_8a6P8jq_U4QKONAipbNK_3
          source_id: s_FCp7TCuZ2zry8caZmGkPTT
          stance: supports
          locator: CBDB:577087
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_FCp7TCuZ2zry8caZmGkPTT
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：李氏（577087）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=577087&o=json
            external_identifier: CBDB:577087
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:07:26.107Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_AKyFGSfdGJVdNwjoxG4WYN
        subject_person_id: p_98QQdRkf8cCt61bD928i6c
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 李氏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_dDsczCcvq6XVHMyGdmwHKq
          claim_id: c_AKyFGSfdGJVdNwjoxG4WYN
          source_id: s_FCp7TCuZ2zry8caZmGkPTT
          stance: supports
          locator: CBDB:577087
          quotation: null
          interpretation_note: null
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
        id: c_56nvqVi24ANMxc5EMeEyXu
        subject_person_id: p_8yGvQV64DEaN7zXdMCaL2M
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_98QQdRkf8cCt61bD928i6c
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6wNepofTRceT8RkQJr3ezk
          claim_id: c_56nvqVi24ANMxc5EMeEyXu
          source_id: s_ESiRG3f9yMVCAnGCJMXcMN
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：散見宋金元墓誌地券輯錄六編
          source:
            id: s_ESiRG3f9yMVCAnGCJMXcMN
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王益恭（22054）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22054&o=json
            external_identifier: CBDB:22054
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:20.031Z
            metadata_json: null
      object_person:
        id: p_8yGvQV64DEaN7zXdMCaL2M
        status: active
        display_name: 王益恭
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 李氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 李氏（993—1073），宋人物。曾任縣太君。（中国历代人物传记资料库 CBDB 577087） | accepted |
| name.primary | 李氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_8yGvQV64DEaN7zXdMCaL2M | 王益恭 | accepted |

## 外部来源

- [CBDB 中国历代人物传记资料库：李氏（577087）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=577087&o=json)
- [CBDB 中国历代人物传记资料库：王益恭（22054）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22054&o=json)
