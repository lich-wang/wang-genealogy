---
schema: wang-person/v1
id: p_FeTYKhXT263ArThLLQ1A9F
status: active
merged_into: null
display_name: 王世彦
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_34JKHcSSwLYJg2CLshbcQN
        subject_person_id: p_FeTYKhXT263ArThLLQ1A9F
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世彦，宋人物。CBDB 记录其籍贯记录为開封。中国历代人物传记资料库（CBDB）以人物编号 17779 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_vDca9Gqbz9Fem4aoDetHj1
          claim_id: c_34JKHcSSwLYJg2CLshbcQN
          source_id: s_AR4PsZDWVcPSsPLajb8s1c
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_AR4PsZDWVcPSsPLajb8s1c
            source_type: api_record
            title: 维基数据：王世彦（Q45387199）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45387199
            external_identifier: Q45387199
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:16.211Z
            metadata_json: null
        - id: cs_MQFj1R40uJZO7ba2Ofas2k
          claim_id: c_34JKHcSSwLYJg2CLshbcQN
          source_id: s_99qRkLEE1MfJL4Ac6oWaJ8
          stance: supports
          locator: CBDB:17779
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_99qRkLEE1MfJL4Ac6oWaJ8
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王世彥（17779）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17779&o=json
            external_identifier: CBDB:17779
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:07:16.361Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_LdVzcowJB5Kik99FUSQM51
        subject_person_id: p_FeTYKhXT263ArThLLQ1A9F
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世彦
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_jk3ArhHhLYtJDMuZkBwEvA
          claim_id: c_LdVzcowJB5Kik99FUSQM51
          source_id: s_99qRkLEE1MfJL4Ac6oWaJ8
          stance: supports
          locator: Q45387199
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_yZMLRaEyTF8fs6R6HeX9q6
          claim_id: c_LdVzcowJB5Kik99FUSQM51
          source_id: s_AR4PsZDWVcPSsPLajb8s1c
          stance: supports
          locator: Q45387199
          quotation: null
          interpretation_note: null
          source:
            id: s_AR4PsZDWVcPSsPLajb8s1c
            source_type: api_record
            title: 维基数据：王世彦（Q45387199）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45387199
            external_identifier: Q45387199
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:16.211Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王世彦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王世彦，宋人物。CBDB 记录其籍贯记录为開封。中国历代人物传记资料库（CBDB）以人物编号 17779 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王世彦 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [维基数据：王世彦（Q45387199）](https://www.wikidata.org/wiki/Q45387199)
- [CBDB 中国历代人物传记资料库：王世彥（17779）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17779&o=json)
