---
schema: wang-person/v1
id: p_9GRZTYMycpbwjjXpYMHwNL
status: active
merged_into: null
display_name: 王掄元
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Q7jYiVrAmoH4AsaLdueB4W
        subject_person_id: p_9GRZTYMycpbwjjXpYMHwNL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王掄元
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_it8LPhNmFgr9vkYTGCEQNa
          claim_id: c_Q7jYiVrAmoH4AsaLdueB4W
          source_id: s_gxWcP29nPArRwDNqoo6zi5
          stance: supports
          locator: CBDB:638144
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638144）
          source: &a1
            id: s_gxWcP29nPArRwDNqoo6zi5
            source_type: api_record
            title: 中国历代人物传记资料库：王掄元（CBDB 638144）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638144&o=json
            external_identifier: CBDB:638144
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.613Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6DSyAC63K6ztsNaedQsFD1
        subject_person_id: p_9GRZTYMycpbwjjXpYMHwNL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王掄元，清人物。籍贯霍州直隸州直轄地方，入仕鄉貢舉人，曾任學正。（中国历代人物传记资料库 CBDB 638144）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_akW1zWOCTjqc4xxbCIKy0z
          claim_id: c_6DSyAC63K6ztsNaedQsFD1
          source_id: s_gxWcP29nPArRwDNqoo6zi5
          stance: supports
          locator: CBDB:638144
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

# 王掄元

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王掄元 | accepted |
| bio.summary | 王掄元，清人物。籍贯霍州直隸州直轄地方，入仕鄉貢舉人，曾任學正。（中国历代人物传记资料库 CBDB 638144） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王掄元（CBDB 638144）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638144&o=json)
