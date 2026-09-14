---
schema: wang-person/v1
id: p_qXHjyf2dHVQ28WyLS2CsBC
status: active
merged_into: null
display_name: 王施仁
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_c7Gy77P3WsUjRZeV2FyFQT
        subject_person_id: p_qXHjyf2dHVQ28WyLS2CsBC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王施仁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TnuxoowSGXA6HxXhAkCFPv
          claim_id: c_c7Gy77P3WsUjRZeV2FyFQT
          source_id: s_GVuLk9s6jwQ9YDJHSp4p8L
          stance: supports
          locator: CBDB:221777
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（221777）
          source: &a1
            id: s_GVuLk9s6jwQ9YDJHSp4p8L
            source_type: api_record
            title: 中国历代人物传记资料库：王施仁（CBDB 221777）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221777&o=json
            external_identifier: CBDB:221777
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.342Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hdVwe5YjqQGcsATVRxQLBK
        subject_person_id: p_qXHjyf2dHVQ28WyLS2CsBC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王施仁，明人物。萬曆八年進士，籍贯滄州。（中国历代人物传记资料库 CBDB 221777）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rIOHTlkax7smk2tV1-89uO
          claim_id: c_hdVwe5YjqQGcsATVRxQLBK
          source_id: s_GVuLk9s6jwQ9YDJHSp4p8L
          stance: supports
          locator: CBDB:221777
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_g7OQGh-3EZxVCprvhJfZWe
        subject_person_id: p_yzyPEUAYsfL49q52tBj1kq
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qXHjyf2dHVQ28WyLS2CsBC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__wZK4ga5-USszze7S8w5m5
          claim_id: c_g7OQGh-3EZxVCprvhJfZWe
          source_id: s_GOt7pACmwmW_rysqiNnmeK
          stance: supports
          locator: CBDB：兄弟 王顯仁（206702）之父／母 王用中
          quotation: null
          interpretation_note: 由兄弟关系推断：王施仁 与 王顯仁 为同胞（CBDB 记「兄」），王顯仁 之父／母即 王施仁 之父／母。
          source:
            id: s_GOt7pACmwmW_rysqiNnmeK
            source_type: api_record
            title: 中国历代人物传记资料库：王施仁（CBDB 221777）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221777&o=json
            external_identifier: CBDB:221777
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_yzyPEUAYsfL49q52tBj1kq
        status: active
        display_name: 王用中
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_z-KZLAi-lDyy91EvVdH67V
        subject_person_id: p_88N8F7QC67BDANQ41w4EaZ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_qXHjyf2dHVQ28WyLS2CsBC
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jUWQaIj-tRHjO-j3W1eIVT
          claim_id: c_z-KZLAi-lDyy91EvVdH67V
          source_id: s_GOt7pACmwmW_rysqiNnmeK
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206702 王顯仁）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_GOt7pACmwmW_rysqiNnmeK
            source_type: api_record
            title: 中国历代人物传记资料库：王施仁（CBDB 221777）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221777&o=json
            external_identifier: CBDB:221777
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_88N8F7QC67BDANQ41w4EaZ
        status: active
        display_name: 王顯仁
        merged_into_person_id: null
---

# 王施仁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王施仁 | accepted |
| bio.summary | 王施仁，明人物。萬曆八年進士，籍贯滄州。（中国历代人物传记资料库 CBDB 221777） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_yzyPEUAYsfL49q52tBj1kq | 王用中 | accepted |
| other | p_88N8F7QC67BDANQ41w4EaZ | 王顯仁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王施仁（CBDB 221777）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221777&o=json)
