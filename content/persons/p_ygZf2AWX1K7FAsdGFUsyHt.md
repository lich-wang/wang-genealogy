---
schema: wang-person/v1
id: p_ygZf2AWX1K7FAsdGFUsyHt
status: active
merged_into: null
display_name: 王冠
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Z1CzoZpwGMz19LKBV4eKpQ
        subject_person_id: p_ygZf2AWX1K7FAsdGFUsyHt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王冠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_F3tCvLgKZnM4V8PYveTWhT
          claim_id: c_Z1CzoZpwGMz19LKBV4eKpQ
          source_id: s_sNiqxXsAxD4L4dQQAuKwki
          stance: supports
          locator: CBDB:200741
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（200741）
          source: &a1
            id: s_sNiqxXsAxD4L4dQQAuKwki
            source_type: api_record
            title: 中国历代人物传记资料库：王冠（CBDB 200741）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200741&o=json
            external_identifier: CBDB:200741
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.632Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_XqxLmbvA2Ezg1icYHGD8Z1
        subject_person_id: p_ygZf2AWX1K7FAsdGFUsyHt
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1452年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_x2QRzbdtytA3M8PaBSQNff
          claim_id: c_XqxLmbvA2Ezg1icYHGD8Z1
          source_id: s_sNiqxXsAxD4L4dQQAuKwki
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
        id: c_yJgNbCKXLtJGFA7dDMPqvR
        subject_person_id: p_ygZf2AWX1K7FAsdGFUsyHt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王冠（生于1452年），明人物。明清進士進士，籍贯鳳翔，入仕進士。（中国历代人物传记资料库 CBDB 200741）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_IScZK3WAvIUtCfmwsBeI9e
          claim_id: c_yJgNbCKXLtJGFA7dDMPqvR
          source_id: s_sNiqxXsAxD4L4dQQAuKwki
          stance: supports
          locator: CBDB:200741
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_72n-D4iV4F8ydKxFZK8qok
        subject_person_id: p_B2mSmj5GX3CUuNGwW2WAN2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ygZf2AWX1K7FAsdGFUsyHt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aC9HqpB1X64Ncm4ibHXbQq
          claim_id: c_72n-D4iV4F8ydKxFZK8qok
          source_id: s_6BPrH4FKqdEgg26WQBRhka
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第三甲第四十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_6BPrH4FKqdEgg26WQBRhka
            source_type: api_record
            title: 中国历代人物传记资料库：王璽（CBDB 262274）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262274&o=json
            external_identifier: CBDB:262274
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.580Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_B2mSmj5GX3CUuNGwW2WAN2
        status: active
        display_name: 王璽
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_H1jt_1mPsRAhhlBx6i4T3H
        subject_person_id: p_9tN8qL1YuLPVb1krzpUq7P
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ygZf2AWX1K7FAsdGFUsyHt
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ts3OFDVzIERcqavegHnos4
          claim_id: c_H1jt_1mPsRAhhlBx6i4T3H
          source_id: s_ooEJXhkLUW53AJ2aqxtNUJ
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第三甲第四十六名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ooEJXhkLUW53AJ2aqxtNUJ
            source_type: api_record
            title: 中国历代人物传记资料库：王儉（CBDB 262273）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262273&o=json
            external_identifier: CBDB:262273
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.579Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_9tN8qL1YuLPVb1krzpUq7P
        status: active
        display_name: 王儉
        merged_into_person_id: null
    - claim:
        id: c_EZexX4gfYrXKySdVHl_mmk
        subject_person_id: p_m9vU8XZTaGk7TMZXbKcd5F
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ygZf2AWX1K7FAsdGFUsyHt
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KZSvE6NmQvfKtJxkVwiEUy
          claim_id: c_EZexX4gfYrXKySdVHl_mmk
          source_id: s_NUHjCnE9RXFLHFAf8K2v6J
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第三甲第四十六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_NUHjCnE9RXFLHFAf8K2v6J
            source_type: api_record
            title: 中国历代人物传记资料库：王鐸（CBDB 262272）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262272&o=json
            external_identifier: CBDB:262272
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.579Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_m9vU8XZTaGk7TMZXbKcd5F
        status: active
        display_name: 王鐸
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_EYyRPYvIRHQrNQ3UIDGPOi
        subject_person_id: p_qYogdZiTS32CtsS73yhhHZ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ygZf2AWX1K7FAsdGFUsyHt
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yLzsPC2ownZGE-KWMbMm8L
          claim_id: c_EYyRPYvIRHQrNQ3UIDGPOi
          source_id: s_LBWrrHZ_G5g5xTRoegBUtg
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200741 王冠）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_LBWrrHZ_G5g5xTRoegBUtg
            source_type: api_record
            title: 中国历代人物传记资料库：王袞（CBDB 262277）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262277&o=json
            external_identifier: CBDB:262277
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qYogdZiTS32CtsS73yhhHZ
        status: active
        display_name: 王袞
        merged_into_person_id: null
---

# 王冠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王冠 | accepted |
| birth.date | 1452年 | accepted |
| bio.summary | 王冠（生于1452年），明人物。明清進士進士，籍贯鳳翔，入仕進士。（中国历代人物传记资料库 CBDB 200741） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_B2mSmj5GX3CUuNGwW2WAN2 | 王璽 | accepted |
| ancestors | p_9tN8qL1YuLPVb1krzpUq7P | 王儉 | accepted |
| ancestors | p_m9vU8XZTaGk7TMZXbKcd5F | 王鐸 | accepted |
| other | p_qYogdZiTS32CtsS73yhhHZ | 王袞 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鐸（CBDB 262272）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262272&o=json)
- [中国历代人物传记资料库：王冠（CBDB 200741）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200741&o=json)
- [中国历代人物传记资料库：王袞（CBDB 262277）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262277&o=json)
- [中国历代人物传记资料库：王儉（CBDB 262273）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262273&o=json)
- [中国历代人物传记资料库：王璽（CBDB 262274）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262274&o=json)
