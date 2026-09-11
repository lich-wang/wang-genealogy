---
schema: wang-person/v1
id: p_s5HD23pma2a9ENBJeQZN1J
status: active
merged_into: null
display_name: 王惟軒
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WnG2AMPU8NsxG6amfpuh2N
        subject_person_id: p_s5HD23pma2a9ENBJeQZN1J
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惟軒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3m9j7tPMAnSaEDmRUKiDN8
          claim_id: c_WnG2AMPU8NsxG6amfpuh2N
          source_id: s_oPAt7vihzaYUL9B2JiB8eE
          stance: supports
          locator: CBDB:637892
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637892）
          source: &a1
            id: s_oPAt7vihzaYUL9B2JiB8eE
            source_type: api_record
            title: 中国历代人物传记资料库：王惟軒（CBDB 637892）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637892&o=json
            external_identifier: CBDB:637892
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.448Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FLKJkDGjJk6p8pWb9nw2uX
        subject_person_id: p_s5HD23pma2a9ENBJeQZN1J
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惟軒，清人物。籍贯江西省，曾任中軍守備。（中国历代人物传记资料库 CBDB 637892）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_dKsQXPNLc-XoxXhbPfTXdt
          claim_id: c_FLKJkDGjJk6p8pWb9nw2uX
          source_id: s_oPAt7vihzaYUL9B2JiB8eE
          stance: supports
          locator: CBDB:637892
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

# 王惟軒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王惟軒 | accepted |
| bio.summary | 王惟軒，清人物。籍贯江西省，曾任中軍守備。（中国历代人物传记资料库 CBDB 637892） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王惟軒（CBDB 637892）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637892&o=json)
