---
schema: wang-person/v1
id: p_x1A9A3Nxtr5y3KyGLm1Zu5
status: active
merged_into: null
display_name: 李氏
revision: 1
cbdb_id: 164508
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YdS4_HCWksppRSyIuwSOOQ
        subject_person_id: p_x1A9A3Nxtr5y3KyGLm1Zu5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 李氏，史料所见人物。本项目依据《中国历代人物传记资料库：李氏(王泰妻)（CBDB 164508）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YTJ0DF3So_sD_KVdMG9ptu
          claim_id: c_YdS4_HCWksppRSyIuwSOOQ
          source_id: s_kddp0DnpQhiof7ryPZm_Tz
          stance: supports
          locator: CBDB:164508
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_kddp0DnpQhiof7ryPZm_Tz
            source_type: api_record
            title: 中国历代人物传记资料库：李氏(王泰妻)（CBDB 164508）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=164508&o=json
            external_identifier: CBDB:164508
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_-K66cvYzRRMb9JIGx2bS_X
        subject_person_id: p_x1A9A3Nxtr5y3KyGLm1Zu5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 李氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_l0Ofo8rmYXFd-6nswDweaD
          claim_id: c_-K66cvYzRRMb9JIGx2bS_X
          source_id: s_kddp0DnpQhiof7ryPZm_Tz
          stance: supports
          locator: CBDB:164508
          quotation: null
          interpretation_note: CBDB 明确记录的王泰配偶
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
        id: c_hXKewqvd6HYsu1sjH1ecRc
        subject_person_id: p_dGkjiKdWjUkcef224C6r6D
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_x1A9A3Nxtr5y3KyGLm1Zu5
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qL6ayp7-Nz7DQylvU75ksT
          claim_id: c_hXKewqvd6HYsu1sjH1ecRc
          source_id: s_kddp0DnpQhiof7ryPZm_Tz
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Tianbao10：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_dGkjiKdWjUkcef224C6r6D
        status: active
        display_name: 王泰
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 李氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 李氏，史料所见人物。本项目依据《中国历代人物传记资料库：李氏(王泰妻)（CBDB 164508）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 李氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_dGkjiKdWjUkcef224C6r6D | 王泰 | accepted |

## 外部来源

- [中国历代人物传记资料库：李氏(王泰妻)（CBDB 164508）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=164508&o=json)
