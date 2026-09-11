---
schema: wang-person/v1
id: p_dSq17UnVqarJGmqnUNoAds
status: active
merged_into: null
display_name: 王春煦
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jGBCR94qR35xGxo4esE7eg
        subject_person_id: p_dSq17UnVqarJGmqnUNoAds
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王春煦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ubhu9sm5poEWSXkJKZqp82
          claim_id: c_jGBCR94qR35xGxo4esE7eg
          source_id: s_huuE8AGf2q7Ap7AGTKP8Y8
          stance: supports
          locator: CBDB:71842
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71842）
          source: &a1
            id: s_huuE8AGf2q7Ap7AGTKP8Y8
            source_type: api_record
            title: 中国历代人物传记资料库：王春煦（CBDB 71842）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71842&o=json
            external_identifier: CBDB:71842
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.895Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_PeyN5n1bVJq4HMuEF4kMaK
        subject_person_id: p_dSq17UnVqarJGmqnUNoAds
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1744年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4icrQNJz1apSwPBXNHe7ER
          claim_id: c_PeyN5n1bVJq4HMuEF4kMaK
          source_id: s_huuE8AGf2q7Ap7AGTKP8Y8
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_1b7koPieQJeUa53bZLGUkh
        subject_person_id: p_dSq17UnVqarJGmqnUNoAds
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1800年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8zJ81CKXfJL8BGih64p8Jw
          claim_id: c_1b7koPieQJeUa53bZLGUkh
          source_id: s_huuE8AGf2q7Ap7AGTKP8Y8
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1QuSVivmQzQGW5LF2AWN7w
        subject_person_id: p_dSq17UnVqarJGmqnUNoAds
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王春煦（1744年—1800年），清人物。籍贯婁縣。（中国历代人物传记资料库 CBDB 71842）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_QIkx-jZyWCPBCXJqgl0rKU
          claim_id: c_1QuSVivmQzQGW5LF2AWN7w
          source_id: s_huuE8AGf2q7Ap7AGTKP8Y8
          stance: supports
          locator: CBDB:71842
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_o-q-jiyEu-5oDG7kQcy5Mn
        subject_person_id: p_dSq17UnVqarJGmqnUNoAds
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EcSdgzhQgvZYMWthcaUSxb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IpGfjj_U_VXsoaGS9M_JBj
          claim_id: c_o-q-jiyEu-5oDG7kQcy5Mn
          source_id: s_LKzqP8YwyKF5NkQ5m7ksV4
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #1138, HuWenKai #258：父"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_LKzqP8YwyKF5NkQ5m7ksV4
            source_type: api_record
            title: 中国历代人物传记资料库：王崑藻（CBDB 56786）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56786&o=json
            external_identifier: CBDB:56786
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:48.148Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_EcSdgzhQgvZYMWthcaUSxb
        status: active
        display_name: 王崑藻
        merged_into_person_id: null
    - claim:
        id: c_vcyNo3bJa4ph8nOguFvvos
        subject_person_id: p_dSq17UnVqarJGmqnUNoAds
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Lc2gCDF5BzW25Fdhb8evAr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pKLdR1KJYVFkU3S_cI2YN1
          claim_id: c_vcyNo3bJa4ph8nOguFvvos
          source_id: s_QCKmhnCbB82ND1djfaPAnh
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #1138, HuWenKai #258：父"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_QCKmhnCbB82ND1djfaPAnh
            source_type: api_record
            title: 中国历代人物传记资料库：王蘊徽（CBDB 56783）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56783&o=json
            external_identifier: CBDB:56783
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:48.148Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_Lc2gCDF5BzW25Fdhb8evAr
        status: active
        display_name: 王蘊徽
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王春煦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王春煦 | accepted |
| birth.date | 1744年 | accepted |
| death.date | 1800年 | accepted |
| bio.summary | 王春煦（1744年—1800年），清人物。籍贯婁縣。（中国历代人物传记资料库 CBDB 71842） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_EcSdgzhQgvZYMWthcaUSxb | 王崑藻 | accepted |
| children | p_Lc2gCDF5BzW25Fdhb8evAr | 王蘊徽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王春煦（CBDB 71842）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71842&o=json)
- [中国历代人物传记资料库：王崑藻（CBDB 56786）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56786&o=json)
- [中国历代人物传记资料库：王蘊徽（CBDB 56783）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56783&o=json)
