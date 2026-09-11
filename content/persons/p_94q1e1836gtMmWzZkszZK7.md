---
schema: wang-person/v1
id: p_94q1e1836gtMmWzZkszZK7
status: active
merged_into: null
display_name: 王益
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XLff7ffMzZKdntHWk1KLaR
        subject_person_id: p_94q1e1836gtMmWzZkszZK7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王益
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_znuC9mm5QEceoVHE9178w9
          claim_id: c_XLff7ffMzZKdntHWk1KLaR
          source_id: s_KzVUwTYqbZ1sLD6i43Wwnw
          stance: supports
          locator: CBDB:7082
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（7082）
          source: &a1
            id: s_KzVUwTYqbZ1sLD6i43Wwnw
            source_type: api_record
            title: 中国历代人物传记资料库：王益（CBDB 7082）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7082&o=json
            external_identifier: CBDB:7082
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.470Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_R1keHywZ8bP1dD6rAwjvww
        subject_person_id: p_94q1e1836gtMmWzZkszZK7
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 993年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_71H3Xk55Mq62LdEnAmT45M
          claim_id: c_R1keHywZ8bP1dD6rAwjvww
          source_id: s_KzVUwTYqbZ1sLD6i43Wwnw
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
        id: c_YnWwLpCjetZDUHpM1g38FT
        subject_person_id: p_94q1e1836gtMmWzZkszZK7
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1038年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_76H8QjDJDfZZ2w7vykimvP
          claim_id: c_YnWwLpCjetZDUHpM1g38FT
          source_id: s_KzVUwTYqbZ1sLD6i43Wwnw
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
        id: c_9ecbHyeNBcFLzFRCZWi1cp
        subject_person_id: p_94q1e1836gtMmWzZkszZK7
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
        - id: cs_NwdSbDp6coEFCm76q4pFF2
          claim_id: c_9ecbHyeNBcFLzFRCZWi1cp
          source_id: s_KzVUwTYqbZ1sLD6i43Wwnw
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
        id: c_mKWE8KtcDGfNAzeHDRl8h4
        subject_person_id: p_ayDBbENQJQKZToA3G7hGQm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_94q1e1836gtMmWzZkszZK7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_L6otbDiIqh_NaP0vkGck4E
          claim_id: c_mKWE8KtcDGfNAzeHDRl8h4
          source_id: s_9pBeLoowJaNiChuJLaFPPm
          stance: supports
          locator: 宋人傳記資料索引(電子版)，812;815：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_9pBeLoowJaNiChuJLaFPPm
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：謝氏（5305）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5305&o=json
            external_identifier: CBDB:5305
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:49:15.877Z
            metadata_json: null
      object_person:
        id: p_ayDBbENQJQKZToA3G7hGQm
        status: active
        display_name: 谢氏
        merged_into_person_id: null
  children:
    - claim:
        id: c_ImricfX8NpNl1DdTGiJC8c
        subject_person_id: p_94q1e1836gtMmWzZkszZK7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fuv1kE3UCBeTFNiA6c9Tuw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OUxeQR_ajp52O9h1KeKEpC
          claim_id: c_ImricfX8NpNl1DdTGiJC8c
          source_id: s_Gh6euCr2RKfuAXB8kPrVBR
          stance: supports
          locator: 宋人傳記資料索引(電子版)，812：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Gh6euCr2RKfuAXB8kPrVBR
            source_type: api_record
            title: CBDB 中国历代人物传记资料库
            creator: null
            publisher: null
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu
            external_identifier: CBDB:1762
            license_code: CC-BY-NC-SA-4.0
            accessed_at: null
            metadata_json: null
      object_person:
        id: p_fuv1kE3UCBeTFNiA6c9Tuw
        status: active
        display_name: 王安石
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_oiPYkRmfeGcbZSwZLL6Zvd
        subject_person_id: p_U5JQDU5J5YYRKaCvpa53pZ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_94q1e1836gtMmWzZkszZK7
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_J8HBk65tcAv5g-Nbh7lonN
          claim_id: c_oiPYkRmfeGcbZSwZLL6Zvd
          source_id: s_r1DEUtGRws9a3wk7bfrEBS
          stance: supports
          locator: 宋人傳記資料索引(電子版)，812;813：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_r1DEUtGRws9a3wk7bfrEBS
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王明（18552）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=18552&o=json
            external_identifier: CBDB:18552
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:10:04.915Z
            metadata_json: null
      object_person:
        id: p_U5JQDU5J5YYRKaCvpa53pZ
        status: active
        display_name: 王明
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王益

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王益 | accepted |
| birth.date | 993年 | accepted |
| death.date | 1038年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ayDBbENQJQKZToA3G7hGQm | 谢氏 | accepted |
| children | p_fuv1kE3UCBeTFNiA6c9Tuw | 王安石 | accepted |
| ancestors | p_U5JQDU5J5YYRKaCvpa53pZ | 王明 | accepted |

## 外部来源

- [中国历代人物传记资料库：王益（CBDB 7082）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7082&o=json)
- [CBDB 中国历代人物传记资料库](https://cbdb.fas.harvard.edu)
- [CBDB 中国历代人物传记资料库：王明（18552）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=18552&o=json)
- [CBDB 中国历代人物传记资料库：謝氏（5305）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5305&o=json)
