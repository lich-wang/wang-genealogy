---
schema: wang-person/v1
id: p_NRx3VSv8tLS5byyexe8Ae2
status: active
merged_into: null
display_name: 王祿壽
cbdb_id: 514400
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZtV3GBgawEWE3op17uDDtA
        subject_person_id: p_NRx3VSv8tLS5byyexe8Ae2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祿壽，清人物。中国历代人物传记资料库（CBDB）以人物编号 514400 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_R1De7zbCif1RM1ZbCHZ6qq
          claim_id: c_ZtV3GBgawEWE3op17uDDtA
          source_id: s_6UUyfDszyYe6opRHLThMHB
          stance: supports
          locator: CBDB:514400
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_6UUyfDszyYe6opRHLThMHB
            source_type: api_record
            title: 中国历代人物传记资料库：王祿壽（CBDB 514400）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=514400&o=json
            external_identifier: CBDB:514400
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:15.776Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_oAPyyAegaB63Ec6XEkGj8S
        subject_person_id: p_NRx3VSv8tLS5byyexe8Ae2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祿壽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_XAWCPzABwPWBCBbLUTY3b1
          claim_id: c_oAPyyAegaB63Ec6XEkGj8S
          source_id: s_6UUyfDszyYe6opRHLThMHB
          stance: supports
          locator: CBDB:514400
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（6801-6900）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_6UUyfDszyYe6opRHLThMHB
            source_type: api_record
            title: 中国历代人物传记资料库：王祿壽（CBDB 514400）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=514400&o=json
            external_identifier: CBDB:514400
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:15.776Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_kADEc3HJu3A4mg5-IcM35M
        subject_person_id: p_G6PYESGzqirPe5FH9niZ5p
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NRx3VSv8tLS5byyexe8Ae2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6fI4G0KdLyes6l8IvZthrI
          claim_id: c_kADEc3HJu3A4mg5-IcM35M
          source_id: s_VmDd9gpgvggHDcDRBnjxwH
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），400：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_VmDd9gpgvggHDcDRBnjxwH
            source_type: api_record
            title: 中国历代人物传记资料库：王紹蘭（CBDB 57181）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=57181&o=json
            external_identifier: CBDB:57181
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.797Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_G6PYESGzqirPe5FH9niZ5p
        status: active
        display_name: 王紹蘭
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王祿壽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王祿壽，清人物。中国历代人物传记资料库（CBDB）以人物编号 514400 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王祿壽 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_G6PYESGzqirPe5FH9niZ5p | 王紹蘭 | accepted |

## 外部来源

- [中国历代人物传记资料库：王祿壽（CBDB 514400）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=514400&o=json)
- [中国历代人物传记资料库：王紹蘭（CBDB 57181）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=57181&o=json)
