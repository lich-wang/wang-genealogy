---
schema: wang-person/v1
id: p_Cr25NpP3VKFx9r13FKuRdu
status: active
merged_into: null
display_name: 王詠
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bExfSYGDRHcJMa2sogJdYX
        subject_person_id: p_Cr25NpP3VKFx9r13FKuRdu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王詠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VSEg4zkqXJS8KVjtR6fSzf
          claim_id: c_bExfSYGDRHcJMa2sogJdYX
          source_id: s_Ep3QtZtuYxyMKpdKnfLMnb
          stance: supports
          locator: CBDB:215877
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（215877）
          source: &a1
            id: s_Ep3QtZtuYxyMKpdKnfLMnb
            source_type: api_record
            title: 中国历代人物传记资料库：王詠（CBDB 215877）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215877&o=json
            external_identifier: CBDB:215877
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.209Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gcpCHKXNBk8sNhHF3BLT77
        subject_person_id: p_Cr25NpP3VKFx9r13FKuRdu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王詠，明人物。萬曆五年進士，籍贯蒲州。（中国历代人物传记资料库 CBDB 215877）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Af8bRHCkUJVpU9rw0QpNlK
          claim_id: c_gcpCHKXNBk8sNhHF3BLT77
          source_id: s_Ep3QtZtuYxyMKpdKnfLMnb
          stance: supports
          locator: CBDB:215877
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_YEQaW3tzNXZ8zGcpbK8MCE
        subject_person_id: p_uRxHoeETPENUnB4UpGZ636
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Cr25NpP3VKFx9r13FKuRdu
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_A69pyXvZEq0sl6U82Q1UBL
          claim_id: c_YEQaW3tzNXZ8zGcpbK8MCE
          source_id: s_DAlX0G9vfdSKMoLloCUAda
          stance: supports
          locator: CBDB：兄弟 王謙（124982）之父／母 王崇古
          quotation: null
          interpretation_note: 由兄弟关系推断：王詠 与 王謙 为同胞（CBDB 记「兄」），王謙 之父／母即 王詠 之父／母。
          source:
            id: s_DAlX0G9vfdSKMoLloCUAda
            source_type: api_record
            title: 中国历代人物传记资料库：王詠（CBDB 215877）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215877&o=json
            external_identifier: CBDB:215877
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_uRxHoeETPENUnB4UpGZ636
        status: active
        display_name: 王崇古
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_gYQtWdtxetZEYvUS7U4vkp
        subject_person_id: p_68bfPNUHA98KKMwPnJ12C3
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Cr25NpP3VKFx9r13FKuRdu
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gdc8T5Lsc-8MRdyMaeJP1h
          claim_id: c_gYQtWdtxetZEYvUS7U4vkp
          source_id: s_DAlX0G9vfdSKMoLloCUAda
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 124982 王謙）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_DAlX0G9vfdSKMoLloCUAda
            source_type: api_record
            title: 中国历代人物传记资料库：王詠（CBDB 215877）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215877&o=json
            external_identifier: CBDB:215877
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_68bfPNUHA98KKMwPnJ12C3
        status: active
        display_name: 王謙
        merged_into_person_id: null
---

# 王詠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王詠 | accepted |
| bio.summary | 王詠，明人物。萬曆五年進士，籍贯蒲州。（中国历代人物传记资料库 CBDB 215877） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_uRxHoeETPENUnB4UpGZ636 | 王崇古 | accepted |
| other | p_68bfPNUHA98KKMwPnJ12C3 | 王謙 | accepted |

## 外部来源

- [中国历代人物传记资料库：王詠（CBDB 215877）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215877&o=json)
