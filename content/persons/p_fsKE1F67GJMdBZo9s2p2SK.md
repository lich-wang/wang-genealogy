---
schema: wang-person/v1
id: p_fsKE1F67GJMdBZo9s2p2SK
status: active
merged_into: null
display_name: 王俊民
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VR5jbtCyt9KUJVCnDNHmrF
        subject_person_id: p_fsKE1F67GJMdBZo9s2p2SK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俊民
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sE3iMREfkBsAGWxf6M5cv5
          claim_id: c_VR5jbtCyt9KUJVCnDNHmrF
          source_id: s_a9L2BZSEwbE5ZDKBXianno
          stance: supports
          locator: CBDB:229376
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（229376）
          source: &a1
            id: s_a9L2BZSEwbE5ZDKBXianno
            source_type: api_record
            title: 中国历代人物传记资料库：王俊民（CBDB 229376）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229376&o=json
            external_identifier: CBDB:229376
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.574Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_86HPNShLvEa96nAMH6KN8f
        subject_person_id: p_fsKE1F67GJMdBZo9s2p2SK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俊民，明人物。萬曆丙戌科進士進士，籍贯龍溪，入仕廩生。（中国历代人物传记资料库 CBDB 229376）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tG2Tdz6mv9ITmkl2qChvp1
          claim_id: c_86HPNShLvEa96nAMH6KN8f
          source_id: s_a9L2BZSEwbE5ZDKBXianno
          stance: supports
          locator: CBDB:229376
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_GuIoa9CsYOYOWuDrFaOHUo
        subject_person_id: p_fsKE1F67GJMdBZo9s2p2SK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_p7XKo89NhBCAZto4tXob1s
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZtmtabbPKpQ0EANc6v0naP
          claim_id: c_GuIoa9CsYOYOWuDrFaOHUo
          source_id: s_a9L2BZSEwbE5ZDKBXianno
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第二百五十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_p7XKo89NhBCAZto4tXob1s
        status: active
        display_name: 王希夔
        merged_into_person_id: null
    - claim:
        id: c_M5LH_t_MDIukgGY1dbFaV1
        subject_person_id: p_fsKE1F67GJMdBZo9s2p2SK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DPLB7GTcBTLEeL51Yhrdfa
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wy-tevla-iS0EG4NUMfx7M
          claim_id: c_M5LH_t_MDIukgGY1dbFaV1
          source_id: s_kAubSKIMyjN52k7Iqcz9fL
          stance: supports
          locator: CBDB：兄弟 王希夔（207197）之父／母 王俊民
          quotation: null
          interpretation_note: 由兄弟关系推断：王希稷 与 王希夔 为同胞（CBDB 记「兄」），王希夔 之父／母即 王希稷 之父／母。
          source:
            id: s_kAubSKIMyjN52k7Iqcz9fL
            source_type: api_record
            title: 中国历代人物传记资料库：王希稷（CBDB 229381）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229381&o=json
            external_identifier: CBDB:229381
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DPLB7GTcBTLEeL51Yhrdfa
        status: active
        display_name: 王希稷
        merged_into_person_id: null
    - claim:
        id: c_T7Q5Qu4i6vYqDwh1yNqT6-
        subject_person_id: p_fsKE1F67GJMdBZo9s2p2SK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_oWugPyGUAqLAbUqc22RLQq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_v-DRHJrwCo14F2-viPc6HG
          claim_id: c_T7Q5Qu4i6vYqDwh1yNqT6-
          source_id: s_LJcfKcqCF86In8M8YHaqb4
          stance: supports
          locator: CBDB：兄弟 王希夔（207197）之父／母 王俊民
          quotation: null
          interpretation_note: 由兄弟关系推断：王希召 与 王希夔 为同胞（CBDB 记「兄」），王希夔 之父／母即 王希召 之父／母。
          source:
            id: s_LJcfKcqCF86In8M8YHaqb4
            source_type: api_record
            title: 中国历代人物传记资料库：王希召（CBDB 229380）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229380&o=json
            external_identifier: CBDB:229380
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_oWugPyGUAqLAbUqc22RLQq
        status: active
        display_name: 王希召
        merged_into_person_id: null
    - claim:
        id: c_kyDmg98-Eo_yQar5RPpIUk
        subject_person_id: p_fsKE1F67GJMdBZo9s2p2SK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wV8pamxkJYQEijY58WsJFP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SkCNNKc73U0rfe_Ovb8X2T
          claim_id: c_kyDmg98-Eo_yQar5RPpIUk
          source_id: s_r03DFzz7yIjAP16wV9FrQL
          stance: supports
          locator: CBDB：兄弟 王希夔（207197）之父／母 王俊民
          quotation: null
          interpretation_note: 由兄弟关系推断：王希周 与 王希夔 为同胞（CBDB 记「兄」），王希夔 之父／母即 王希周 之父／母。
          source:
            id: s_r03DFzz7yIjAP16wV9FrQL
            source_type: api_record
            title: 中国历代人物传记资料库：王希周（CBDB 229379）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229379&o=json
            external_identifier: CBDB:229379
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_wV8pamxkJYQEijY58WsJFP
        status: active
        display_name: 王希周
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王俊民

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王俊民 | accepted |
| bio.summary | 王俊民，明人物。萬曆丙戌科進士進士，籍贯龍溪，入仕廩生。（中国历代人物传记资料库 CBDB 229376） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_p7XKo89NhBCAZto4tXob1s | 王希夔 | accepted |
| children | p_DPLB7GTcBTLEeL51Yhrdfa | 王希稷 | accepted |
| children | p_oWugPyGUAqLAbUqc22RLQq | 王希召 | accepted |
| children | p_wV8pamxkJYQEijY58WsJFP | 王希周 | accepted |

## 外部来源

- [中国历代人物传记资料库：王俊民（CBDB 229376）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229376&o=json)
- [中国历代人物传记资料库：王希稷（CBDB 229381）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229381&o=json)
- [中国历代人物传记资料库：王希召（CBDB 229380）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229380&o=json)
- [中国历代人物传记资料库：王希周（CBDB 229379）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229379&o=json)
