---
schema: wang-person/v1
id: p_LW3UVxWo4A6iYUVNb8CBgH
status: active
merged_into: null
display_name: 王觀
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_E1YKbD373Y3V8qDcJNcRMh
        subject_person_id: p_LW3UVxWo4A6iYUVNb8CBgH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王觀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RJvTZUPC72waM4m73dM8gK
          claim_id: c_E1YKbD373Y3V8qDcJNcRMh
          source_id: s_vS7x5ZQgmj1gD4VYYJh1UK
          stance: supports
          locator: CBDB:27693
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（27693）
          source: &a1
            id: s_vS7x5ZQgmj1gD4VYYJh1UK
            source_type: api_record
            title: 中国历代人物传记资料库：王觀（CBDB 27693）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=27693&o=json
            external_identifier: CBDB:27693
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.957Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vFLXHS5jPtPWfh9LCvHic1
        subject_person_id: p_LW3UVxWo4A6iYUVNb8CBgH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王觀，宋人物。籍贯如皋，入仕進士，曾任大理寺丞、翰林學士。（中国历代人物传记资料库 CBDB 27693）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_OBUrLPpTtCmhScLaoaq6ep
          claim_id: c_vFLXHS5jPtPWfh9LCvHic1
          source_id: s_vS7x5ZQgmj1gD4VYYJh1UK
          stance: supports
          locator: CBDB:27693
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_aQ0PmDHhCwchWARjG27pp9
        subject_person_id: p_b3oZxxFmxM1dmXgZ15xed3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LW3UVxWo4A6iYUVNb8CBgH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RLEVa1_Zhw1OMI1D2PmqiA
          claim_id: c_aQ0PmDHhCwchWARjG27pp9
          source_id: s_zpp8wAc2ooZgdV1J9riZFR
          stance: supports
          locator: CBDB 亲属：父（KinPerson 27692）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_zpp8wAc2ooZgdV1J9riZFR
            source_type: api_record
            title: 中国历代人物传记资料库：王觀（CBDB 27693）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=27693&o=json
            external_identifier: CBDB:27693
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_b3oZxxFmxM1dmXgZ15xed3
        status: active
        display_name: 王惟清
        merged_into_person_id: null
    - claim:
        id: c_LDIGW1H6a5w1mn94BJODly
        subject_person_id: p_35h7mJPKChFrvTfyadk1Fk
        claim_kind: relationship
        predicate: kinship.mother_of
        object_person_id: p_LW3UVxWo4A6iYUVNb8CBgH
        generation_count: null
        parent_role: mother
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_r-Ejgy62FwLBFZTMgcSkvL
          claim_id: c_LDIGW1H6a5w1mn94BJODly
          source_id: s_zpp8wAc2ooZgdV1J9riZFR
          stance: supports
          locator: CBDB 亲属：母（KinPerson 27700）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_zpp8wAc2ooZgdV1J9riZFR
            source_type: api_record
            title: 中国历代人物传记资料库：王觀（CBDB 27693）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=27693&o=json
            external_identifier: CBDB:27693
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_35h7mJPKChFrvTfyadk1Fk
        status: active
        display_name: 李仁用
        merged_into_person_id: null
  children:
    - claim:
        id: c_etwa8DZAwxOo0xWI8pfvCv
        subject_person_id: p_LW3UVxWo4A6iYUVNb8CBgH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_asj6oyZR1kWJFFyhpanMYg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mlgWWOKCbkbVQKrpscpYoz
          claim_id: c_etwa8DZAwxOo0xWI8pfvCv
          source_id: s_PeyGCzZusY1FYG7i0Vl2sX
          stance: supports
          locator: CBDB 亲属：父（KinPerson 27693）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_PeyGCzZusY1FYG7i0Vl2sX
            source_type: api_record
            title: 中国历代人物传记资料库：王譚（CBDB 27698）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=27698&o=json
            external_identifier: CBDB:27698
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_asj6oyZR1kWJFFyhpanMYg
        status: active
        display_name: 王譚
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王觀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王觀 | accepted |
| bio.summary | 王觀，宋人物。籍贯如皋，入仕進士，曾任大理寺丞、翰林學士。（中国历代人物传记资料库 CBDB 27693） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_b3oZxxFmxM1dmXgZ15xed3 | 王惟清 | accepted |
| parents | p_35h7mJPKChFrvTfyadk1Fk | 李仁用 | accepted |
| children | p_asj6oyZR1kWJFFyhpanMYg | 王譚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王觀（CBDB 27693）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=27693&o=json)
- [中国历代人物传记资料库：王譚（CBDB 27698）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=27698&o=json)
