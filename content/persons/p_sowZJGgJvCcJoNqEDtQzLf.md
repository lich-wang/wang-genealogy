---
schema: wang-person/v1
id: p_sowZJGgJvCcJoNqEDtQzLf
status: active
merged_into: null
display_name: 王知进
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eXd5KexgxCaHoMQvzXzwrv
        subject_person_id: p_sowZJGgJvCcJoNqEDtQzLf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王知进（卒于894年），唐人物。CBDB 记录其籍贯记录为京兆府。中国历代人物传记资料库（CBDB）以人物编号 175419 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Jo17ZAQY55KNAxXL4FL6Cs
          claim_id: c_eXd5KexgxCaHoMQvzXzwrv
          source_id: s_t3Gv1RgFhGT6jEEohkQ8Zj
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_t3Gv1RgFhGT6jEEohkQ8Zj
            source_type: api_record
            title: 维基数据：王知进（Q45658527）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45658527
            external_identifier: Q45658527
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:05.102Z
            metadata_json: null
        - id: cs_fRijzrC1O_n5zxz_8JdJx3
          claim_id: c_eXd5KexgxCaHoMQvzXzwrv
          source_id: s_4aQUyyWAkgHiU5KgkqYafr
          stance: supports
          locator: CBDB:175419
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_4aQUyyWAkgHiU5KgkqYafr
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王知進（175419）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175419&o=json
            external_identifier: CBDB:175419
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:41:05.284Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_q2YS9GNj9UFpaD5tncHTc8
        subject_person_id: p_sowZJGgJvCcJoNqEDtQzLf
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 894年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0894-01-01
            latest: 0894-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Awz7zX4FmwGJTeAPQFG5Ld
          claim_id: c_q2YS9GNj9UFpaD5tncHTc8
          source_id: s_t3Gv1RgFhGT6jEEohkQ8Zj
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_t3Gv1RgFhGT6jEEohkQ8Zj
            source_type: api_record
            title: 维基数据：王知进（Q45658527）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45658527
            external_identifier: Q45658527
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:05.102Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_bez9LsyQiACKWMT3zYgTtR
        subject_person_id: p_sowZJGgJvCcJoNqEDtQzLf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王知进
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_VonphgY5xF78ZBFkQEvihj
          claim_id: c_bez9LsyQiACKWMT3zYgTtR
          source_id: s_4aQUyyWAkgHiU5KgkqYafr
          stance: supports
          locator: Q45658527
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_XidcXow98DB6j7DNmnFeWs
          claim_id: c_bez9LsyQiACKWMT3zYgTtR
          source_id: s_t3Gv1RgFhGT6jEEohkQ8Zj
          stance: supports
          locator: Q45658527
          quotation: null
          interpretation_note: null
          source:
            id: s_t3Gv1RgFhGT6jEEohkQ8Zj
            source_type: api_record
            title: 维基数据：王知进（Q45658527）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45658527
            external_identifier: Q45658527
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:05.102Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_oihiim4UH3FCUKgQTg5LQR
        subject_person_id: p_J3uEtABU9yZpLVpDBsGAq3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_sowZJGgJvCcJoNqEDtQzLf
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_YYHXjHgeQWL4sLyiS5njeZ
          claim_id: c_oihiim4UH3FCUKgQTg5LQR
          source_id: s_1VmAjatw3vy2Jv48pJ6tUR
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_1VmAjatw3vy2Jv48pJ6tUR
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王邁（175409）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175409&o=json
            external_identifier: CBDB:175409
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:19:57.188Z
            metadata_json: null
        - id: cs_oXtA8ircHqFCxjhBTHEQD2
          claim_id: c_oihiim4UH3FCUKgQTg5LQR
          source_id: s_RD4sw4bpaLA5KUZpiyg3Qg
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_RD4sw4bpaLA5KUZpiyg3Qg
            source_type: api_record
            title: 维基数据：王迈（Q45657929）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45657929
            external_identifier: Q45657929
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:57.051Z
            metadata_json: null
        - id: cs_8XUKFZnmSUhji2LpHfs1bB
          claim_id: c_oihiim4UH3FCUKgQTg5LQR
          source_id: s_t3Gv1RgFhGT6jEEohkQ8Zj
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_t3Gv1RgFhGT6jEEohkQ8Zj
            source_type: api_record
            title: 维基数据：王知进（Q45658527）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45658527
            external_identifier: Q45658527
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:05.102Z
            metadata_json: null
        - id: cs_zEbU6QiVgekBAd8hHEuKyS
          claim_id: c_oihiim4UH3FCUKgQTg5LQR
          source_id: s_4aQUyyWAkgHiU5KgkqYafr
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_4aQUyyWAkgHiU5KgkqYafr
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王知進（175419）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175419&o=json
            external_identifier: CBDB:175419
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:41:05.284Z
            metadata_json: null
      object_person:
        id: p_J3uEtABU9yZpLVpDBsGAq3
        status: active
        display_name: 王迈
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王知进

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王知进（卒于894年），唐人物。CBDB 记录其籍贯记录为京兆府。中国历代人物传记资料库（CBDB）以人物编号 175419 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 894年 | accepted |
| name.primary | 王知进 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_J3uEtABU9yZpLVpDBsGAq3 | 王迈 | accepted |

## 外部来源

- [维基数据：王迈（Q45657929）](https://www.wikidata.org/wiki/Q45657929)
- [维基数据：王知进（Q45658527）](https://www.wikidata.org/wiki/Q45658527)
- [CBDB 中国历代人物传记资料库：王邁（175409）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175409&o=json)
- [CBDB 中国历代人物传记资料库：王知進（175419）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175419&o=json)
