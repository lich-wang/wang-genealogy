---
schema: wang-person/v1
id: p_HPYYkmNEETrV6SW1UZLFZN
status: active
merged_into: null
display_name: 王次張
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_855pL2AfiQPet1yAExfC3u
        subject_person_id: p_HPYYkmNEETrV6SW1UZLFZN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王次張
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CUYtU99xLd6C3o7M5xsv7F
          claim_id: c_855pL2AfiQPet1yAExfC3u
          source_id: s_uwcRXGCfK1z9tGXAat6n8B
          stance: supports
          locator: CBDB:1907
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1907）
          source: &a1
            id: s_uwcRXGCfK1z9tGXAat6n8B
            source_type: api_record
            title: 中国历代人物传记资料库：王次張（CBDB 1907）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1907&o=json
            external_identifier: CBDB:1907
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.387Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_fDQX5QCyq98VYjBVKKMUq5
        subject_person_id: p_HPYYkmNEETrV6SW1UZLFZN
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1108年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qep62oK1oGxKX6o1JJDFgU
          claim_id: c_fDQX5QCyq98VYjBVKKMUq5
          source_id: s_uwcRXGCfK1z9tGXAat6n8B
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
        id: c_DD6zLzQBWYyTCdkfYbGQcP
        subject_person_id: p_HPYYkmNEETrV6SW1UZLFZN
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1181年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HLvuqe9TCJvQWjXZiN1TM6
          claim_id: c_DD6zLzQBWYyTCdkfYbGQcP
          source_id: s_uwcRXGCfK1z9tGXAat6n8B
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
        id: c_UB316pkmt9cZYNVYLZaA6s
        subject_person_id: p_HPYYkmNEETrV6SW1UZLFZN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王次張（1108年—1181年），宋人物。籍贯長清，入仕恩蔭、蔭補，曾任承務郎、提舉宮觀、通判。（中国历代人物传记资料库 CBDB 1907）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zsc0cHDj1QouGltwUBgQ-l
          claim_id: c_UB316pkmt9cZYNVYLZaA6s
          source_id: s_uwcRXGCfK1z9tGXAat6n8B
          stance: supports
          locator: CBDB:1907
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_vOUMwDuj_wmsz1IARZWb_h
        subject_person_id: p_FLQGQnP9Y6pdiGNaaECMWj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HPYYkmNEETrV6SW1UZLFZN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_B4L9pSP9ttyTGcwxwKHeQg
          claim_id: c_vOUMwDuj_wmsz1IARZWb_h
          source_id: s_sBEoEx9NZnfVFPbFtT3ccb
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1528：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_sBEoEx9NZnfVFPbFtT3ccb
            source_type: api_record
            title: 中国历代人物传记资料库：王衣（CBDB 3959）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3959&o=json
            external_identifier: CBDB:3959
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.434Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_FLQGQnP9Y6pdiGNaaECMWj
        status: active
        display_name: 王衣
        merged_into_person_id: null
  children:
    - claim:
        id: c_oEA4pI2gSFdFacHVjVhmXX
        subject_person_id: p_HPYYkmNEETrV6SW1UZLFZN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_E95JkxTpHXKYNeGAK17Hnh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_v4wJ0RD1B53B5LMFtHMRSf
          claim_id: c_oEA4pI2gSFdFacHVjVhmXX
          source_id: s_Pig7eSY0JlRhlQ8n056Nz-
          stance: supports
          locator: CBDB 亲属：父（KinPerson 1907）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_Pig7eSY0JlRhlQ8n056Nz-
            source_type: api_record
            title: 中国历代人物传记资料库：王延之（CBDB 37229）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37229&o=json
            external_identifier: CBDB:37229
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_E95JkxTpHXKYNeGAK17Hnh
        status: active
        display_name: 王延之
        merged_into_person_id: null
    - claim:
        id: c_ZhTSLm8L0le2f8c4H6bdS2
        subject_person_id: p_HPYYkmNEETrV6SW1UZLFZN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HDSbm8QwAf1JmzzkJwNqL4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dxikkFvOAGVpaPOl43jhrt
          claim_id: c_ZhTSLm8L0le2f8c4H6bdS2
          source_id: s_1yturjw3EwMlhxpEZOIg4g
          stance: supports
          locator: CBDB 亲属：父（KinPerson 1907）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_1yturjw3EwMlhxpEZOIg4g
            source_type: api_record
            title: 中国历代人物传记资料库：王延壽（CBDB 37228）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37228&o=json
            external_identifier: CBDB:37228
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HDSbm8QwAf1JmzzkJwNqL4
        status: active
        display_name: 王延壽
        merged_into_person_id: null
    - claim:
        id: c_dzeI16XxzxKuHmRbGQCwc0
        subject_person_id: p_HPYYkmNEETrV6SW1UZLFZN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HdmcH8BjjMFEQA7zt2VkuG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kiYXY6Uo-Py2i5hx7H6her
          claim_id: c_dzeI16XxzxKuHmRbGQCwc0
          source_id: s_SQQq3bhOzWmdCNLykWJVTQ
          stance: supports
          locator: CBDB 亲属：父（KinPerson 1907）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_SQQq3bhOzWmdCNLykWJVTQ
            source_type: api_record
            title: 中国历代人物传记资料库：王延嗣（CBDB 37231）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37231&o=json
            external_identifier: CBDB:37231
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HdmcH8BjjMFEQA7zt2VkuG
        status: active
        display_name: 王延嗣
        merged_into_person_id: null
    - claim:
        id: c_ZGbZGHrtR_3xQH3_XU86_1
        subject_person_id: p_HPYYkmNEETrV6SW1UZLFZN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_L97FaTacZUx9pipmMAKhKv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5NZZhEDuMZrc9dk6P_wche
          claim_id: c_ZGbZGHrtR_3xQH3_XU86_1
          source_id: s_Xc8HKVyaAAubWXgZspedNR
          stance: supports
          locator: CBDB 亲属：父（KinPerson 1907）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_Xc8HKVyaAAubWXgZspedNR
            source_type: api_record
            title: 中国历代人物传记资料库：王富（CBDB 37230）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37230&o=json
            external_identifier: CBDB:37230
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_L97FaTacZUx9pipmMAKhKv
        status: active
        display_name: 王富
        merged_into_person_id: null
    - claim:
        id: c_2UmL6nydfAjxDV339IWBZ1
        subject_person_id: p_HPYYkmNEETrV6SW1UZLFZN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_i6PsNAL5BGSKvCh41naGSM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7yFe9l0LX6VFgLK4PTI37j
          claim_id: c_2UmL6nydfAjxDV339IWBZ1
          source_id: s_frbkdIZnLDYdqjhBh-zgVQ
          stance: supports
          locator: CBDB 亲属：父（KinPerson 1907）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_frbkdIZnLDYdqjhBh-zgVQ
            source_type: api_record
            title: 中国历代人物传记资料库：王延年（CBDB 37227）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37227&o=json
            external_identifier: CBDB:37227
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_i6PsNAL5BGSKvCh41naGSM
        status: active
        display_name: 王延年
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王次張

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王次張 | accepted |
| birth.date | 1108年 | accepted |
| death.date | 1181年 | accepted |
| bio.summary | 王次張（1108年—1181年），宋人物。籍贯長清，入仕恩蔭、蔭補，曾任承務郎、提舉宮觀、通判。（中国历代人物传记资料库 CBDB 1907） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_FLQGQnP9Y6pdiGNaaECMWj | 王衣 | accepted |
| children | p_E95JkxTpHXKYNeGAK17Hnh | 王延之 | accepted |
| children | p_HDSbm8QwAf1JmzzkJwNqL4 | 王延壽 | accepted |
| children | p_HdmcH8BjjMFEQA7zt2VkuG | 王延嗣 | accepted |
| children | p_L97FaTacZUx9pipmMAKhKv | 王富 | accepted |
| children | p_i6PsNAL5BGSKvCh41naGSM | 王延年 | accepted |

## 外部来源

- [中国历代人物传记资料库：王次張（CBDB 1907）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1907&o=json)
- [中国历代人物传记资料库：王富（CBDB 37230）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37230&o=json)
- [中国历代人物传记资料库：王延年（CBDB 37227）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37227&o=json)
- [中国历代人物传记资料库：王延壽（CBDB 37228）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37228&o=json)
- [中国历代人物传记资料库：王延嗣（CBDB 37231）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37231&o=json)
- [中国历代人物传记资料库：王延之（CBDB 37229）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37229&o=json)
- [中国历代人物传记资料库：王衣（CBDB 3959）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3959&o=json)
