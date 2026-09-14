---
schema: wang-person/v1
id: p_bGYu4dMVakhcDXuLef1B17
status: active
merged_into: null
display_name: 王一舉
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8DscNbf8xzgxKU8cyY9Fah
        subject_person_id: p_bGYu4dMVakhcDXuLef1B17
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一舉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4VH23AMJ2AEveyu6ks2rWx
          claim_id: c_8DscNbf8xzgxKU8cyY9Fah
          source_id: s_M5ZHDtzGX4x4M6YPu3XKaf
          stance: supports
          locator: CBDB:223627
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（223627）
          source: &a1
            id: s_M5ZHDtzGX4x4M6YPu3XKaf
            source_type: api_record
            title: 中国历代人物传记资料库：王一舉（CBDB 223627）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=223627&o=json
            external_identifier: CBDB:223627
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.419Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6K971AFq1VuJpSz4bWvD74
        subject_person_id: p_bGYu4dMVakhcDXuLef1B17
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一舉，明人物。萬曆十一年進士，籍贯曲周，曾任儒官。（中国历代人物传记资料库 CBDB 223627）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_t9pK766fcMAjiTYmFdHuIC
          claim_id: c_6K971AFq1VuJpSz4bWvD74
          source_id: s_M5ZHDtzGX4x4M6YPu3XKaf
          stance: supports
          locator: CBDB:223627
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_gJKqfiiNj9XLC663rK-QPv
        subject_person_id: p_bGYu4dMVakhcDXuLef1B17
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3hY5he8M9mkvGyZik66bM3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xVHZW_nUprxfPhhmYV_IKj
          claim_id: c_gJKqfiiNj9XLC663rK-QPv
          source_id: s_M5ZHDtzGX4x4M6YPu3XKaf
          stance: supports
          locator: 萬曆十一年進士登科錄:一卷，第三甲第六十九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_3hY5he8M9mkvGyZik66bM3
        status: active
        display_name: 王室垣
        merged_into_person_id: null
    - claim:
        id: c_UTdDYYiWdgyuUvHLATiSrf
        subject_person_id: p_bGYu4dMVakhcDXuLef1B17
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_SPdF8Kd1CdqXNK2ZQBMdGJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XRskxLguoQtULXdSId5zKb
          claim_id: c_UTdDYYiWdgyuUvHLATiSrf
          source_id: s_wisNwsKuTBcbb1CBvtZaPr
          stance: supports
          locator: CBDB：兄弟 王室垣（206814）之父／母 王一舉
          quotation: null
          interpretation_note: 由兄弟关系推断：王室屏 与 王室垣 为同胞（CBDB 记「兄」），王室垣 之父／母即 王室屏 之父／母。
          source:
            id: s_wisNwsKuTBcbb1CBvtZaPr
            source_type: api_record
            title: 中国历代人物传记资料库：王室屏（CBDB 223630）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=223630&o=json
            external_identifier: CBDB:223630
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_SPdF8Kd1CdqXNK2ZQBMdGJ
        status: active
        display_name: 王室屏
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王一舉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王一舉 | accepted |
| bio.summary | 王一舉，明人物。萬曆十一年進士，籍贯曲周，曾任儒官。（中国历代人物传记资料库 CBDB 223627） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_3hY5he8M9mkvGyZik66bM3 | 王室垣 | accepted |
| children | p_SPdF8Kd1CdqXNK2ZQBMdGJ | 王室屏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王室屏（CBDB 223630）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=223630&o=json)
- [中国历代人物传记资料库：王一舉（CBDB 223627）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=223627&o=json)
