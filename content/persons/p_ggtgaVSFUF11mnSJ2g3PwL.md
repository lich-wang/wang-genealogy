---
schema: wang-person/v1
id: p_ggtgaVSFUF11mnSJ2g3PwL
status: active
merged_into: null
display_name: 陳氏
revision: 1
cbdb_id: 5132
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1qQ3pdtxOQEPETihHgkEOw
        subject_person_id: p_ggtgaVSFUF11mnSJ2g3PwL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 陳氏（1028—1065），宋人物。籍贯吳縣，入仕封贈。（中国历代人物传记资料库 CBDB 5132）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GbhmYsP13D04OrXICqyI0S
          claim_id: c_1qQ3pdtxOQEPETihHgkEOw
          source_id: s_d0PuydCoAzh6cSVVPUasm0
          stance: supports
          locator: CBDB:5132
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_d0PuydCoAzh6cSVVPUasm0
            source_type: api_record
            title: 中国历代人物传记资料库：陳氏(王逢妻)（CBDB 5132）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5132&o=json
            external_identifier: CBDB:5132
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_3NnAtE5VNVJt81y4lHRk5f
        subject_person_id: p_ggtgaVSFUF11mnSJ2g3PwL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 陳氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WS5wdwedoskNcu4MU7GZMk
          claim_id: c_3NnAtE5VNVJt81y4lHRk5f
          source_id: s_d0PuydCoAzh6cSVVPUasm0
          stance: supports
          locator: CBDB:5132
          quotation: null
          interpretation_note: CBDB 明确记录的王逢配偶
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
        id: c_m_oScOv-ygAh-iYXjAZHcj
        subject_person_id: p_r5tsAWpfP2w1Ew681Ex2C6
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_ggtgaVSFUF11mnSJ2g3PwL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vfITxNXHhDrH8XeePqABTk
          claim_id: c_m_oScOv-ygAh-iYXjAZHcj
          source_id: s_d0PuydCoAzh6cSVVPUasm0
          stance: supports
          locator: 宋史：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_r5tsAWpfP2w1Ew681Ex2C6
        status: active
        display_name: 王逢
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 陳氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 陳氏（1028—1065），宋人物。籍贯吳縣，入仕封贈。（中国历代人物传记资料库 CBDB 5132） | accepted |
| name.primary | 陳氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_r5tsAWpfP2w1Ew681Ex2C6 | 王逢 | accepted |

## 外部来源

- [中国历代人物传记资料库：陳氏(王逢妻)（CBDB 5132）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5132&o=json)
