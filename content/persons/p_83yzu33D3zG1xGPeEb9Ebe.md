---
schema: wang-person/v1
id: p_83yzu33D3zG1xGPeEb9Ebe
status: active
merged_into: null
display_name: 王傅
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PQPVQ3NbKQeWt3EvCA2CDq
        subject_person_id: p_83yzu33D3zG1xGPeEb9Ebe
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王傅，明人物。CBDB 记录其籍贯记录为番禺，曾任州學正。中国历代人物传记资料库（CBDB）以人物编号 279739 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_vVuUmnDNZ94efs7UtoVWwP
          claim_id: c_PQPVQ3NbKQeWt3EvCA2CDq
          source_id: s_vAk2x7KgBiFLSavEUvm6qT
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_vAk2x7KgBiFLSavEUvm6qT
            source_type: api_record
            title: 维基数据：王傅（Q45537293）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45537293
            external_identifier: Q45537293
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:33.526Z
            metadata_json: null
        - id: cs_fOAt0dG0sLO0bZFZQZfxJx
          claim_id: c_PQPVQ3NbKQeWt3EvCA2CDq
          source_id: s_SDFPVm5W1sqUCrHPQuGd2D
          stance: supports
          locator: CBDB:279739
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_SDFPVm5W1sqUCrHPQuGd2D
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王傅（279739）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279739&o=json
            external_identifier: CBDB:279739
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:33.679Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_bwDzDjZR9HApCMWPP4cDh4
        subject_person_id: p_83yzu33D3zG1xGPeEb9Ebe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王傅
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_MLCnR48C7Wg7HCfGYqat5q
          claim_id: c_bwDzDjZR9HApCMWPP4cDh4
          source_id: s_vAk2x7KgBiFLSavEUvm6qT
          stance: supports
          locator: Q45537293
          quotation: null
          interpretation_note: null
          source:
            id: s_vAk2x7KgBiFLSavEUvm6qT
            source_type: api_record
            title: 维基数据：王傅（Q45537293）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45537293
            external_identifier: Q45537293
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:33.526Z
            metadata_json: null
        - id: cs_f5PQCXjcFp7VUfXsLPFjY7
          claim_id: c_bwDzDjZR9HApCMWPP4cDh4
          source_id: s_SDFPVm5W1sqUCrHPQuGd2D
          stance: supports
          locator: Q45537293
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_8WNJ1PDkKAbz6FPgxQAdpz
        subject_person_id: p_83yzu33D3zG1xGPeEb9Ebe
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_2ER4qeybN68kj6wmWDD4De
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3d4q85WWdj7y3pKT8bTsHN
          claim_id: c_8WNJ1PDkKAbz6FPgxQAdpz
          source_id: s_vAk2x7KgBiFLSavEUvm6qT
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_vAk2x7KgBiFLSavEUvm6qT
            source_type: api_record
            title: 维基数据：王傅（Q45537293）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45537293
            external_identifier: Q45537293
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:33.526Z
            metadata_json: null
        - id: cs_WDC2ivVqFL1rsSxivAkmnX
          claim_id: c_8WNJ1PDkKAbz6FPgxQAdpz
          source_id: s_uhnJ5ieZxrrzbhfZ7FgmZs
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_uhnJ5ieZxrrzbhfZ7FgmZs
            source_type: api_record
            title: 维基数据：王渐逵（Q15895449）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15895449
            external_identifier: Q15895449
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:46:26.704Z
            metadata_json: null
      object_person:
        id: p_2ER4qeybN68kj6wmWDD4De
        status: active
        display_name: 王渐逵
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王傅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王傅，明人物。CBDB 记录其籍贯记录为番禺，曾任州學正。中国历代人物传记资料库（CBDB）以人物编号 279739 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王傅 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_2ER4qeybN68kj6wmWDD4De | 王渐逵 | accepted |

## 外部来源

- [维基数据：王傅（Q45537293）](https://www.wikidata.org/wiki/Q45537293)
- [维基数据：王渐逵（Q15895449）](https://www.wikidata.org/wiki/Q15895449)
- [CBDB 中国历代人物传记资料库：王傅（279739）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279739&o=json)
