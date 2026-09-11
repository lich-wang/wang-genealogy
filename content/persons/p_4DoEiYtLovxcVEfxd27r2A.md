---
schema: wang-person/v1
id: p_4DoEiYtLovxcVEfxd27r2A
status: active
merged_into: null
display_name: 王詔
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uNqHtG3Qx7x98UUAQn1GwJ
        subject_person_id: p_4DoEiYtLovxcVEfxd27r2A
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王詔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_i2H5nZ5Wb7F8t3JNX8H5XL
          claim_id: c_uNqHtG3Qx7x98UUAQn1GwJ
          source_id: s_GJZqse6PD7fsyQFLGTszyQ
          stance: supports
          locator: CBDB:205634
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（205634）
          source: &a1
            id: s_GJZqse6PD7fsyQFLGTszyQ
            source_type: api_record
            title: 中国历代人物传记资料库：王詔（CBDB 205634）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205634&o=json
            external_identifier: CBDB:205634
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.866Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_fjFckc5YwKodrV3MmRv2Gw
        subject_person_id: p_4DoEiYtLovxcVEfxd27r2A
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1528年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_j1P5qQFpUvn1H13QcqDmg7
          claim_id: c_fjFckc5YwKodrV3MmRv2Gw
          source_id: s_GJZqse6PD7fsyQFLGTszyQ
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
        id: c_jzwgngFnF76zVGXitpBmKC
        subject_person_id: p_4DoEiYtLovxcVEfxd27r2A
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
        - id: cs_XqXa1wr69pDQuEc26KkUC8
          claim_id: c_jzwgngFnF76zVGXitpBmKC
          source_id: s_GJZqse6PD7fsyQFLGTszyQ
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
        id: c_oqgfpSBMRFSJrc7WA35bBL
        subject_person_id: p_75am3pR1oJY4F4kK4X9iA5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4DoEiYtLovxcVEfxd27r2A
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_In1K1SmCGICByCWX4Boklq
          claim_id: c_oqgfpSBMRFSJrc7WA35bBL
          source_id: s_GJZqse6PD7fsyQFLGTszyQ
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第一百七十七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_75am3pR1oJY4F4kK4X9iA5
        status: active
        display_name: 王崇德
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_mxn9NJAaZFipHv2CsuVAue
        subject_person_id: p_4DoEiYtLovxcVEfxd27r2A
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_q77xKDtrUPVB6rK8MGT5c2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yih3hHsCHH8li4wR9471l5
          claim_id: c_mxn9NJAaZFipHv2CsuVAue
          source_id: s_5D-YnCi9xJtadSOgVzwSoa
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第一百七十七名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_5D-YnCi9xJtadSOgVzwSoa
            source_type: api_record
            title: 中国历代人物传记资料库：趙氏(王詔妻)（CBDB 336273）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336273&o=json
            external_identifier: CBDB:336273
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_q77xKDtrUPVB6rK8MGT5c2
        status: active
        display_name: 趙氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_7ErGET8eFNCAV2P7fR-ElW
        subject_person_id: p_H4DK5Z2kFA82LhzNTjYgn3
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_4DoEiYtLovxcVEfxd27r2A
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EETexE_GNYiZloUeylQMjE
          claim_id: c_7ErGET8eFNCAV2P7fR-ElW
          source_id: s_GJZqse6PD7fsyQFLGTszyQ
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第一百七十七名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_H4DK5Z2kFA82LhzNTjYgn3
        status: active
        display_name: 王彥實
        merged_into_person_id: null
    - claim:
        id: c_CPamfZU5YN9Zbpwwhu-hfU
        subject_person_id: p_iyW16tEs3JTe2h3LSNsk98
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_4DoEiYtLovxcVEfxd27r2A
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_H7rsGvXbuWKTIvMffbW1HM
          claim_id: c_CPamfZU5YN9Zbpwwhu-hfU
          source_id: s_GJZqse6PD7fsyQFLGTszyQ
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第一百七十七名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_iyW16tEs3JTe2h3LSNsk98
        status: active
        display_name: 王智
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王詔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王詔 | accepted |
| birth.date | 1528年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_75am3pR1oJY4F4kK4X9iA5 | 王崇德 | accepted |
| spouses | p_q77xKDtrUPVB6rK8MGT5c2 | 趙氏 | accepted |
| ancestors | p_H4DK5Z2kFA82LhzNTjYgn3 | 王彥實 | accepted |
| ancestors | p_iyW16tEs3JTe2h3LSNsk98 | 王智 | accepted |

## 外部来源

- [中国历代人物传记资料库：王詔（CBDB 205634）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205634&o=json)
- [中国历代人物传记资料库：趙氏(王詔妻)（CBDB 336273）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336273&o=json)
