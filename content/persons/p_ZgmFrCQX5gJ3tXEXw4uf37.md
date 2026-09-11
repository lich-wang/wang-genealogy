---
schema: wang-person/v1
id: p_ZgmFrCQX5gJ3tXEXw4uf37
status: active
merged_into: null
display_name: 王有德
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2FguwuD89FQHR2HZgfhk98
        subject_person_id: p_ZgmFrCQX5gJ3tXEXw4uf37
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王有德
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Vb1Z9TjHrr9PnZ58sL7Cwa
          claim_id: c_2FguwuD89FQHR2HZgfhk98
          source_id: s_e6ECAK3dXuJxiSWzHNEpYA
          stance: supports
          locator: CBDB:223503
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（223503）
          source: &a1
            id: s_e6ECAK3dXuJxiSWzHNEpYA
            source_type: api_record
            title: 中国历代人物传记资料库：王有德（CBDB 223503）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=223503&o=json
            external_identifier: CBDB:223503
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.415Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sKbSy3M8V1MUVWJzEFmxUe
        subject_person_id: p_ZgmFrCQX5gJ3tXEXw4uf37
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王有德，明人物。萬曆十一年進士，籍贯吳縣。（中国历代人物传记资料库 CBDB 223503）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MwY0KHrzLCeeatKVU57_SY
          claim_id: c_sKbSy3M8V1MUVWJzEFmxUe
          source_id: s_e6ECAK3dXuJxiSWzHNEpYA
          stance: supports
          locator: CBDB:223503
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

# 王有德

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王有德 | accepted |
| bio.summary | 王有德，明人物。萬曆十一年進士，籍贯吳縣。（中国历代人物传记资料库 CBDB 223503） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王有德（CBDB 223503）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=223503&o=json)
