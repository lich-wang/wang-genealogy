---
schema: wang-person/v1
id: p_MF4Tkm8P8AmX2EL67mNieQ
status: active
merged_into: null
display_name: 王广臣
cbdb_id: 36574
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FdzEfrVHz9QcHPu4SxMJVx
        subject_person_id: p_MF4Tkm8P8AmX2EL67mNieQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王广臣，宋人物。CBDB 记录其籍贯记录为洹水。中国历代人物传记资料库（CBDB）以人物编号 36574 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_9xhKwEg11cuha47XLZMeEF
          claim_id: c_FdzEfrVHz9QcHPu4SxMJVx
          source_id: s_ryEdkrxToFKtkZQHF95fDU
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_ryEdkrxToFKtkZQHF95fDU
            source_type: api_record
            title: 维基数据：王广臣（Q45426151）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45426151
            external_identifier: Q45426151
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:33.803Z
            metadata_json: null
        - id: cs_0OSnZ81fRDdXijLyZm3MzJ
          claim_id: c_FdzEfrVHz9QcHPu4SxMJVx
          source_id: s_djFgZSS6i8HzjLqngUeG5z
          stance: supports
          locator: CBDB:36574
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_djFgZSS6i8HzjLqngUeG5z
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王廣臣（36574）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36574&o=json
            external_identifier: CBDB:36574
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:34.007Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_xzLjvTaJZvdd2LR6zdbK7J
        subject_person_id: p_MF4Tkm8P8AmX2EL67mNieQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王广臣
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_3qFK3eVBobhj1usVpZeWJh
          claim_id: c_xzLjvTaJZvdd2LR6zdbK7J
          source_id: s_djFgZSS6i8HzjLqngUeG5z
          stance: supports
          locator: Q45426151
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_ACNiXFz5J2cMhKMQu8UEk9
          claim_id: c_xzLjvTaJZvdd2LR6zdbK7J
          source_id: s_ryEdkrxToFKtkZQHF95fDU
          stance: supports
          locator: Q45426151
          quotation: null
          interpretation_note: null
          source:
            id: s_ryEdkrxToFKtkZQHF95fDU
            source_type: api_record
            title: 维基数据：王广臣（Q45426151）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45426151
            external_identifier: Q45426151
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:33.803Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_W8QnCdw3FNsfzQDn6ohr8K
        subject_person_id: p_tmq6Wnq1CjinFj62NTxvnd
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_MF4Tkm8P8AmX2EL67mNieQ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6HY4P1i5TZ3eCBaoHGqdy3
          claim_id: c_W8QnCdw3FNsfzQDn6ohr8K
          source_id: s_Z4fxo5rB3BvheXUFeqMwGa
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：鄖溪集
          source:
            id: s_Z4fxo5rB3BvheXUFeqMwGa
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王師顏（22250）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22250&o=json
            external_identifier: CBDB:22250
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_su6ofdbLPnEu1bwg2FrS13
          claim_id: c_W8QnCdw3FNsfzQDn6ohr8K
          source_id: s_djFgZSS6i8HzjLqngUeG5z
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：鄖溪集
          source: *a1
      object_person:
        id: p_tmq6Wnq1CjinFj62NTxvnd
        status: active
        display_name: 王师颜
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王广臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王广臣，宋人物。CBDB 记录其籍贯记录为洹水。中国历代人物传记资料库（CBDB）以人物编号 36574 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王广臣 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_tmq6Wnq1CjinFj62NTxvnd | 王师颜 | accepted |

## 外部来源

- [维基数据：王广臣（Q45426151）](https://www.wikidata.org/wiki/Q45426151)
- [CBDB 中国历代人物传记资料库：王廣臣（36574）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36574&o=json)
- [CBDB 中国历代人物传记资料库：王師顏（22250）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22250&o=json)
