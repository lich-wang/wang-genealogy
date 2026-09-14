---
schema: wang-person/v1
id: p_RsX3Wf6p4rAM8SdmNchmQR
status: active
merged_into: null
display_name: 王德宣
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_65uqgsLADUg64sFJ1C9fzh
        subject_person_id: p_RsX3Wf6p4rAM8SdmNchmQR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德宣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Y7fnL2PkMvJQA9862K23eH
          claim_id: c_65uqgsLADUg64sFJ1C9fzh
          source_id: s_nXYDBduBne5M29HuzunzUB
          stance: supports
          locator: CBDB:218713
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（218713）
          source: &a1
            id: s_nXYDBduBne5M29HuzunzUB
            source_type: api_record
            title: 中国历代人物传记资料库：王德宣（CBDB 218713）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=218713&o=json
            external_identifier: CBDB:218713
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.275Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GPRzv89rHvPW5x2RnHVfYP
        subject_person_id: p_RsX3Wf6p4rAM8SdmNchmQR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德宣，明人物。萬曆八年進士，籍贯安福。（中国历代人物传记资料库 CBDB 218713）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_i4FfH9ppL2yjpFF8-ohxnC
          claim_id: c_GPRzv89rHvPW5x2RnHVfYP
          source_id: s_nXYDBduBne5M29HuzunzUB
          stance: supports
          locator: CBDB:218713
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_2pwXxzdJgpyiERfTxhfG9T
        subject_person_id: p_heKv1Lrv2nNs2FP242e8RP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RsX3Wf6p4rAM8SdmNchmQR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qKZce74jAHM4Bl_urb65DT
          claim_id: c_2pwXxzdJgpyiERfTxhfG9T
          source_id: s_5W3wzEYhkThsOnWTZvEAag
          stance: supports
          locator: CBDB：兄弟 王德新（126819）之父／母 王士望
          quotation: null
          interpretation_note: 由兄弟关系推断：王德宣 与 王德新 为同胞（CBDB 记「兄」），王德新 之父／母即 王德宣 之父／母。
          source:
            id: s_5W3wzEYhkThsOnWTZvEAag
            source_type: api_record
            title: 中国历代人物传记资料库：王德宣（CBDB 218713）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=218713&o=json
            external_identifier: CBDB:218713
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_heKv1Lrv2nNs2FP242e8RP
        status: active
        display_name: 王士望
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_-9wC2ZR4WvwaEQyMSqd27s
        subject_person_id: p_P62PwvTysFNxEPkUXBg1Fm
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_RsX3Wf6p4rAM8SdmNchmQR
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KYzM9E9YhFCAyY-Ki7LnMu
          claim_id: c_-9wC2ZR4WvwaEQyMSqd27s
          source_id: s_5W3wzEYhkThsOnWTZvEAag
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126819 王德新）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_5W3wzEYhkThsOnWTZvEAag
            source_type: api_record
            title: 中国历代人物传记资料库：王德宣（CBDB 218713）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=218713&o=json
            external_identifier: CBDB:218713
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_P62PwvTysFNxEPkUXBg1Fm
        status: active
        display_name: 王德新
        merged_into_person_id: null
---

# 王德宣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王德宣 | accepted |
| bio.summary | 王德宣，明人物。萬曆八年進士，籍贯安福。（中国历代人物传记资料库 CBDB 218713） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_heKv1Lrv2nNs2FP242e8RP | 王士望 | accepted |
| other | p_P62PwvTysFNxEPkUXBg1Fm | 王德新 | accepted |

## 外部来源

- [中国历代人物传记资料库：王德宣（CBDB 218713）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=218713&o=json)
