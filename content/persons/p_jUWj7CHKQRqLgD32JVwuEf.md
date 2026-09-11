---
schema: wang-person/v1
id: p_jUWj7CHKQRqLgD32JVwuEf
status: active
merged_into: null
display_name: 温氏
revision: 1
cbdb_id: 385909
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LiMUg9FgLaGOBjXEnfP8Yi
        subject_person_id: p_jUWj7CHKQRqLgD32JVwuEf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 温氏，史料所见人物。本项目依据《中国历代人物传记资料库：温氏(王永年妻)（CBDB 385909）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-uft84WCewU-HP6qM4RY67
          claim_id: c_LiMUg9FgLaGOBjXEnfP8Yi
          source_id: s_eI2sVKyO2-BE8Hn7kTfQJp
          stance: supports
          locator: CBDB:385909
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_eI2sVKyO2-BE8Hn7kTfQJp
            source_type: api_record
            title: 中国历代人物传记资料库：温氏(王永年妻)（CBDB 385909）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=385909&o=json
            external_identifier: CBDB:385909
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_jG0aWbu7nhKFdLwwWTg-dq
        subject_person_id: p_jUWj7CHKQRqLgD32JVwuEf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 温氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JmY1hZ-HM3rT7GEaljld_P
          claim_id: c_jG0aWbu7nhKFdLwwWTg-dq
          source_id: s_eI2sVKyO2-BE8Hn7kTfQJp
          stance: supports
          locator: CBDB:385909
          quotation: null
          interpretation_note: CBDB 明确记录的王永年配偶
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
        id: c_ALFp9tEveDOju23iv2tg5X
        subject_person_id: p_TXTXwSryWLUp2Edx6YAYPe
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_jUWj7CHKQRqLgD32JVwuEf
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QsOaKhDBi3f1dC0Xt_xlGO
          claim_id: c_ALFp9tEveDOju23iv2tg5X
          source_id: s_eI2sVKyO2-BE8Hn7kTfQJp
          stance: supports
          locator: 全宋文，卷 5677：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_TXTXwSryWLUp2Edx6YAYPe
        status: active
        display_name: 王永年
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 温氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 温氏，史料所见人物。本项目依据《中国历代人物传记资料库：温氏(王永年妻)（CBDB 385909）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 温氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_TXTXwSryWLUp2Edx6YAYPe | 王永年 | accepted |

## 外部来源

- [中国历代人物传记资料库：温氏(王永年妻)（CBDB 385909）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=385909&o=json)
