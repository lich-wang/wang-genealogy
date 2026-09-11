---
schema: wang-person/v1
id: p_PMth4juTQp84CYV3uVPE4P
status: active
merged_into: null
display_name: 王文璜
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cxJiiX6sx6vtTWagU2tXoA
        subject_person_id: p_PMth4juTQp84CYV3uVPE4P
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文璜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WhoBsuEPSL5geAACkhSNrq
          claim_id: c_cxJiiX6sx6vtTWagU2tXoA
          source_id: s_Jwk68FFTm7LkjACyLXWTiW
          stance: supports
          locator: CBDB:638268
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638268）
          source: &a1
            id: s_Jwk68FFTm7LkjACyLXWTiW
            source_type: api_record
            title: 中国历代人物传记资料库：王文璜（CBDB 638268）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638268&o=json
            external_identifier: CBDB:638268
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.651Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WA5KBD8wmNWi8yRFJnhLAw
        subject_person_id: p_PMth4juTQp84CYV3uVPE4P
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文璜，清人物。籍贯婺源，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 638268）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_iV3ZcNUXK1OnM7FL5VuDAe
          claim_id: c_WA5KBD8wmNWi8yRFJnhLAw
          source_id: s_Jwk68FFTm7LkjACyLXWTiW
          stance: supports
          locator: CBDB:638268
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

# 王文璜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文璜 | accepted |
| bio.summary | 王文璜，清人物。籍贯婺源，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 638268） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文璜（CBDB 638268）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638268&o=json)
