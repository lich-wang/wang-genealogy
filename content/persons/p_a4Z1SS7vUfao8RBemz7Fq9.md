---
schema: wang-person/v1
id: p_a4Z1SS7vUfao8RBemz7Fq9
status: active
merged_into: null
display_name: 王兆琛
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Pi2q3xikhM2vtDTRYh4UDz
        subject_person_id: p_a4Z1SS7vUfao8RBemz7Fq9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王兆琛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_L25bXvmtFbd7QwEnxJX2un
          claim_id: c_Pi2q3xikhM2vtDTRYh4UDz
          source_id: s_brKMi5GwnBcw3HCt4kiPWS
          stance: supports
          locator: CBDB:58608
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（58608）
          source: &a1
            id: s_brKMi5GwnBcw3HCt4kiPWS
            source_type: api_record
            title: 中国历代人物传记资料库：王兆琛（CBDB 58608）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=58608&o=json
            external_identifier: CBDB:58608
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.823Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_ovURNQnT5SQ3QQEMv2TviK
        subject_person_id: p_a4Z1SS7vUfao8RBemz7Fq9
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1786年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_agEvZYVWHBocAHTZwxxPT6
          claim_id: c_ovURNQnT5SQ3QQEMv2TviK
          source_id: s_brKMi5GwnBcw3HCt4kiPWS
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
        id: c_4EbSncHEPnQia3dZvCcFSb
        subject_person_id: p_a4Z1SS7vUfao8RBemz7Fq9
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1852年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SfDrxUTF2NshNfdQ7fqpA1
          claim_id: c_4EbSncHEPnQia3dZvCcFSb
          source_id: s_brKMi5GwnBcw3HCt4kiPWS
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
        id: c_eguMKTpP7q8YUMaA7DBgNE
        subject_person_id: p_a4Z1SS7vUfao8RBemz7Fq9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AHsmR6C5Y3962ntv4s8Acc
          claim_id: c_eguMKTpP7q8YUMaA7DBgNE
          source_id: s_brKMi5GwnBcw3HCt4kiPWS
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
        id: c_N69PJI6e0JrPQop6d4kPjU
        subject_person_id: p_a4Z1SS7vUfao8RBemz7Fq9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6n1BzC9EQ9oU7PGzVBSSwn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oWmM56HNJjvr9n8PBABl3K
          claim_id: c_N69PJI6e0JrPQop6d4kPjU
          source_id: s_brKMi5GwnBcw3HCt4kiPWS
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），1869：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_6n1BzC9EQ9oU7PGzVBSSwn
        status: active
        display_name: 王丙归
        merged_into_person_id: null
    - claim:
        id: c_LadpX5wmYiZATbRjvCnwlM
        subject_person_id: p_a4Z1SS7vUfao8RBemz7Fq9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_93mcNiPtLm1MXFz8PQPE8k
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ODnzynw5W7T0w6LWKQ3G_d
          claim_id: c_LadpX5wmYiZATbRjvCnwlM
          source_id: s_brKMi5GwnBcw3HCt4kiPWS
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），1869：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_93mcNiPtLm1MXFz8PQPE8k
        status: active
        display_name: 王伯平
        merged_into_person_id: null
    - claim:
        id: c_yNAyenZD38q5IEgweIOy-Y
        subject_person_id: p_a4Z1SS7vUfao8RBemz7Fq9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6rHbEjM3MjCSTbn135WZGu
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QmgDkWRBZVgDKmc5wCUkPt
          claim_id: c_yNAyenZD38q5IEgweIOy-Y
          source_id: s_HSBQUEJZKpnLDt3oAsGvPQ
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），1869：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_HSBQUEJZKpnLDt3oAsGvPQ
            source_type: api_record
            title: 中国历代人物传记资料库：王垚辰（CBDB 517407）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=517407&o=json
            external_identifier: CBDB:517407
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:16.852Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_6rHbEjM3MjCSTbn135WZGu
        status: active
        display_name: 王垚辰
        merged_into_person_id: null
    - claim:
        id: c_VT2LBdC0FcZVQXvGnB5oCb
        subject_person_id: p_a4Z1SS7vUfao8RBemz7Fq9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AV8G5CWD8su9QpsaxD7iHh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_y65sVFcZvMaRhTbArLXzbV
          claim_id: c_VT2LBdC0FcZVQXvGnB5oCb
          source_id: s_ebKCcCmBQHZhmBW9gwAexy
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），1869：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ebKCcCmBQHZhmBW9gwAexy
            source_type: api_record
            title: 中国历代人物传记资料库：王伯溎（CBDB 517405）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=517405&o=json
            external_identifier: CBDB:517405
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:16.852Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_AV8G5CWD8su9QpsaxD7iHh
        status: active
        display_name: 王伯溎
        merged_into_person_id: null
    - claim:
        id: c_dagW2zyowvr41xYyVN7znk
        subject_person_id: p_a4Z1SS7vUfao8RBemz7Fq9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_T32jzbzJcHzypfJYEv1iMf
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LUZrE18imZpCMOGJF4lOs4
          claim_id: c_dagW2zyowvr41xYyVN7znk
          source_id: s_n1SWy4fsrPQc3f9o78UH87
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），1869：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_n1SWy4fsrPQc3f9o78UH87
            source_type: api_record
            title: 中国历代人物传记资料库：王伯淳（CBDB 517404）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=517404&o=json
            external_identifier: CBDB:517404
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:16.852Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_T32jzbzJcHzypfJYEv1iMf
        status: active
        display_name: 王伯淳
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王兆琛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王兆琛 | accepted |
| birth.date | 1786年 | accepted |
| death.date | 1852年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_6n1BzC9EQ9oU7PGzVBSSwn | 王丙归 | accepted |
| children | p_93mcNiPtLm1MXFz8PQPE8k | 王伯平 | accepted |
| children | p_6rHbEjM3MjCSTbn135WZGu | 王垚辰 | accepted |
| children | p_AV8G5CWD8su9QpsaxD7iHh | 王伯溎 | accepted |
| children | p_T32jzbzJcHzypfJYEv1iMf | 王伯淳 | accepted |

## 外部来源

- [中国历代人物传记资料库：王伯淳（CBDB 517404）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=517404&o=json)
- [中国历代人物传记资料库：王伯溎（CBDB 517405）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=517405&o=json)
- [中国历代人物传记资料库：王垚辰（CBDB 517407）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=517407&o=json)
- [中国历代人物传记资料库：王兆琛（CBDB 58608）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=58608&o=json)
