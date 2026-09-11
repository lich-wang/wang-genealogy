---
schema: wang-person/v1
id: p_uS7V4P4KMenpgfUZzDHcZ5
status: active
merged_into: null
display_name: 王應遴
cbdb_id: 439078
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_edadcLCvrB1FuRDeoG97b7
        subject_person_id: p_uS7V4P4KMenpgfUZzDHcZ5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應遴（卒于1644年），明人物。中国历代人物传记资料库（CBDB）以人物编号 439078 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_5EpaMRwkK477E33NyZJVIQ
          claim_id: c_edadcLCvrB1FuRDeoG97b7
          source_id: s_XTBe1MmjhEfFPjjqJHBDKT
          stance: supports
          locator: CBDB:439078
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_XTBe1MmjhEfFPjjqJHBDKT
            source_type: api_record
            title: 中国历代人物传记资料库：王應遴（CBDB 439078）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=439078&o=json
            external_identifier: CBDB:439078
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:40.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_2SjmqgsKLAensRNPbUN5MM
        subject_person_id: p_uS7V4P4KMenpgfUZzDHcZ5
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1644年
            calendar_note: CBDB 卒年字段，精度：年
            earliest: 1644-01-01
            latest: 1644-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EuSo2t9nDZLRAEchC9zHqF
          claim_id: c_2SjmqgsKLAensRNPbUN5MM
          source_id: s_XTBe1MmjhEfFPjjqJHBDKT
          stance: supports
          locator: CBDB:439078
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（501-600）｜历史性依据：CBDB 卒年 = 1644
          source:
            id: s_XTBe1MmjhEfFPjjqJHBDKT
            source_type: api_record
            title: 中国历代人物传记资料库：王應遴（CBDB 439078）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=439078&o=json
            external_identifier: CBDB:439078
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:40.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_75axKZs65QZ93omGik2F8d
        subject_person_id: p_uS7V4P4KMenpgfUZzDHcZ5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應遴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_amP2wbAZvL1P1jd41d7qLn
          claim_id: c_75axKZs65QZ93omGik2F8d
          source_id: s_XTBe1MmjhEfFPjjqJHBDKT
          stance: supports
          locator: CBDB:439078
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（501-600）｜历史性依据：CBDB 卒年 = 1644
          source:
            id: s_XTBe1MmjhEfFPjjqJHBDKT
            source_type: api_record
            title: 中国历代人物传记资料库：王應遴（CBDB 439078）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=439078&o=json
            external_identifier: CBDB:439078
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:40.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_LgRzWxIB3bog4JZcClEy3G
        subject_person_id: p_uS7V4P4KMenpgfUZzDHcZ5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_woHWnXhHgoWAiNUYfCrQyw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_or-8as4kiyRhMEI5SsT6Ct
          claim_id: c_LgRzWxIB3bog4JZcClEy3G
          source_id: s_tVCJEZ8Vmr78CoAiKBLdLT
          stance: supports
          locator: 紹興府志:八十卷，Igid=316416：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_tVCJEZ8Vmr78CoAiKBLdLT
            source_type: api_record
            title: 中国历代人物传记资料库：王觀昉（CBDB 560372）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=560372&o=json
            external_identifier: CBDB:560372
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.551Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_woHWnXhHgoWAiNUYfCrQyw
        status: active
        display_name: 王觀昉
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_ioSKS4-N0a3ea5oF_cTip_
        subject_person_id: p_uS7V4P4KMenpgfUZzDHcZ5
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_oD3PJjMLUawsYEVt6qw1j1
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iE2-UWUFLJn4Qi1rrcOJ7y
          claim_id: c_ioSKS4-N0a3ea5oF_cTip_
          source_id: s_Heu5x25QQ1h2pK2oPcnqFx
          stance: supports
          locator: 紹興府志:八十卷，lgid=316492：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Heu5x25QQ1h2pK2oPcnqFx
            source_type: api_record
            title: 中国历代人物传记资料库：王國英（CBDB 562014）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=562014&o=json
            external_identifier: CBDB:562014
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.766Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_oD3PJjMLUawsYEVt6qw1j1
        status: active
        display_name: 王國英
        merged_into_person_id: null
  other: []
---

# 王應遴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王應遴（卒于1644年），明人物。中国历代人物传记资料库（CBDB）以人物编号 439078 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 1644年 | accepted |
| name.primary | 王應遴 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_woHWnXhHgoWAiNUYfCrQyw | 王觀昉 | accepted |
| descendants | p_oD3PJjMLUawsYEVt6qw1j1 | 王國英 | accepted |

## 外部来源

- [中国历代人物传记资料库：王觀昉（CBDB 560372）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=560372&o=json)
- [中国历代人物传记资料库：王國英（CBDB 562014）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=562014&o=json)
- [中国历代人物传记资料库：王應遴（CBDB 439078）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=439078&o=json)
