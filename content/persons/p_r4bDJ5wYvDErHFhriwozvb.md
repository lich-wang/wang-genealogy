---
schema: wang-person/v1
id: p_r4bDJ5wYvDErHFhriwozvb
status: active
merged_into: null
display_name: 王之都
cbdb_id: 342565
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Tq1ZYXsKF7Dwq7oEf4eS5Z
        subject_person_id: p_r4bDJ5wYvDErHFhriwozvb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之都
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Jj9xW9xmDq1CXNoWLV3HPY
          claim_id: c_Tq1ZYXsKF7Dwq7oEf4eS5Z
          source_id: s_rp2362z5WDUfmk5KaysXbi
          stance: supports
          locator: Q16075337
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_rp2362z5WDUfmk5KaysXbi
            source_type: api_record
            title: 维基数据：王之都（Q16075337）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16075337
            external_identifier: Q16075337
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%B9%8B%E9%83%BD
        - id: cs_xVNeci5APQ3HzUs7vfdwDC
          claim_id: c_Tq1ZYXsKF7Dwq7oEf4eS5Z
          source_id: s_J4e7kFQtZvepAdndsKGBzG
          stance: supports
          locator: CBDB:342565
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source:
            id: s_J4e7kFQtZvepAdndsKGBzG
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王之都（342565）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342565&o=json
            external_identifier: CBDB:342565
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UunREWjDVPRwDw51FVvg18
        subject_person_id: p_r4bDJ5wYvDErHFhriwozvb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之都（1564年—1615年），字爾章，號曙峯，山東濟南府新城縣人，明朝政治人物。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_axM8UUJpLK8Z9YHjx2gX6M
          claim_id: c_UunREWjDVPRwDw51FVvg18
          source_id: s_rp2362z5WDUfmk5KaysXbi
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 维基数据条目描述
          source: *a1
        - id: cs_twEnKFCVfWlYKMKn1CAptl
          claim_id: c_UunREWjDVPRwDw51FVvg18
          source_id: s_5oEf-nrtbsUF9LFyQmCfuG
          stance: supports
          locator: 导言
          quotation: 王之都（1564年—1615年），字爾章，號曙峯，山東濟南府新城
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source:
            id: s_5oEf-nrtbsUF9LFyQmCfuG
            source_type: website
            title: 中文维基百科：王之都
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%B9%8B%E9%83%BD
            external_identifier: Q16075337
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-13T09:29:27.764Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_w5M4xcFNWk4cMvDo1CoDYD
        subject_person_id: p_CVwNugtPLMKx2eABoAcjQ3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_r4bDJ5wYvDErHFhriwozvb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_s7kQ3UGwzKzdRfmR9EPB7y
          claim_id: c_w5M4xcFNWk4cMvDo1CoDYD
          source_id: s_rp2362z5WDUfmk5KaysXbi
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_PgRvYVpJ5MoSahrKQLEjtA
          claim_id: c_w5M4xcFNWk4cMvDo1CoDYD
          source_id: s_BaAZc4Uf49RJDM6y27MpqX
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_BaAZc4Uf49RJDM6y27MpqX
            source_type: api_record
            title: 维基数据：王耿光（Q45610509）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45610509
            external_identifier: Q45610509
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:20.507Z
            metadata_json: null
      object_person:
        id: p_CVwNugtPLMKx2eABoAcjQ3
        status: active
        display_name: 王耿光
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王之都

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之都 | accepted |
| bio.summary | 王之都（1564年—1615年），字爾章，號曙峯，山東濟南府新城縣人，明朝政治人物。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_CVwNugtPLMKx2eABoAcjQ3 | 王耿光 | accepted |

## 外部来源

- [维基数据：王耿光（Q45610509）](https://www.wikidata.org/wiki/Q45610509)
- [维基数据：王之都（Q16075337）](https://www.wikidata.org/wiki/Q16075337)
- [中文维基百科：王之都](https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%B9%8B%E9%83%BD)
- [CBDB 中国历代人物传记资料库：王之都（342565）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342565&o=json)
