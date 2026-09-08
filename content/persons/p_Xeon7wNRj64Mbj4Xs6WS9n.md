---
schema: wang-person/v1
id: p_Xeon7wNRj64Mbj4Xs6WS9n
status: active
merged_into: null
display_name: 王谦之
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TzcvrbwXtT4nqK6AKrbypG
        subject_person_id: p_Xeon7wNRj64Mbj4Xs6WS9n
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王谦之，宋人物。CBDB 记录其籍贯记录为金華，入仕记录为科舉: 進士(籠統)。中国历代人物传记资料库（CBDB）以人物编号 23218 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_SJugQTQazLJJk9xoHqQM7U
          claim_id: c_TzcvrbwXtT4nqK6AKrbypG
          source_id: s_GrN1Mt1Gg3KqbLt2HdbAZH
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_GrN1Mt1Gg3KqbLt2HdbAZH
            source_type: api_record
            title: 维基数据：王谦之（Q45403904）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45403904
            external_identifier: Q45403904
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:12.861Z
            metadata_json: null
        - id: cs_DpCY1Ltjdow-InhpjYsDSC
          claim_id: c_TzcvrbwXtT4nqK6AKrbypG
          source_id: s_SAHATd2MyGNdCxwk9bS1YK
          stance: supports
          locator: CBDB:23218
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_SAHATd2MyGNdCxwk9bS1YK
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王謙之（23218）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23218&o=json
            external_identifier: CBDB:23218
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:13.012Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_kbNeQyoBtQd6fECosLnBYu
        subject_person_id: p_Xeon7wNRj64Mbj4Xs6WS9n
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王谦之
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ftyBVS9Cks9w6Qrhp5H84y
          claim_id: c_kbNeQyoBtQd6fECosLnBYu
          source_id: s_GrN1Mt1Gg3KqbLt2HdbAZH
          stance: supports
          locator: Q45403904
          quotation: null
          interpretation_note: null
          source:
            id: s_GrN1Mt1Gg3KqbLt2HdbAZH
            source_type: api_record
            title: 维基数据：王谦之（Q45403904）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45403904
            external_identifier: Q45403904
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:12.861Z
            metadata_json: null
        - id: cs_jtu9nLHXetEJqx2FgQkkTB
          claim_id: c_kbNeQyoBtQd6fECosLnBYu
          source_id: s_SAHATd2MyGNdCxwk9bS1YK
          stance: supports
          locator: Q45403904
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_GQBsKF3rBJkrFSWGSLUCRt
        subject_person_id: p_CvkqbHiKU1yv5J5yN1sDim
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Xeon7wNRj64Mbj4Xs6WS9n
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4kpDK6dLHNWoqvSe7FvtJx
          claim_id: c_GQBsKF3rBJkrFSWGSLUCRt
          source_id: s_GrN1Mt1Gg3KqbLt2HdbAZH
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_y4mACLmR9MfRC24szK9YeS
          claim_id: c_GQBsKF3rBJkrFSWGSLUCRt
          source_id: s_D7NNZLUFKQfdTjRPpLvri2
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_D7NNZLUFKQfdTjRPpLvri2
            source_type: api_record
            title: 维基数据：王师古（Q45369091）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45369091
            external_identifier: Q45369091
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:58:57.822Z
            metadata_json: null
        - id: cs_7a3p4SjvSNgVa5yudKn7c9
          claim_id: c_GQBsKF3rBJkrFSWGSLUCRt
          source_id: s_411AG8EkY8NdEgG32DgoBa
          stance: supports
          locator: 亲属关系：長子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_411AG8EkY8NdEgG32DgoBa
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王師古（10688）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10688&o=json
            external_identifier: CBDB:10688
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:58:57.995Z
            metadata_json: null
      object_person:
        id: p_CvkqbHiKU1yv5J5yN1sDim
        status: active
        display_name: 王师古
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王谦之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王谦之，宋人物。CBDB 记录其籍贯记录为金華，入仕记录为科舉: 進士(籠統)。中国历代人物传记资料库（CBDB）以人物编号 23218 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王谦之 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_CvkqbHiKU1yv5J5yN1sDim | 王师古 | accepted |

## 外部来源

- [维基数据：王谦之（Q45403904）](https://www.wikidata.org/wiki/Q45403904)
- [维基数据：王师古（Q45369091）](https://www.wikidata.org/wiki/Q45369091)
- [CBDB 中国历代人物传记资料库：王謙之（23218）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23218&o=json)
- [CBDB 中国历代人物传记资料库：王師古（10688）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10688&o=json)
