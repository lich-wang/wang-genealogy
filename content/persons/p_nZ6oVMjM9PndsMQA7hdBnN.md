---
schema: wang-person/v1
id: p_nZ6oVMjM9PndsMQA7hdBnN
status: active
merged_into: null
display_name: 王致中
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_k2LCqDmodxF4PoJTFpZA75
        subject_person_id: p_nZ6oVMjM9PndsMQA7hdBnN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王致中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_56asDVJZMJNjjuPituCAZ2
          claim_id: c_k2LCqDmodxF4PoJTFpZA75
          source_id: s_mBW2EfJe6aXNQ6Mmhmos7T
          stance: supports
          locator: CBDB:206164
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（206164）
          source: &a1
            id: s_mBW2EfJe6aXNQ6Mmhmos7T
            source_type: api_record
            title: 中国历代人物传记资料库：王致中（CBDB 206164）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206164&o=json
            external_identifier: CBDB:206164
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.888Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_G5V2B3CjGxo8J8Hkz9AMSx
        subject_person_id: p_nZ6oVMjM9PndsMQA7hdBnN
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1547年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Q78BX576BE4mc6X8CKo2s4
          claim_id: c_G5V2B3CjGxo8J8Hkz9AMSx
          source_id: s_mBW2EfJe6aXNQ6Mmhmos7T
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
        id: c_GP17mBnfSm7EME6Y68hXyn
        subject_person_id: p_nZ6oVMjM9PndsMQA7hdBnN
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
        - id: cs_yHKrZL5QJp5SZXJUXgWBPe
          claim_id: c_GP17mBnfSm7EME6Y68hXyn
          source_id: s_mBW2EfJe6aXNQ6Mmhmos7T
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
        id: c_ESscrSmKwRTyOM5P7ZclQR
        subject_person_id: p_5pYb5XTgHHLxK22eWK3gGJ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nZ6oVMjM9PndsMQA7hdBnN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_T-OR_FUseURIanwdfunqDJ
          claim_id: c_ESscrSmKwRTyOM5P7ZclQR
          source_id: s_uqTPXPLZ1jq81Zv8LxfMNp
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第三甲第一百一十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_uqTPXPLZ1jq81Zv8LxfMNp
            source_type: api_record
            title: 中国历代人物传记资料库：王胤（CBDB 214282）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214282&o=json
            external_identifier: CBDB:214282
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.155Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5pYb5XTgHHLxK22eWK3gGJ
        status: active
        display_name: 王胤
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_a_sz1-KMpPd_9goq_45QPR
        subject_person_id: p_jmJMKk4hxjP633ncw7da1H
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_nZ6oVMjM9PndsMQA7hdBnN
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JfOAaM8XVey_RIbQAYCymm
          claim_id: c_a_sz1-KMpPd_9goq_45QPR
          source_id: s_X1epEuKrm64YG7f8hA4ncT
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第三甲第一百一十名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_X1epEuKrm64YG7f8hA4ncT
            source_type: api_record
            title: 中国历代人物传记资料库：王鐸（CBDB 214279）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214279&o=json
            external_identifier: CBDB:214279
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.152Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_jmJMKk4hxjP633ncw7da1H
        status: active
        display_name: 王鐸
        merged_into_person_id: null
    - claim:
        id: c_nBMUBgoe073IGlJiXTP2tf
        subject_person_id: p_JSUFzTfqsf7A7viCabR9FU
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_nZ6oVMjM9PndsMQA7hdBnN
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FJpa2ZouyqVZWITOELvDsA
          claim_id: c_nBMUBgoe073IGlJiXTP2tf
          source_id: s_Xq4KpGmn5RqKn7XPTx1iG4
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第三甲第一百一十名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Xq4KpGmn5RqKn7XPTx1iG4
            source_type: api_record
            title: 中国历代人物传记资料库：王良貴（CBDB 214280）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214280&o=json
            external_identifier: CBDB:214280
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.153Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_JSUFzTfqsf7A7viCabR9FU
        status: active
        display_name: 王良貴
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王致中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王致中 | accepted |
| birth.date | 1547年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5pYb5XTgHHLxK22eWK3gGJ | 王胤 | accepted |
| ancestors | p_jmJMKk4hxjP633ncw7da1H | 王鐸 | accepted |
| ancestors | p_JSUFzTfqsf7A7viCabR9FU | 王良貴 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鐸（CBDB 214279）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214279&o=json)
- [中国历代人物传记资料库：王良貴（CBDB 214280）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214280&o=json)
- [中国历代人物传记资料库：王胤（CBDB 214282）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214282&o=json)
- [中国历代人物传记资料库：王致中（CBDB 206164）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206164&o=json)
