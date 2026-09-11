---
schema: wang-person/v1
id: p_baMid58DQ36C4L4JRGTG3E
status: active
merged_into: null
display_name: 王從盈
cbdb_id: 159088
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_smzbLgTVRAL7u8rMff2k66
        subject_person_id: p_baMid58DQ36C4L4JRGTG3E
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王從盈，唐人物。中国历代人物传记资料库（CBDB）以人物编号 159088 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_RSS_WDUWDYr3jdsrK5wABu
          claim_id: c_smzbLgTVRAL7u8rMff2k66
          source_id: s_aG3X6sH8eNGXP5EY83eLz8
          stance: supports
          locator: CBDB:159088
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_aG3X6sH8eNGXP5EY83eLz8
            source_type: api_record
            title: 中国历代人物传记资料库：王從盈（CBDB 159088）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=159088&o=json
            external_identifier: CBDB:159088
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.122Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_334ZT7EbkenjW6MpuYtFJs
        subject_person_id: p_baMid58DQ36C4L4JRGTG3E
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王從盈
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_BWPZNbzp2oZG2VKEmNW8bS
          claim_id: c_334ZT7EbkenjW6MpuYtFJs
          source_id: s_aG3X6sH8eNGXP5EY83eLz8
          stance: supports
          locator: CBDB:159088
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2201-2300）｜历史性依据：CBDB 朝代 = 唐
          source:
            id: s_aG3X6sH8eNGXP5EY83eLz8
            source_type: api_record
            title: 中国历代人物传记资料库：王從盈（CBDB 159088）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=159088&o=json
            external_identifier: CBDB:159088
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.122Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_5aSrWuNGNrkIeSXXTqO_m4
        subject_person_id: p_TSiXhGd4sf6hYFPw8EvWsp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_baMid58DQ36C4L4JRGTG3E
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6RTQPikAi2xw9-YlzaV_Mc
          claim_id: c_5aSrWuNGNrkIeSXXTqO_m4
          source_id: s_97EYxJPEnRvhgya9nsk7Fp
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_97EYxJPEnRvhgya9nsk7Fp
            source_type: api_record
            title: 中国历代人物传记资料库：王守琦（CBDB 141873）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141873&o=json
            external_identifier: CBDB:141873
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.207Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_TSiXhGd4sf6hYFPw8EvWsp
        status: active
        display_name: 王守琦
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王從盈

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王從盈，唐人物。中国历代人物传记资料库（CBDB）以人物编号 159088 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王從盈 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_TSiXhGd4sf6hYFPw8EvWsp | 王守琦 | accepted |

## 外部来源

- [中国历代人物传记资料库：王從盈（CBDB 159088）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=159088&o=json)
- [中国历代人物传记资料库：王守琦（CBDB 141873）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141873&o=json)
