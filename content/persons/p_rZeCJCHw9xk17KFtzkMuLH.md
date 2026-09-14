---
schema: wang-person/v1
id: p_rZeCJCHw9xk17KFtzkMuLH
status: active
merged_into: null
display_name: 王鏞
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_H2e2tFQoM7Am3XFi3mKKN2
        subject_person_id: p_rZeCJCHw9xk17KFtzkMuLH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鏞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FLCZs8NrKCGvJ5GakhKKD2
          claim_id: c_H2e2tFQoM7Am3XFi3mKKN2
          source_id: s_tChitSUqBJuDwVqSHxcFDv
          stance: supports
          locator: CBDB:263532
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（263532）
          source: &a1
            id: s_tChitSUqBJuDwVqSHxcFDv
            source_type: api_record
            title: 中国历代人物传记资料库：王鏞（CBDB 263532）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=263532&o=json
            external_identifier: CBDB:263532
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.626Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5zNgMy3ZhDM6i1J2kCbiqG
        subject_person_id: p_rZeCJCHw9xk17KFtzkMuLH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鏞，明人物。弘治三年進士，籍贯鉅鹿，曾任訓導。（中国历代人物传记资料库 CBDB 263532）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Rpnfdp7F8F4fTcy2ubTyj6
          claim_id: c_5zNgMy3ZhDM6i1J2kCbiqG
          source_id: s_tChitSUqBJuDwVqSHxcFDv
          stance: supports
          locator: CBDB:263532
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_KjiKWLmlFaW9SEFwiDu3DA
        subject_person_id: p_DH3cdxEBekGFnLswxt2AJm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rZeCJCHw9xk17KFtzkMuLH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RRBFHjk09-52eUhpI1oQck
          claim_id: c_KjiKWLmlFaW9SEFwiDu3DA
          source_id: s_hwvl-kcdZLYlZU5MlyyR3V
          stance: supports
          locator: CBDB：兄弟 王鼎（67757）之父／母 王惟
          quotation: null
          interpretation_note: 由兄弟关系推断：王鏞 与 王鼎 为同胞（CBDB 记「弟」），王鼎 之父／母即 王鏞 之父／母。
          source:
            id: s_hwvl-kcdZLYlZU5MlyyR3V
            source_type: api_record
            title: 中国历代人物传记资料库：王鏞（CBDB 263532）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=263532&o=json
            external_identifier: CBDB:263532
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DH3cdxEBekGFnLswxt2AJm
        status: active
        display_name: 王惟
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_XUjKOvVeCJ3kAnQequb4C2
        subject_person_id: p_3aWXbEScEDV2akyzL58TPm
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_rZeCJCHw9xk17KFtzkMuLH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_poJAv1P-vo8m9zsqBarRCZ
          claim_id: c_XUjKOvVeCJ3kAnQequb4C2
          source_id: s_hwvl-kcdZLYlZU5MlyyR3V
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 67757 王鼎）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_hwvl-kcdZLYlZU5MlyyR3V
            source_type: api_record
            title: 中国历代人物传记资料库：王鏞（CBDB 263532）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=263532&o=json
            external_identifier: CBDB:263532
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3aWXbEScEDV2akyzL58TPm
        status: active
        display_name: 王鼎
        merged_into_person_id: null
---

# 王鏞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鏞 | accepted |
| bio.summary | 王鏞，明人物。弘治三年進士，籍贯鉅鹿，曾任訓導。（中国历代人物传记资料库 CBDB 263532） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_DH3cdxEBekGFnLswxt2AJm | 王惟 | accepted |
| other | p_3aWXbEScEDV2akyzL58TPm | 王鼎 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鏞（CBDB 263532）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=263532&o=json)
