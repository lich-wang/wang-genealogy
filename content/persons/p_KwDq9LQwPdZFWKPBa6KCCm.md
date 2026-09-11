---
schema: wang-person/v1
id: p_KwDq9LQwPdZFWKPBa6KCCm
status: active
merged_into: null
display_name: 王暹
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8eoaiy4X7PXho7AieCCEXh
        subject_person_id: p_KwDq9LQwPdZFWKPBa6KCCm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王暹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LiykV8ccgZLkyM8bjojzKT
          claim_id: c_8eoaiy4X7PXho7AieCCEXh
          source_id: s_WRqWJKafcAe1wqT5aojPox
          stance: supports
          locator: CBDB:305717
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（305717）
          source: &a1
            id: s_WRqWJKafcAe1wqT5aojPox
            source_type: api_record
            title: 中国历代人物传记资料库：王暹（CBDB 305717）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=305717&o=json
            external_identifier: CBDB:305717
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.745Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NpPSecULk2JhSUUR1CTYEa
        subject_person_id: p_KwDq9LQwPdZFWKPBa6KCCm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王暹，明人物。天順元年進士，籍贯內江。（中国历代人物传记资料库 CBDB 305717）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5Gm7_rPke08Ow-IFEt3U15
          claim_id: c_NpPSecULk2JhSUUR1CTYEa
          source_id: s_WRqWJKafcAe1wqT5aojPox
          stance: supports
          locator: CBDB:305717
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_zcnupXnZpF3XDSY3zdFhFe
        subject_person_id: p_KwDq9LQwPdZFWKPBa6KCCm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3h5g9NkXDMotNKCta4dEHB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_u8-H5cr82Zb1TnQaKcLg0q
          claim_id: c_zcnupXnZpF3XDSY3zdFhFe
          source_id: s_EEE5e95wfR1tnUXaLTJN3U
          stance: supports
          locator: 天順元年進士登科錄:一卷，第三甲第一百五十五名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_EEE5e95wfR1tnUXaLTJN3U
            source_type: api_record
            title: 中国历代人物传记资料库：王秉彝（CBDB 126588）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126588&o=json
            external_identifier: CBDB:126588
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.044Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3h5g9NkXDMotNKCta4dEHB
        status: active
        display_name: 王秉彝
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王暹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王暹 | accepted |
| bio.summary | 王暹，明人物。天順元年進士，籍贯內江。（中国历代人物传记资料库 CBDB 305717） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_3h5g9NkXDMotNKCta4dEHB | 王秉彝 | accepted |

## 外部来源

- [中国历代人物传记资料库：王秉彝（CBDB 126588）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126588&o=json)
- [中国历代人物传记资料库：王暹（CBDB 305717）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=305717&o=json)
