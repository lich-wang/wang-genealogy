---
schema: wang-person/v1
id: p_5fRdJNrXdLbTVYRCLCzh9J
status: active
merged_into: null
display_name: 王源诚
cbdb_id: 175535
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_v6nVnLm2GiVr4BKFLxNwL3
        subject_person_id: p_5fRdJNrXdLbTVYRCLCzh9J
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王源诚（卒于820年），唐人物。CBDB 记录其籍贯记录为咸陽。中国历代人物传记资料库（CBDB）以人物编号 175535 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_9m68Q6aa8NxUThKUrupMZ8
          claim_id: c_v6nVnLm2GiVr4BKFLxNwL3
          source_id: s_LrmPoa4RWufcsyiFoe4xPW
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_LrmPoa4RWufcsyiFoe4xPW
            source_type: api_record
            title: 维基数据：王源诚（Q45665247）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45665247
            external_identifier: Q45665247
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:36.528Z
            metadata_json: null
        - id: cs_t70q6ZPKK4lwiByhnM_MiM
          claim_id: c_v6nVnLm2GiVr4BKFLxNwL3
          source_id: s_XuwG1wreYTTz7QU5EnhzBu
          stance: supports
          locator: CBDB:175535
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_XuwG1wreYTTz7QU5EnhzBu
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王源誠（175535）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175535&o=json
            external_identifier: CBDB:175535
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:36.690Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_g2dKfVLfzcTgKgsa7CQWbR
        subject_person_id: p_5fRdJNrXdLbTVYRCLCzh9J
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 820年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0820-01-01
            latest: 0820-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TqjJs5VzYS9PtKTsY79JqS
          claim_id: c_g2dKfVLfzcTgKgsa7CQWbR
          source_id: s_LrmPoa4RWufcsyiFoe4xPW
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_LrmPoa4RWufcsyiFoe4xPW
            source_type: api_record
            title: 维基数据：王源诚（Q45665247）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45665247
            external_identifier: Q45665247
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:36.528Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_PtzT97KF3XqkKE95kKqEcY
        subject_person_id: p_5fRdJNrXdLbTVYRCLCzh9J
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王源诚
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_NtCS1KoQHYXGL3KLLeXqo1
          claim_id: c_PtzT97KF3XqkKE95kKqEcY
          source_id: s_XuwG1wreYTTz7QU5EnhzBu
          stance: supports
          locator: Q45665247
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_u5DXTbJBoHBmqCd8SzdTNW
          claim_id: c_PtzT97KF3XqkKE95kKqEcY
          source_id: s_LrmPoa4RWufcsyiFoe4xPW
          stance: supports
          locator: Q45665247
          quotation: null
          interpretation_note: null
          source:
            id: s_LrmPoa4RWufcsyiFoe4xPW
            source_type: api_record
            title: 维基数据：王源诚（Q45665247）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45665247
            external_identifier: Q45665247
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:36.528Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_YbMhkYdq8KFbTqrr8QQJt5
        subject_person_id: p_MJy5DTuoAKtNQKP91F7YVb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5fRdJNrXdLbTVYRCLCzh9J
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Nc1DJ2cFJ3tJp9nG4qpDfK
          claim_id: c_YbMhkYdq8KFbTqrr8QQJt5
          source_id: s_rh328ZC6tAoJwkp3kbwDSm
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_rh328ZC6tAoJwkp3kbwDSm
            source_type: api_record
            title: 维基数据：王渶（Q45665030）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45665030
            external_identifier: Q45665030
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:59.370Z
            metadata_json: null
        - id: cs_aVw9B8L3a3D9jpBcxTmd3K
          claim_id: c_YbMhkYdq8KFbTqrr8QQJt5
          source_id: s_M8qLHHSA7hgn2qjhTbVzJA
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_M8qLHHSA7hgn2qjhTbVzJA
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王渶（175531）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175531&o=json
            external_identifier: CBDB:175531
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:59.521Z
            metadata_json: null
        - id: cs_hNj73jBoSzjFPwGfNvY4kR
          claim_id: c_YbMhkYdq8KFbTqrr8QQJt5
          source_id: s_LrmPoa4RWufcsyiFoe4xPW
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_LrmPoa4RWufcsyiFoe4xPW
            source_type: api_record
            title: 维基数据：王源诚（Q45665247）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45665247
            external_identifier: Q45665247
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:36.528Z
            metadata_json: null
        - id: cs_6zHCsmsWyuwcPVy8VE4wg8
          claim_id: c_YbMhkYdq8KFbTqrr8QQJt5
          source_id: s_XuwG1wreYTTz7QU5EnhzBu
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_XuwG1wreYTTz7QU5EnhzBu
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王源誠（175535）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175535&o=json
            external_identifier: CBDB:175535
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:36.690Z
            metadata_json: null
      object_person:
        id: p_MJy5DTuoAKtNQKP91F7YVb
        status: active
        display_name: 王渶
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王源诚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王源诚（卒于820年），唐人物。CBDB 记录其籍贯记录为咸陽。中国历代人物传记资料库（CBDB）以人物编号 175535 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 820年 | accepted |
| name.primary | 王源诚 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_MJy5DTuoAKtNQKP91F7YVb | 王渶 | accepted |

## 外部来源

- [维基数据：王渶（Q45665030）](https://www.wikidata.org/wiki/Q45665030)
- [维基数据：王源诚（Q45665247）](https://www.wikidata.org/wiki/Q45665247)
- [CBDB 中国历代人物传记资料库：王渶（175531）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175531&o=json)
- [CBDB 中国历代人物传记资料库：王源誠（175535）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175535&o=json)
