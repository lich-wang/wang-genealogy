---
schema: wang-person/v1
id: p_zxp55omQWAFMMjBmte32kh
status: active
merged_into: null
display_name: 王九萬
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MNLCu1HbHqdm8D3MqmJRLg
        subject_person_id: p_zxp55omQWAFMMjBmte32kh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王九萬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MJ4JRoQNV8dmTJhcoAdJmo
          claim_id: c_MNLCu1HbHqdm8D3MqmJRLg
          source_id: s_4TqhBFPEK7Pi7rEYLBdKVX
          stance: supports
          locator: CBDB:413781
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（413781）
          source: &a1
            id: s_4TqhBFPEK7Pi7rEYLBdKVX
            source_type: api_record
            title: 中国历代人物传记资料库：王九萬（CBDB 413781）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=413781&o=json
            external_identifier: CBDB:413781
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.911Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vz6ZoewbAKceTBJapPKGhD
        subject_person_id: p_zxp55omQWAFMMjBmte32kh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王九萬，宋人物。曾任丞。（中国历代人物传记资料库 CBDB 413781）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gWiFW9vkgdxgeCXZoCSGgD
          claim_id: c_vz6ZoewbAKceTBJapPKGhD
          source_id: s_4TqhBFPEK7Pi7rEYLBdKVX
          stance: supports
          locator: CBDB:413781
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

# 王九萬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王九萬 | accepted |
| bio.summary | 王九萬，宋人物。曾任丞。（中国历代人物传记资料库 CBDB 413781） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王九萬（CBDB 413781）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=413781&o=json)
