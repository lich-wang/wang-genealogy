---
schema: wang-person/v1
id: p_eJKC3hd1WBr69cmEK5vK4P
status: active
merged_into: null
display_name: 王整
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eR8KLqJauosH7SxZLzp7Fe
        subject_person_id: p_eJKC3hd1WBr69cmEK5vK4P
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王整
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vg2W65qZne4AZ9DHFhKxKw
          claim_id: c_eR8KLqJauosH7SxZLzp7Fe
          source_id: s_wqoc7McBghgZFkV74eFASh
          stance: supports
          locator: CBDB:134684
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（134684）
          source: &a1
            id: s_wqoc7McBghgZFkV74eFASh
            source_type: api_record
            title: 中国历代人物传记资料库：王整（CBDB 134684）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134684&o=json
            external_identifier: CBDB:134684
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.331Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2M6Y9KMBdcyxoLvPw63f5X
        subject_person_id: p_eJKC3hd1WBr69cmEK5vK4P
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王整，史料所见人物。本项目依据《中国历代人物传记资料库：王整（CBDB 134684）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tgABYerHVL3ejbMexSANFY
          claim_id: c_2M6Y9KMBdcyxoLvPw63f5X
          source_id: s_wqoc7McBghgZFkV74eFASh
          stance: supports
          locator: CBDB:134684
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c__VmEH4_5-MECQEqK2i5gw4
        subject_person_id: p_XX3yzWUjqK8tzcT9QCdQKK
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_eJKC3hd1WBr69cmEK5vK4P
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PBfT3P1IxcfjETbKKMVqQJ
          claim_id: c__VmEH4_5-MECQEqK2i5gw4
          source_id: s_KutVau2U0yoPvMusfLTvgb
          stance: supports
          locator: CBDB 亲属：妹（KinPerson 134681 王玉京）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_KutVau2U0yoPvMusfLTvgb
            source_type: api_record
            title: 中国历代人物传记资料库：王整（CBDB 134684）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134684&o=json
            external_identifier: CBDB:134684
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_XX3yzWUjqK8tzcT9QCdQKK
        status: active
        display_name: 王玉京
        merged_into_person_id: null
---

# 王整

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王整 | accepted |
| bio.summary | 王整，史料所见人物。本项目依据《中国历代人物传记资料库：王整（CBDB 134684）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| other | p_XX3yzWUjqK8tzcT9QCdQKK | 王玉京 | accepted |

## 外部来源

- [中国历代人物传记资料库：王整（CBDB 134684）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134684&o=json)
