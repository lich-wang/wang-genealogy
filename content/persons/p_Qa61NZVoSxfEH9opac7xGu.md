---
schema: wang-person/v1
id: p_Qa61NZVoSxfEH9opac7xGu
status: active
merged_into: null
display_name: 王西應
cbdb_id: 20092
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6XbPrEWCdfY4DbqAfqQCRH
        subject_person_id: p_Qa61NZVoSxfEH9opac7xGu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王西應，宋人物。籍贯長溪，入仕武舉進士。（中国历代人物传记资料库 CBDB 20092）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_ie0FHTRHQnUgoqT9wFw7x8
          claim_id: c_6XbPrEWCdfY4DbqAfqQCRH
          source_id: s_2tco74sh4wd8dbT8rvvRVS
          stance: supports
          locator: CBDB:20092
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_2tco74sh4wd8dbT8rvvRVS
            source_type: api_record
            title: 中国历代人物传记资料库：王西應（CBDB 20092）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=20092&o=json
            external_identifier: CBDB:20092
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_RfQefhY2QqRsRNHTBWhqCG
        subject_person_id: p_Qa61NZVoSxfEH9opac7xGu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王西應
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_n2whhPuBkwsdhLrKtBjdhW
          claim_id: c_RfQefhY2QqRsRNHTBWhqCG
          source_id: s_2tco74sh4wd8dbT8rvvRVS
          stance: supports
          locator: CBDB:20092
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（901-1000）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_55Gw-J8ANHaC8DUVloT-1Q
        subject_person_id: p_ZZ9tZgx4rUmKgDXtAEqRwH
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Qa61NZVoSxfEH9opac7xGu
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_E0DLutYDx1zy0LjqGJxfLB
          claim_id: c_55Gw-J8ANHaC8DUVloT-1Q
          source_id: s_DKwEihoKaeDdokgXg515QL
          stance: supports
          locator: CBDB 双向互证（曾孫; 重孫 王西應 ⇄ 曾祖 王祖道）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_DKwEihoKaeDdokgXg515QL
            source_type: api_record
            title: 中国历代人物传记资料库：王祖道（CBDB 1902）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1902&o=json
            external_identifier: CBDB:1902
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.384Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ZZ9tZgx4rUmKgDXtAEqRwH
        status: active
        display_name: 王祖道
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王西應

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王西應，宋人物。籍贯長溪，入仕武舉進士。（中国历代人物传记资料库 CBDB 20092） | accepted |
| name.primary | 王西應 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_ZZ9tZgx4rUmKgDXtAEqRwH | 王祖道 | accepted |

## 外部来源

- [中国历代人物传记资料库：王西應（CBDB 20092）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=20092&o=json)
- [中国历代人物传记资料库：王祖道（CBDB 1902）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1902&o=json)
