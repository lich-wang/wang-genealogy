---
schema: wang-person/v1
id: p_oMWHEuuTAD3NMbiTZfcfYR
status: active
merged_into: null
display_name: 王府
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_s4G98jYQQrJhFkhSKh9MJU
        subject_person_id: p_oMWHEuuTAD3NMbiTZfcfYR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王府
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MCy4aP7WsoyHGix2fPPC2i
          claim_id: c_s4G98jYQQrJhFkhSKh9MJU
          source_id: s_CM6n7WNy8c338XF3wmHaXj
          stance: supports
          locator: CBDB:691585
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（691585）
          source: &a1
            id: s_CM6n7WNy8c338XF3wmHaXj
            source_type: api_record
            title: 中国历代人物传记资料库：王府（CBDB 691585）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=691585&o=json
            external_identifier: CBDB:691585
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.618Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wsM7SUQ6PRApTtaJ43DTjf
        subject_person_id: p_oMWHEuuTAD3NMbiTZfcfYR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王府，明人物。籍贯海鹽，入仕貢生: 歲貢、常貢、挨貢，曾任未詳、知縣。（中国历代人物传记资料库 CBDB 691585）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7FgSKVWxcEjRqGvJxebnqL
          claim_id: c_wsM7SUQ6PRApTtaJ43DTjf
          source_id: s_CM6n7WNy8c338XF3wmHaXj
          stance: supports
          locator: CBDB:691585
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_NmrLZZLcu1XGfs0Mci7imh
        subject_person_id: p_JAcBj1wu3gVnAuG8j1DpRa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_oMWHEuuTAD3NMbiTZfcfYR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gYV1u1JTGllXu1LGC3kks4
          claim_id: c_NmrLZZLcu1XGfs0Mci7imh
          source_id: s_nDcUCmVYkrHbS1mjQfT9WE
          stance: supports
          locator: "海鹽縣志: 二十二卷(光緒)，lgid=293779：子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_nDcUCmVYkrHbS1mjQfT9WE
            source_type: api_record
            title: 中国历代人物传记资料库：王玫（CBDB 691584）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=691584&o=json
            external_identifier: CBDB:691584
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.617Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_JAcBj1wu3gVnAuG8j1DpRa
        status: active
        display_name: 王玫
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王府

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王府 | accepted |
| bio.summary | 王府，明人物。籍贯海鹽，入仕貢生: 歲貢、常貢、挨貢，曾任未詳、知縣。（中国历代人物传记资料库 CBDB 691585） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_JAcBj1wu3gVnAuG8j1DpRa | 王玫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王府（CBDB 691585）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=691585&o=json)
- [中国历代人物传记资料库：王玫（CBDB 691584）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=691584&o=json)
