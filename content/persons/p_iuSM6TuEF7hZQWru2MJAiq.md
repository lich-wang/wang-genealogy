---
schema: wang-person/v1
id: p_iuSM6TuEF7hZQWru2MJAiq
status: active
merged_into: null
display_name: 王宗瑤
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UR9MRV8hfiNSGCBGpXQN3o
        subject_person_id: p_iuSM6TuEF7hZQWru2MJAiq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗瑤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_22XR3s2CkEGW5DYoHTHD1b
          claim_id: c_UR9MRV8hfiNSGCBGpXQN3o
          source_id: s_FuPQLi2tahJf7sagdVYRhr
          stance: supports
          locator: CBDB:383785
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（383785）
          source: &a1
            id: s_FuPQLi2tahJf7sagdVYRhr
            source_type: api_record
            title: 中国历代人物传记资料库：王宗瑤（CBDB 383785）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=383785&o=json
            external_identifier: CBDB:383785
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.858Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UXHve3MH1rG7bDdBdBJ1JC
        subject_person_id: p_iuSM6TuEF7hZQWru2MJAiq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗瑤，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 383785）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LkSgb_nKIRiXUJAPN-7yyw
          claim_id: c_UXHve3MH1rG7bDdBdBJ1JC
          source_id: s_FuPQLi2tahJf7sagdVYRhr
          stance: supports
          locator: CBDB:383785
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

# 王宗瑤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗瑤 | accepted |
| bio.summary | 王宗瑤，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 383785） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宗瑤（CBDB 383785）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=383785&o=json)
