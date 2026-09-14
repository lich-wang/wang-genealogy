---
schema: wang-person/v1
id: p_hdA2EX5rq1DHua8Wnk5XqK
status: active
merged_into: null
display_name: 王鉅
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GcdYJJwjPK9FYsASwEJSH9
        subject_person_id: p_hdA2EX5rq1DHua8Wnk5XqK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鉅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_64PR5yg4RpkjMs6zUa9hiL
          claim_id: c_GcdYJJwjPK9FYsASwEJSH9
          source_id: s_UEWpGjBMG8mpTrFMd5NdKQ
          stance: supports
          locator: CBDB:202468
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（202468）
          source: &a1
            id: s_UEWpGjBMG8mpTrFMd5NdKQ
            source_type: api_record
            title: 中国历代人物传记资料库：王鉅（CBDB 202468）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202468&o=json
            external_identifier: CBDB:202468
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.743Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_8QJeG2TrL4W4AuYwhLbLVX
        subject_person_id: p_hdA2EX5rq1DHua8Wnk5XqK
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1490年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_h9jWLSSoZXXkANJr2A4Dy2
          claim_id: c_8QJeG2TrL4W4AuYwhLbLVX
          source_id: s_UEWpGjBMG8mpTrFMd5NdKQ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_83WuuEZzT2Yn5mpZkp7zMt
        subject_person_id: p_hdA2EX5rq1DHua8Wnk5XqK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鉅（生于1490年），明人物。明清進士進士，籍贯婺源，入仕進士，曾任府通判、府同知、刑部主事。（中国历代人物传记资料库 CBDB 202468）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ib6Itm39evzf1eBQgopVdh
          claim_id: c_83WuuEZzT2Yn5mpZkp7zMt
          source_id: s_UEWpGjBMG8mpTrFMd5NdKQ
          stance: supports
          locator: CBDB:202468
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_LPOdOI1AIbj2WlaTIwpeyO
        subject_person_id: p_BnBLKLfaqxcVPEz4Mit3Zc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hdA2EX5rq1DHua8Wnk5XqK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yiBWk3kt22w7MVN_EY76ck
          claim_id: c_LPOdOI1AIbj2WlaTIwpeyO
          source_id: s_UEWpGjBMG8mpTrFMd5NdKQ
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第三甲第三十一名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_BnBLKLfaqxcVPEz4Mit3Zc
        status: active
        display_name: 王齊玉
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_QzndNh1Td7pMFlqi3N3-yP
        subject_person_id: p_hdA2EX5rq1DHua8Wnk5XqK
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_1VGuJ3rY25cSKsnvPmgprM
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fIRSxAdqNYgJ5r6NUxOZ58
          claim_id: c_QzndNh1Td7pMFlqi3N3-yP
          source_id: s_qGcvbckta1llcewuaSjT0H
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第三甲第三十一名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_qGcvbckta1llcewuaSjT0H
            source_type: api_record
            title: 中国历代人物传记资料库：程氏(王鉅妻)（CBDB 288685）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288685&o=json
            external_identifier: CBDB:288685
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1VGuJ3rY25cSKsnvPmgprM
        status: active
        display_name: 程氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_WPWkgsNX9CqyT-Hd8vR9qc
        subject_person_id: p_Wa16TzeejBWNkkMC2TRyMt
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_hdA2EX5rq1DHua8Wnk5XqK
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TtYJGCYPu4hyD8Y8epg7vF
          claim_id: c_WPWkgsNX9CqyT-Hd8vR9qc
          source_id: s_UEWpGjBMG8mpTrFMd5NdKQ
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第三甲第三十一名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Wa16TzeejBWNkkMC2TRyMt
        status: active
        display_name: 王文亨
        merged_into_person_id: null
    - claim:
        id: c_b8Tuw4v8bct5muD23fYRGU
        subject_person_id: p_Wo85NXF7XW2GQNrLCR4xWi
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_hdA2EX5rq1DHua8Wnk5XqK
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__kKH7_vyx-MqDMOCsodPz4
          claim_id: c_b8Tuw4v8bct5muD23fYRGU
          source_id: s_UEWpGjBMG8mpTrFMd5NdKQ
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第三甲第三十一名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Wo85NXF7XW2GQNrLCR4xWi
        status: active
        display_name: 王敬保
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_z1v__cNRAqi_7-5zd0A_w5
        subject_person_id: p_5fr5i6aUxfem5HbVkKJ9sw
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hdA2EX5rq1DHua8Wnk5XqK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qWwq_fkFEm9GWlKCkJMxIr
          claim_id: c_z1v__cNRAqi_7-5zd0A_w5
          source_id: s_9y_1do6w0CogBiBeTcLRhI
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202468 王鉅）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_9y_1do6w0CogBiBeTcLRhI
            source_type: api_record
            title: 中国历代人物传记资料库：王傑（CBDB 288688）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288688&o=json
            external_identifier: CBDB:288688
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5fr5i6aUxfem5HbVkKJ9sw
        status: active
        display_name: 王傑
        merged_into_person_id: null
---

# 王鉅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鉅 | accepted |
| birth.date | 1490年 | accepted |
| bio.summary | 王鉅（生于1490年），明人物。明清進士進士，籍贯婺源，入仕進士，曾任府通判、府同知、刑部主事。（中国历代人物传记资料库 CBDB 202468） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_BnBLKLfaqxcVPEz4Mit3Zc | 王齊玉 | accepted |
| spouses | p_1VGuJ3rY25cSKsnvPmgprM | 程氏 | accepted |
| ancestors | p_Wa16TzeejBWNkkMC2TRyMt | 王文亨 | accepted |
| ancestors | p_Wo85NXF7XW2GQNrLCR4xWi | 王敬保 | accepted |
| other | p_5fr5i6aUxfem5HbVkKJ9sw | 王傑 | accepted |

## 外部来源

- [中国历代人物传记资料库：程氏(王鉅妻)（CBDB 288685）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288685&o=json)
- [中国历代人物传记资料库：王傑（CBDB 288688）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288688&o=json)
- [中国历代人物传记资料库：王鉅（CBDB 202468）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202468&o=json)
