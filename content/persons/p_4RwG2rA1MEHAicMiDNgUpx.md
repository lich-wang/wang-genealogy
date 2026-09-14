---
schema: wang-person/v1
id: p_4RwG2rA1MEHAicMiDNgUpx
status: active
merged_into: null
display_name: 王應鍾
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WxweJCLF5U1WVypZ9fJVvV
        subject_person_id: p_4RwG2rA1MEHAicMiDNgUpx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應鍾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GDw3uMYdLL7eyeYdYjSYfx
          claim_id: c_WxweJCLF5U1WVypZ9fJVvV
          source_id: s_yjKbhtLtGGzPWf8nP7Mhbh
          stance: supports
          locator: CBDB:312620
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（312620）
          source: &a1
            id: s_yjKbhtLtGGzPWf8nP7Mhbh
            source_type: api_record
            title: 中国历代人物传记资料库：王應鍾（CBDB 312620）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312620&o=json
            external_identifier: CBDB:312620
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.873Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ASd8VgFtMFLwkroNRwaytJ
        subject_person_id: p_4RwG2rA1MEHAicMiDNgUpx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應鍾，明人物。嘉靖二十九年進士，籍贯侯官，曾任監察御史。（中国历代人物传记资料库 CBDB 312620）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xYGn8DzbqAOs4biUwmH1nl
          claim_id: c_ASd8VgFtMFLwkroNRwaytJ
          source_id: s_yjKbhtLtGGzPWf8nP7Mhbh
          stance: supports
          locator: CBDB:312620
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_WwbV1nYXBe5JhAVGzPGD0N
        subject_person_id: p_sMKHNsqNCt9mBLSW4zbVG6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4RwG2rA1MEHAicMiDNgUpx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_07KB1ybi-DwvsJyqrG0Yof
          claim_id: c_WwbV1nYXBe5JhAVGzPGD0N
          source_id: s_bI6Jv9L3ogVPH0K9n8epgX
          stance: supports
          locator: CBDB：兄弟 王應時（203967）之父／母 王容
          quotation: null
          interpretation_note: 由兄弟关系推断：王應鍾 与 王應時 为同胞（CBDB 记「弟」），王應時 之父／母即 王應鍾 之父／母。
          source:
            id: s_bI6Jv9L3ogVPH0K9n8epgX
            source_type: api_record
            title: 中国历代人物传记资料库：王應鍾（CBDB 312620）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312620&o=json
            external_identifier: CBDB:312620
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_sMKHNsqNCt9mBLSW4zbVG6
        status: active
        display_name: 王容
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_0n-fSZ2_P2m_LA-87W7V4I
        subject_person_id: p_4RwG2rA1MEHAicMiDNgUpx
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_rJtRxxSC69LmdREGcBhbeB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EIt3eYTLFicgXWDYZSYat3
          claim_id: c_0n-fSZ2_P2m_LA-87W7V4I
          source_id: s_bI6Jv9L3ogVPH0K9n8epgX
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 203967 王應時）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_bI6Jv9L3ogVPH0K9n8epgX
            source_type: api_record
            title: 中国历代人物传记资料库：王應鍾（CBDB 312620）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312620&o=json
            external_identifier: CBDB:312620
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rJtRxxSC69LmdREGcBhbeB
        status: active
        display_name: 王應時
        merged_into_person_id: null
---

# 王應鍾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應鍾 | accepted |
| bio.summary | 王應鍾，明人物。嘉靖二十九年進士，籍贯侯官，曾任監察御史。（中国历代人物传记资料库 CBDB 312620） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_sMKHNsqNCt9mBLSW4zbVG6 | 王容 | accepted |
| other | p_rJtRxxSC69LmdREGcBhbeB | 王應時 | accepted |

## 外部来源

- [中国历代人物传记资料库：王應鍾（CBDB 312620）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312620&o=json)
