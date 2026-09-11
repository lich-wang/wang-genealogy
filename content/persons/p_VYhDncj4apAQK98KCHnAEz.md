---
schema: wang-person/v1
id: p_VYhDncj4apAQK98KCHnAEz
status: active
merged_into: null
display_name: 王元士
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4P6QCNM1TXE7cE2zk7DA58
        subject_person_id: p_VYhDncj4apAQK98KCHnAEz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元士
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uYMB7sZeyK5QNWXN297QEC
          claim_id: c_4P6QCNM1TXE7cE2zk7DA58
          source_id: s_BXCYS2Yga1PcexznzJ72oh
          stance: supports
          locator: CBDB:471248
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（471248）
          source: &a1
            id: s_BXCYS2Yga1PcexznzJ72oh
            source_type: api_record
            title: 中国历代人物传记资料库：王元士（CBDB 471248）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=471248&o=json
            external_identifier: CBDB:471248
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.179Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_575H2k9o9dE5a9pKx4mmAS
        subject_person_id: p_VYhDncj4apAQK98KCHnAEz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元士，清人物。入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 471248）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_V-aw-Kz5N-u65opxO85lXt
          claim_id: c_575H2k9o9dE5a9pKx4mmAS
          source_id: s_BXCYS2Yga1PcexznzJ72oh
          stance: supports
          locator: CBDB:471248
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

# 王元士

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元士 | accepted |
| bio.summary | 王元士，清人物。入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 471248） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王元士（CBDB 471248）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=471248&o=json)
