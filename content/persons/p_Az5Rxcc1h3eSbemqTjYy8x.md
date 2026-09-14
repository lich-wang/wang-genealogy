---
schema: wang-person/v1
id: p_Az5Rxcc1h3eSbemqTjYy8x
status: active
merged_into: null
display_name: 王儒
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_53BKm6fqfNZsjCAY34Lv4a
        subject_person_id: p_Az5Rxcc1h3eSbemqTjYy8x
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FFRSM8wKKeXkrNNEWEdg4Q
          claim_id: c_53BKm6fqfNZsjCAY34Lv4a
          source_id: s_P5XZhFK6igE7hYfA8CpntQ
          stance: supports
          locator: CBDB:245852
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（245852）
          source: &a1
            id: s_P5XZhFK6igE7hYfA8CpntQ
            source_type: api_record
            title: 中国历代人物传记资料库：王儒（CBDB 245852）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245852&o=json
            external_identifier: CBDB:245852
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.078Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SE5uz3Vsyu4aJ9tkHWi8yd
        subject_person_id: p_Az5Rxcc1h3eSbemqTjYy8x
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儒，明人物。景泰二年進士，籍贯武進。（中国历代人物传记资料库 CBDB 245852）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_nh2NREfUAoglLONWUjnbcV
          claim_id: c_SE5uz3Vsyu4aJ9tkHWi8yd
          source_id: s_P5XZhFK6igE7hYfA8CpntQ
          stance: supports
          locator: CBDB:245852
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_8z435cHR_nicNXHqO2Ny0A
        subject_person_id: p_4PC2JzRydaXykTknqoVMo5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Az5Rxcc1h3eSbemqTjYy8x
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5s3kGRRHAa8Wd1hBuwx-AW
          claim_id: c_8z435cHR_nicNXHqO2Ny0A
          source_id: s_6hAds4Olpj5iEGGbnkCMg_
          stance: supports
          locator: CBDB：兄弟 王㒜（126815）之父／母 王忠
          quotation: null
          interpretation_note: 由兄弟关系推断：王儒 与 王㒜 为同胞（CBDB 记「弟」），王㒜 之父／母即 王儒 之父／母。
          source:
            id: s_6hAds4Olpj5iEGGbnkCMg_
            source_type: api_record
            title: 中国历代人物传记资料库：王儒（CBDB 245852）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245852&o=json
            external_identifier: CBDB:245852
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4PC2JzRydaXykTknqoVMo5
        status: active
        display_name: 王忠
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_BRy0_0LJCGn-_yF-OMUr_9
        subject_person_id: p_Az5Rxcc1h3eSbemqTjYy8x
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_MiT45BEZABeDdxC6DUoAF7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rq4oa6ykAsl-0h2ph7DmJb
          claim_id: c_BRy0_0LJCGn-_yF-OMUr_9
          source_id: s_6hAds4Olpj5iEGGbnkCMg_
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126815 王㒜）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_6hAds4Olpj5iEGGbnkCMg_
            source_type: api_record
            title: 中国历代人物传记资料库：王儒（CBDB 245852）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245852&o=json
            external_identifier: CBDB:245852
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MiT45BEZABeDdxC6DUoAF7
        status: active
        display_name: 王㒜
        merged_into_person_id: null
---

# 王儒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王儒 | accepted |
| bio.summary | 王儒，明人物。景泰二年進士，籍贯武進。（中国历代人物传记资料库 CBDB 245852） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_4PC2JzRydaXykTknqoVMo5 | 王忠 | accepted |
| other | p_MiT45BEZABeDdxC6DUoAF7 | 王㒜 | accepted |

## 外部来源

- [中国历代人物传记资料库：王儒（CBDB 245852）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245852&o=json)
