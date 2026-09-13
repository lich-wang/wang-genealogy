---
schema: wang-person/v1
id: p_Se45cXwL9o2WnPoq4pncyB
status: active
merged_into: null
display_name: 王泛
cbdb_id: 175528
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_or6q8moeE5fZtXb5JQ3xKb
        subject_person_id: p_Se45cXwL9o2WnPoq4pncyB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王泛（卒于783年），唐人物。籍贯咸陽。（中国历代人物传记资料库 CBDB 175528）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_YHiFdp2W93qWoev4BJ1QSw
          claim_id: c_or6q8moeE5fZtXb5JQ3xKb
          source_id: s_UFSvenArZ2uCZbsmnvLQNW
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_UFSvenArZ2uCZbsmnvLQNW
            source_type: api_record
            title: 维基数据：王泛（Q45664870）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45664870
            external_identifier: Q45664870
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:59.370Z
            metadata_json: null
        - id: cs_caSdOc33iXf5rFQCJQ5fkx
          claim_id: c_or6q8moeE5fZtXb5JQ3xKb
          source_id: s_YUgdt56kmxHuPGvJKrvLjL
          stance: supports
          locator: CBDB:175528
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_YUgdt56kmxHuPGvJKrvLjL
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王泛（175528）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175528&o=json
            external_identifier: CBDB:175528
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:59.556Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_8wgVCsy1S1BdJTLQEg215Z
        subject_person_id: p_Se45cXwL9o2WnPoq4pncyB
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 783年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0783-01-01
            latest: 0783-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6rKE9CRgMEpQgBPwqB5puK
          claim_id: c_8wgVCsy1S1BdJTLQEg215Z
          source_id: s_UFSvenArZ2uCZbsmnvLQNW
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_UFSvenArZ2uCZbsmnvLQNW
            source_type: api_record
            title: 维基数据：王泛（Q45664870）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45664870
            external_identifier: Q45664870
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:59.370Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_HMToutUf9FXKmgAJ5xvJ4G
        subject_person_id: p_Se45cXwL9o2WnPoq4pncyB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王泛
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_LMRFuJpjMQRqbiPJ7W2Tpd
          claim_id: c_HMToutUf9FXKmgAJ5xvJ4G
          source_id: s_YUgdt56kmxHuPGvJKrvLjL
          stance: supports
          locator: Q45664870
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_kfwJScQZ5rHSh4J4Wzbc62
          claim_id: c_HMToutUf9FXKmgAJ5xvJ4G
          source_id: s_UFSvenArZ2uCZbsmnvLQNW
          stance: supports
          locator: Q45664870
          quotation: null
          interpretation_note: null
          source:
            id: s_UFSvenArZ2uCZbsmnvLQNW
            source_type: api_record
            title: 维基数据：王泛（Q45664870）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45664870
            external_identifier: Q45664870
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:59.370Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_EyoWZ11cYeUqceMqWV41it
        subject_person_id: p_cGkviQ74mqPnwC4eLmu3AD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Se45cXwL9o2WnPoq4pncyB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_AkncSXjW5rXC9v223jDB8e
          claim_id: c_EyoWZ11cYeUqceMqWV41it
          source_id: s_S3HDHGLJf9GpmQL5eDFUmW
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_S3HDHGLJf9GpmQL5eDFUmW
            source_type: api_record
            title: 维基数据：王侁（Q45664762）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45664762
            external_identifier: Q45664762
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:28.974Z
            metadata_json: null
        - id: cs_hLB6WVjYQZCtje6dBqYgcF
          claim_id: c_EyoWZ11cYeUqceMqWV41it
          source_id: s_9qDvYDyphuaW4PbCNK4SSY
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_9qDvYDyphuaW4PbCNK4SSY
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王侁（175526）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175526&o=json
            external_identifier: CBDB:175526
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:29.123Z
            metadata_json: null
        - id: cs_HtXJmvieKgwNMpeS6V8UY8
          claim_id: c_EyoWZ11cYeUqceMqWV41it
          source_id: s_UFSvenArZ2uCZbsmnvLQNW
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_UFSvenArZ2uCZbsmnvLQNW
            source_type: api_record
            title: 维基数据：王泛（Q45664870）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45664870
            external_identifier: Q45664870
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:59.370Z
            metadata_json: null
        - id: cs_UxkF8J5ygaXdDcYoxZiKbp
          claim_id: c_EyoWZ11cYeUqceMqWV41it
          source_id: s_YUgdt56kmxHuPGvJKrvLjL
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_YUgdt56kmxHuPGvJKrvLjL
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王泛（175528）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175528&o=json
            external_identifier: CBDB:175528
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:59.556Z
            metadata_json: null
      object_person:
        id: p_cGkviQ74mqPnwC4eLmu3AD
        status: active
        display_name: 王侁
        merged_into_person_id: null
  children:
    - claim:
        id: c_GgDYTCWrk5HS5i29GuB4M1
        subject_person_id: p_Se45cXwL9o2WnPoq4pncyB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1gticUWCJ47bH6TQyidvLU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_1FgQtVWwdyanmaEHU7ZuCx
          claim_id: c_GgDYTCWrk5HS5i29GuB4M1
          source_id: s_UFSvenArZ2uCZbsmnvLQNW
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_UFSvenArZ2uCZbsmnvLQNW
            source_type: api_record
            title: 维基数据：王泛（Q45664870）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45664870
            external_identifier: Q45664870
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:59.370Z
            metadata_json: null
        - id: cs_yRjyn2zZUw5VrNg9sxMrEq
          claim_id: c_GgDYTCWrk5HS5i29GuB4M1
          source_id: s_YUgdt56kmxHuPGvJKrvLjL
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_YUgdt56kmxHuPGvJKrvLjL
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王泛（175528）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175528&o=json
            external_identifier: CBDB:175528
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:59.556Z
            metadata_json: null
        - id: cs_Ld1DT7Dc8XtpLD8sJY1BhY
          claim_id: c_GgDYTCWrk5HS5i29GuB4M1
          source_id: s_sF9qAkJmzvpFTC3S5HfPz6
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_sF9qAkJmzvpFTC3S5HfPz6
            source_type: api_record
            title: 维基数据：王邈（Q45664923）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45664923
            external_identifier: Q45664923
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:36.527Z
            metadata_json: null
        - id: cs_W6wUbjDfMZFJEgJUKVCS7j
          claim_id: c_GgDYTCWrk5HS5i29GuB4M1
          source_id: s_PBkUSJBNY3ZiStgYhgZGC4
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_PBkUSJBNY3ZiStgYhgZGC4
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王邈（175529）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175529&o=json
            external_identifier: CBDB:175529
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:36.685Z
            metadata_json: null
      object_person:
        id: p_1gticUWCJ47bH6TQyidvLU
        status: active
        display_name: 王邈
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王泛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王泛（卒于783年），唐人物。籍贯咸陽。（中国历代人物传记资料库 CBDB 175528） | accepted |
| death.date | 783年 | accepted |
| name.primary | 王泛 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_cGkviQ74mqPnwC4eLmu3AD | 王侁 | accepted |
| children | p_1gticUWCJ47bH6TQyidvLU | 王邈 | accepted |

## 外部来源

- [维基数据：王泛（Q45664870）](https://www.wikidata.org/wiki/Q45664870)
- [维基数据：王邈（Q45664923）](https://www.wikidata.org/wiki/Q45664923)
- [维基数据：王侁（Q45664762）](https://www.wikidata.org/wiki/Q45664762)
- [CBDB 中国历代人物传记资料库：王泛（175528）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175528&o=json)
- [CBDB 中国历代人物传记资料库：王邈（175529）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175529&o=json)
- [CBDB 中国历代人物传记资料库：王侁（175526）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175526&o=json)
