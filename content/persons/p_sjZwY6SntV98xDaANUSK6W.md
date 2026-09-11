---
schema: wang-person/v1
id: p_sjZwY6SntV98xDaANUSK6W
status: active
merged_into: null
display_name: 王永聰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EdQyFieKriDjSAWP2i4kJy
        subject_person_id: p_sjZwY6SntV98xDaANUSK6W
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永聰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jnCh8WY3pLh418UBnnNbyL
          claim_id: c_EdQyFieKriDjSAWP2i4kJy
          source_id: s_iRNRKhLR5zQj19xsG2QCbA
          stance: supports
          locator: CBDB:638994
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638994）
          source: &a1
            id: s_iRNRKhLR5zQj19xsG2QCbA
            source_type: api_record
            title: 中国历代人物传记资料库：王永聰（CBDB 638994）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638994&o=json
            external_identifier: CBDB:638994
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.827Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WP47PiJs2zSNHHtEouMQBn
        subject_person_id: p_sjZwY6SntV98xDaANUSK6W
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永聰，清人物。籍贯休寧，入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 638994）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3WO9XQNs3Zrxat3dzcK9oO
          claim_id: c_WP47PiJs2zSNHHtEouMQBn
          source_id: s_iRNRKhLR5zQj19xsG2QCbA
          stance: supports
          locator: CBDB:638994
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

# 王永聰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王永聰 | accepted |
| bio.summary | 王永聰，清人物。籍贯休寧，入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 638994） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王永聰（CBDB 638994）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638994&o=json)
