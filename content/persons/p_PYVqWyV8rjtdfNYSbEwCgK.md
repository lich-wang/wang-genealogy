---
schema: wang-person/v1
id: p_PYVqWyV8rjtdfNYSbEwCgK
status: active
merged_into: null
display_name: 王筠
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Y5NvxBXk3564qqsjX3FqmZ
        subject_person_id: p_PYVqWyV8rjtdfNYSbEwCgK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王筠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6oGoRjx8cA7ktsGhi644X6
          claim_id: c_Y5NvxBXk3564qqsjX3FqmZ
          source_id: s_gY11HDxME3tZxamtTgMurG
          stance: supports
          locator: CBDB:35039
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（35039）
          source: &a1
            id: s_gY11HDxME3tZxamtTgMurG
            source_type: api_record
            title: 中国历代人物传记资料库：王筠（CBDB 35039）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35039&o=json
            external_identifier: CBDB:35039
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.104Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_BTDGsFP7Nz84MHsr5jS6FQ
        subject_person_id: p_PYVqWyV8rjtdfNYSbEwCgK
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1784年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PT7QbcgFzJ18ELwH5nBLEg
          claim_id: c_BTDGsFP7Nz84MHsr5jS6FQ
          source_id: s_gY11HDxME3tZxamtTgMurG
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_KMGAgZmdSFzYncYJMx5zcT
        subject_person_id: p_PYVqWyV8rjtdfNYSbEwCgK
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1854年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RDSQRo9sRtxtcdcMcVPd5i
          claim_id: c_KMGAgZmdSFzYncYJMx5zcT
          source_id: s_gY11HDxME3tZxamtTgMurG
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7AABLowgU243wCUf3GktGM
        subject_person_id: p_PYVqWyV8rjtdfNYSbEwCgK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王筠（1784年—1854年），清人物。籍贯安邱，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 35039）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tnpblLLWYJ3MqVYrd5NTj-
          claim_id: c_7AABLowgU243wCUf3GktGM
          source_id: s_gY11HDxME3tZxamtTgMurG
          stance: supports
          locator: CBDB:35039
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_owezUOtEYaVnI2w1TbMgBT
        subject_person_id: p_9at3GZ21HMCWweDrYG8Wky
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PYVqWyV8rjtdfNYSbEwCgK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0uYKkBh1Hg3h9BancO9dch
          claim_id: c_owezUOtEYaVnI2w1TbMgBT
          source_id: s_oPPXjNK14vWX5soeah2oDz
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13138：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_oPPXjNK14vWX5soeah2oDz
            source_type: api_record
            title: 中国历代人物传记资料库：王馭超（CBDB 526959）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526959&o=json
            external_identifier: CBDB:526959
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.318Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_9at3GZ21HMCWweDrYG8Wky
        status: active
        display_name: 王馭超
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王筠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王筠 | accepted |
| birth.date | 1784年 | accepted |
| death.date | 1854年 | accepted |
| bio.summary | 王筠（1784年—1854年），清人物。籍贯安邱，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 35039） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_9at3GZ21HMCWweDrYG8Wky | 王馭超 | accepted |

## 外部来源

- [中国历代人物传记资料库：王馭超（CBDB 526959）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526959&o=json)
- [中国历代人物传记资料库：王筠（CBDB 35039）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35039&o=json)
