---
schema: wang-person/v1
id: p_fH9NostYvQ753dnB9c3HUK
status: active
merged_into: null
display_name: 王茂
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2Z58R3TwJgws9cwaaEft3Q
        subject_person_id: p_fH9NostYvQ753dnB9c3HUK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王茂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fw9w79GCJ3egRGyvdZXXM7
          claim_id: c_2Z58R3TwJgws9cwaaEft3Q
          source_id: s_s1sdbHz6GUJCFFoiGgnm2Y
          stance: supports
          locator: CBDB:466939
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（466939）
          source: &a1
            id: s_s1sdbHz6GUJCFFoiGgnm2Y
            source_type: api_record
            title: 中国历代人物传记资料库：王茂（CBDB 466939）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=466939&o=json
            external_identifier: CBDB:466939
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.991Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hiMRsZzaZcfVa74Q3b8xz1
        subject_person_id: p_fH9NostYvQ753dnB9c3HUK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王茂，明人物。曾任主簿。（中国历代人物传记资料库 CBDB 466939）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MWa_n6Ou6eM4hXWK7_-ifd
          claim_id: c_hiMRsZzaZcfVa74Q3b8xz1
          source_id: s_s1sdbHz6GUJCFFoiGgnm2Y
          stance: supports
          locator: CBDB:466939
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

# 王茂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王茂 | accepted |
| bio.summary | 王茂，明人物。曾任主簿。（中国历代人物传记资料库 CBDB 466939） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王茂（CBDB 466939）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=466939&o=json)
