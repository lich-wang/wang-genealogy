---
schema: wang-person/v1
id: p_Jw3jaJXLqE5qhrMN7CYpap
status: active
merged_into: null
display_name: 王人鑑
cbdb_id: 23100
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JoR3kvdbJ4GePW5tLFR5oA
        subject_person_id: p_Jw3jaJXLqE5qhrMN7CYpap
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王人鑑（生于1117年），宋人物。籍贯建寧，入仕進士，曾任教授。（中国历代人物传记资料库 CBDB 23100）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_bpgM8xe7fM4_Mi_NPPRTwH
          claim_id: c_JoR3kvdbJ4GePW5tLFR5oA
          source_id: s_iPRwHU7GC8epij1MYKMSig
          stance: supports
          locator: CBDB:23100
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_iPRwHU7GC8epij1MYKMSig
            source_type: api_record
            title: 中国历代人物传记资料库：王人鑑（CBDB 23100）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23100&o=json
            external_identifier: CBDB:23100
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:41.297Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_79UCVmrdJ9g9Ppev3k4pCY
        subject_person_id: p_Jw3jaJXLqE5qhrMN7CYpap
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1117年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1117-01-01
            latest: 1117-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_nXUWcVxXFybGH7StryBiNN
          claim_id: c_79UCVmrdJ9g9Ppev3k4pCY
          source_id: s_iPRwHU7GC8epij1MYKMSig
          stance: supports
          locator: CBDB:23100
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（601-700）｜历史性依据：CBDB 生年 = 1117
          source:
            id: s_iPRwHU7GC8epij1MYKMSig
            source_type: api_record
            title: 中国历代人物传记资料库：王人鑑（CBDB 23100）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23100&o=json
            external_identifier: CBDB:23100
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:41.297Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_UPXmX38gUsb1Xkr1N99dQ5
        subject_person_id: p_Jw3jaJXLqE5qhrMN7CYpap
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王人鑑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_K6qW1brwYMW61sXEyqPMG4
          claim_id: c_UPXmX38gUsb1Xkr1N99dQ5
          source_id: s_iPRwHU7GC8epij1MYKMSig
          stance: supports
          locator: CBDB:23100
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（601-700）｜历史性依据：CBDB 生年 = 1117
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_pRYBdhgJa01Uw8E4CHhtdX
        subject_person_id: p_9krCz2yefFd538EMhsFrJJ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Jw3jaJXLqE5qhrMN7CYpap
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_x-iasioy2zbcc60CLkmmch
          claim_id: c_pRYBdhgJa01Uw8E4CHhtdX
          source_id: s_9zoDq1SDQYFoQgU6tF3TMy
          stance: supports
          locator: CBDB 双向互证（子 王人鑑 ⇄ 父 王良翰）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_9zoDq1SDQYFoQgU6tF3TMy
            source_type: api_record
            title: 中国历代人物传记资料库：王良翰（CBDB 23103）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23103&o=json
            external_identifier: CBDB:23103
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.868Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_9krCz2yefFd538EMhsFrJJ
        status: active
        display_name: 王良翰
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_uV9jVcyXjVOIvejHupP8-E
        subject_person_id: p_Jw3jaJXLqE5qhrMN7CYpap
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_2KVDRP63HeadS2GNiMepCB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7iRdL4zW5N9WmMSXNwoM3N
          claim_id: c_uV9jVcyXjVOIvejHupP8-E
          source_id: s_mtvx9pDwp4uB5vWze2QuHM
          stance: supports
          locator: 紹興十八年同年小錄，130：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_mtvx9pDwp4uB5vWze2QuHM
            source_type: api_record
            title: 中国历代人物传记资料库：李氏(王人鑑妻)（CBDB 135067）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=135067&o=json
            external_identifier: CBDB:135067
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2KVDRP63HeadS2GNiMepCB
        status: active
        display_name: 李氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王人鑑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王人鑑（生于1117年），宋人物。籍贯建寧，入仕進士，曾任教授。（中国历代人物传记资料库 CBDB 23100） | accepted |
| birth.date | 1117年 | accepted |
| name.primary | 王人鑑 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_9krCz2yefFd538EMhsFrJJ | 王良翰 | accepted |
| spouses | p_2KVDRP63HeadS2GNiMepCB | 李氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：李氏(王人鑑妻)（CBDB 135067）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=135067&o=json)
- [中国历代人物传记资料库：王良翰（CBDB 23103）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23103&o=json)
- [中国历代人物传记资料库：王人鑑（CBDB 23100）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23100&o=json)
