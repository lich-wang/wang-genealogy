---
schema: wang-person/v1
id: p_zVd6FHzFDzdLE8BP6H1zrd
status: active
merged_into: null
display_name: 王利
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1zC8J5hHKphy8BtH9mUpjQ
        subject_person_id: p_zVd6FHzFDzdLE8BP6H1zrd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王利
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LyXWLMVp6NGtNqnJEusGwB
          claim_id: c_1zC8J5hHKphy8BtH9mUpjQ
          source_id: s_Kjhavvsc4h15fGoJmWYoFJ
          stance: supports
          locator: CBDB:21274
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（21274）
          source: &a1
            id: s_Kjhavvsc4h15fGoJmWYoFJ
            source_type: api_record
            title: 中国历代人物传记资料库：王利（CBDB 21274）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21274&o=json
            external_identifier: CBDB:21274
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.768Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_bk5Mwo2erc2zV35Bfq4TAA
        subject_person_id: p_zVd6FHzFDzdLE8BP6H1zrd
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 955年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_opgYm8kTS3GBfbXg6oDFo8
          claim_id: c_bk5Mwo2erc2zV35Bfq4TAA
          source_id: s_Kjhavvsc4h15fGoJmWYoFJ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_uturnGyAGUZ7d3QebAHLPN
        subject_person_id: p_zVd6FHzFDzdLE8BP6H1zrd
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1026年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4dfst1pNjL13zuJs9hZ71R
          claim_id: c_uturnGyAGUZ7d3QebAHLPN
          source_id: s_Kjhavvsc4h15fGoJmWYoFJ
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
        id: c_aiuenqNVN1DbjMCYG5GX1s
        subject_person_id: p_zVd6FHzFDzdLE8BP6H1zrd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SsW1V6YYbVLQyCBSfB6FsB
          claim_id: c_aiuenqNVN1DbjMCYG5GX1s
          source_id: s_Kjhavvsc4h15fGoJmWYoFJ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_okFn8Jk1azTtCKgMfDd_0R
        subject_person_id: p_MidTUhibT32K4Xg5RL8sUj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zVd6FHzFDzdLE8BP6H1zrd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CsuXqalodCm4SRcONMfXFV
          claim_id: c_okFn8Jk1azTtCKgMfDd_0R
          source_id: s_6EKufrocPKs7r3i2jn8X8W
          stance: supports
          locator: CBDB 双向互证（子 王利 ⇄ 父 王承謙）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_6EKufrocPKs7r3i2jn8X8W
            source_type: api_record
            title: 中国历代人物传记资料库：王承謙（CBDB 21273）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21273&o=json
            external_identifier: CBDB:21273
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.767Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_MidTUhibT32K4Xg5RL8sUj
        status: active
        display_name: 王承謙
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_4hvTLA1RKjk6BC6DIbN_H2
        subject_person_id: p_zVd6FHzFDzdLE8BP6H1zrd
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_bvar8G9Bo6AbZiGUmjZR9P
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hujHAEjsX3-MXjkc_jyOX1
          claim_id: c_4hvTLA1RKjk6BC6DIbN_H2
          source_id: s_kWGQ1qSUbFqo6-jTGtrTX_
          stance: supports
          locator: 宋人傳記資料索引(電子版)，675;676：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_kWGQ1qSUbFqo6-jTGtrTX_
            source_type: api_record
            title: 中国历代人物传记资料库：李氏(王利妻)（CBDB 5353）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5353&o=json
            external_identifier: CBDB:5353
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_bvar8G9Bo6AbZiGUmjZR9P
        status: active
        display_name: 李氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王利

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王利 | accepted |
| birth.date | 955年 | accepted |
| death.date | 1026年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_MidTUhibT32K4Xg5RL8sUj | 王承謙 | accepted |
| spouses | p_bvar8G9Bo6AbZiGUmjZR9P | 李氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：李氏(王利妻)（CBDB 5353）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5353&o=json)
- [中国历代人物传记资料库：王承謙（CBDB 21273）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21273&o=json)
- [中国历代人物传记资料库：王利（CBDB 21274）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21274&o=json)
