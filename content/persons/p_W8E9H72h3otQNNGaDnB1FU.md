---
schema: wang-person/v1
id: p_W8E9H72h3otQNNGaDnB1FU
status: active
merged_into: null
display_name: 王景之
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fs9PNeUvTeTJYVvPkksPJH
        subject_person_id: p_W8E9H72h3otQNNGaDnB1FU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景之
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_a5okkwYZ487ruUdd6jGmPt
          claim_id: c_fs9PNeUvTeTJYVvPkksPJH
          source_id: s_45Y2AAe31Vc9KBrPyctGca
          stance: supports
          locator: CBDB:140255
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（140255）
          source: &a1
            id: s_45Y2AAe31Vc9KBrPyctGca
            source_type: api_record
            title: 中国历代人物传记资料库：王景之（CBDB 140255）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140255&o=json
            external_identifier: CBDB:140255
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.486Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_oMgvet2movoPRTkQMFh2xs
        subject_person_id: p_W8E9H72h3otQNNGaDnB1FU
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 624年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zyAJ5pNwjJpdMN2Q3b5GM2
          claim_id: c_oMgvet2movoPRTkQMFh2xs
          source_id: s_45Y2AAe31Vc9KBrPyctGca
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
        id: c_yjtdiRY6dJLLkBzhonm4Dw
        subject_person_id: p_W8E9H72h3otQNNGaDnB1FU
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 683年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MAPEx5LosCRBzi55n9tJa6
          claim_id: c_yjtdiRY6dJLLkBzhonm4Dw
          source_id: s_45Y2AAe31Vc9KBrPyctGca
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
        id: c_Urj1NFcyumveNrMwGn1RQJ
        subject_person_id: p_W8E9H72h3otQNNGaDnB1FU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JQ9BG68F62cQeM5c1dPXbx
          claim_id: c_Urj1NFcyumveNrMwGn1RQJ
          source_id: s_45Y2AAe31Vc9KBrPyctGca
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
        id: c_WN4MGTeNN8VQ8kDFGZGrF0
        subject_person_id: p_i47UsMhA15jMqEZ7iDqoa7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_W8E9H72h3otQNNGaDnB1FU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WZ9Z0L9MEDPkNO8vk_bgFK
          claim_id: c_WN4MGTeNN8VQ8kDFGZGrF0
          source_id: s_ukzzWZC3hbEtGgUGotV5TV
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Xianheng24：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ukzzWZC3hbEtGgUGotV5TV
            source_type: api_record
            title: 中国历代人物传记资料库：王韋（CBDB 142621）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142621&o=json
            external_identifier: CBDB:142621
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.585Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_i47UsMhA15jMqEZ7iDqoa7
        status: active
        display_name: 王韋
        merged_into_person_id: null
  children:
    - claim:
        id: c__YkaHZZXsNNLU6xMji78XP
        subject_person_id: p_W8E9H72h3otQNNGaDnB1FU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FYXgYaQ9GXDdcYokEoSMmM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lmKZbyZTUSw6ZgGq9_ErEY
          claim_id: c__YkaHZZXsNNLU6xMji78XP
          source_id: s_HTLpbRNSdRTcZ8kRtdpvKR
          stance: supports
          locator: 唐代墓誌匯編:二卷，Jinglong 28：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_HTLpbRNSdRTcZ8kRtdpvKR
            source_type: api_record
            title: 中国历代人物传记资料库：王懌（CBDB 150816）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150816&o=json
            external_identifier: CBDB:150816
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.826Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_FYXgYaQ9GXDdcYokEoSMmM
        status: active
        display_name: 王懌
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王景之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王景之 | accepted |
| birth.date | 624年 | accepted |
| death.date | 683年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_i47UsMhA15jMqEZ7iDqoa7 | 王韋 | accepted |
| children | p_FYXgYaQ9GXDdcYokEoSMmM | 王懌 | accepted |

## 外部来源

- [中国历代人物传记资料库：王景之（CBDB 140255）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140255&o=json)
- [中国历代人物传记资料库：王韋（CBDB 142621）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142621&o=json)
- [中国历代人物传记资料库：王懌（CBDB 150816）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150816&o=json)
