---
schema: wang-person/v1
id: p_iu1MYfTzd8nZLM7UZPHE7V
status: active
merged_into: null
display_name: 王榘
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BAww7m1vf68VMoNjYaA1Bn
        subject_person_id: p_iu1MYfTzd8nZLM7UZPHE7V
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王榘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rNuBGq3jEN2K41SKCb66Dz
          claim_id: c_BAww7m1vf68VMoNjYaA1Bn
          source_id: s_5X97Cg5jW4cVBopJoPktrY
          stance: supports
          locator: CBDB:638789
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638789）
          source: &a1
            id: s_5X97Cg5jW4cVBopJoPktrY
            source_type: api_record
            title: 中国历代人物传记资料库：王榘（CBDB 638789）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638789&o=json
            external_identifier: CBDB:638789
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.770Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1yhD8vs7dWTE4g9w6Db2PK
        subject_person_id: p_iu1MYfTzd8nZLM7UZPHE7V
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王榘，清人物。籍贯光州直隸州直轄地方，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 638789）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_W2F0bBbDPtU4dbkDTsRW1L
          claim_id: c_1yhD8vs7dWTE4g9w6Db2PK
          source_id: s_5X97Cg5jW4cVBopJoPktrY
          stance: supports
          locator: CBDB:638789
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

# 王榘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王榘 | accepted |
| bio.summary | 王榘，清人物。籍贯光州直隸州直轄地方，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 638789） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王榘（CBDB 638789）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638789&o=json)
