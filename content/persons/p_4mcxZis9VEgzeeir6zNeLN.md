---
schema: wang-person/v1
id: p_4mcxZis9VEgzeeir6zNeLN
status: active
merged_into: null
display_name: 王星遠
cbdb_id: 56002
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1r2m3fJECzJsGfwjphku4C
        subject_person_id: p_4mcxZis9VEgzeeir6zNeLN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王星遠，清人物。中国历代人物传记资料库（CBDB）以人物编号 56002 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_S9SaF1OyJN466ucET9_DQd
          claim_id: c_1r2m3fJECzJsGfwjphku4C
          source_id: s_QK1iLCUkYeyZLABdRjWNBP
          stance: supports
          locator: CBDB:56002
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_QK1iLCUkYeyZLABdRjWNBP
            source_type: api_record
            title: 中国历代人物传记资料库：王星遠（CBDB 56002）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56002&o=json
            external_identifier: CBDB:56002
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:48.148Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ykaE2J3h4wgkWXDfT5gRgR
        subject_person_id: p_4mcxZis9VEgzeeir6zNeLN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王星遠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_3Npj1HZPPzzxg9Jeuqw67N
          claim_id: c_ykaE2J3h4wgkWXDfT5gRgR
          source_id: s_QK1iLCUkYeyZLABdRjWNBP
          stance: supports
          locator: CBDB:56002
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1401-1500）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_QK1iLCUkYeyZLABdRjWNBP
            source_type: api_record
            title: 中国历代人物传记资料库：王星遠（CBDB 56002）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56002&o=json
            external_identifier: CBDB:56002
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:48.148Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_lQ5yhHS2vM2Vzm0qXs2QZw
        subject_person_id: p_4mcxZis9VEgzeeir6zNeLN
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_SVMoRpq5AaYwTE2gNzvbXp
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_suJ89pkTyrrkHbM14xzvJm
          claim_id: c_lQ5yhHS2vM2Vzm0qXs2QZw
          source_id: s_EhWIO77JDF8aCYszCDDNRY
          stance: supports
          locator: CBDB 双向互证（妻子 徐鐘璧）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_EhWIO77JDF8aCYszCDDNRY
            source_type: api_record
            title: 中国历代人物传记资料库：徐鐘璧（CBDB 55999）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=55999&o=json
            external_identifier: CBDB:55999
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_SVMoRpq5AaYwTE2gNzvbXp
        status: active
        display_name: 徐鐘璧
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王星遠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王星遠，清人物。中国历代人物传记资料库（CBDB）以人物编号 56002 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王星遠 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_SVMoRpq5AaYwTE2gNzvbXp | 徐鐘璧 | accepted |

## 外部来源

- [中国历代人物传记资料库：王星遠（CBDB 56002）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56002&o=json)
- [中国历代人物传记资料库：徐鐘璧（CBDB 55999）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=55999&o=json)
