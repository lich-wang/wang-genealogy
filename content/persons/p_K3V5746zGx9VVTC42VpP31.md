---
schema: wang-person/v1
id: p_K3V5746zGx9VVTC42VpP31
status: active
merged_into: null
display_name: 王静淑
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eFKvmzDskBA4WrrUe8NKqP
        subject_person_id: p_K3V5746zGx9VVTC42VpP31
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王静淑，清人物。中国历代人物传记资料库（CBDB）以人物编号 55730 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Jg6prb2nGEYQJZKHnGgN1D
          claim_id: c_eFKvmzDskBA4WrrUe8NKqP
          source_id: s_dZPTaHr6jaic2aGU4hDfRM
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_dZPTaHr6jaic2aGU4hDfRM
            source_type: api_record
            title: 维基数据：王静淑（Q45485756）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45485756
            external_identifier: Q45485756
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:10.748Z
            metadata_json: null
        - id: cs_EAb8TwvEMxjaD8WnLus6Iv
          claim_id: c_eFKvmzDskBA4WrrUe8NKqP
          source_id: s_HFWp7igmPi2rYKAePKgRuC
          stance: supports
          locator: CBDB:55730
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_HFWp7igmPi2rYKAePKgRuC
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王靜淑（55730）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=55730&o=json
            external_identifier: CBDB:55730
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:10.921Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_shUruAsaJDgq8Uj6aefBqQ
        subject_person_id: p_K3V5746zGx9VVTC42VpP31
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王静淑
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_49RhU2kDU6mLcVp3W1e45Y
          claim_id: c_shUruAsaJDgq8Uj6aefBqQ
          source_id: s_HFWp7igmPi2rYKAePKgRuC
          stance: supports
          locator: Q45485756
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_tk5J6No6M25AFh8MyMSDb2
          claim_id: c_shUruAsaJDgq8Uj6aefBqQ
          source_id: s_dZPTaHr6jaic2aGU4hDfRM
          stance: supports
          locator: Q45485756
          quotation: null
          interpretation_note: null
          source:
            id: s_dZPTaHr6jaic2aGU4hDfRM
            source_type: api_record
            title: 维基数据：王静淑（Q45485756）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45485756
            external_identifier: Q45485756
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:10.748Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_vPP5MQB683ZPL2ytE55m7J
        subject_person_id: p_WgJjrR3eV8FZmEbV9t77oX
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_K3V5746zGx9VVTC42VpP31
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6TFNEVfYAjn1rLL8PwB8XS
          claim_id: c_vPP5MQB683ZPL2ytE55m7J
          source_id: s_tSz5UtgEYXRtEWdwBQvTsR
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_tSz5UtgEYXRtEWdwBQvTsR
            source_type: api_record
            title: 维基数据：王思任（Q15938368）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15938368
            external_identifier: Q15938368
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:36.824Z
            metadata_json: null
        - id: cs_B9fR6xoWm4tmwGNbeiesDy
          claim_id: c_vPP5MQB683ZPL2ytE55m7J
          source_id: s_Xiup79Q6rjsrG4SdhBjp36
          stance: supports
          locator: 亲属关系：長女
          quotation: null
          interpretation_note: CBDB 注明此条来源：明清婦女著作數據庫
          source:
            id: s_Xiup79Q6rjsrG4SdhBjp36
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王思任（71875）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71875&o=json
            external_identifier: CBDB:71875
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:01:52.726Z
            metadata_json: null
        - id: cs_teru1UNp5UHbC2BcSN7vYu
          claim_id: c_vPP5MQB683ZPL2ytE55m7J
          source_id: s_dZPTaHr6jaic2aGU4hDfRM
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_dZPTaHr6jaic2aGU4hDfRM
            source_type: api_record
            title: 维基数据：王静淑（Q45485756）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45485756
            external_identifier: Q45485756
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:10.748Z
            metadata_json: null
      object_person:
        id: p_WgJjrR3eV8FZmEbV9t77oX
        status: active
        display_name: 王思任
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王静淑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王静淑，清人物。中国历代人物传记资料库（CBDB）以人物编号 55730 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王静淑 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_WgJjrR3eV8FZmEbV9t77oX | 王思任 | accepted |

## 外部来源

- [维基数据：王静淑（Q45485756）](https://www.wikidata.org/wiki/Q45485756)
- [维基数据：王思任（Q15938368）](https://www.wikidata.org/wiki/Q15938368)
- [CBDB 中国历代人物传记资料库：王靜淑（55730）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=55730&o=json)
- [CBDB 中国历代人物传记资料库：王思任（71875）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71875&o=json)
