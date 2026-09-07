---
schema: wang-person/v1
id: p_XDSQYuPv8QJVvKbUCy1xuR
status: active
merged_into: null
display_name: 王瓘
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2JiH7rCW1Xrq3FVxUVefSR
        subject_person_id: p_XDSQYuPv8QJVvKbUCy1xuR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王瓘，宋人物。CBDB 记录其籍贯记录为鄞縣，身份包括藏書家，入仕记录为科舉: 進士(籠統)。中国历代人物传记资料库（CBDB）以人物编号 1842 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_wf6PJTJoFpuBeeeAx5RmoZ
          claim_id: c_2JiH7rCW1Xrq3FVxUVefSR
          source_id: s_1JgbxsWktA72cHhVP6jUv2
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_1JgbxsWktA72cHhVP6jUv2
            source_type: api_record
            title: 维基数据：王瓘（Q18118838）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q18118838
            external_identifier: Q18118838
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:28.634Z
            metadata_json: null
        - id: cs_R9_hX6z9_FddSMq1DpuuB5
          claim_id: c_2JiH7rCW1Xrq3FVxUVefSR
          source_id: s_XJrS2unYNXkFn7Z2USSGY6
          stance: supports
          locator: CBDB:1842
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_XJrS2unYNXkFn7Z2USSGY6
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王瓘（1842）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1842&o=json
            external_identifier: CBDB:1842
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:28.814Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_LDZMBtrfMTURg1TQq4SokQ
        subject_person_id: p_XDSQYuPv8QJVvKbUCy1xuR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓘
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Gt4vB8oxRbd1X1G54SHjR8
          claim_id: c_LDZMBtrfMTURg1TQq4SokQ
          source_id: s_1JgbxsWktA72cHhVP6jUv2
          stance: supports
          locator: Q18118838
          quotation: null
          interpretation_note: null
          source:
            id: s_1JgbxsWktA72cHhVP6jUv2
            source_type: api_record
            title: 维基数据：王瓘（Q18118838）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q18118838
            external_identifier: Q18118838
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:28.634Z
            metadata_json: null
        - id: cs_JAE2gXkcyeUW7W2tDgDwU2
          claim_id: c_LDZMBtrfMTURg1TQq4SokQ
          source_id: s_XJrS2unYNXkFn7Z2USSGY6
          stance: supports
          locator: Q18118838
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_uL471D3drrqd9BotmgBg4d
        subject_person_id: p_CoWBMMnvoQK84CJeGyRA7b
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_XDSQYuPv8QJVvKbUCy1xuR
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2rmjPBTWeVpUYN7QL3NmCV
          claim_id: c_uL471D3drrqd9BotmgBg4d
          source_id: s_MnWbvo26kGRe47FErk4cfJ
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_MnWbvo26kGRe47FErk4cfJ
            source_type: api_record
            title: 维基数据：王说（Q15897779）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15897779
            external_identifier: Q15897779
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:46:28.300Z
            metadata_json: null
        - id: cs_DeQxj9YT8Ya1BLEGLBE2kX
          claim_id: c_uL471D3drrqd9BotmgBg4d
          source_id: s_1JgbxsWktA72cHhVP6jUv2
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_1JgbxsWktA72cHhVP6jUv2
            source_type: api_record
            title: 维基数据：王瓘（Q18118838）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q18118838
            external_identifier: Q18118838
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:28.634Z
            metadata_json: null
        - id: cs_sz88B3FkNVAF4gfUK2bDrN
          claim_id: c_uL471D3drrqd9BotmgBg4d
          source_id: s_NLSMrajxZbZtS5LgXhdj4W
          stance: supports
          locator: 亲属关系：長子
          quotation: null
          interpretation_note: CBDB 注明此条来源：宋人傳記資料索引(電子版)
          source:
            id: s_NLSMrajxZbZtS5LgXhdj4W
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王說（19870）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19870&o=json
            external_identifier: CBDB:19870
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:01:03.782Z
            metadata_json: null
      object_person:
        id: p_CoWBMMnvoQK84CJeGyRA7b
        status: active
        display_name: 王说
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王瓘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王瓘，宋人物。CBDB 记录其籍贯记录为鄞縣，身份包括藏書家，入仕记录为科舉: 進士(籠統)。中国历代人物传记资料库（CBDB）以人物编号 1842 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王瓘 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_CoWBMMnvoQK84CJeGyRA7b | 王说 | accepted |

## 外部来源

- [维基数据：王瓘（Q18118838）](https://www.wikidata.org/wiki/Q18118838)
- [维基数据：王说（Q15897779）](https://www.wikidata.org/wiki/Q15897779)
- [CBDB 中国历代人物传记资料库：王瓘（1842）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1842&o=json)
- [CBDB 中国历代人物传记资料库：王說（19870）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19870&o=json)
