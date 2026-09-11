---
schema: wang-person/v1
id: p_MFqt9n2LVyLYhLxLS4KsNk
status: active
merged_into: null
display_name: 戴氏
revision: 1
cbdb_id: 282817
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_u4frFQXJhceHQNU9wlMJwf
        subject_person_id: p_MFqt9n2LVyLYhLxLS4KsNk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 戴氏，明人物。正德十二年進士。（中国历代人物传记资料库 CBDB 282817）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JAV7kjpZZBg2sy3EIp9I89
          claim_id: c_u4frFQXJhceHQNU9wlMJwf
          source_id: s_wZw6P6jDTiee7RE6XisZAc
          stance: supports
          locator: CBDB:282817
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_wZw6P6jDTiee7RE6XisZAc
            source_type: api_record
            title: 中国历代人物传记资料库：戴氏(王祐妻)（CBDB 282817）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282817&o=json
            external_identifier: CBDB:282817
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_9BOjXF7c6qHzMyEBaO0H1s
        subject_person_id: p_MFqt9n2LVyLYhLxLS4KsNk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 戴氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ixeM4NSMpz1-BSE7NBdTYC
          claim_id: c_9BOjXF7c6qHzMyEBaO0H1s
          source_id: s_wZw6P6jDTiee7RE6XisZAc
          stance: supports
          locator: CBDB:282817
          quotation: null
          interpretation_note: CBDB 明确记录的王祐配偶
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
        id: c_2qZaCiANTtLudHgqhSWR1L
        subject_person_id: p_fVVctU3oARvj93SKk81Eji
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_MFqt9n2LVyLYhLxLS4KsNk
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LMVg52V05b8ynZ1JaumguK
          claim_id: c_2qZaCiANTtLudHgqhSWR1L
          source_id: s_wZw6P6jDTiee7RE6XisZAc
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第二百一十二名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_fVVctU3oARvj93SKk81Eji
        status: active
        display_name: 王祐
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 戴氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 戴氏，明人物。正德十二年進士。（中国历代人物传记资料库 CBDB 282817） | accepted |
| name.primary | 戴氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_fVVctU3oARvj93SKk81Eji | 王祐 | accepted |

## 外部来源

- [中国历代人物传记资料库：戴氏(王祐妻)（CBDB 282817）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282817&o=json)
