---
schema: wang-person/v1
id: p_7jUC2qyUN1zDpTdMY9WiAE
status: active
merged_into: null
display_name: 王世昌
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QhByA1qHnJo6DytFkXuH7j
        subject_person_id: p_7jUC2qyUN1zDpTdMY9WiAE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世昌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xC58Gq6UHg61LZLHPPPnrv
          claim_id: c_QhByA1qHnJo6DytFkXuH7j
          source_id: s_eSsvWMqA8mAnkbWve1J8vP
          stance: supports
          locator: CBDB:26365
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（26365）
          source: &a1
            id: s_eSsvWMqA8mAnkbWve1J8vP
            source_type: api_record
            title: 中国历代人物传记资料库：王世昌（CBDB 26365）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26365&o=json
            external_identifier: CBDB:26365
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.935Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_B4P3jfGRF2RRXcaN8U5Zwu
        subject_person_id: p_7jUC2qyUN1zDpTdMY9WiAE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世昌，宋人物。籍贯開封。（中国历代人物传记资料库 CBDB 26365）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yvsBagftGWNTi3cAHJm5JH
          claim_id: c_B4P3jfGRF2RRXcaN8U5Zwu
          source_id: s_eSsvWMqA8mAnkbWve1J8vP
          stance: supports
          locator: CBDB:26365
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_NMJ8jng8yurOWGnEa4fuZy
        subject_person_id: p_HmkBbL3A8MpbWct9UhADAQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7jUC2qyUN1zDpTdMY9WiAE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_o-RFzygjdkASYquDiWkZgl
          claim_id: c_NMJ8jng8yurOWGnEa4fuZy
          source_id: s_ctpln9mpaA1SvhALdJCVsT
          stance: supports
          locator: CBDB 亲属：父（KinPerson 26364）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_ctpln9mpaA1SvhALdJCVsT
            source_type: api_record
            title: 中国历代人物传记资料库：王世昌（CBDB 26365）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26365&o=json
            external_identifier: CBDB:26365
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HmkBbL3A8MpbWct9UhADAQ
        status: active
        display_name: 王中正
        merged_into_person_id: null
    - claim:
        id: c_6Q85OfBeYodhdWVLfP-3Du
        subject_person_id: p_dTS2S2ii7KBfBH17rTzSn5
        claim_kind: relationship
        predicate: kinship.mother_of
        object_person_id: p_7jUC2qyUN1zDpTdMY9WiAE
        generation_count: null
        parent_role: mother
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QPZcyxoxNhhX37tO7yuqp2
          claim_id: c_6Q85OfBeYodhdWVLfP-3Du
          source_id: s_ctpln9mpaA1SvhALdJCVsT
          stance: supports
          locator: CBDB 亲属：母（KinPerson 38174）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_ctpln9mpaA1SvhALdJCVsT
            source_type: api_record
            title: 中国历代人物传记资料库：王世昌（CBDB 26365）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26365&o=json
            external_identifier: CBDB:26365
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dTS2S2ii7KBfBH17rTzSn5
        status: active
        display_name: 施氏
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王世昌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世昌 | accepted |
| bio.summary | 王世昌，宋人物。籍贯開封。（中国历代人物传记资料库 CBDB 26365） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_HmkBbL3A8MpbWct9UhADAQ | 王中正 | accepted |
| parents | p_dTS2S2ii7KBfBH17rTzSn5 | 施氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王世昌（CBDB 26365）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26365&o=json)
