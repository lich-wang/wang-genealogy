---
schema: wang-person/v1
id: p_BENHjYLLrgUUA56P1EQsxJ
status: active
merged_into: null
display_name: 王京
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_L4H9R8HaP2ua9itfBRyEAH
        subject_person_id: p_BENHjYLLrgUUA56P1EQsxJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王京
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nvxg1Q2EtDQpUB1WVAty49
          claim_id: c_L4H9R8HaP2ua9itfBRyEAH
          source_id: s_MqZXHeKKEDuqC7NBxak9bG
          stance: supports
          locator: CBDB:199375
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（199375）
          source: &a1
            id: s_MqZXHeKKEDuqC7NBxak9bG
            source_type: api_record
            title: 中国历代人物传记资料库：王京（CBDB 199375）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199375&o=json
            external_identifier: CBDB:199375
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.543Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_jYf4q4HmP3eTDJ6tN3cyAB
        subject_person_id: p_BENHjYLLrgUUA56P1EQsxJ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1431年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SJDNKNoPD3d3738fctFCLM
          claim_id: c_jYf4q4HmP3eTDJ6tN3cyAB
          source_id: s_MqZXHeKKEDuqC7NBxak9bG
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
        id: c_T9qwi6vBbUKHkSzoNi65fG
        subject_person_id: p_BENHjYLLrgUUA56P1EQsxJ
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
        - id: cs_KHUqB8oZkk6yToacsHJwf5
          claim_id: c_T9qwi6vBbUKHkSzoNi65fG
          source_id: s_MqZXHeKKEDuqC7NBxak9bG
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
        id: c_Xq08cFhoQkVg3b57GbX7x6
        subject_person_id: p_7JLmg2prJ3YdMcEXWFLKXR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BENHjYLLrgUUA56P1EQsxJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_87QZIJS8MzfjT5qOqs8lgh
          claim_id: c_Xq08cFhoQkVg3b57GbX7x6
          source_id: s_B6dLHtmv2bcXri1aDmor2m
          stance: supports
          locator: 成化五年進士登科錄:一卷，第三甲第七十八名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_B6dLHtmv2bcXri1aDmor2m
            source_type: api_record
            title: 中国历代人物传记资料库：王學古（CBDB 244147）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244147&o=json
            external_identifier: CBDB:244147
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.021Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7JLmg2prJ3YdMcEXWFLKXR
        status: active
        display_name: 王學古
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_E2p9kuFYZcEZgCAGl2Mia3
        subject_person_id: p_543sqZae6wghudWNrTBs92
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_BENHjYLLrgUUA56P1EQsxJ
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9YszpaHQhGPu6uF6kAKgTJ
          claim_id: c_E2p9kuFYZcEZgCAGl2Mia3
          source_id: s_GDBVisT5anP3wHHDWYK486
          stance: supports
          locator: 成化五年進士登科錄:一卷，第三甲第七十八名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_GDBVisT5anP3wHHDWYK486
            source_type: api_record
            title: 中国历代人物传记资料库：王樂山（CBDB 244145）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244145&o=json
            external_identifier: CBDB:244145
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:59.761Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_543sqZae6wghudWNrTBs92
        status: active
        display_name: 王樂山
        merged_into_person_id: null
    - claim:
        id: c_8DEmOWRNztVsSQe7sagSIZ
        subject_person_id: p_As8k5QheQW6FejkdJnuiDq
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_BENHjYLLrgUUA56P1EQsxJ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_C4X0PQ3pA21hsPqo6kvwH1
          claim_id: c_8DEmOWRNztVsSQe7sagSIZ
          source_id: s_vX6qLLfCqLYhgJg9EUedE7
          stance: supports
          locator: 成化五年進士登科錄:一卷，第三甲第七十八名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_vX6qLLfCqLYhgJg9EUedE7
            source_type: api_record
            title: 中国历代人物传记资料库：王道原（CBDB 244146）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244146&o=json
            external_identifier: CBDB:244146
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:59.761Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_As8k5QheQW6FejkdJnuiDq
        status: active
        display_name: 王道原
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王京

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王京 | accepted |
| birth.date | 1431年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_7JLmg2prJ3YdMcEXWFLKXR | 王學古 | accepted |
| ancestors | p_543sqZae6wghudWNrTBs92 | 王樂山 | accepted |
| ancestors | p_As8k5QheQW6FejkdJnuiDq | 王道原 | accepted |

## 外部来源

- [中国历代人物传记资料库：王道原（CBDB 244146）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244146&o=json)
- [中国历代人物传记资料库：王京（CBDB 199375）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199375&o=json)
- [中国历代人物传记资料库：王樂山（CBDB 244145）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244145&o=json)
- [中国历代人物传记资料库：王學古（CBDB 244147）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244147&o=json)
