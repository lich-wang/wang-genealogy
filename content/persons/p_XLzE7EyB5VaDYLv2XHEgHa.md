---
schema: wang-person/v1
id: p_XLzE7EyB5VaDYLv2XHEgHa
status: active
merged_into: null
display_name: 王佐
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_B2dZdzHGfzH8mdGgrf15yj
        subject_person_id: p_XLzE7EyB5VaDYLv2XHEgHa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_b1B2JT3k3zevmxcHK7Ahbu
          claim_id: c_B2dZdzHGfzH8mdGgrf15yj
          source_id: s_MxCbDf1hZJQFL5eCBkhfNa
          stance: supports
          locator: CBDB:67281
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（67281）
          source: &a1
            id: s_MxCbDf1hZJQFL5eCBkhfNa
            source_type: api_record
            title: 中国历代人物传记资料库：王佐（CBDB 67281）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67281&o=json
            external_identifier: CBDB:67281
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.983Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_oLxaL4BvQtmvSxCksc6rGj
        subject_person_id: p_XLzE7EyB5VaDYLv2XHEgHa
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1622年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZqcojuJRCjRGXLSQn4ChJi
          claim_id: c_oLxaL4BvQtmvSxCksc6rGj
          source_id: s_MxCbDf1hZJQFL5eCBkhfNa
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
        id: c_oLHLShWETc8nK13sdVrhpH
        subject_person_id: p_XLzE7EyB5VaDYLv2XHEgHa
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
        - id: cs_rKjQGa9Q37ahpreSWJt6hd
          claim_id: c_oLHLShWETc8nK13sdVrhpH
          source_id: s_MxCbDf1hZJQFL5eCBkhfNa
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
        id: c_vi4pWLf1QMBomYXy2Hn7-w
        subject_person_id: p_2JBV3UP1jjSL1hUd6uRUK3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XLzE7EyB5VaDYLv2XHEgHa
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_A-oI1qaalq4sK_j_9k_v5u
          claim_id: c_vi4pWLf1QMBomYXy2Hn7-w
          source_id: s_6yxLzqCVN6DcVvJMGxkjKc
          stance: supports
          locator: 萬曆十一年進士登科錄:一卷，第二甲第十四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_6yxLzqCVN6DcVvJMGxkjKc
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王鸞（222285）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222285&o=json
            external_identifier: CBDB:222285
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:52.205Z
            metadata_json: null
      object_person:
        id: p_2JBV3UP1jjSL1hUd6uRUK3
        status: active
        display_name: 王鸾
        merged_into_person_id: null
  children:
    - claim:
        id: c_4hBOwxqBwLyfaAn9GP-I8o
        subject_person_id: p_XLzE7EyB5VaDYLv2XHEgHa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FgnH5Tex3eEM8HgEHgSdm9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vv6-d6P-mPBrjQBmLCZdwC
          claim_id: c_4hBOwxqBwLyfaAn9GP-I8o
          source_id: s_Wjtp8tAobXMopg3HgXxk7b
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），10886：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Wjtp8tAobXMopg3HgXxk7b
            source_type: api_record
            title: 中国历代人物传记资料库：王道貞（CBDB 524359）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=524359&o=json
            external_identifier: CBDB:524359
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:17.868Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_FgnH5Tex3eEM8HgEHgSdm9
        status: active
        display_name: 王道貞
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_F3s8qGh_nfvplefwB6nwIB
        subject_person_id: p_1j4ypMFN2MQYt4wr2fiPkA
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_XLzE7EyB5VaDYLv2XHEgHa
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QQRmnLm0DS1wfEZ6Ci2Dbz
          claim_id: c_F3s8qGh_nfvplefwB6nwIB
          source_id: s_C9JU7X7zMz4c91NH2W4pod
          stance: supports
          locator: 萬曆十一年進士登科錄:一卷，第二甲第十四名：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_C9JU7X7zMz4c91NH2W4pod
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：張氏（222288）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222288&o=json
            external_identifier: CBDB:222288
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:53.698Z
            metadata_json: null
      object_person:
        id: p_1j4ypMFN2MQYt4wr2fiPkA
        status: active
        display_name: 张氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_nS6VYsTgAQK6aB7Cwelkhj
        subject_person_id: p_onvVrjmfvkdjFcgNLVKCma
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_XLzE7EyB5VaDYLv2XHEgHa
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ouKNX2ujm9YGnwMX0CO8C8
          claim_id: c_nS6VYsTgAQK6aB7Cwelkhj
          source_id: s_BgtjiioWMxd6kDi9yjCApu
          stance: supports
          locator: 萬曆十一年進士登科錄:一卷，第二甲第十四名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_BgtjiioWMxd6kDi9yjCApu
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王棋（222283）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222283&o=json
            external_identifier: CBDB:222283
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person:
        id: p_onvVrjmfvkdjFcgNLVKCma
        status: active
        display_name: 王棋
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王佐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王佐 | accepted |
| death.date | 1622年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_2JBV3UP1jjSL1hUd6uRUK3 | 王鸾 | accepted |
| children | p_FgnH5Tex3eEM8HgEHgSdm9 | 王道貞 | accepted |
| spouses | p_1j4ypMFN2MQYt4wr2fiPkA | 张氏 | accepted |
| ancestors | p_onvVrjmfvkdjFcgNLVKCma | 王棋 | accepted |

## 外部来源

- [中国历代人物传记资料库：王道貞（CBDB 524359）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=524359&o=json)
- [中国历代人物传记资料库：王佐（CBDB 67281）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67281&o=json)
- [CBDB 中国历代人物传记资料库：王鸞（222285）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222285&o=json)
- [CBDB 中国历代人物传记资料库：王棋（222283）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222283&o=json)
- [CBDB 中国历代人物传记资料库：張氏（222288）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222288&o=json)
