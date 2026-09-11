---
schema: wang-person/v1
id: p_4RuP1y13HperNdMDJkN6MF
status: active
merged_into: null
display_name: 王震
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1mgp1m3eDktxKk11SbVnQQ
        subject_person_id: p_4RuP1y13HperNdMDJkN6MF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王震
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jXbnJj5TpsC6PEBR2NEnN9
          claim_id: c_1mgp1m3eDktxKk11SbVnQQ
          source_id: s_ryXjfBob4D77XXAGUgL5gi
          stance: supports
          locator: CBDB:3947
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（3947）
          source: &a1
            id: s_ryXjfBob4D77XXAGUgL5gi
            source_type: api_record
            title: 中国历代人物传记资料库：王震（CBDB 3947）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3947&o=json
            external_identifier: CBDB:3947
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.425Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_eWBqxCBDFB9wt5Ed73u119
        subject_person_id: p_4RuP1y13HperNdMDJkN6MF
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1046年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aXVqthu3fSP1bSExQhTUuE
          claim_id: c_eWBqxCBDFB9wt5Ed73u119
          source_id: s_ryXjfBob4D77XXAGUgL5gi
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
        id: c_Z6hjtyTBKuUfbGjDV5dFkV
        subject_person_id: p_4RuP1y13HperNdMDJkN6MF
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1095年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VvsExDLDna7AehU3vbCH1R
          claim_id: c_Z6hjtyTBKuUfbGjDV5dFkV
          source_id: s_ryXjfBob4D77XXAGUgL5gi
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
        id: c_KdUb3TwRDVDE5dMrFgCPTJ
        subject_person_id: p_4RuP1y13HperNdMDJkN6MF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王震（1046年—1095年），宋人物。籍贯莘縣，入仕科舉學校: 恩賜出身、特賜出身等，曾任朝奉郎、朝請郎、朝散郎。（中国历代人物传记资料库 CBDB 3947）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Sen5YHrUN2ysDZZrkdH4eQ
          claim_id: c_KdUb3TwRDVDE5dMrFgCPTJ
          source_id: s_ryXjfBob4D77XXAGUgL5gi
          stance: supports
          locator: CBDB:3947
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_qrWctnGxzG0CxUbngMMrRl
        subject_person_id: p_4RuP1y13HperNdMDJkN6MF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_26tLQutRv9RfwmDpym5T1E
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PFAs3e61kCceQaEnCEwQr2
          claim_id: c_qrWctnGxzG0CxUbngMMrRl
          source_id: s_NRMoGyPxVJjRUhF4g8gkDi
          stance: supports
          locator: 宋人傳記資料索引(電子版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_NRMoGyPxVJjRUhF4g8gkDi
            source_type: api_record
            title: 中国历代人物传记资料库：王從（CBDB 17844）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17844&o=json
            external_identifier: CBDB:17844
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.694Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_26tLQutRv9RfwmDpym5T1E
        status: active
        display_name: 王從
        merged_into_person_id: null
    - claim:
        id: c_bl9zYp84630iwdmvZ8REKz
        subject_person_id: p_4RuP1y13HperNdMDJkN6MF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MWAK3SJTta3quLLmo1xEow
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ue5VqAGBRsLSfGpJ7ITNjL
          claim_id: c_bl9zYp84630iwdmvZ8REKz
          source_id: s_ryXjfBob4D77XXAGUgL5gi
          stance: supports
          locator: CBDB 双向互证（子 王仰 ⇄ 父 王震）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_MWAK3SJTta3quLLmo1xEow
        status: active
        display_name: 王仰
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_Caz8eFh3I6XjKgWHQ8lBg9
        subject_person_id: p_tyaMeFLDyyzL3DtTVsE3uu
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_4RuP1y13HperNdMDJkN6MF
        generation_count: 4
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UlvXNlbtTpPRyShSqLijje
          claim_id: c_Caz8eFh3I6XjKgWHQ8lBg9
          source_id: s_ryXjfBob4D77XXAGUgL5gi
          stance: supports
          locator: 宋人傳記資料索引(電子版)：高祖;四世祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_tyaMeFLDyyzL3DtTVsE3uu
        status: active
        display_name: 王旦
        merged_into_person_id: null
    - claim:
        id: c_dErh-GIxC7Kbr33eF0bEuC
        subject_person_id: p_h7s3yp9U2dC68kkp9tKxxX
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_4RuP1y13HperNdMDJkN6MF
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xvaSmqiN_cliaCV3LBkLW6
          claim_id: c_dErh-GIxC7Kbr33eF0bEuC
          source_id: s_ryXjfBob4D77XXAGUgL5gi
          stance: supports
          locator: 宋人傳記資料索引(電子版)：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_h7s3yp9U2dC68kkp9tKxxX
        status: active
        display_name: 王素
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王震

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王震 | accepted |
| birth.date | 1046年 | accepted |
| death.date | 1095年 | accepted |
| bio.summary | 王震（1046年—1095年），宋人物。籍贯莘縣，入仕科舉學校: 恩賜出身、特賜出身等，曾任朝奉郎、朝請郎、朝散郎。（中国历代人物传记资料库 CBDB 3947） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_26tLQutRv9RfwmDpym5T1E | 王從 | accepted |
| children | p_MWAK3SJTta3quLLmo1xEow | 王仰 | accepted |
| ancestors | p_tyaMeFLDyyzL3DtTVsE3uu | 王旦 | accepted |
| ancestors | p_h7s3yp9U2dC68kkp9tKxxX | 王素 | accepted |

## 外部来源

- [中国历代人物传记资料库：王從（CBDB 17844）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17844&o=json)
- [中国历代人物传记资料库：王震（CBDB 3947）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3947&o=json)
