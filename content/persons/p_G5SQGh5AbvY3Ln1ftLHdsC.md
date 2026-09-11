---
schema: wang-person/v1
id: p_G5SQGh5AbvY3Ln1ftLHdsC
status: active
merged_into: null
display_name: 王克存
cbdb_id: 3963
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xejJkLjHttX5y3S7ZPH9dG
        subject_person_id: p_G5SQGh5AbvY3Ln1ftLHdsC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克存
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_izqFbXbUDTR4mKmcMHMdmi
          claim_id: c_xejJkLjHttX5y3S7ZPH9dG
          source_id: s_UArBFCc85vrjBPti5SxwAa
          stance: supports
          locator: Q45362980
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_UArBFCc85vrjBPti5SxwAa
            source_type: api_record
            title: 维基数据：王克存（Q45362980）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45362980
            external_identifier: Q45362980
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_4aQ1Na2my9Bcq1nUmfuyQa
          claim_id: c_xejJkLjHttX5y3S7ZPH9dG
          source_id: s_CjYrFhzcBWkcY7z6GAihxa
          stance: supports
          locator: CBDB:3963
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source:
            id: s_CjYrFhzcBWkcY7z6GAihxa
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王克存（3963）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3963&o=json
            external_identifier: CBDB:3963
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mQELSb4MciJfbpFzmsy3mz
        subject_person_id: p_G5SQGh5AbvY3Ln1ftLHdsC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: Song dynasty person (CBDB = 3963)
          language: en
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SMb8RocwGuxCcZBFEvMcdo
          claim_id: c_mQELSb4MciJfbpFzmsy3mz
          source_id: s_UArBFCc85vrjBPti5SxwAa
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 维基数据条目描述
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_8GwvkYhU8PE3MaA4PAAKoJ
        subject_person_id: p_Bxfq3zjpoq2kKYP1QvY7sM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_G5SQGh5AbvY3Ln1ftLHdsC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_V4TCpCs8CWa2CHX6SFhdri
          claim_id: c_8GwvkYhU8PE3MaA4PAAKoJ
          source_id: s_jvpVhi8Dn6ZYk8DHKdDRT1
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_jvpVhi8Dn6ZYk8DHKdDRT1
            source_type: api_record
            title: 维基数据：王世融（Q45363002）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45363002
            external_identifier: Q45363002
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:54.114Z
            metadata_json: null
        - id: cs_xurHvzvAPdbgSubN73C3Rc
          claim_id: c_8GwvkYhU8PE3MaA4PAAKoJ
          source_id: s_UArBFCc85vrjBPti5SxwAa
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_Xcrik3niUX44tzmZd48hNa
          claim_id: c_8GwvkYhU8PE3MaA4PAAKoJ
          source_id: s_JwHhzmm8rehrsyPhhkBDsr
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_JwHhzmm8rehrsyPhhkBDsr
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王世融（3972）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3972&o=json
            external_identifier: CBDB:3972
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:54.286Z
            metadata_json: null
      object_person:
        id: p_Bxfq3zjpoq2kKYP1QvY7sM
        status: active
        display_name: 王世融
        merged_into_person_id: null
  children:
    - claim:
        id: c_eOXj8VE_22HX1iBLT-TQF8
        subject_person_id: p_G5SQGh5AbvY3Ln1ftLHdsC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BKktkDBxZW36NWWhLLkpwH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3G8YWnoVYZJHJvBSD6S5xc
          claim_id: c_eOXj8VE_22HX1iBLT-TQF8
          source_id: s_K4cAAPq3xBP2LsGZ8g8G9a
          stance: supports
          locator: CBDB 双向互证（父 王克存 ⇄ 子 王發）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_K4cAAPq3xBP2LsGZ8g8G9a
            source_type: api_record
            title: 中国历代人物传记资料库：王發（CBDB 3950）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3950&o=json
            external_identifier: CBDB:3950
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.428Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BKktkDBxZW36NWWhLLkpwH
        status: active
        display_name: 王發
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王克存

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王克存 | accepted |
| bio.summary | Song dynasty person (CBDB = 3963) | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Bxfq3zjpoq2kKYP1QvY7sM | 王世融 | accepted |
| children | p_BKktkDBxZW36NWWhLLkpwH | 王發 | accepted |

## 外部来源

- [维基数据：王克存（Q45362980）](https://www.wikidata.org/wiki/Q45362980)
- [维基数据：王世融（Q45363002）](https://www.wikidata.org/wiki/Q45363002)
- [中国历代人物传记资料库：王發（CBDB 3950）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3950&o=json)
- [CBDB 中国历代人物传记资料库：王克存（3963）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3963&o=json)
- [CBDB 中国历代人物传记资料库：王世融（3972）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3972&o=json)
