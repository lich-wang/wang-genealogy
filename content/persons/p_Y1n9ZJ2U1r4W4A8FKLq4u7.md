---
schema: wang-person/v1
id: p_Y1n9ZJ2U1r4W4A8FKLq4u7
status: active
merged_into: null
display_name: 王仲儒
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GWGC6xNvS4MteVntbYyKAi
        subject_person_id: p_Y1n9ZJ2U1r4W4A8FKLq4u7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲儒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UVDBwNw3iKJKMiR31iRCic
          claim_id: c_GWGC6xNvS4MteVntbYyKAi
          source_id: s_SbnygJt1xDfdSJ3P5QdHGu
          stance: supports
          locator: CBDB:157937
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（157937）
          source: &a1
            id: s_SbnygJt1xDfdSJ3P5QdHGu
            source_type: api_record
            title: 中国历代人物传记资料库：王仲儒（CBDB 157937）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157937&o=json
            external_identifier: CBDB:157937
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.913Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3YdouAaHJV3gmsAGRrU1nY
        subject_person_id: p_Y1n9ZJ2U1r4W4A8FKLq4u7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲儒，唐人物。籍贯太原，曾任參軍。（中国历代人物传记资料库 CBDB 157937）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XNjolHsVU7bCt3mWu4oB7X
          claim_id: c_3YdouAaHJV3gmsAGRrU1nY
          source_id: s_SbnygJt1xDfdSJ3P5QdHGu
          stance: supports
          locator: CBDB:157937
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_dplgMKXjDTMm38KJPGNntp
        subject_person_id: p_nK9apVMeY253DbErnUEdp9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Y1n9ZJ2U1r4W4A8FKLq4u7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0MPeNjI8xF3IHFiHeRG3Ps
          claim_id: c_dplgMKXjDTMm38KJPGNntp
          source_id: s_bVmbR8kH1i5NZa5gpCFKZi
          stance: supports
          locator: 唐代墓誌匯編:二卷，Dahe 65：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_bVmbR8kH1i5NZa5gpCFKZi
            source_type: api_record
            title: 中国历代人物传记资料库：王翼（CBDB 141645）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141645&o=json
            external_identifier: CBDB:141645
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.561Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_nK9apVMeY253DbErnUEdp9
        status: active
        display_name: 王翼
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王仲儒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仲儒 | accepted |
| bio.summary | 王仲儒，唐人物。籍贯太原，曾任參軍。（中国历代人物传记资料库 CBDB 157937） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_nK9apVMeY253DbErnUEdp9 | 王翼 | accepted |

## 外部来源

- [中国历代人物传记资料库：王翼（CBDB 141645）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141645&o=json)
- [中国历代人物传记资料库：王仲儒（CBDB 157937）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157937&o=json)
