---
schema: wang-person/v1
id: p_geUgqF5ocbmwwJfYLHzGXJ
status: active
merged_into: null
display_name: 王怀珪
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kAy9mzsxJuEx8twG477C1A
        subject_person_id: p_geUgqF5ocbmwwJfYLHzGXJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王怀珪，宋人物。CBDB 记录其籍贯记录为陝州，身份包括宦官，曾任入內高班、入內內侍省內侍高品。中国历代人物传记资料库（CBDB）以人物编号 119731 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_nRCdx6QV1vZSbdDDFmRhbg
          claim_id: c_kAy9mzsxJuEx8twG477C1A
          source_id: s_KkXrShVbzpUJ5sqAn6yLdu
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_KkXrShVbzpUJ5sqAn6yLdu
            source_type: api_record
            title: 维基数据：王怀珪（Q45492841）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45492841
            external_identifier: Q45492841
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:04.864Z
            metadata_json: null
        - id: cs_esiPrCE72oJH_nD9Jm7Bfq
          claim_id: c_kAy9mzsxJuEx8twG477C1A
          source_id: s_R33X8zJFJqa85f4dDAeEEk
          stance: supports
          locator: CBDB:119731
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_R33X8zJFJqa85f4dDAeEEk
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王懷珪（119731）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119731&o=json
            external_identifier: CBDB:119731
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:05.028Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_bVPRd5ZQHpsQPyTBENR49a
        subject_person_id: p_geUgqF5ocbmwwJfYLHzGXJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王怀珪
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_kpgPq8DqgCAs5Ypt1X5EJn
          claim_id: c_bVPRd5ZQHpsQPyTBENR49a
          source_id: s_R33X8zJFJqa85f4dDAeEEk
          stance: supports
          locator: Q45492841
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_nvw9DXH7eCB7fFvALwssES
          claim_id: c_bVPRd5ZQHpsQPyTBENR49a
          source_id: s_KkXrShVbzpUJ5sqAn6yLdu
          stance: supports
          locator: Q45492841
          quotation: null
          interpretation_note: null
          source:
            id: s_KkXrShVbzpUJ5sqAn6yLdu
            source_type: api_record
            title: 维基数据：王怀珪（Q45492841）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45492841
            external_identifier: Q45492841
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:04.864Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_3PLpfNeaxxB3TqsPMfiM8G
        subject_person_id: p_WizgvoKYptUTj4rfcBPyNT
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_geUgqF5ocbmwwJfYLHzGXJ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Eu2VgwdRsvc5giPbiSvvNT
          claim_id: c_3PLpfNeaxxB3TqsPMfiM8G
          source_id: s_kBrEWAG5DnGJuvP8YMAroD
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_kBrEWAG5DnGJuvP8YMAroD
            source_type: api_record
            title: 维基数据：王继恩（Q10416428）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q10416428
            external_identifier: Q10416428
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:44:50.282Z
            metadata_json: null
        - id: cs_KE5d56rwbANKq4eogS361r
          claim_id: c_3PLpfNeaxxB3TqsPMfiM8G
          source_id: s_KkXrShVbzpUJ5sqAn6yLdu
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_KkXrShVbzpUJ5sqAn6yLdu
            source_type: api_record
            title: 维基数据：王怀珪（Q45492841）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45492841
            external_identifier: Q45492841
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:04.864Z
            metadata_json: null
      object_person:
        id: p_WizgvoKYptUTj4rfcBPyNT
        status: active
        display_name: 王继恩
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王怀珪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王怀珪，宋人物。CBDB 记录其籍贯记录为陝州，身份包括宦官，曾任入內高班、入內內侍省內侍高品。中国历代人物传记资料库（CBDB）以人物编号 119731 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王怀珪 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_WizgvoKYptUTj4rfcBPyNT | 王继恩 | accepted |

## 外部来源

- [维基数据：王怀珪（Q45492841）](https://www.wikidata.org/wiki/Q45492841)
- [维基数据：王继恩（Q10416428）](https://www.wikidata.org/wiki/Q10416428)
- [CBDB 中国历代人物传记资料库：王懷珪（119731）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119731&o=json)
