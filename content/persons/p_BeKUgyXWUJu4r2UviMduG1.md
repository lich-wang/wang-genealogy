---
schema: wang-person/v1
id: p_BeKUgyXWUJu4r2UviMduG1
status: active
merged_into: null
display_name: 王富
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_v78DgDnbsgJpHvBvdro8fp
        subject_person_id: p_BeKUgyXWUJu4r2UviMduG1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王富
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_S6c1qfBbHnpYdYEGNNryPk
          claim_id: c_v78DgDnbsgJpHvBvdro8fp
          source_id: s_FJJ1tXs4ExzhbLBk9f4dyn
          stance: supports
          locator: CBDB:215645
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（215645）
          source: &a1
            id: s_FJJ1tXs4ExzhbLBk9f4dyn
            source_type: api_record
            title: 中国历代人物传记资料库：王富（CBDB 215645）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215645&o=json
            external_identifier: CBDB:215645
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.186Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2Rc3yAvLC8LiDWuJBWKLEg
        subject_person_id: p_BeKUgyXWUJu4r2UviMduG1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王富，明人物。萬曆五年進士，籍贯臨邑。（中国历代人物传记资料库 CBDB 215645）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5moJ8OWRQNXy2iXn5F3xfh
          claim_id: c_2Rc3yAvLC8LiDWuJBWKLEg
          source_id: s_FJJ1tXs4ExzhbLBk9f4dyn
          stance: supports
          locator: CBDB:215645
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_UzDQTbQfD_m3paY4UDMC7O
        subject_person_id: p_BeKUgyXWUJu4r2UviMduG1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Eh3kPKaSjnmi4kvdvTFveB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_m2r8Dt1sBuxIaoaQteLm0r
          claim_id: c_UzDQTbQfD_m3paY4UDMC7O
          source_id: s_FJJ1tXs4ExzhbLBk9f4dyn
          stance: supports
          locator: 萬曆五年進士登科錄:一卷，第二甲第十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Eh3kPKaSjnmi4kvdvTFveB
        status: active
        display_name: 王再聘
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王富

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王富 | accepted |
| bio.summary | 王富，明人物。萬曆五年進士，籍贯臨邑。（中国历代人物传记资料库 CBDB 215645） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_Eh3kPKaSjnmi4kvdvTFveB | 王再聘 | accepted |

## 外部来源

- [中国历代人物传记资料库：王富（CBDB 215645）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215645&o=json)
