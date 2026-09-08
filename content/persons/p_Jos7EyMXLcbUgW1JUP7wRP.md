---
schema: wang-person/v1
id: p_Jos7EyMXLcbUgW1JUP7wRP
status: active
merged_into: null
display_name: 王士平
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rQzzmcZbsEMf711NQehCCy
        subject_person_id: p_Jos7EyMXLcbUgW1JUP7wRP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士平
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dxXdyuJthfYYMhoJi6if8o
          claim_id: c_rQzzmcZbsEMf711NQehCCy
          source_id: s_wQGD9z6dYDUR55Gi2dyWjt
          stance: supports
          locator: Q45518506
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_wQGD9z6dYDUR55Gi2dyWjt
            source_type: api_record
            title: 维基数据：王士平（Q45518506）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45518506
            external_identifier: Q45518506
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A3%AB%E5%B9%B3
        - id: cs_SN28sR8694QL5SoAyvxH6z
          claim_id: c_rQzzmcZbsEMf711NQehCCy
          source_id: s_eQLo2XY2oexKGs9uzk4ZyB
          stance: supports
          locator: CBDB:194206
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source:
            id: s_eQLo2XY2oexKGs9uzk4ZyB
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王士平（194206）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=194206&o=json
            external_identifier: CBDB:194206
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5Tc45Ntq83gYyU4eiaQNtB
        subject_person_id: p_Jos7EyMXLcbUgW1JUP7wRP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: Tang dynasty person CBDB = 194206
          language: en
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aGE1GDnhvsQ95q5EXmQV8n
          claim_id: c_5Tc45Ntq83gYyU4eiaQNtB
          source_id: s_wQGD9z6dYDUR55Gi2dyWjt
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 维基数据条目描述
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_atd9H4FJCSH4a1yn2EbHLC
        subject_person_id: p_Jos7EyMXLcbUgW1JUP7wRP
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 831年
            calendar_note: 维基数据 P570 结构化日期，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rDQy97aa9PEQLgiwL9gQHy
          claim_id: c_atd9H4FJCSH4a1yn2EbHLC
          source_id: s_wQGD9z6dYDUR55Gi2dyWjt
          stance: supports
          locator: P570（死亡日期）
          quotation: null
          interpretation_note: 维基数据 P570
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_pMRXcjGGTDqsiBrWcwYTMA
        subject_person_id: p_LkMtpZjg6KZsBH9aWToWD9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Jos7EyMXLcbUgW1JUP7wRP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ThJ1cpCV9AbojMmQQvv18h
          claim_id: c_pMRXcjGGTDqsiBrWcwYTMA
          source_id: s_c7zbsk2y4rB9uNmsVojoyp
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_c7zbsk2y4rB9uNmsVojoyp
            source_type: api_record
            title: 维基数据：王武俊（Q7967676）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q7967676
            external_identifier: Q7967676
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:22.442Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%AD%A6%E4%BF%8A
        - id: cs_3PCxJwYEX1urUmxnz3N8ky
          claim_id: c_pMRXcjGGTDqsiBrWcwYTMA
          source_id: s_wQGD9z6dYDUR55Gi2dyWjt
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_pKC6bZ184dqEZgy2kUeApz
          claim_id: c_pMRXcjGGTDqsiBrWcwYTMA
          source_id: s_mMp7PA549b87u7vum9HFuz
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_mMp7PA549b87u7vum9HFuz
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王武俊（191752）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191752&o=json
            external_identifier: CBDB:191752
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:22.594Z
            metadata_json: null
      object_person:
        id: p_LkMtpZjg6KZsBH9aWToWD9
        status: active
        display_name: 王武俊
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王士平

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王士平 | accepted |
| bio.summary | Tang dynasty person CBDB = 194206 | accepted |
| death.date | 831年 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_LkMtpZjg6KZsBH9aWToWD9 | 王武俊 | accepted |

## 外部来源

- [维基数据：王士平（Q45518506）](https://www.wikidata.org/wiki/Q45518506)
- [维基数据：王武俊（Q7967676）](https://www.wikidata.org/wiki/Q7967676)
- [CBDB 中国历代人物传记资料库：王士平（194206）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=194206&o=json)
- [CBDB 中国历代人物传记资料库：王武俊（191752）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191752&o=json)
