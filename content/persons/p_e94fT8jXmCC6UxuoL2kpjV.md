---
schema: wang-person/v1
id: p_e94fT8jXmCC6UxuoL2kpjV
status: active
merged_into: null
display_name: 王玫
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pDTBK8Cy638Xkm3KE6akkP
        subject_person_id: p_e94fT8jXmCC6UxuoL2kpjV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QdDt6Y8gB9K9v11NBEpyfB
          claim_id: c_pDTBK8Cy638Xkm3KE6akkP
          source_id: s_44nEC9fgcaHvxdnYjbL4ve
          stance: supports
          locator: CBDB:377746
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（377746）
          source: &a1
            id: s_44nEC9fgcaHvxdnYjbL4ve
            source_type: api_record
            title: 中国历代人物传记资料库：王玫（CBDB 377746）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=377746&o=json
            external_identifier: CBDB:377746
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.635Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1oGwJUJFkCiVQCQ5gaS2T3
        subject_person_id: p_e94fT8jXmCC6UxuoL2kpjV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玫，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 377746）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Onn3ZB-HKmj9NJB7EA3XWT
          claim_id: c_1oGwJUJFkCiVQCQ5gaS2T3
          source_id: s_44nEC9fgcaHvxdnYjbL4ve
          stance: supports
          locator: CBDB:377746
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

# 王玫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王玫 | accepted |
| bio.summary | 王玫，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 377746） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王玫（CBDB 377746）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=377746&o=json)
