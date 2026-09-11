---
schema: wang-person/v1
id: p_MB2P9K8B7NDjCYFiiGfSbx
status: active
merged_into: null
display_name: 王迪
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8nFrJ516ySDL9UWZFerkJ4
        subject_person_id: p_MB2P9K8B7NDjCYFiiGfSbx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王迪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_m6u4ydVujmSac4n4BoLRzj
          claim_id: c_8nFrJ516ySDL9UWZFerkJ4
          source_id: s_VHMC4BVAVTkkmq8L2DSAQt
          stance: supports
          locator: CBDB:342763
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342763）
          source: &a1
            id: s_VHMC4BVAVTkkmq8L2DSAQt
            source_type: api_record
            title: 中国历代人物传记资料库：王迪（CBDB 342763）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342763&o=json
            external_identifier: CBDB:342763
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.054Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AFgKPwS1hzy9H6nmQcjUqC
        subject_person_id: p_MB2P9K8B7NDjCYFiiGfSbx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王迪，明人物。明清進士進士，籍贯獲鹿，入仕進士。（中国历代人物传记资料库 CBDB 342763）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tN667uAySAFH3mknKoccsl
          claim_id: c_AFgKPwS1hzy9H6nmQcjUqC
          source_id: s_VHMC4BVAVTkkmq8L2DSAQt
          stance: supports
          locator: CBDB:342763
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

# 王迪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王迪 | accepted |
| bio.summary | 王迪，明人物。明清進士進士，籍贯獲鹿，入仕進士。（中国历代人物传记资料库 CBDB 342763） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王迪（CBDB 342763）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342763&o=json)
