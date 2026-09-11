---
schema: wang-person/v1
id: p_KTF8TNqVhiVNBbLepsymBT
status: active
merged_into: null
display_name: 王錦
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HrGG7wQM26j9cUHL1Mb8Km
        subject_person_id: p_KTF8TNqVhiVNBbLepsymBT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MsBAazmBUY1AKKBMj6vJ3X
          claim_id: c_HrGG7wQM26j9cUHL1Mb8Km
          source_id: s_oE6Q8wGi8DSc2mrPwnubL2
          stance: supports
          locator: CBDB:530907
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（530907）
          source: &a1
            id: s_oE6Q8wGi8DSc2mrPwnubL2
            source_type: api_record
            title: 中国历代人物传记资料库：王錦（CBDB 530907）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=530907&o=json
            external_identifier: CBDB:530907
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.352Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rftS1yGUU11VBBZ5H8fNpt
        subject_person_id: p_KTF8TNqVhiVNBbLepsymBT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qwL9Lcd9zykMVDDkA25wHx
          claim_id: c_rftS1yGUU11VBBZ5H8fNpt
          source_id: s_oE6Q8wGi8DSc2mrPwnubL2
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_nyxxtFxTaXqoMOKRTNt3tJ
        subject_person_id: p_KTF8TNqVhiVNBbLepsymBT
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cCbG7j4L7Kcp7a5jCGanCJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_g0lY-TKRtMFUpb8s3iaIlm
          claim_id: c_nyxxtFxTaXqoMOKRTNt3tJ
          source_id: s_hAVkJNoYUNAshPyNz7zPAe
          stance: supports
          locator: 武功縣後志，lgid=1045879：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_hAVkJNoYUNAshPyNz7zPAe
            source_type: api_record
            title: 中国历代人物传记资料库：王廷濟（CBDB 530909）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=530909&o=json
            external_identifier: CBDB:530909
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.356Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_cCbG7j4L7Kcp7a5jCGanCJ
        status: active
        display_name: 王廷濟
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_IZc2nXxLZQO-5O3BZD0z5K
        subject_person_id: p_KTF8TNqVhiVNBbLepsymBT
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_ftuX5MQdoXPyEcxF4b4iCt
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tW2iLXOoMBdGwtbisMBuRu
          claim_id: c_IZc2nXxLZQO-5O3BZD0z5K
          source_id: s_WcR-mvwzQE99kdqTddY_rK
          stance: supports
          locator: 武功縣後志，lgid=1045879：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_WcR-mvwzQE99kdqTddY_rK
            source_type: api_record
            title: 中国历代人物传记资料库：馬氏(王錦妻)（CBDB 530908）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=530908&o=json
            external_identifier: CBDB:530908
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ftuX5MQdoXPyEcxF4b4iCt
        status: active
        display_name: 馬氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王錦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王錦 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_cCbG7j4L7Kcp7a5jCGanCJ | 王廷濟 | accepted |
| spouses | p_ftuX5MQdoXPyEcxF4b4iCt | 馬氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：馬氏(王錦妻)（CBDB 530908）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=530908&o=json)
- [中国历代人物传记资料库：王錦（CBDB 530907）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=530907&o=json)
- [中国历代人物传记资料库：王廷濟（CBDB 530909）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=530909&o=json)
