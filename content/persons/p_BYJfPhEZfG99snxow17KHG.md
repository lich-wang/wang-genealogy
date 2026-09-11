---
schema: wang-person/v1
id: p_BYJfPhEZfG99snxow17KHG
status: active
merged_into: null
display_name: 王有功
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_o3adiG3Pxk1c6kUo9XJ5GA
        subject_person_id: p_BYJfPhEZfG99snxow17KHG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王有功
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1ADjX5DF46YCfK6Qnk7iTY
          claim_id: c_o3adiG3Pxk1c6kUo9XJ5GA
          source_id: s_BP4YC1eP68nSyZzdL2ksaf
          stance: supports
          locator: CBDB:206804
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（206804）
          source: &a1
            id: s_BP4YC1eP68nSyZzdL2ksaf
            source_type: api_record
            title: 中国历代人物传记资料库：王有功（CBDB 206804）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206804&o=json
            external_identifier: CBDB:206804
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.906Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_dfX2ANZ8V4upKMVtwpKsht
        subject_person_id: p_BYJfPhEZfG99snxow17KHG
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1553年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EmG87Jty9ewz5VSwFwjdrZ
          claim_id: c_dfX2ANZ8V4upKMVtwpKsht
          source_id: s_BP4YC1eP68nSyZzdL2ksaf
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YoCXbWTKn9niyKqUL4TaEG
        subject_person_id: p_BYJfPhEZfG99snxow17KHG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王有功（生于1553年），明人物。明清進士進士，籍贯吳縣，入仕進士，曾任光祿寺少卿、御史、知縣。（中国历代人物传记资料库 CBDB 206804）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TUJWvrXoZQ-e4xFd47RL_3
          claim_id: c_YoCXbWTKn9niyKqUL4TaEG
          source_id: s_BP4YC1eP68nSyZzdL2ksaf
          stance: supports
          locator: CBDB:206804
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ZSKp57-7sxauZEMZXRbejT
        subject_person_id: p_D5ec5jupf1WyP5yU3NHEdT
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BYJfPhEZfG99snxow17KHG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JXCzwqpGLfBQnl_eraAf46
          claim_id: c_ZSKp57-7sxauZEMZXRbejT
          source_id: s_BP4YC1eP68nSyZzdL2ksaf
          stance: supports
          locator: 萬曆十一年進士登科錄:一卷，第三甲第五十七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_D5ec5jupf1WyP5yU3NHEdT
        status: active
        display_name: 王寵光
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_e6pfsNMXpgE3akl_iL1Na1
        subject_person_id: p_BYJfPhEZfG99snxow17KHG
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_JuG7rj7LupTMf9qir8KQTc
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_f-rYB5XDZDZnq4PNhJWwXn
          claim_id: c_e6pfsNMXpgE3akl_iL1Na1
          source_id: s_Py6vfnZ_8NaOSuOnTvesat
          stance: supports
          locator: 萬曆十一年進士登科錄:一卷，第三甲第五十七名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Py6vfnZ_8NaOSuOnTvesat
            source_type: api_record
            title: 中国历代人物传记资料库：查氏(王有功妻)（CBDB 223502）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=223502&o=json
            external_identifier: CBDB:223502
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_JuG7rj7LupTMf9qir8KQTc
        status: active
        display_name: 查氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_j0jULzVQUkKvRVmnfUb2yW
        subject_person_id: p_wox48YQwcFCA2THyUzZmJn
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_BYJfPhEZfG99snxow17KHG
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4KQ-SjBHB_pg32Dj41BNx-
          claim_id: c_j0jULzVQUkKvRVmnfUb2yW
          source_id: s_BP4YC1eP68nSyZzdL2ksaf
          stance: supports
          locator: 萬曆十一年進士登科錄:一卷，第三甲第五十七名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_wox48YQwcFCA2THyUzZmJn
        status: active
        display_name: 王惠
        merged_into_person_id: null
    - claim:
        id: c_tmp4oiAcoLkwl3LeUc2fPK
        subject_person_id: p_wrDFZ5uQWHdCUU75uJZddc
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_BYJfPhEZfG99snxow17KHG
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_M335D-RJn-CaW1E3S38RNB
          claim_id: c_tmp4oiAcoLkwl3LeUc2fPK
          source_id: s_BP4YC1eP68nSyZzdL2ksaf
          stance: supports
          locator: 萬曆十一年進士登科錄:一卷，第三甲第五十七名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_wrDFZ5uQWHdCUU75uJZddc
        status: active
        display_name: 王誥
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王有功

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王有功 | accepted |
| birth.date | 1553年 | accepted |
| bio.summary | 王有功（生于1553年），明人物。明清進士進士，籍贯吳縣，入仕進士，曾任光祿寺少卿、御史、知縣。（中国历代人物传记资料库 CBDB 206804） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_D5ec5jupf1WyP5yU3NHEdT | 王寵光 | accepted |
| spouses | p_JuG7rj7LupTMf9qir8KQTc | 查氏 | accepted |
| ancestors | p_wox48YQwcFCA2THyUzZmJn | 王惠 | accepted |
| ancestors | p_wrDFZ5uQWHdCUU75uJZddc | 王誥 | accepted |

## 外部来源

- [中国历代人物传记资料库：查氏(王有功妻)（CBDB 223502）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=223502&o=json)
- [中国历代人物传记资料库：王有功（CBDB 206804）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206804&o=json)
