---
schema: wang-person/v1
id: p_FX65EqFKSpj3D1AsBT3bfb
status: active
merged_into: null
display_name: 王顯忠
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5PWrHzZ5HkyQTySGQne7Bq
        subject_person_id: p_FX65EqFKSpj3D1AsBT3bfb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王顯忠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1LwsFQ9cYn7Bc6AksKmRQC
          claim_id: c_5PWrHzZ5HkyQTySGQne7Bq
          source_id: s_8NN3D3dCnDLeWr7Kw2Ce7K
          stance: supports
          locator: CBDB:322897
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（322897）
          source: &a1
            id: s_8NN3D3dCnDLeWr7Kw2Ce7K
            source_type: api_record
            title: 中国历代人物传记资料库：王顯忠（CBDB 322897）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322897&o=json
            external_identifier: CBDB:322897
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.132Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_stFXXUrUP2L1wnQhi3agCJ
        subject_person_id: p_FX65EqFKSpj3D1AsBT3bfb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王顯忠，明人物。天順四年進士，籍贯上海。（中国历代人物传记资料库 CBDB 322897）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_dLAtu5ufvoID37-VxuW13x
          claim_id: c_stFXXUrUP2L1wnQhi3agCJ
          source_id: s_8NN3D3dCnDLeWr7Kw2Ce7K
          stance: supports
          locator: CBDB:322897
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c__5R5OZIaoy4eApRGk7Q0wQ
        subject_person_id: p_FX65EqFKSpj3D1AsBT3bfb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fngUDbgD5w2bFevKYCEogv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YRN5zSz8_uA51c_YrnlNwH
          claim_id: c__5R5OZIaoy4eApRGk7Q0wQ
          source_id: s_CU91xn6DkLaeRJP93mtoUf
          stance: supports
          locator: 天順四年進士登科錄:一卷，第三甲第九十名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_CU91xn6DkLaeRJP93mtoUf
            source_type: api_record
            title: 中国历代人物传记资料库：王霽（CBDB 126885）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126885&o=json
            external_identifier: CBDB:126885
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.284Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_fngUDbgD5w2bFevKYCEogv
        status: active
        display_name: 王霽
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王顯忠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王顯忠 | accepted |
| bio.summary | 王顯忠，明人物。天順四年進士，籍贯上海。（中国历代人物传记资料库 CBDB 322897） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_fngUDbgD5w2bFevKYCEogv | 王霽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王霽（CBDB 126885）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126885&o=json)
- [中国历代人物传记资料库：王顯忠（CBDB 322897）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322897&o=json)
