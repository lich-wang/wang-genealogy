---
schema: wang-person/v1
id: p_zVv4Y4Shi3QhzSLgEg9sTt
status: active
merged_into: null
display_name: 王養粹
cbdb_id: 71907
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jkNYDh1CdeKZsfFxUrsLeo
        subject_person_id: p_zVv4Y4Shi3QhzSLgEg9sTt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王養粹（卒于1699年），清人物。中国历代人物传记资料库（CBDB）以人物编号 71907 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_D613veEXlKQpB_c9LUfFU4
          claim_id: c_jkNYDh1CdeKZsfFxUrsLeo
          source_id: s_v5qyyCY3uBfqAiRsBm7LvZ
          stance: supports
          locator: CBDB:71907
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_v5qyyCY3uBfqAiRsBm7LvZ
            source_type: api_record
            title: 中国历代人物传记资料库：王養粹（CBDB 71907）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71907&o=json
            external_identifier: CBDB:71907
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:36.789Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_CvK963eev1HJLh18DvEArN
        subject_person_id: p_zVv4Y4Shi3QhzSLgEg9sTt
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1699年
            calendar_note: CBDB 卒年字段，精度：年
            earliest: 1699-01-01
            latest: 1699-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8XZKy5UpKbR8fn3RH86MQP
          claim_id: c_CvK963eev1HJLh18DvEArN
          source_id: s_v5qyyCY3uBfqAiRsBm7LvZ
          stance: supports
          locator: CBDB:71907
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（201-300）｜历史性依据：CBDB 卒年 = 1699
          source:
            id: s_v5qyyCY3uBfqAiRsBm7LvZ
            source_type: api_record
            title: 中国历代人物传记资料库：王養粹（CBDB 71907）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71907&o=json
            external_identifier: CBDB:71907
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:36.789Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_heEGoqn5zjjYvwX1B8mDrD
        subject_person_id: p_zVv4Y4Shi3QhzSLgEg9sTt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王養粹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_sfLv5vb83YjiQdS8TTE2oe
          claim_id: c_heEGoqn5zjjYvwX1B8mDrD
          source_id: s_v5qyyCY3uBfqAiRsBm7LvZ
          stance: supports
          locator: CBDB:71907
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（201-300）｜历史性依据：CBDB 卒年 = 1699
          source:
            id: s_v5qyyCY3uBfqAiRsBm7LvZ
            source_type: api_record
            title: 中国历代人物传记资料库：王養粹（CBDB 71907）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71907&o=json
            external_identifier: CBDB:71907
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:36.789Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_6R-JtP2-4bfUOWhgkDPvS8
        subject_person_id: p_wf1KKuyg8uGUf1uL39cMrN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zVv4Y4Shi3QhzSLgEg9sTt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ELu4tGLek1BDCxE0bWwo_W
          claim_id: c_6R-JtP2-4bfUOWhgkDPvS8
          source_id: s_6pZJxQBgeKdMCZ1DeU3BtL
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13220：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_6pZJxQBgeKdMCZ1DeU3BtL
            source_type: api_record
            title: 中国历代人物传记资料库：王蘊奇（CBDB 527056）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=527056&o=json
            external_identifier: CBDB:527056
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.342Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_wf1KKuyg8uGUf1uL39cMrN
        status: active
        display_name: 王蘊奇
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王養粹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王養粹（卒于1699年），清人物。中国历代人物传记资料库（CBDB）以人物编号 71907 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 1699年 | accepted |
| name.primary | 王養粹 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_wf1KKuyg8uGUf1uL39cMrN | 王蘊奇 | accepted |

## 外部来源

- [中国历代人物传记资料库：王養粹（CBDB 71907）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71907&o=json)
- [中国历代人物传记资料库：王蘊奇（CBDB 527056）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=527056&o=json)
