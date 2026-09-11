---
schema: wang-person/v1
id: p_BKANLuwSJNAYYzpRy3WTWd
status: active
merged_into: null
display_name: 王九成
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6wJASKe3CEMoKQ8PNC9c9g
        subject_person_id: p_BKANLuwSJNAYYzpRy3WTWd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王九成
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_z1Qv5uT3bqG8Z8ke3oKGf1
          claim_id: c_6wJASKe3CEMoKQ8PNC9c9g
          source_id: s_GSxG49Tf1JNo8B1dESXwcn
          stance: supports
          locator: CBDB:37822
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（37822）
          source: &a1
            id: s_GSxG49Tf1JNo8B1dESXwcn
            source_type: api_record
            title: 中国历代人物传记资料库：王九成（CBDB 37822）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37822&o=json
            external_identifier: CBDB:37822
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.263Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_13YdztRrNQmqCCRuQmfS44
        subject_person_id: p_BKANLuwSJNAYYzpRy3WTWd
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1102年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_76VKAA4PAFJbYrCVtVFNzF
          claim_id: c_13YdztRrNQmqCCRuQmfS44
          source_id: s_GSxG49Tf1JNo8B1dESXwcn
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
        id: c_BSYPdNveJU6wFrWXarkiBk
        subject_person_id: p_BKANLuwSJNAYYzpRy3WTWd
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1159年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ksx5L42GxYTVLGAXAGiHYt
          claim_id: c_BSYPdNveJU6wFrWXarkiBk
          source_id: s_GSxG49Tf1JNo8B1dESXwcn
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
        id: c_4u3M6ZNY2U8Nb1KHuosiW3
        subject_person_id: p_BKANLuwSJNAYYzpRy3WTWd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王九成（1102年—1159年），宋人物。籍贯雙流，身份为經學家—易經。（中国历代人物传记资料库 CBDB 37822）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_soFC8vnm2viht90Y_5ZhI6
          claim_id: c_4u3M6ZNY2U8Nb1KHuosiW3
          source_id: s_GSxG49Tf1JNo8B1dESXwcn
          stance: supports
          locator: CBDB:37822
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
  spouses:
    - claim:
        id: c_v2orzmj4ggPxCMXNYtqwhU
        subject_person_id: p_BKANLuwSJNAYYzpRy3WTWd
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_exELKvKH8p56fLoWWvVMy6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jhmS0Zg7xhGAWPPCguW_9m
          claim_id: c_v2orzmj4ggPxCMXNYtqwhU
          source_id: s_mgAp6PAuzh6BunRxkWXnIH
          stance: supports
          locator: 宋人傳記資料索引(電子版)：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_mgAp6PAuzh6BunRxkWXnIH
            source_type: api_record
            title: 中国历代人物传记资料库：袁氏(王九成妻)（CBDB 37840）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37840&o=json
            external_identifier: CBDB:37840
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_exELKvKH8p56fLoWWvVMy6
        status: active
        display_name: 袁氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王九成

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王九成 | accepted |
| birth.date | 1102年 | accepted |
| death.date | 1159年 | accepted |
| bio.summary | 王九成（1102年—1159年），宋人物。籍贯雙流，身份为經學家—易經。（中国历代人物传记资料库 CBDB 37822） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_exELKvKH8p56fLoWWvVMy6 | 袁氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王九成（CBDB 37822）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37822&o=json)
- [中国历代人物传记资料库：袁氏(王九成妻)（CBDB 37840）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37840&o=json)
