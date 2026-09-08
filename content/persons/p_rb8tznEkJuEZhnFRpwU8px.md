---
schema: wang-person/v1
id: p_rb8tznEkJuEZhnFRpwU8px
status: active
merged_into: null
display_name: 王世范
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AYFv67HvQC5QbHEvb8HNiG
        subject_person_id: p_rb8tznEkJuEZhnFRpwU8px
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世范，宋人物。CBDB 记录其籍贯记录为開封，曾任大理寺丞、縣令。中国历代人物传记资料库（CBDB）以人物编号 17764 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_VY1iCjfHKG9qSv6LaN5oyH
          claim_id: c_AYFv67HvQC5QbHEvb8HNiG
          source_id: s_BRwNt2rL1nH38BZfJQECmg
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_BRwNt2rL1nH38BZfJQECmg
            source_type: api_record
            title: 维基数据：王世范（Q45387151）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45387151
            external_identifier: Q45387151
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:16.211Z
            metadata_json: null
        - id: cs_Ty-JB-PgSZR08YM-8Htw_y
          claim_id: c_AYFv67HvQC5QbHEvb8HNiG
          source_id: s_L7kDY6PmxnJSsYVJJs546H
          stance: supports
          locator: CBDB:17764
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_L7kDY6PmxnJSsYVJJs546H
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王世範（17764）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17764&o=json
            external_identifier: CBDB:17764
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:07:16.368Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_qToZai5j3M5QLm2vYiNgki
        subject_person_id: p_rb8tznEkJuEZhnFRpwU8px
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世范
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_BBizQoZRAeyirATyL4n62B
          claim_id: c_qToZai5j3M5QLm2vYiNgki
          source_id: s_BRwNt2rL1nH38BZfJQECmg
          stance: supports
          locator: Q45387151
          quotation: null
          interpretation_note: null
          source:
            id: s_BRwNt2rL1nH38BZfJQECmg
            source_type: api_record
            title: 维基数据：王世范（Q45387151）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45387151
            external_identifier: Q45387151
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:16.211Z
            metadata_json: null
        - id: cs_GH21b55Es2NCeoL9oXpxAX
          claim_id: c_qToZai5j3M5QLm2vYiNgki
          source_id: s_L7kDY6PmxnJSsYVJJs546H
          stance: supports
          locator: Q45387151
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_3Jd79Jda1NLkESyFfDwjjw
        subject_person_id: p_wCQ4n6gjkTCPS8LugdRHWA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rb8tznEkJuEZhnFRpwU8px
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_J1eTpb8QJghw714Nn6rWSy
          claim_id: c_3Jd79Jda1NLkESyFfDwjjw
          source_id: s_8tb7H17LZZ18Y1Xh2UHhzJ
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_8tb7H17LZZ18Y1Xh2UHhzJ
            source_type: api_record
            title: 维基数据：王承休（Q45387109）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45387109
            external_identifier: Q45387109
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:01.600Z
            metadata_json: null
        - id: cs_qfBqC88iAaAGMaL9zCujJr
          claim_id: c_3Jd79Jda1NLkESyFfDwjjw
          source_id: s_BRwNt2rL1nH38BZfJQECmg
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_kjKMhE6BtZ5JPsrgkwEYMc
          claim_id: c_3Jd79Jda1NLkESyFfDwjjw
          source_id: s_3645jTBhScZjw1Rhc1zu75
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_3645jTBhScZjw1Rhc1zu75
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王承休（17750）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17750&o=json
            external_identifier: CBDB:17750
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:01.779Z
            metadata_json: null
      object_person:
        id: p_wCQ4n6gjkTCPS8LugdRHWA
        status: active
        display_name: 王承休
        merged_into_person_id: null
  children:
    - claim:
        id: c_1UA4a1UB2fUdTEHwdvKiHC
        subject_person_id: p_rb8tznEkJuEZhnFRpwU8px
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Erayz4s9swjJK1V2btoz8U
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8jAMeXFwdfBViTj7UHxLDf
          claim_id: c_1UA4a1UB2fUdTEHwdvKiHC
          source_id: s_VD3Dhwa3XC7VZuFE3CSmcc
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_VD3Dhwa3XC7VZuFE3CSmcc
            source_type: api_record
            title: 维基数据：王克敦（Q45387155）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45387155
            external_identifier: Q45387155
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_fgPMWXASdvte2SJNa4XaCN
          claim_id: c_1UA4a1UB2fUdTEHwdvKiHC
          source_id: s_BRwNt2rL1nH38BZfJQECmg
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_NWvvbrP5n6NWqr6gSLXEe1
          claim_id: c_1UA4a1UB2fUdTEHwdvKiHC
          source_id: s_L7kDY6PmxnJSsYVJJs546H
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source: *a1
      object_person:
        id: p_Erayz4s9swjJK1V2btoz8U
        status: active
        display_name: 王克敦
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王世范

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王世范，宋人物。CBDB 记录其籍贯记录为開封，曾任大理寺丞、縣令。中国历代人物传记资料库（CBDB）以人物编号 17764 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王世范 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_wCQ4n6gjkTCPS8LugdRHWA | 王承休 | accepted |
| children | p_Erayz4s9swjJK1V2btoz8U | 王克敦 | accepted |

## 外部来源

- [维基数据：王承休（Q45387109）](https://www.wikidata.org/wiki/Q45387109)
- [维基数据：王克敦（Q45387155）](https://www.wikidata.org/wiki/Q45387155)
- [维基数据：王世范（Q45387151）](https://www.wikidata.org/wiki/Q45387151)
- [CBDB 中国历代人物传记资料库：王承休（17750）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17750&o=json)
- [CBDB 中国历代人物传记资料库：王世範（17764）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17764&o=json)
