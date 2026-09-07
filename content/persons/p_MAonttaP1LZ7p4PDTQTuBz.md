---
schema: wang-person/v1
id: p_MAonttaP1LZ7p4PDTQTuBz
status: active
merged_into: null
display_name: 王元谟
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_p2XYWarVdWzRyYHfpQ4rwF
        subject_person_id: p_MAonttaP1LZ7p4PDTQTuBz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元谟，宋(劉)人物。CBDB 记录其籍贯记录为江寧。中国历代人物传记资料库（CBDB）以人物编号 30877 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_XX5LZdtJ3R9JmQ3NmkPH97
          claim_id: c_p2XYWarVdWzRyYHfpQ4rwF
          source_id: s_B5sqPUeXPn3J6QUr4RnzNA
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_B5sqPUeXPn3J6QUr4RnzNA
            source_type: api_record
            title: 维基数据：王元谟（Q45418692）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45418692
            external_identifier: Q45418692
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:03:04.577Z
            metadata_json: null
        - id: cs_jrU5dvSOPGiILkQxOoIT0y
          claim_id: c_p2XYWarVdWzRyYHfpQ4rwF
          source_id: s_iMGkYnrqt9HsJNDJuPGU5U
          stance: supports
          locator: CBDB:30877
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_iMGkYnrqt9HsJNDJuPGU5U
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王元謨（30877）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30877&o=json
            external_identifier: CBDB:30877
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:03:04.903Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_6sKKSUFFmHp2PUTLG6wE5v
        subject_person_id: p_MAonttaP1LZ7p4PDTQTuBz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元谟
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_C5L8ZP4rMo5PCvH2HMs74r
          claim_id: c_6sKKSUFFmHp2PUTLG6wE5v
          source_id: s_B5sqPUeXPn3J6QUr4RnzNA
          stance: supports
          locator: Q45418692
          quotation: null
          interpretation_note: null
          source:
            id: s_B5sqPUeXPn3J6QUr4RnzNA
            source_type: api_record
            title: 维基数据：王元谟（Q45418692）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45418692
            external_identifier: Q45418692
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:03:04.577Z
            metadata_json: null
        - id: cs_VdbrS5FMffSzGgYJsSFsRL
          claim_id: c_6sKKSUFFmHp2PUTLG6wE5v
          source_id: s_iMGkYnrqt9HsJNDJuPGU5U
          stance: supports
          locator: Q45418692
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_nvCpQJCQ32QQBCCsTgHc4i
        subject_person_id: p_KBiubKVUPYii69t93jaWYm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MAonttaP1LZ7p4PDTQTuBz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_m8GaYVamgi8Nf23gXZaQuK
          claim_id: c_nvCpQJCQ32QQBCCsTgHc4i
          source_id: s_Py41wfP8XNeV8C13Ld6LSQ
          stance: supports
          locator: 亲属关系：長子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_Py41wfP8XNeV8C13Ld6LSQ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王秀（30876）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30876&o=json
            external_identifier: CBDB:30876
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:59:56.553Z
            metadata_json: null
        - id: cs_njoHGsdagn3zqUFMwwT48E
          claim_id: c_nvCpQJCQ32QQBCCsTgHc4i
          source_id: s_cd57EH2ED7son99M8XVLUC
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_cd57EH2ED7son99M8XVLUC
            source_type: api_record
            title: 维基数据：王秀（Q45418691）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45418691
            external_identifier: Q45418691
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:59:56.262Z
            metadata_json: null
        - id: cs_n8Uw4zw2hDLTTQpfNLoDJz
          claim_id: c_nvCpQJCQ32QQBCCsTgHc4i
          source_id: s_B5sqPUeXPn3J6QUr4RnzNA
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_B5sqPUeXPn3J6QUr4RnzNA
            source_type: api_record
            title: 维基数据：王元谟（Q45418692）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45418692
            external_identifier: Q45418692
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:03:04.577Z
            metadata_json: null
        - id: cs_uSKb65H2sDp8F831qmCNBk
          claim_id: c_nvCpQJCQ32QQBCCsTgHc4i
          source_id: s_iMGkYnrqt9HsJNDJuPGU5U
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_iMGkYnrqt9HsJNDJuPGU5U
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王元謨（30877）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30877&o=json
            external_identifier: CBDB:30877
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:03:04.903Z
            metadata_json: null
      object_person:
        id: p_KBiubKVUPYii69t93jaWYm
        status: active
        display_name: 王秀
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王元谟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王元谟，宋(劉)人物。CBDB 记录其籍贯记录为江寧。中国历代人物传记资料库（CBDB）以人物编号 30877 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王元谟 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_KBiubKVUPYii69t93jaWYm | 王秀 | accepted |

## 外部来源

- [维基数据：王秀（Q45418691）](https://www.wikidata.org/wiki/Q45418691)
- [维基数据：王元谟（Q45418692）](https://www.wikidata.org/wiki/Q45418692)
- [CBDB 中国历代人物传记资料库：王秀（30876）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30876&o=json)
- [CBDB 中国历代人物传记资料库：王元謨（30877）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30877&o=json)
