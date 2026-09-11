---
schema: wang-person/v1
id: p_Kjc1WtbBepgB11TFLaDGkt
status: active
merged_into: null
display_name: 王崇仁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Y9X7s1vcbK2XddZtxmA42S
        subject_person_id: p_Kjc1WtbBepgB11TFLaDGkt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇仁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3czSpQ7FqANe6X6168jti1
          claim_id: c_Y9X7s1vcbK2XddZtxmA42S
          source_id: s_Qxbm8NkKUpGb3dZRJGQUXq
          stance: supports
          locator: CBDB:126687
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126687）
          source: &a1
            id: s_Qxbm8NkKUpGb3dZRJGQUXq
            source_type: api_record
            title: 中国历代人物传记资料库：王崇仁（CBDB 126687）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126687&o=json
            external_identifier: CBDB:126687
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.126Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LcN1szZPfzaJi3hUB6Hy3F
        subject_person_id: p_Kjc1WtbBepgB11TFLaDGkt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇仁，明人物。籍贯曹縣，身份为以疾廢。（中国历代人物传记资料库 CBDB 126687）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_eqdFseDGmlmz_qlkRFVCj1
          claim_id: c_LcN1szZPfzaJi3hUB6Hy3F
          source_id: s_Qxbm8NkKUpGb3dZRJGQUXq
          stance: supports
          locator: CBDB:126687
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王崇仁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王崇仁 | accepted |
| bio.summary | 王崇仁，明人物。籍贯曹縣，身份为以疾廢。（中国历代人物传记资料库 CBDB 126687） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王崇仁（CBDB 126687）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126687&o=json)
