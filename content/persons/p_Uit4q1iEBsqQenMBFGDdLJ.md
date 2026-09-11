---
schema: wang-person/v1
id: p_Uit4q1iEBsqQenMBFGDdLJ
status: active
merged_into: null
display_name: 王鐸
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZiGSsvtUXUc5vdojSdNEXo
        subject_person_id: p_Uit4q1iEBsqQenMBFGDdLJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鐸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Gdd9xDabVBcRaRFDZjQ1Gr
          claim_id: c_ZiGSsvtUXUc5vdojSdNEXo
          source_id: s_9U1mrGVamJUfD8mbXwiKYZ
          stance: supports
          locator: CBDB:28771
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（28771）
          source: &a1
            id: s_9U1mrGVamJUfD8mbXwiKYZ
            source_type: api_record
            title: 中国历代人物传记资料库：王鐸（CBDB 28771）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28771&o=json
            external_identifier: CBDB:28771
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.979Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8HNcLyPqHQ15K2UigEvk8v
        subject_person_id: p_Uit4q1iEBsqQenMBFGDdLJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鐸，元人物。籍贯安陽。（中国历代人物传记资料库 CBDB 28771）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6rRqPYfwH2P5jRYxzOPEBy
          claim_id: c_8HNcLyPqHQ15K2UigEvk8v
          source_id: s_9U1mrGVamJUfD8mbXwiKYZ
          stance: supports
          locator: CBDB:28771
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_bmDDT2EM_gf5LkEhSrfTqo
        subject_person_id: p_Mm6YXV7FP22H8DfjeHF6Xp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Uit4q1iEBsqQenMBFGDdLJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zeJ1jpAP7VqdU_Mf4ZhqXQ
          claim_id: c_bmDDT2EM_gf5LkEhSrfTqo
          source_id: s_7NHmcgKtiis4jy3fLtqnnm
          stance: supports
          locator: CBDB 双向互证（子 王鐸 ⇄ 父 王信）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_7NHmcgKtiis4jy3fLtqnnm
            source_type: api_record
            title: 中国历代人物传记资料库：王信（CBDB 28766）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28766&o=json
            external_identifier: CBDB:28766
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.977Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Mm6YXV7FP22H8DfjeHF6Xp
        status: active
        display_name: 王信
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王鐸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鐸 | accepted |
| bio.summary | 王鐸，元人物。籍贯安陽。（中国历代人物传记资料库 CBDB 28771） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Mm6YXV7FP22H8DfjeHF6Xp | 王信 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鐸（CBDB 28771）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28771&o=json)
- [中国历代人物传记资料库：王信（CBDB 28766）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28766&o=json)
