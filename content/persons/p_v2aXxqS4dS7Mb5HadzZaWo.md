---
schema: wang-person/v1
id: p_v2aXxqS4dS7Mb5HadzZaWo
status: active
merged_into: null
display_name: 王騊
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_93GDy2pLnU5P3s3oE229nA
        subject_person_id: p_v2aXxqS4dS7Mb5HadzZaWo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王騊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_V62z2wdnQA8e4Ho2dZugkR
          claim_id: c_93GDy2pLnU5P3s3oE229nA
          source_id: s_eyGcW2dDnLnWKnJ6EY2uiU
          stance: supports
          locator: CBDB:339453
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（339453）
          source: &a1
            id: s_eyGcW2dDnLnWKnJ6EY2uiU
            source_type: api_record
            title: 中国历代人物传记资料库：王騊（CBDB 339453）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=339453&o=json
            external_identifier: CBDB:339453
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.565Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_8Ti8E7sVurAD6FXPvagddW
        subject_person_id: p_v2aXxqS4dS7Mb5HadzZaWo
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1177年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KbcBHxqYra4VWmaSEF1qEC
          claim_id: c_8Ti8E7sVurAD6FXPvagddW
          source_id: s_eyGcW2dDnLnWKnJ6EY2uiU
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_CeSDSqHmysebDVb3Ew63Fu
        subject_person_id: p_v2aXxqS4dS7Mb5HadzZaWo
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1223年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sHBYeaAHjeeDQS9BYUH2iL
          claim_id: c_CeSDSqHmysebDVb3Ew63Fu
          source_id: s_eyGcW2dDnLnWKnJ6EY2uiU
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
        id: c_E3GMuSzYV2jRyBN5bwss5z
        subject_person_id: p_v2aXxqS4dS7Mb5HadzZaWo
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
        - id: cs_hb1F25WvfYAhpqarkcb1WC
          claim_id: c_E3GMuSzYV2jRyBN5bwss5z
          source_id: s_eyGcW2dDnLnWKnJ6EY2uiU
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
        id: c_P3R0Pe5L9gVPWWZ6c1dwy4
        subject_person_id: p_v2aXxqS4dS7Mb5HadzZaWo
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7DWPWiMKycFpMC1myLjX8S
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tvuZ8pyCCejv5nHinX8bxC
          claim_id: c_P3R0Pe5L9gVPWWZ6c1dwy4
          source_id: s_KJFMtM6YShk352NoLv4A9t
          stance: supports
          locator: 麗水宋元墓誌集録，59：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_KJFMtM6YShk352NoLv4A9t
            source_type: api_record
            title: 中国历代人物传记资料库：王琰（CBDB 555477）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555477&o=json
            external_identifier: CBDB:555477
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.644Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7DWPWiMKycFpMC1myLjX8S
        status: active
        display_name: 王琰
        merged_into_person_id: null
    - claim:
        id: c_SGbj6xwDkN7arDwfF5nxF5
        subject_person_id: p_v2aXxqS4dS7Mb5HadzZaWo
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_P73D7Uet6EDsP44jQG3Nyi
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ADmKkH1G4-sPqGizUm8eCN
          claim_id: c_SGbj6xwDkN7arDwfF5nxF5
          source_id: s_8xwEsyH5m7sFMux6DbXsWB
          stance: supports
          locator: 麗水宋元墓誌集録，59：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_8xwEsyH5m7sFMux6DbXsWB
            source_type: api_record
            title: 中国历代人物传记资料库：王珽（CBDB 555474）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555474&o=json
            external_identifier: CBDB:555474
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.642Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_P73D7Uet6EDsP44jQG3Nyi
        status: active
        display_name: 王珽
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王騊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王騊 | accepted |
| birth.date | 1177年 | accepted |
| death.date | 1223年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_7DWPWiMKycFpMC1myLjX8S | 王琰 | accepted |
| children | p_P73D7Uet6EDsP44jQG3Nyi | 王珽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王騊（CBDB 339453）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=339453&o=json)
- [中国历代人物传记资料库：王珽（CBDB 555474）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555474&o=json)
- [中国历代人物传记资料库：王琰（CBDB 555477）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555477&o=json)
