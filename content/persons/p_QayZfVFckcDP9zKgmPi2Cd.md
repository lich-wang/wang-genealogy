---
schema: wang-person/v1
id: p_QayZfVFckcDP9zKgmPi2Cd
status: active
merged_into: null
display_name: 王忠臣
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MiUCG7AAxfn84KEhymmwTP
        subject_person_id: p_QayZfVFckcDP9zKgmPi2Cd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王忠臣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BeuVHPmVHhSiBH6zdd3Baq
          claim_id: c_MiUCG7AAxfn84KEhymmwTP
          source_id: s_2HWpuaFw546gZnjweHHk21
          stance: supports
          locator: CBDB:297186
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（297186）
          source: &a1
            id: s_2HWpuaFw546gZnjweHHk21
            source_type: api_record
            title: 中国历代人物传记资料库：王忠臣（CBDB 297186）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297186&o=json
            external_identifier: CBDB:297186
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.553Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QznxvSGA8yk14xmbCMSMF2
        subject_person_id: p_QayZfVFckcDP9zKgmPi2Cd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王忠臣，明人物。嘉靖十四年進士，籍贯內江，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 297186）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GUcQee0RMLnpfdgAZLqCWp
          claim_id: c_QznxvSGA8yk14xmbCMSMF2
          source_id: s_2HWpuaFw546gZnjweHHk21
          stance: supports
          locator: CBDB:297186
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_suiaDzdqDDKhtyNXvERGfN
        subject_person_id: p_AHR15NKctLwCWm6W5TBJEq
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QayZfVFckcDP9zKgmPi2Cd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lA6SlFzXiEPo2p5uFiziqH
          claim_id: c_suiaDzdqDDKhtyNXvERGfN
          source_id: s_JdPKfjZ6z6el9URHjfSpEC
          stance: supports
          locator: CBDB：兄弟 王之臣（202945）之父／母 王一言
          quotation: null
          interpretation_note: 由兄弟关系推断：王忠臣 与 王之臣 为同胞（CBDB 记「弟」），王之臣 之父／母即 王忠臣 之父／母。
          source:
            id: s_JdPKfjZ6z6el9URHjfSpEC
            source_type: api_record
            title: 中国历代人物传记资料库：王忠臣（CBDB 297186）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297186&o=json
            external_identifier: CBDB:297186
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AHR15NKctLwCWm6W5TBJEq
        status: active
        display_name: 王一言
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Ft1h1IxucYC-7tlf54Xv77
        subject_person_id: p_DZwm7RH4zQwJTHWtWTtHUQ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_QayZfVFckcDP9zKgmPi2Cd
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4pKSqHMasDmw_D10nefF3F
          claim_id: c_Ft1h1IxucYC-7tlf54Xv77
          source_id: s_JdPKfjZ6z6el9URHjfSpEC
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202945 王之臣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_JdPKfjZ6z6el9URHjfSpEC
            source_type: api_record
            title: 中国历代人物传记资料库：王忠臣（CBDB 297186）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297186&o=json
            external_identifier: CBDB:297186
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DZwm7RH4zQwJTHWtWTtHUQ
        status: active
        display_name: 王之臣
        merged_into_person_id: null
---

# 王忠臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王忠臣 | accepted |
| bio.summary | 王忠臣，明人物。嘉靖十四年進士，籍贯內江，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 297186） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_AHR15NKctLwCWm6W5TBJEq | 王一言 | accepted |
| other | p_DZwm7RH4zQwJTHWtWTtHUQ | 王之臣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王忠臣（CBDB 297186）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297186&o=json)
