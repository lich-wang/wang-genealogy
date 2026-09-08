---
schema: wang-person/v1
id: p_ADQADMoywb8nRBdiv1tZwW
status: active
merged_into: null
display_name: 王绎
cbdb_id: 32176
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WmnLdt1zc3PTAwbXQ7ogG8
        subject_person_id: p_ADQADMoywb8nRBdiv1tZwW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王绎，唐人物。CBDB 记录其籍贯记录为河東。中国历代人物传记资料库（CBDB）以人物编号 32176 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_AYJ7FsHk95SAHjMQrJ17AY
          claim_id: c_WmnLdt1zc3PTAwbXQ7ogG8
          source_id: s_LaBdcHuq6xghYfHLxMJ6yf
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_LaBdcHuq6xghYfHLxMJ6yf
            source_type: api_record
            title: 维基数据：王绎（Q45421039）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45421039
            external_identifier: Q45421039
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:26.291Z
            metadata_json: null
        - id: cs_8BrofKgvwPhtiAHC-vL084
          claim_id: c_WmnLdt1zc3PTAwbXQ7ogG8
          source_id: s_f8CTQBHoP6rK5hQJUHDDLP
          stance: supports
          locator: CBDB:32176
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_f8CTQBHoP6rK5hQJUHDDLP
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王繹（32176）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=32176&o=json
            external_identifier: CBDB:32176
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:49:26.427Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_joHhNh7Jf6G5UAQcKKk9TX
        subject_person_id: p_ADQADMoywb8nRBdiv1tZwW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王绎
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_CFKuRVNSyLxxYa4kYPdLDp
          claim_id: c_joHhNh7Jf6G5UAQcKKk9TX
          source_id: s_f8CTQBHoP6rK5hQJUHDDLP
          stance: supports
          locator: Q45421039
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_ieGo2rAa8xteUn5f78QmzB
          claim_id: c_joHhNh7Jf6G5UAQcKKk9TX
          source_id: s_LaBdcHuq6xghYfHLxMJ6yf
          stance: supports
          locator: Q45421039
          quotation: null
          interpretation_note: null
          source:
            id: s_LaBdcHuq6xghYfHLxMJ6yf
            source_type: api_record
            title: 维基数据：王绎（Q45421039）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45421039
            external_identifier: Q45421039
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:26.291Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_4SD9bd1tn7ZBN7g8h6NC2Y
        subject_person_id: p_LhrXSwBKuTqBng4RsWfQ9E
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ADQADMoywb8nRBdiv1tZwW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_1tpAbuxXvZxAhpNwDtrMqx
          claim_id: c_4SD9bd1tn7ZBN7g8h6NC2Y
          source_id: s_HqRrMT9yszgHjvPBBXB6LL
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_HqRrMT9yszgHjvPBBXB6LL
            source_type: api_record
            title: 維基數據：王处廉（Q45421031）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45421031
            external_identifier: Q45421031
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:09:53.926Z
            metadata_json: null
        - id: cs_3q76GgKZ1KVQrgopKCZZTq
          claim_id: c_4SD9bd1tn7ZBN7g8h6NC2Y
          source_id: s_aNun5qZFaVaT8dqBJrt7kz
          stance: supports
          locator: 亲属关系：三子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_aNun5qZFaVaT8dqBJrt7kz
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王處廉（32173）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=32173&o=json
            external_identifier: CBDB:32173
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:50:25.998Z
            metadata_json: null
        - id: cs_1sVyWKiNKfm2UCqjSkGKAt
          claim_id: c_4SD9bd1tn7ZBN7g8h6NC2Y
          source_id: s_LaBdcHuq6xghYfHLxMJ6yf
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_LaBdcHuq6xghYfHLxMJ6yf
            source_type: api_record
            title: 维基数据：王绎（Q45421039）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45421039
            external_identifier: Q45421039
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:26.291Z
            metadata_json: null
        - id: cs_jfYkXibaHKQsug8Px2B61U
          claim_id: c_4SD9bd1tn7ZBN7g8h6NC2Y
          source_id: s_f8CTQBHoP6rK5hQJUHDDLP
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_f8CTQBHoP6rK5hQJUHDDLP
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王繹（32176）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=32176&o=json
            external_identifier: CBDB:32176
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:49:26.427Z
            metadata_json: null
      object_person:
        id: p_LhrXSwBKuTqBng4RsWfQ9E
        status: active
        display_name: 王处廉
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王绎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王绎，唐人物。CBDB 记录其籍贯记录为河東。中国历代人物传记资料库（CBDB）以人物编号 32176 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王绎 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_LhrXSwBKuTqBng4RsWfQ9E | 王处廉 | accepted |

## 外部来源

- [维基数据：王绎（Q45421039）](https://www.wikidata.org/wiki/Q45421039)
- [維基數據：王处廉（Q45421031）](https://www.wikidata.org/wiki/Q45421031)
- [CBDB 中国历代人物传记资料库：王處廉（32173）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=32173&o=json)
- [CBDB 中国历代人物传记资料库：王繹（32176）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=32176&o=json)
