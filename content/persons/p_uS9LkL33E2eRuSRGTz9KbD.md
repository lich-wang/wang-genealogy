---
schema: wang-person/v1
id: p_uS9LkL33E2eRuSRGTz9KbD
status: active
merged_into: null
display_name: 王仲僖
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HUCrVUY8g55SwVjSwZ6Zyh
        subject_person_id: p_uS9LkL33E2eRuSRGTz9KbD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲僖
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_n4SeBDMvD2NnQEfEcCJAMA
          claim_id: c_HUCrVUY8g55SwVjSwZ6Zyh
          source_id: s_fVN41JKSFgVvnUYiUfHQHA
          stance: supports
          locator: Q65819780
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_fVN41JKSFgVvnUYiUfHQHA
            source_type: api_record
            title: 维基数据：王仲僖（Q65819780）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65819780
            external_identifier: Q65819780
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_5Hjk7PoW2TDi7KFkLjZp49
          claim_id: c_HUCrVUY8g55SwVjSwZ6Zyh
          source_id: s_8PL7y6wsaaUGzBL3qvFHF6
          stance: supports
          locator: CBDB:386039
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source:
            id: s_8PL7y6wsaaUGzBL3qvFHF6
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王仲僖（386039）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386039&o=json
            external_identifier: CBDB:386039
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uzTFkiLFTQ95mcP7EyzLCV
        subject_person_id: p_uS9LkL33E2eRuSRGTz9KbD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: person, CBDB ID = 386039
          language: en
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7puTreesycr338mJ5dN1fU
          claim_id: c_uzTFkiLFTQ95mcP7EyzLCV
          source_id: s_fVN41JKSFgVvnUYiUfHQHA
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
        id: c_33QsLfNLtcDDpnoLco2wRj
        subject_person_id: p_Vs1PRNKHH6ZpeN7kAJmKti
        claim_kind: relationship
        predicate: kinship.mother_of
        object_person_id: p_uS9LkL33E2eRuSRGTz9KbD
        generation_count: null
        parent_role: mother
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Sbq4A2oWMHt3JcCZUxW3HC
          claim_id: c_33QsLfNLtcDDpnoLco2wRj
          source_id: s_fVN41JKSFgVvnUYiUfHQHA
          stance: supports
          locator: P25（母）
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_uACHnWHpnRfkmgPSscKTM2
          claim_id: c_33QsLfNLtcDDpnoLco2wRj
          source_id: s_sWCnmYdFgCgATu31i6USy7
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_sWCnmYdFgCgATu31i6USy7
            source_type: api_record
            title: 维基数据：王氏（Q45364774）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45364774
            external_identifier: Q45364774
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:10.721Z
            metadata_json: null
        - id: cs_63MFDzAYAJ8qSfvnt26wKC
          claim_id: c_33QsLfNLtcDDpnoLco2wRj
          source_id: s_D9bFN1kDtNLab2fq1CfJ6H
          stance: supports
          locator: 亲属关系：五子
          quotation: null
          interpretation_note: CBDB 注明此条来源：全宋文
          source:
            id: s_D9bFN1kDtNLab2fq1CfJ6H
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王氏（5347）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5347&o=json
            external_identifier: CBDB:5347
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:10.889Z
            metadata_json: null
      object_person:
        id: p_Vs1PRNKHH6ZpeN7kAJmKti
        status: active
        display_name: 王氏
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王仲僖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仲僖 | accepted |
| bio.summary | person, CBDB ID = 386039 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Vs1PRNKHH6ZpeN7kAJmKti | 王氏 | accepted |

## 外部来源

- [维基数据：王氏（Q45364774）](https://www.wikidata.org/wiki/Q45364774)
- [维基数据：王仲僖（Q65819780）](https://www.wikidata.org/wiki/Q65819780)
- [CBDB 中国历代人物传记资料库：王氏（5347）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5347&o=json)
- [CBDB 中国历代人物传记资料库：王仲僖（386039）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386039&o=json)
