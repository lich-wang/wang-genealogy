---
schema: wang-person/v1
id: p_PF5hwNJjbv6aFps4hFLUtx
status: active
merged_into: null
display_name: 王禄
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_j3BEZ8Y3MHCnmLuVVuQ6A5
        subject_person_id: p_PF5hwNJjbv6aFps4hFLUtx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王禄
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZwaZdxdrE523VHYczGai9m
          claim_id: c_j3BEZ8Y3MHCnmLuVVuQ6A5
          source_id: s_mA178gP3TjWG5dZJU7K314
          stance: supports
          locator: CBDB:476878
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（476878）
          source: &a1
            id: s_mA178gP3TjWG5dZJU7K314
            source_type: api_record
            title: 中国历代人物传记资料库：王禄（CBDB 476878）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=476878&o=json
            external_identifier: CBDB:476878
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.488Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oXEuE85a62KPZFa9GEDWyJ
        subject_person_id: p_PF5hwNJjbv6aFps4hFLUtx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王禄，明人物。入仕科舉制舉: 武舉科，曾任守備。（中国历代人物传记资料库 CBDB 476878）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_K8FVhokDlcj9AtVf98KOgb
          claim_id: c_oXEuE85a62KPZFa9GEDWyJ
          source_id: s_mA178gP3TjWG5dZJU7K314
          stance: supports
          locator: CBDB:476878
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

# 王禄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王禄 | accepted |
| bio.summary | 王禄，明人物。入仕科舉制舉: 武舉科，曾任守備。（中国历代人物传记资料库 CBDB 476878） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王禄（CBDB 476878）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=476878&o=json)
