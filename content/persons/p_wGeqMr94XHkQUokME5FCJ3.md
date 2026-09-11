---
schema: wang-person/v1
id: p_wGeqMr94XHkQUokME5FCJ3
status: active
merged_into: null
display_name: 王舟
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KyQM9DrFkLZrpDudX4LTjj
        subject_person_id: p_wGeqMr94XHkQUokME5FCJ3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王舟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RfVQ7HPSyNDsodbgHnePLd
          claim_id: c_KyQM9DrFkLZrpDudX4LTjj
          source_id: s_EZttuVPWEZxiDt9PpB3k5L
          stance: supports
          locator: CBDB:199369
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（199369）
          source: &a1
            id: s_EZttuVPWEZxiDt9PpB3k5L
            source_type: api_record
            title: 中国历代人物传记资料库：王舟（CBDB 199369）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199369&o=json
            external_identifier: CBDB:199369
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.542Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_r3NjXm25bRQ1R1JtxdzA2G
        subject_person_id: p_wGeqMr94XHkQUokME5FCJ3
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1437年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5HBVK9fiJMwQeK6jg1Yw3M
          claim_id: c_r3NjXm25bRQ1R1JtxdzA2G
          source_id: s_EZttuVPWEZxiDt9PpB3k5L
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
        id: c_v549W4BgL9g9qDtc26PZ4o
        subject_person_id: p_wGeqMr94XHkQUokME5FCJ3
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
        - id: cs_GLvKtbotvUa5f4abiX92sF
          claim_id: c_v549W4BgL9g9qDtc26PZ4o
          source_id: s_EZttuVPWEZxiDt9PpB3k5L
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
        id: c_Ie4Q7p1HoSLietOxRRh3Mu
        subject_person_id: p_PssJzEL6PmniEjHiumeCwT
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wGeqMr94XHkQUokME5FCJ3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_W-ULr1oI23dJ2AWH1w78tc
          claim_id: c_Ie4Q7p1HoSLietOxRRh3Mu
          source_id: s_PdhDz4z55W6Zg9LekZmUks
          stance: supports
          locator: 成化五年進士登科錄:一卷，第三甲第七十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_PdhDz4z55W6Zg9LekZmUks
            source_type: api_record
            title: 中国历代人物传记资料库：王騶虞（CBDB 244055）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244055&o=json
            external_identifier: CBDB:244055
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:59.761Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_PssJzEL6PmniEjHiumeCwT
        status: active
        display_name: 王騶虞
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_FgerTxe-ooVvcgsEAuRkDQ
        subject_person_id: p_agr7Kh67jpGsGa4tzGrKgc
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_wGeqMr94XHkQUokME5FCJ3
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__uZJ0dNkbkG3lEhIUVo-ah
          claim_id: c_FgerTxe-ooVvcgsEAuRkDQ
          source_id: s_FRg2kTGq97KBP7g6Qs2PT3
          stance: supports
          locator: 成化五年進士登科錄:一卷，第三甲第七十名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_FRg2kTGq97KBP7g6Qs2PT3
            source_type: api_record
            title: 中国历代人物传记资料库：王文華（CBDB 244054）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244054&o=json
            external_identifier: CBDB:244054
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.017Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_agr7Kh67jpGsGa4tzGrKgc
        status: active
        display_name: 王文華
        merged_into_person_id: null
    - claim:
        id: c_bBpQfYjn3-bMV_JsTkNLlo
        subject_person_id: p_B3XLSR6CqA2q9R5BhcVhA3
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_wGeqMr94XHkQUokME5FCJ3
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZPGqiD6wIxHHfhc59YERUd
          claim_id: c_bBpQfYjn3-bMV_JsTkNLlo
          source_id: s_b1BkED5SZ28nq7xm5UqpES
          stance: supports
          locator: 成化五年進士登科錄:一卷，第三甲第七十名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_b1BkED5SZ28nq7xm5UqpES
            source_type: api_record
            title: 中国历代人物传记资料库：王克誠（CBDB 244053）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244053&o=json
            external_identifier: CBDB:244053
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.016Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_B3XLSR6CqA2q9R5BhcVhA3
        status: active
        display_name: 王克誠
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王舟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王舟 | accepted |
| birth.date | 1437年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_PssJzEL6PmniEjHiumeCwT | 王騶虞 | accepted |
| ancestors | p_agr7Kh67jpGsGa4tzGrKgc | 王文華 | accepted |
| ancestors | p_B3XLSR6CqA2q9R5BhcVhA3 | 王克誠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王克誠（CBDB 244053）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244053&o=json)
- [中国历代人物传记资料库：王文華（CBDB 244054）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244054&o=json)
- [中国历代人物传记资料库：王舟（CBDB 199369）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199369&o=json)
- [中国历代人物传记资料库：王騶虞（CBDB 244055）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244055&o=json)
