---
schema: wang-person/v1
id: p_8ptoyYXrGsuZM3gms5pv3F
status: active
merged_into: null
display_name: 王晏深
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7bGaFPzpEZ3xuUc86wDJjs
        subject_person_id: p_8ptoyYXrGsuZM3gms5pv3F
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晏深（卒于854年），唐人物。中国历代人物传记资料库（CBDB）以人物编号 184946 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_eKpP4xpKtsWC8aJZevj3Ev
          claim_id: c_7bGaFPzpEZ3xuUc86wDJjs
          source_id: s_CFmM6hwyzMR4e2AUk9sQEA
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_CFmM6hwyzMR4e2AUk9sQEA
            source_type: api_record
            title: 维基数据：王晏深（Q45603730）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45603730
            external_identifier: Q45603730
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:42.360Z
            metadata_json: null
        - id: cs_xqXX_wnB0rdk9rG0cdFjIG
          claim_id: c_7bGaFPzpEZ3xuUc86wDJjs
          source_id: s_NYMjdDVfpX6mLtfbAivLCx
          stance: supports
          locator: CBDB:184946
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_NYMjdDVfpX6mLtfbAivLCx
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王晏深（184946）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=184946&o=json
            external_identifier: CBDB:184946
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:42.533Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_gpNME4ppgWn5n3qP66FWSZ
        subject_person_id: p_8ptoyYXrGsuZM3gms5pv3F
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 854年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0854-01-01
            latest: 0854-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TsVTrtcp4f87u2ht4h49TX
          claim_id: c_gpNME4ppgWn5n3qP66FWSZ
          source_id: s_CFmM6hwyzMR4e2AUk9sQEA
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_CFmM6hwyzMR4e2AUk9sQEA
            source_type: api_record
            title: 维基数据：王晏深（Q45603730）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45603730
            external_identifier: Q45603730
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:42.360Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_uLkkz6jfnF34amzHGe5cn9
        subject_person_id: p_8ptoyYXrGsuZM3gms5pv3F
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晏深
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_9cMMpBZE5YG86dBgigqG7b
          claim_id: c_uLkkz6jfnF34amzHGe5cn9
          source_id: s_CFmM6hwyzMR4e2AUk9sQEA
          stance: supports
          locator: Q45603730
          quotation: null
          interpretation_note: null
          source:
            id: s_CFmM6hwyzMR4e2AUk9sQEA
            source_type: api_record
            title: 维基数据：王晏深（Q45603730）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45603730
            external_identifier: Q45603730
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:42.360Z
            metadata_json: null
        - id: cs_d9rhQYHiUMahb62UQS6PUA
          claim_id: c_uLkkz6jfnF34amzHGe5cn9
          source_id: s_NYMjdDVfpX6mLtfbAivLCx
          stance: supports
          locator: Q45603730
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_aRnEy98Ss7TLaDNajYmE41
        subject_person_id: p_6BymFd7sw6j7GAmg7erqPj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8ptoyYXrGsuZM3gms5pv3F
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4AoByNgWRb4Yj6np31LJk5
          claim_id: c_aRnEy98Ss7TLaDNajYmE41
          source_id: s_YtiuJ4x6oyDJbCvjY9nQK7
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_YtiuJ4x6oyDJbCvjY9nQK7
            source_type: api_record
            title: 维基数据：王智兴（Q7967776）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q7967776
            external_identifier: Q7967776
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:24.494Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%99%BA%E8%88%88
        - id: cs_DpXFvysBFHeDYCHo7nLz8W
          claim_id: c_aRnEy98Ss7TLaDNajYmE41
          source_id: s_CFmM6hwyzMR4e2AUk9sQEA
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a2
      object_person:
        id: p_6BymFd7sw6j7GAmg7erqPj
        status: active
        display_name: 王智兴
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王晏深

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王晏深（卒于854年），唐人物。中国历代人物传记资料库（CBDB）以人物编号 184946 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 854年 | accepted |
| name.primary | 王晏深 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_6BymFd7sw6j7GAmg7erqPj | 王智兴 | accepted |

## 外部来源

- [维基数据：王晏深（Q45603730）](https://www.wikidata.org/wiki/Q45603730)
- [维基数据：王智兴（Q7967776）](https://www.wikidata.org/wiki/Q7967776)
- [CBDB 中国历代人物传记资料库：王晏深（184946）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=184946&o=json)
