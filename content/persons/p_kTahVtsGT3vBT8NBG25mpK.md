---
schema: wang-person/v1
id: p_kTahVtsGT3vBT8NBG25mpK
status: active
merged_into: null
display_name: 王大綬
cbdb_id: 59902
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QKC9otkV5jNw25LH4pWGt2
        subject_person_id: p_kTahVtsGT3vBT8NBG25mpK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大綬，清人物。籍贯濟寧直隸州，入仕武舉進士，曾任副將、鎮總兵官。（中国历代人物传记资料库 CBDB 59902）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_Vrw2hp5mPngf5ebAcctA__
          claim_id: c_QKC9otkV5jNw25LH4pWGt2
          source_id: s_kk6vMS9NAmrT27ceaE6szr
          stance: supports
          locator: CBDB:59902
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_kk6vMS9NAmrT27ceaE6szr
            source_type: api_record
            title: 中国历代人物传记资料库：王大綬（CBDB 59902）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=59902&o=json
            external_identifier: CBDB:59902
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:48.148Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_m76uZN7XGWqCMXi1WQBW6h
        subject_person_id: p_kTahVtsGT3vBT8NBG25mpK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大綬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_mvkieE3RxDvncU1XHqYPqL
          claim_id: c_m76uZN7XGWqCMXi1WQBW6h
          source_id: s_kk6vMS9NAmrT27ceaE6szr
          stance: supports
          locator: CBDB:59902
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1401-1500）｜历史性依据：CBDB 朝代 = 清
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

# 王大綬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王大綬，清人物。籍贯濟寧直隸州，入仕武舉進士，曾任副將、鎮總兵官。（中国历代人物传记资料库 CBDB 59902） | accepted |
| name.primary | 王大綬 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王大綬（CBDB 59902）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=59902&o=json)
