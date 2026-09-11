---
schema: wang-person/v1
id: p_sG13vw1kNPD6YQdSJvphMP
status: active
merged_into: null
display_name: 王鞏
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7RehG6KND5KqJqio6popGH
        subject_person_id: p_sG13vw1kNPD6YQdSJvphMP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鞏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7ros65FA3A38svkSNe3aG1
          claim_id: c_7RehG6KND5KqJqio6popGH
          source_id: s_Ayzqvoj4ipdd3E4jtbu56C
          stance: supports
          locator: CBDB:25487
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（25487）
          source: &a1
            id: s_Ayzqvoj4ipdd3E4jtbu56C
            source_type: api_record
            title: 中国历代人物传记资料库：王鞏（CBDB 25487）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25487&o=json
            external_identifier: CBDB:25487
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.911Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_65S7SDsGF1QeRwC76PbMRC
        subject_person_id: p_sG13vw1kNPD6YQdSJvphMP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sa8e2d2BfAkDzUbQvrp1u9
          claim_id: c_65S7SDsGF1QeRwC76PbMRC
          source_id: s_Ayzqvoj4ipdd3E4jtbu56C
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_2Ks3DcrJl6hSrM7FaXLqLY
        subject_person_id: p_axCoRmroTjkzfX75uM4WpN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_sG13vw1kNPD6YQdSJvphMP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VIRLn7SyDSPyMoOKFRl21i
          claim_id: c_2Ks3DcrJl6hSrM7FaXLqLY
          source_id: s_kA96DfK3aEnsCQqtSTpBUs
          stance: supports
          locator: CBDB 双向互证（子 王鞏 ⇄ 父 王光）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_kA96DfK3aEnsCQqtSTpBUs
            source_type: api_record
            title: 中国历代人物传记资料库：王光（CBDB 25486）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25486&o=json
            external_identifier: CBDB:25486
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.910Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_axCoRmroTjkzfX75uM4WpN
        status: active
        display_name: 王光
        merged_into_person_id: null
  children:
    - claim:
        id: c_h4kiUe7TmnPFhmBV8VFzBP
        subject_person_id: p_sG13vw1kNPD6YQdSJvphMP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mw1C15aFtzQ5L6FdHoKc5w
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_U649VKVz3WbDQfningk6aU
          claim_id: c_h4kiUe7TmnPFhmBV8VFzBP
          source_id: s_E54D4FbYErNXGZ2dXiHh6h
          stance: supports
          locator: CBDB 双向互证（父 王鞏 ⇄ 子 王俊民）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_E54D4FbYErNXGZ2dXiHh6h
            source_type: api_record
            title: 中国历代人物传记资料库：王俊民（CBDB 25488）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25488&o=json
            external_identifier: CBDB:25488
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.912Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_mw1C15aFtzQ5L6FdHoKc5w
        status: active
        display_name: 王俊民
        merged_into_person_id: null
    - claim:
        id: c_8QGMIGhxahDUL7U10FKrP2
        subject_person_id: p_sG13vw1kNPD6YQdSJvphMP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_S91UDmLopWwoam8e6F89Jc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iYP9wVSDircx_cn8MF4jE6
          claim_id: c_8QGMIGhxahDUL7U10FKrP2
          source_id: s_pUzhjajoLAKTyuZT2Q98QT
          stance: supports
          locator: CBDB 双向互证（父 王鞏 ⇄ 子 王俊彥）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_pUzhjajoLAKTyuZT2Q98QT
            source_type: api_record
            title: 中国历代人物传记资料库：王俊彥（CBDB 13476）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=13476&o=json
            external_identifier: CBDB:13476
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.619Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_S91UDmLopWwoam8e6F89Jc
        status: active
        display_name: 王俊彥
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王鞏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鞏 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_axCoRmroTjkzfX75uM4WpN | 王光 | accepted |
| children | p_mw1C15aFtzQ5L6FdHoKc5w | 王俊民 | accepted |
| children | p_S91UDmLopWwoam8e6F89Jc | 王俊彥 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鞏（CBDB 25487）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25487&o=json)
- [中国历代人物传记资料库：王光（CBDB 25486）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25486&o=json)
- [中国历代人物传记资料库：王俊民（CBDB 25488）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25488&o=json)
- [中国历代人物传记资料库：王俊彥（CBDB 13476）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=13476&o=json)
