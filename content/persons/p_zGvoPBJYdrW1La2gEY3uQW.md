---
schema: wang-person/v1
id: p_zGvoPBJYdrW1La2gEY3uQW
status: active
merged_into: null
display_name: 王遵業
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ndai2KreXUdGokiU9585Cy
        subject_person_id: p_zGvoPBJYdrW1La2gEY3uQW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遵業
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_i7QJhxxf5e3t1fUZ7HmVxU
          claim_id: c_Ndai2KreXUdGokiU9585Cy
          source_id: s_UBaGrztP65fE9MgxgVB4Zw
          stance: supports
          locator: CBDB:175698
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175698）
          source: &a1
            id: s_UBaGrztP65fE9MgxgVB4Zw
            source_type: api_record
            title: 中国历代人物传记资料库：王遵業（CBDB 175698）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175698&o=json
            external_identifier: CBDB:175698
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.063Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_e7rqEhuqUd2iEWduWQ17F2
        subject_person_id: p_zGvoPBJYdrW1La2gEY3uQW
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 510年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7S3u6CMYN4bbMDRPek3d1W
          claim_id: c_e7rqEhuqUd2iEWduWQ17F2
          source_id: s_UBaGrztP65fE9MgxgVB4Zw
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
        id: c_AsYvg72F4jQMB58sppeD2c
        subject_person_id: p_zGvoPBJYdrW1La2gEY3uQW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为南北朝人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uUKNe45V17Jk56ijNBB9ta
          claim_id: c_AsYvg72F4jQMB58sppeD2c
          source_id: s_UBaGrztP65fE9MgxgVB4Zw
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
        id: c_LqSLzTNeRSO9ZkN7Zi7XVc
        subject_person_id: p_XYgRDTMQMKLwMjzmrS4u9S
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zGvoPBJYdrW1La2gEY3uQW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_b5GnLs8KhKLZWQ_9w4Me4W
          claim_id: c_LqSLzTNeRSO9ZkN7Zi7XVc
          source_id: s_7pwdxXmyoz1AKHuC8L9wQ3
          stance: supports
          locator: CBDB 双向互证（子 王遵業 ⇄ 父 王神念）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_7pwdxXmyoz1AKHuC8L9wQ3
            source_type: api_record
            title: 中国历代人物传记资料库：王神念（CBDB 175838）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175838&o=json
            external_identifier: CBDB:175838
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.155Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_XYgRDTMQMKLwMjzmrS4u9S
        status: active
        display_name: 王神念
        merged_into_person_id: null
  children:
    - claim:
        id: c_2exyF8EbKiPh9f7NiqMpOR
        subject_person_id: p_zGvoPBJYdrW1La2gEY3uQW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gUjBJ2deoD1JeZhhoEV5Jf
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gQFvpRC04PeISCpE2GaLUM
          claim_id: c_2exyF8EbKiPh9f7NiqMpOR
          source_id: s_LP7xdaTVBY6aq6guQLybLr
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_LP7xdaTVBY6aq6guQLybLr
            source_type: api_record
            title: 中国历代人物传记资料库：王長明（CBDB 175699）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175699&o=json
            external_identifier: CBDB:175699
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.247Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_gUjBJ2deoD1JeZhhoEV5Jf
        status: active
        display_name: 王長明
        merged_into_person_id: null
    - claim:
        id: c_PMAFZ7MbYtRehtuKKFhaMI
        subject_person_id: p_zGvoPBJYdrW1La2gEY3uQW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WPVAqcRtnt1HvYAsfmkMSQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GFwcmsFtl8tn56Me_rnVcM
          claim_id: c_PMAFZ7MbYtRehtuKKFhaMI
          source_id: s_NDQ1uJirCp5rSA1AZQEKJ8
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_NDQ1uJirCp5rSA1AZQEKJ8
            source_type: api_record
            title: 中国历代人物传记资料库：王松年（CBDB 175700）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175700&o=json
            external_identifier: CBDB:175700
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.063Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_WPVAqcRtnt1HvYAsfmkMSQ
        status: active
        display_name: 王松年
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王遵業

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王遵業 | accepted |
| death.date | 510年 | accepted |
| bio.summary | CBDB 记载为南北朝人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_XYgRDTMQMKLwMjzmrS4u9S | 王神念 | accepted |
| children | p_gUjBJ2deoD1JeZhhoEV5Jf | 王長明 | accepted |
| children | p_WPVAqcRtnt1HvYAsfmkMSQ | 王松年 | accepted |

## 外部来源

- [中国历代人物传记资料库：王神念（CBDB 175838）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175838&o=json)
- [中国历代人物传记资料库：王松年（CBDB 175700）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175700&o=json)
- [中国历代人物传记资料库：王長明（CBDB 175699）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175699&o=json)
- [中国历代人物传记资料库：王遵業（CBDB 175698）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175698&o=json)
