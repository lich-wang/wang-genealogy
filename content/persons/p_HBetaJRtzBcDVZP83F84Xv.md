---
schema: wang-person/v1
id: p_HBetaJRtzBcDVZP83F84Xv
status: active
merged_into: null
display_name: 王稷時
cbdb_id: 265190
revision: 7
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gPBb7MJMLH7C6Ymiq11x4j
        subject_person_id: p_HBetaJRtzBcDVZP83F84Xv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王稷時，明人物。弘治六年進士，籍贯安福。（中国历代人物传记资料库 CBDB 265190）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_vgxz5tWphdR67iqYC8EkcV
          claim_id: c_gPBb7MJMLH7C6Ymiq11x4j
          source_id: s_RpnrzvCG7r9s79DTnUzPaZ
          stance: supports
          locator: CBDB:265190
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_RpnrzvCG7r9s79DTnUzPaZ
            source_type: api_record
            title: 中国历代人物传记资料库：王稷時（CBDB 265190）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265190&o=json
            external_identifier: CBDB:265190
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_f6dhPZtGDPb74TNh7P63A5
        subject_person_id: p_HBetaJRtzBcDVZP83F84Xv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王稷時
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_w2k1zwwCCMLFaGtLx7XiLG
          claim_id: c_f6dhPZtGDPb74TNh7P63A5
          source_id: s_RpnrzvCG7r9s79DTnUzPaZ
          stance: supports
          locator: CBDB:265190
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3101-3200）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_J1oCx30o7_wcO0ZPvuqo1U
        subject_person_id: p_HBetaJRtzBcDVZP83F84Xv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cF1tS83LboioMzgPkBhT2W
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6YkpbBiLPcLYgQhxZikE0V
          claim_id: c_J1oCx30o7_wcO0ZPvuqo1U
          source_id: s_ycBjaLSCwSA1EL2RDVdTj2
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第四十八名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ycBjaLSCwSA1EL2RDVdTj2
            source_type: api_record
            title: 中国历代人物传记资料库：王選（CBDB 200963）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200963&o=json
            external_identifier: CBDB:200963
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.645Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_cF1tS83LboioMzgPkBhT2W
        status: active
        display_name: 王選
        merged_into_person_id: null
    - claim:
        id: c__qj_RaghJ8dlzWOtCXHx3V
        subject_person_id: p_HBetaJRtzBcDVZP83F84Xv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7Cc66bdBJQ3sLv7aofmVb1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_M1BvYMY-uN80C6eg4EL1-Z
          claim_id: c__qj_RaghJ8dlzWOtCXHx3V
          source_id: s_jYiLPDpRdUbPpbVAlfWuGN
          stance: supports
          locator: CBDB：兄弟 王選（200963）之父／母 王稷時
          quotation: null
          interpretation_note: 由兄弟关系推断：王慎德 与 王選 为同胞（CBDB 记「兄」），王選 之父／母即 王慎德 之父／母。
          source:
            id: s_jYiLPDpRdUbPpbVAlfWuGN
            source_type: api_record
            title: 中国历代人物传记资料库：王慎德（CBDB 265199）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265199&o=json
            external_identifier: CBDB:265199
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7Cc66bdBJQ3sLv7aofmVb1
        status: active
        display_name: 王慎德
        merged_into_person_id: null
    - claim:
        id: c_IvVGEsSlM3DxMgx86haN15
        subject_person_id: p_HBetaJRtzBcDVZP83F84Xv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LD36WZHMBRnFYN8hscJDei
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2z7vqLzIAkdokHZCWKrDQh
          claim_id: c_IvVGEsSlM3DxMgx86haN15
          source_id: s_VbZ95_4_k4rpJTSMNqEs_x
          stance: supports
          locator: CBDB：兄弟 王選（200963）之父／母 王稷時
          quotation: null
          interpretation_note: 由兄弟关系推断：王慎興 与 王選 为同胞（CBDB 记「兄」），王選 之父／母即 王慎興 之父／母。
          source:
            id: s_VbZ95_4_k4rpJTSMNqEs_x
            source_type: api_record
            title: 中国历代人物传记资料库：王慎興（CBDB 265196）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265196&o=json
            external_identifier: CBDB:265196
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_LD36WZHMBRnFYN8hscJDei
        status: active
        display_name: 王慎興
        merged_into_person_id: null
    - claim:
        id: c_c7nWLOhQ4YlYD6HeZADaMQ
        subject_person_id: p_HBetaJRtzBcDVZP83F84Xv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NH6BiUfH5S15SwkDQswbsT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pZmzAVi-U_WiS3IbSiXLo8
          claim_id: c_c7nWLOhQ4YlYD6HeZADaMQ
          source_id: s_2rlUEmFgFCI2gK8Tpl4bRM
          stance: supports
          locator: CBDB：兄弟 王選（200963）之父／母 王稷時
          quotation: null
          interpretation_note: 由兄弟关系推断：王慎思 与 王選 为同胞（CBDB 记「兄」），王選 之父／母即 王慎思 之父／母。
          source:
            id: s_2rlUEmFgFCI2gK8Tpl4bRM
            source_type: api_record
            title: 中国历代人物传记资料库：王慎思（CBDB 265197）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265197&o=json
            external_identifier: CBDB:265197
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NH6BiUfH5S15SwkDQswbsT
        status: active
        display_name: 王慎思
        merged_into_person_id: null
    - claim:
        id: c_kt-LwDtFzWHX7u_XgaQdsR
        subject_person_id: p_HBetaJRtzBcDVZP83F84Xv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wdjjie2PDJJGoz9kjqhDt7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_k0bPwl6dd0SIaj2sW1Ejot
          claim_id: c_kt-LwDtFzWHX7u_XgaQdsR
          source_id: s_2_6xo2UJMXERx3cgGv9Z_H
          stance: supports
          locator: CBDB：兄弟 王選（200963）之父／母 王稷時
          quotation: null
          interpretation_note: 由兄弟关系推断：王慎終 与 王選 为同胞（CBDB 记「兄」），王選 之父／母即 王慎終 之父／母。
          source:
            id: s_2_6xo2UJMXERx3cgGv9Z_H
            source_type: api_record
            title: 中国历代人物传记资料库：王慎終（CBDB 265200）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265200&o=json
            external_identifier: CBDB:265200
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_wdjjie2PDJJGoz9kjqhDt7
        status: active
        display_name: 王慎終
        merged_into_person_id: null
    - claim:
        id: c_YBKNpy3XgqTdg4bPTMj6iT
        subject_person_id: p_HBetaJRtzBcDVZP83F84Xv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xDeb2HyYf12rssAwch9KJo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OBVE30hppl3Q45OYGE7Iop
          claim_id: c_YBKNpy3XgqTdg4bPTMj6iT
          source_id: s_tly7sHishGdRuFzl29j0tN
          stance: supports
          locator: CBDB：兄弟 王選（200963）之父／母 王稷時
          quotation: null
          interpretation_note: 由兄弟关系推断：王慎獨 与 王選 为同胞（CBDB 记「兄」），王選 之父／母即 王慎獨 之父／母。
          source:
            id: s_tly7sHishGdRuFzl29j0tN
            source_type: api_record
            title: 中国历代人物传记资料库：王慎獨（CBDB 265198）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265198&o=json
            external_identifier: CBDB:265198
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_xDeb2HyYf12rssAwch9KJo
        status: active
        display_name: 王慎獨
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王稷時

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王稷時，明人物。弘治六年進士，籍贯安福。（中国历代人物传记资料库 CBDB 265190） | accepted |
| name.primary | 王稷時 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_cF1tS83LboioMzgPkBhT2W | 王選 | accepted |
| children | p_7Cc66bdBJQ3sLv7aofmVb1 | 王慎德 | accepted |
| children | p_LD36WZHMBRnFYN8hscJDei | 王慎興 | accepted |
| children | p_NH6BiUfH5S15SwkDQswbsT | 王慎思 | accepted |
| children | p_wdjjie2PDJJGoz9kjqhDt7 | 王慎終 | accepted |
| children | p_xDeb2HyYf12rssAwch9KJo | 王慎獨 | accepted |

## 外部来源

- [中国历代人物传记资料库：王稷時（CBDB 265190）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265190&o=json)
- [中国历代人物传记资料库：王慎德（CBDB 265199）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265199&o=json)
- [中国历代人物传记资料库：王慎獨（CBDB 265198）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265198&o=json)
- [中国历代人物传记资料库：王慎思（CBDB 265197）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265197&o=json)
- [中国历代人物传记资料库：王慎興（CBDB 265196）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265196&o=json)
- [中国历代人物传记资料库：王慎終（CBDB 265200）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265200&o=json)
- [中国历代人物传记资料库：王選（CBDB 200963）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200963&o=json)
