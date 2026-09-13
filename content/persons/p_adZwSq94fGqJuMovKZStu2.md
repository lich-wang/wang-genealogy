---
schema: wang-person/v1
id: p_adZwSq94fGqJuMovKZStu2
status: active
merged_into: null
display_name: 王励臣
cbdb_id: 15748
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9FgqJptYJt7bj4MHZTv9N3
        subject_person_id: p_adZwSq94fGqJuMovKZStu2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王励臣，宋人物。籍贯虞城。（中国历代人物传记资料库 CBDB 15748）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_dj98axw14pqbM1CxHMTgsS
          claim_id: c_9FgqJptYJt7bj4MHZTv9N3
          source_id: s_8zyL7GeDXyMfGPoo7NeFa3
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_8zyL7GeDXyMfGPoo7NeFa3
            source_type: api_record
            title: 维基数据：王励臣（Q45381149）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45381149
            external_identifier: Q45381149
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:00.249Z
            metadata_json: null
        - id: cs_qghUDip9mw4azVyzkPuYpL
          claim_id: c_9FgqJptYJt7bj4MHZTv9N3
          source_id: s_YgzuwbTEmYqdZMBXWR5tbC
          stance: supports
          locator: CBDB:15748
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_YgzuwbTEmYqdZMBXWR5tbC
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王勵臣（15748）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=15748&o=json
            external_identifier: CBDB:15748
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:00.400Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_DJ2cWKJmAVp1j3k5vg4QPt
        subject_person_id: p_adZwSq94fGqJuMovKZStu2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王励臣
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_EjXy766cwHhLq1iSWgTAAi
          claim_id: c_DJ2cWKJmAVp1j3k5vg4QPt
          source_id: s_YgzuwbTEmYqdZMBXWR5tbC
          stance: supports
          locator: Q45381149
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_megFhFKUCbYfv7MUWaPYoh
          claim_id: c_DJ2cWKJmAVp1j3k5vg4QPt
          source_id: s_8zyL7GeDXyMfGPoo7NeFa3
          stance: supports
          locator: Q45381149
          quotation: null
          interpretation_note: null
          source:
            id: s_8zyL7GeDXyMfGPoo7NeFa3
            source_type: api_record
            title: 维基数据：王励臣（Q45381149）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45381149
            external_identifier: Q45381149
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:00.249Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_i2ZXA4XqKd9qp5TTS9AhAv
        subject_person_id: p_eJ5xPSqX9C5GQJFJ6vhqFc
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_adZwSq94fGqJuMovKZStu2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8icHqhj1AoFrjGxvuxsSP3
          claim_id: c_i2ZXA4XqKd9qp5TTS9AhAv
          source_id: s_bAVZu7wS9x2wcXBfq2WzC1
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_bAVZu7wS9x2wcXBfq2WzC1
            source_type: api_record
            title: 维基数据：王洙（Q15935485）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15935485
            external_identifier: Q15935485
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:33.095Z
            metadata_json: null
        - id: cs_J1MDWDA6ZEgFwB5mXhyjK2
          claim_id: c_i2ZXA4XqKd9qp5TTS9AhAv
          source_id: s_ANfzGbinedKmVFoYy6S9xD
          stance: supports
          locator: 亲属关系：次子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_ANfzGbinedKmVFoYy6S9xD
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王洙（3941）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3941&o=json
            external_identifier: CBDB:3941
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:01:44.711Z
            metadata_json: null
        - id: cs_y6T94RB52BRJTy6J5j5sjC
          claim_id: c_i2ZXA4XqKd9qp5TTS9AhAv
          source_id: s_8zyL7GeDXyMfGPoo7NeFa3
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_8zyL7GeDXyMfGPoo7NeFa3
            source_type: api_record
            title: 维基数据：王励臣（Q45381149）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45381149
            external_identifier: Q45381149
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:00.249Z
            metadata_json: null
      object_person:
        id: p_eJ5xPSqX9C5GQJFJ6vhqFc
        status: active
        display_name: 王洙
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王励臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王励臣，宋人物。籍贯虞城。（中国历代人物传记资料库 CBDB 15748） | accepted |
| name.primary | 王励臣 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_eJ5xPSqX9C5GQJFJ6vhqFc | 王洙 | accepted |

## 外部来源

- [维基数据：王励臣（Q45381149）](https://www.wikidata.org/wiki/Q45381149)
- [维基数据：王洙（Q15935485）](https://www.wikidata.org/wiki/Q15935485)
- [CBDB 中国历代人物传记资料库：王勵臣（15748）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=15748&o=json)
- [CBDB 中国历代人物传记资料库：王洙（3941）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3941&o=json)
