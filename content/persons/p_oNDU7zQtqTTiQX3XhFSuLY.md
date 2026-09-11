---
schema: wang-person/v1
id: p_oNDU7zQtqTTiQX3XhFSuLY
status: active
merged_into: null
display_name: 王護
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gkqj78LXyhW9kz2af4D5jK
        subject_person_id: p_oNDU7zQtqTTiQX3XhFSuLY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王護
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BPHeGNHhmHCPBQsx451EnQ
          claim_id: c_gkqj78LXyhW9kz2af4D5jK
          source_id: s_iRQTXAzFku3PGc8bJchBit
          stance: supports
          locator: CBDB:3935
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（3935）
          source: &a1
            id: s_iRQTXAzFku3PGc8bJchBit
            source_type: api_record
            title: 中国历代人物传记资料库：王護（CBDB 3935）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3935&o=json
            external_identifier: CBDB:3935
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.418Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2WdzNNt3mWbsrBhscg51Bj
        subject_person_id: p_oNDU7zQtqTTiQX3XhFSuLY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王護，閩國人物。籍贯侯官。（中国历代人物传记资料库 CBDB 3935）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mIb1Ix39TlFgzUt0GjdDTe
          claim_id: c_2WdzNNt3mWbsrBhscg51Bj
          source_id: s_iRQTXAzFku3PGc8bJchBit
          stance: supports
          locator: CBDB:3935
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_v9Jj0_7coESb2WdBfKZTxw
        subject_person_id: p_oNDU7zQtqTTiQX3XhFSuLY
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DnF7GWgjWmc9PoZw9qD4HR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_krWw8dbFLQLPyUW29-FDXc
          claim_id: c_v9Jj0_7coESb2WdBfKZTxw
          source_id: s_BdhH8TjT2LVr8RRGZs7P3Z
          stance: supports
          locator: CBDB 双向互证（父 王護 ⇄ 子 王伸）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_BdhH8TjT2LVr8RRGZs7P3Z
            source_type: api_record
            title: 中国历代人物传记资料库：王伸（CBDB 22040）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22040&o=json
            external_identifier: CBDB:22040
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.804Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_DnF7GWgjWmc9PoZw9qD4HR
        status: active
        display_name: 王伸
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王護

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王護 | accepted |
| bio.summary | 王護，閩國人物。籍贯侯官。（中国历代人物传记资料库 CBDB 3935） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_DnF7GWgjWmc9PoZw9qD4HR | 王伸 | accepted |

## 外部来源

- [中国历代人物传记资料库：王護（CBDB 3935）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3935&o=json)
- [中国历代人物传记资料库：王伸（CBDB 22040）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22040&o=json)
