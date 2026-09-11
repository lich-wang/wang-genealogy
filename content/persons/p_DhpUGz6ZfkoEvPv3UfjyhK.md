---
schema: wang-person/v1
id: p_DhpUGz6ZfkoEvPv3UfjyhK
status: active
merged_into: null
display_name: 王楨瑞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_74yF8eoFiNq2He8j5isWhT
        subject_person_id: p_DhpUGz6ZfkoEvPv3UfjyhK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王楨瑞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MitYdhtLXye1SjrzjoFfjL
          claim_id: c_74yF8eoFiNq2He8j5isWhT
          source_id: s_JbKopHR8wP3RdLuae18zao
          stance: supports
          locator: CBDB:638768
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638768）
          source: &a1
            id: s_JbKopHR8wP3RdLuae18zao
            source_type: api_record
            title: 中国历代人物传记资料库：王楨瑞（CBDB 638768）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638768&o=json
            external_identifier: CBDB:638768
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.740Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_S2jEQ8jf7cM9HkWxrrwSAb
        subject_person_id: p_DhpUGz6ZfkoEvPv3UfjyhK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王楨瑞，清人物。籍贯金谿，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 638768）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_bsZUXdPZr8GZtU_7nTQzkH
          claim_id: c_S2jEQ8jf7cM9HkWxrrwSAb
          source_id: s_JbKopHR8wP3RdLuae18zao
          stance: supports
          locator: CBDB:638768
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

# 王楨瑞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王楨瑞 | accepted |
| bio.summary | 王楨瑞，清人物。籍贯金谿，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 638768） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王楨瑞（CBDB 638768）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638768&o=json)
