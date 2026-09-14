---
schema: wang-person/v1
id: p_VarSc8kLjzf416bC1G8naQ
status: active
merged_into: null
display_name: 王遵路
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EbR4YzEn8DLF79SAHhbPKn
        subject_person_id: p_VarSc8kLjzf416bC1G8naQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遵路
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CG1QPypKj3JyRRBPUPEAGP
          claim_id: c_EbR4YzEn8DLF79SAHhbPKn
          source_id: s_t1WPW63zyuFdcC5zbkBs3Z
          stance: supports
          locator: CBDB:224058
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（224058）
          source: &a1
            id: s_t1WPW63zyuFdcC5zbkBs3Z
            source_type: api_record
            title: 中国历代人物传记资料库：王遵路（CBDB 224058）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=224058&o=json
            external_identifier: CBDB:224058
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.423Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Xuq7VajDtn78GDU9TTAJP5
        subject_person_id: p_VarSc8kLjzf416bC1G8naQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王遵路，明人物。萬曆十一年進士，籍贯杞縣，入仕貢生: 選貢(優貢 after 1628)，曾任通判。（中国历代人物传记资料库 CBDB 224058）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WHz7bTMLz0Sh2oOJluf8T8
          claim_id: c_Xuq7VajDtn78GDU9TTAJP5
          source_id: s_t1WPW63zyuFdcC5zbkBs3Z
          stance: supports
          locator: CBDB:224058
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_XAkfJjAIp4hKByWm4R4IFy
        subject_person_id: p_SW2vBS5Q2Gs57G32UxYrWC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VarSc8kLjzf416bC1G8naQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GgIzV8J2Aka6J-N8znsB7G
          claim_id: c_XAkfJjAIp4hKByWm4R4IFy
          source_id: s_-aV7cmf3OSlJgBBVmSYxLL
          stance: supports
          locator: CBDB：兄弟 王遵訓（206844）之父／母 王倫
          quotation: null
          interpretation_note: 由兄弟关系推断：王遵路 与 王遵訓 为同胞（CBDB 记「兄」），王遵訓 之父／母即 王遵路 之父／母。
          source:
            id: s_-aV7cmf3OSlJgBBVmSYxLL
            source_type: api_record
            title: 中国历代人物传记资料库：王遵路（CBDB 224058）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=224058&o=json
            external_identifier: CBDB:224058
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_SW2vBS5Q2Gs57G32UxYrWC
        status: active
        display_name: 王倫
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_E3MFjulc_vjrM0vqOZoxGB
        subject_person_id: p_DyAEKNuW84v9PAan2XrKHV
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_VarSc8kLjzf416bC1G8naQ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_M6VPjHLG5zXLVTpsKfDYFz
          claim_id: c_E3MFjulc_vjrM0vqOZoxGB
          source_id: s_-aV7cmf3OSlJgBBVmSYxLL
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206844 王遵訓）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_-aV7cmf3OSlJgBBVmSYxLL
            source_type: api_record
            title: 中国历代人物传记资料库：王遵路（CBDB 224058）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=224058&o=json
            external_identifier: CBDB:224058
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DyAEKNuW84v9PAan2XrKHV
        status: active
        display_name: 王遵訓
        merged_into_person_id: null
---

# 王遵路

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王遵路 | accepted |
| bio.summary | 王遵路，明人物。萬曆十一年進士，籍贯杞縣，入仕貢生: 選貢(優貢 after 1628)，曾任通判。（中国历代人物传记资料库 CBDB 224058） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_SW2vBS5Q2Gs57G32UxYrWC | 王倫 | accepted |
| other | p_DyAEKNuW84v9PAan2XrKHV | 王遵訓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王遵路（CBDB 224058）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=224058&o=json)
