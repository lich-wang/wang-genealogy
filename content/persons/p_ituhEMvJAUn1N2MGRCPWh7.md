---
schema: wang-person/v1
id: p_ituhEMvJAUn1N2MGRCPWh7
status: active
merged_into: null
display_name: 王貽荃
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MFikusfJtJhCtMC563yzLk
        subject_person_id: p_ituhEMvJAUn1N2MGRCPWh7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王貽荃
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RdL4RvV11z8cArR87tVKAZ
          claim_id: c_MFikusfJtJhCtMC563yzLk
          source_id: s_QuctKY1waQcQU9Dyr6zpXe
          stance: supports
          locator: CBDB:30088
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（30088）
          source: &a1
            id: s_QuctKY1waQcQU9Dyr6zpXe
            source_type: api_record
            title: 中国历代人物传记资料库：王貽荃（CBDB 30088）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30088&o=json
            external_identifier: CBDB:30088
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.022Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yQk9NavAZZ2MNav1htASVn
        subject_person_id: p_ituhEMvJAUn1N2MGRCPWh7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王貽荃，清人物。籍贯寶坻。（中国历代人物传记资料库 CBDB 30088）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rQJiNlFfhKgPY83bPAyZps
          claim_id: c_yQk9NavAZZ2MNav1htASVn
          source_id: s_QuctKY1waQcQU9Dyr6zpXe
          stance: supports
          locator: CBDB:30088
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_5B-hkiP_971m6LwXsqxo_e
        subject_person_id: p_ituhEMvJAUn1N2MGRCPWh7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1kjRuo592Nvzzx75n3VwYV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-5xvyiG_Wcw-hPI4-ULOZ6
          claim_id: c_5B-hkiP_971m6LwXsqxo_e
          source_id: s_QuctKY1waQcQU9Dyr6zpXe
          stance: supports
          locator: CBDB 双向互证（子 王振緒 ⇄ 父 王貽荃）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_1kjRuo592Nvzzx75n3VwYV
        status: active
        display_name: 王振緒
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王貽荃

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王貽荃 | accepted |
| bio.summary | 王貽荃，清人物。籍贯寶坻。（中国历代人物传记资料库 CBDB 30088） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_1kjRuo592Nvzzx75n3VwYV | 王振緒 | accepted |

## 外部来源

- [中国历代人物传记资料库：王貽荃（CBDB 30088）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30088&o=json)
