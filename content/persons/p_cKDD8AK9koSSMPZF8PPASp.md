---
schema: wang-person/v1
id: p_cKDD8AK9koSSMPZF8PPASp
status: active
merged_into: null
display_name: 王性
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AUuyCEB28ZkJKv7GMQNKKA
        subject_person_id: p_cKDD8AK9koSSMPZF8PPASp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王性
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gjJUWDit4hM3EsCDb5ZWaG
          claim_id: c_AUuyCEB28ZkJKv7GMQNKKA
          source_id: s_5LajJBdsBoYKnCt74bjUWn
          stance: supports
          locator: CBDB:254342
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（254342）
          source: &a1
            id: s_5LajJBdsBoYKnCt74bjUWn
            source_type: api_record
            title: 中国历代人物传记资料库：王性（CBDB 254342）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=254342&o=json
            external_identifier: CBDB:254342
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.322Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FGTwxVdoUL1RSdgXeFqum3
        subject_person_id: p_cKDD8AK9koSSMPZF8PPASp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王性，明人物。建文二年殿試進士，籍贯懷寧。（中国历代人物传记资料库 CBDB 254342）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0tsLbbpbzqjjfmjxs3vQH7
          claim_id: c_FGTwxVdoUL1RSdgXeFqum3
          source_id: s_5LajJBdsBoYKnCt74bjUWn
          stance: supports
          locator: CBDB:254342
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Z8x1ZaWmdLpzRUGyz9Au_W
        subject_person_id: p_Y3wRCa6Nb255jiaw4aNbxF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cKDD8AK9koSSMPZF8PPASp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KpAS7uxtJnChJsw7MniQWa
          claim_id: c_Z8x1ZaWmdLpzRUGyz9Au_W
          source_id: s_KRH654eUgQQraTyA6AXLU0
          stance: supports
          locator: CBDB：兄弟 王彝（200153）之父／母 王仕亨
          quotation: null
          interpretation_note: 由兄弟关系推断：王性 与 王彝 为同胞（CBDB 记「兄」），王彝 之父／母即 王性 之父／母。
          source:
            id: s_KRH654eUgQQraTyA6AXLU0
            source_type: api_record
            title: 中国历代人物传记资料库：王性（CBDB 254342）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=254342&o=json
            external_identifier: CBDB:254342
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Y3wRCa6Nb255jiaw4aNbxF
        status: active
        display_name: 王仕亨
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_FO-O91SAprn31BTNSaJHja
        subject_person_id: p_cKDD8AK9koSSMPZF8PPASp
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_jHwZfHWM4vMLPpm1ZfMXFt
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XlaM665Hz2NKLZbzOoKWJs
          claim_id: c_FO-O91SAprn31BTNSaJHja
          source_id: s_KRH654eUgQQraTyA6AXLU0
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200153 王彝）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_KRH654eUgQQraTyA6AXLU0
            source_type: api_record
            title: 中国历代人物传记资料库：王性（CBDB 254342）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=254342&o=json
            external_identifier: CBDB:254342
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_jHwZfHWM4vMLPpm1ZfMXFt
        status: active
        display_name: 王彝
        merged_into_person_id: null
---

# 王性

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王性 | accepted |
| bio.summary | 王性，明人物。建文二年殿試進士，籍贯懷寧。（中国历代人物传记资料库 CBDB 254342） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Y3wRCa6Nb255jiaw4aNbxF | 王仕亨 | accepted |
| other | p_jHwZfHWM4vMLPpm1ZfMXFt | 王彝 | accepted |

## 外部来源

- [中国历代人物传记资料库：王性（CBDB 254342）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=254342&o=json)
