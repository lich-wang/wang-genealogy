---
schema: wang-person/v1
id: p_Jun3pZ1BMQpwyok4KhGLAv
status: active
merged_into: null
display_name: 王舜英
cbdb_id: 522616
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gtstzeNHCjtg7n6qVWmQ54
        subject_person_id: p_Jun3pZ1BMQpwyok4KhGLAv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王舜英，清人物。中国历代人物传记资料库（CBDB）以人物编号 522616 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_1PTxeXvYB8vP-4S2MepVav
          claim_id: c_gtstzeNHCjtg7n6qVWmQ54
          source_id: s_tvsjn4J5b6YZSac65GAynk
          stance: supports
          locator: CBDB:522616
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_tvsjn4J5b6YZSac65GAynk
            source_type: api_record
            title: 中国历代人物传记资料库：王舜英（CBDB 522616）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=522616&o=json
            external_identifier: CBDB:522616
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:17.868Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_7o8vuMHGC49V5A5vQwqFdj
        subject_person_id: p_Jun3pZ1BMQpwyok4KhGLAv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王舜英
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_uCNv5e6j8kZBgiEPyWRLPG
          claim_id: c_7o8vuMHGC49V5A5vQwqFdj
          source_id: s_tvsjn4J5b6YZSac65GAynk
          stance: supports
          locator: CBDB:522616
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（7001-7100）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_tvsjn4J5b6YZSac65GAynk
            source_type: api_record
            title: 中国历代人物传记资料库：王舜英（CBDB 522616）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=522616&o=json
            external_identifier: CBDB:522616
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:17.868Z
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
        id: c_A1vNiPEoo5wGxx3GRH2k65
        subject_person_id: p_dnPtsKEtjAp3Do6nrbinqW
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_Jun3pZ1BMQpwyok4KhGLAv
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3d9TKiqo8HX6TWPKwSTDCs
          claim_id: c_A1vNiPEoo5wGxx3GRH2k65
          source_id: s_zaPd5CHsDUebGWSUJkAa3A
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：人名權威資料（中央研究院歷史語言研究所）
          source:
            id: s_zaPd5CHsDUebGWSUJkAa3A
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：錢大昕（29876）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29876&o=json
            external_identifier: CBDB:29876
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person:
        id: p_dnPtsKEtjAp3Do6nrbinqW
        status: active
        display_name: 钱大昕
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王舜英

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王舜英，清人物。中国历代人物传记资料库（CBDB）以人物编号 522616 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王舜英 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_dnPtsKEtjAp3Do6nrbinqW | 钱大昕 | accepted |

## 外部来源

- [中国历代人物传记资料库：王舜英（CBDB 522616）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=522616&o=json)
- [CBDB 中国历代人物传记资料库：錢大昕（29876）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29876&o=json)
