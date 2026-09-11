---
schema: wang-person/v1
id: p_uaek5dH7vUvS3w7o2aMbko
status: active
merged_into: null
display_name: 王存禮
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2xYvKR5xB4JGWpAhntC9Qm
        subject_person_id: p_uaek5dH7vUvS3w7o2aMbko
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王存禮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HgV9MeVZd8pUmsHoA3gUCV
          claim_id: c_2xYvKR5xB4JGWpAhntC9Qm
          source_id: s_2ALbcHnh28ruonXPAzF68S
          stance: supports
          locator: CBDB:198619
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（198619）
          source: &a1
            id: s_2ALbcHnh28ruonXPAzF68S
            source_type: api_record
            title: 中国历代人物传记资料库：王存禮（CBDB 198619）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198619&o=json
            external_identifier: CBDB:198619
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.504Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_HvkBeUqNqDZQzu147eFiRC
        subject_person_id: p_uaek5dH7vUvS3w7o2aMbko
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1420年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dVb2QiK1rM9X1UF45eCzuc
          claim_id: c_HvkBeUqNqDZQzu147eFiRC
          source_id: s_2ALbcHnh28ruonXPAzF68S
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hvdpgLwMRRDZVpMGGpgUQq
        subject_person_id: p_uaek5dH7vUvS3w7o2aMbko
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王存禮（生于1420年），明人物。明清進士進士，籍贯金華，入仕進士。（中国历代人物传记资料库 CBDB 198619）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_49ztTKLxLn1RR-oE59GLrQ
          claim_id: c_hvdpgLwMRRDZVpMGGpgUQq
          source_id: s_2ALbcHnh28ruonXPAzF68S
          stance: supports
          locator: CBDB:198619
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_q75jy5dJlHBJZ0dsFcics0
        subject_person_id: p_UCY7Lf35hoXK1P9ERpnsFv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_uaek5dH7vUvS3w7o2aMbko
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-nH6kJUQkYJVieOGT1n3MG
          claim_id: c_q75jy5dJlHBJZ0dsFcics0
          source_id: s_2ALbcHnh28ruonXPAzF68S
          stance: supports
          locator: 天順元年進士登科錄:一卷，第三甲第四十名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_UCY7Lf35hoXK1P9ERpnsFv
        status: active
        display_name: 王子昌
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_6Ru7Wn2V6nQnddYqUUkQVl
        subject_person_id: p_uaek5dH7vUvS3w7o2aMbko
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_jKf85bUaifg9X6DrJBVdE8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tMhRdEFmHtrNyY_ncWyzWd
          claim_id: c_6Ru7Wn2V6nQnddYqUUkQVl
          source_id: s_mt9JmW50zS4KtgDGAqRiWM
          stance: supports
          locator: 天順元年進士登科錄:一卷，第三甲第四十名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_mt9JmW50zS4KtgDGAqRiWM
            source_type: api_record
            title: 中国历代人物传记资料库：胡氏(王存禮妻)（CBDB 294962）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294962&o=json
            external_identifier: CBDB:294962
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_jKf85bUaifg9X6DrJBVdE8
        status: active
        display_name: 胡氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_dmvjyZu_-o4Y3CsRwSLc-c
        subject_person_id: p_x3vAi17WDsyiWG8p26touF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_uaek5dH7vUvS3w7o2aMbko
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JTr9wFN2UcBP8wahQH3hDR
          claim_id: c_dmvjyZu_-o4Y3CsRwSLc-c
          source_id: s_2ALbcHnh28ruonXPAzF68S
          stance: supports
          locator: 天順元年進士登科錄:一卷，第三甲第四十名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_x3vAi17WDsyiWG8p26touF
        status: active
        display_name: 王受益
        merged_into_person_id: null
    - claim:
        id: c_wARAxpaUlKx7RfX7uQygCD
        subject_person_id: p_rjXdEc3EZ83pHMEvKqP92r
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_uaek5dH7vUvS3w7o2aMbko
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_reYGRLpPCcluPD5hwgzIc9
          claim_id: c_wARAxpaUlKx7RfX7uQygCD
          source_id: s_2ALbcHnh28ruonXPAzF68S
          stance: supports
          locator: 天順元年進士登科錄:一卷，第三甲第四十名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_rjXdEc3EZ83pHMEvKqP92r
        status: active
        display_name: 王仁善
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王存禮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王存禮 | accepted |
| birth.date | 1420年 | accepted |
| bio.summary | 王存禮（生于1420年），明人物。明清進士進士，籍贯金華，入仕進士。（中国历代人物传记资料库 CBDB 198619） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_UCY7Lf35hoXK1P9ERpnsFv | 王子昌 | accepted |
| spouses | p_jKf85bUaifg9X6DrJBVdE8 | 胡氏 | accepted |
| ancestors | p_x3vAi17WDsyiWG8p26touF | 王受益 | accepted |
| ancestors | p_rjXdEc3EZ83pHMEvKqP92r | 王仁善 | accepted |

## 外部来源

- [中国历代人物传记资料库：胡氏(王存禮妻)（CBDB 294962）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294962&o=json)
- [中国历代人物传记资料库：王存禮（CBDB 198619）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198619&o=json)
