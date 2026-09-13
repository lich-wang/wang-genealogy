---
schema: wang-person/v1
id: p_fjtx6PajidBF5DeEX7ULow
status: merged
merged_into: p_ZZ9tZgx4rUmKgDXtAEqRwH
display_name: 王祖道
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tRLmreU5i4QUeygPdZaJK1
        subject_person_id: p_fjtx6PajidBF5DeEX7ULow
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祖道
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CsBzJuzohNFC7Xi5FAJnqK
          claim_id: c_tRLmreU5i4QUeygPdZaJK1
          source_id: s_DKwEihoKaeDdokgXg515QL
          stance: supports
          locator: CBDB:1902
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1902）
          source: &a1
            id: s_DKwEihoKaeDdokgXg515QL
            source_type: api_record
            title: 中国历代人物传记资料库：王祖道（CBDB 1902）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1902&o=json
            external_identifier: CBDB:1902
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.384Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_QGZFrC316Nz4Mda6L5j3o4
        subject_person_id: p_fjtx6PajidBF5DeEX7ULow
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1108年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8ANz4y2G4fCaCjE5NsAPp3
          claim_id: c_QGZFrC316Nz4Mda6L5j3o4
          source_id: s_DKwEihoKaeDdokgXg515QL
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pBarY6ACEd4D8JXZQhXzNi
        subject_person_id: p_fjtx6PajidBF5DeEX7ULow
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祖道（卒于1108年），宋人物。籍贯閩縣，入仕進士，曾任尚書省戶部侍郎、朝請大夫、朝請郎。（中国历代人物传记资料库 CBDB 1902）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ClTYuvvIUDGH8pLTKwlAv8
          claim_id: c_pBarY6ACEd4D8JXZQhXzNi
          source_id: s_DKwEihoKaeDdokgXg515QL
          stance: supports
          locator: CBDB:1902
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

# 王祖道

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王祖道 | accepted |
| death.date | 1108年 | accepted |
| bio.summary | 王祖道（卒于1108年），宋人物。籍贯閩縣，入仕進士，曾任尚書省戶部侍郎、朝請大夫、朝請郎。（中国历代人物传记资料库 CBDB 1902） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王祖道（CBDB 1902）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1902&o=json)
