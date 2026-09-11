---
schema: wang-person/v1
id: p_tNenv4FUhMh3QhhSU6ZuWp
status: active
merged_into: null
display_name: 王綝
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iCTtzQJAiyWUqZhCaAsEMN
        subject_person_id: p_tNenv4FUhMh3QhhSU6ZuWp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_96dRQBXmrEg2EkySHvaKV5
          claim_id: c_iCTtzQJAiyWUqZhCaAsEMN
          source_id: s_Jdp1uTsGLQpEhQ9QDB5zd7
          stance: supports
          locator: CBDB:22076
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（22076）
          source: &a1
            id: s_Jdp1uTsGLQpEhQ9QDB5zd7
            source_type: api_record
            title: 中国历代人物传记资料库：王綝（CBDB 22076）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22076&o=json
            external_identifier: CBDB:22076
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.817Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xqHBr5wpyh8KgXZNkaHzcw
        subject_person_id: p_tNenv4FUhMh3QhhSU6ZuWp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綝，宋人物。籍贯麗水。（中国历代人物传记资料库 CBDB 22076）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8gCrac8pxrKH-xHCfEqRvs
          claim_id: c_xqHBr5wpyh8KgXZNkaHzcw
          source_id: s_Jdp1uTsGLQpEhQ9QDB5zd7
          stance: supports
          locator: CBDB:22076
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ftuMahrQgvtbA4eWdsvn9V
        subject_person_id: p_je6XLUqjL8A6Hb4DKdZMAg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tNenv4FUhMh3QhhSU6ZuWp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pUjdwVjRcZD03vrmUdA5AT
          claim_id: c_ftuMahrQgvtbA4eWdsvn9V
          source_id: s_rnG3iT2YiMLpKGPp8gzxqs
          stance: supports
          locator: CBDB 双向互证（子 王綝 ⇄ 父 王汴）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_rnG3iT2YiMLpKGPp8gzxqs
            source_type: api_record
            title: 中国历代人物传记资料库：王汴（CBDB 22075）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22075&o=json
            external_identifier: CBDB:22075
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.816Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_je6XLUqjL8A6Hb4DKdZMAg
        status: active
        display_name: 王汴
        merged_into_person_id: null
  children:
    - claim:
        id: c_XUhiMuh6mfQSyNQopuiIBt
        subject_person_id: p_tNenv4FUhMh3QhhSU6ZuWp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UoF5xeCXavGg9L6YR6Bi3p
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GknqF-CG3jMlyJuth1Jvez
          claim_id: c_XUhiMuh6mfQSyNQopuiIBt
          source_id: s_Jdp1uTsGLQpEhQ9QDB5zd7
          stance: supports
          locator: CBDB 双向互证（子 王晐 ⇄ 父 王綝）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_UoF5xeCXavGg9L6YR6Bi3p
        status: active
        display_name: 王晐
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王綝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王綝 | accepted |
| bio.summary | 王綝，宋人物。籍贯麗水。（中国历代人物传记资料库 CBDB 22076） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_je6XLUqjL8A6Hb4DKdZMAg | 王汴 | accepted |
| children | p_UoF5xeCXavGg9L6YR6Bi3p | 王晐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王汴（CBDB 22075）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22075&o=json)
- [中国历代人物传记资料库：王綝（CBDB 22076）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22076&o=json)
