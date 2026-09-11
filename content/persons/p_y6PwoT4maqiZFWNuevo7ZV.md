---
schema: wang-person/v1
id: p_y6PwoT4maqiZFWNuevo7ZV
status: active
merged_into: null
display_name: 王大枚
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5zC7jHV86tSN3ASxjL83Gs
        subject_person_id: p_y6PwoT4maqiZFWNuevo7ZV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大枚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Hr7K259PycW4KiYxHzgd8N
          claim_id: c_5zC7jHV86tSN3ASxjL83Gs
          source_id: s_ac25Z8iia86HU9iM4MPYak
          stance: supports
          locator: CBDB:636900
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636900）
          source: &a1
            id: s_ac25Z8iia86HU9iM4MPYak
            source_type: api_record
            title: 中国历代人物传记资料库：王大枚（CBDB 636900）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636900&o=json
            external_identifier: CBDB:636900
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.287Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UTM3H8WV3TxnknxCbLZ4dk
        subject_person_id: p_y6PwoT4maqiZFWNuevo7ZV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大枚，清人物。籍贯漢陽，入仕監生，曾任撫民同知、同知、知縣。（中国历代人物传记资料库 CBDB 636900）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0IkwVsnlnTpN6Y0o4XKQEu
          claim_id: c_UTM3H8WV3TxnknxCbLZ4dk
          source_id: s_ac25Z8iia86HU9iM4MPYak
          stance: supports
          locator: CBDB:636900
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

# 王大枚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大枚 | accepted |
| bio.summary | 王大枚，清人物。籍贯漢陽，入仕監生，曾任撫民同知、同知、知縣。（中国历代人物传记资料库 CBDB 636900） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王大枚（CBDB 636900）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636900&o=json)
