---
schema: wang-person/v1
id: p_mvMLp8m6EpnfjEW12bbAFB
status: active
merged_into: null
display_name: 王波利
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PyokPU88ENyY27pq1N9KjT
        subject_person_id: p_mvMLp8m6EpnfjEW12bbAFB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王波利
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hGzk4a3UewGvFg3wLUhwgi
          claim_id: c_PyokPU88ENyY27pq1N9KjT
          source_id: s_XwwqCZ2LQ56jJBELt9GNAn
          stance: supports
          locator: CBDB:378770
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（378770）
          source: &a1
            id: s_XwwqCZ2LQ56jJBELt9GNAn
            source_type: api_record
            title: 中国历代人物传记资料库：王波利（CBDB 378770）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=378770&o=json
            external_identifier: CBDB:378770
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.666Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jgij25rzRgi74FHpgrPif3
        subject_person_id: p_mvMLp8m6EpnfjEW12bbAFB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王波利，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 378770）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_I6H2AK-thzifRkSHlYncpN
          claim_id: c_jgij25rzRgi74FHpgrPif3
          source_id: s_XwwqCZ2LQ56jJBELt9GNAn
          stance: supports
          locator: CBDB:378770
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

# 王波利

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王波利 | accepted |
| bio.summary | 王波利，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 378770） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王波利（CBDB 378770）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=378770&o=json)
