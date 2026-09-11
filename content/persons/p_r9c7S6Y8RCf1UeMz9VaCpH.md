---
schema: wang-person/v1
id: p_r9c7S6Y8RCf1UeMz9VaCpH
status: active
merged_into: null
display_name: 孙氏
cbdb_id: 307068
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xDGQMZRnZv5CTBQg6cLSG6
        subject_person_id: p_r9c7S6Y8RCf1UeMz9VaCpH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 孙氏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Ju9PDxksiavwSaT2nxYELd
          claim_id: c_xDGQMZRnZv5CTBQg6cLSG6
          source_id: s_ZYkDppFkR2CG22htW5Bskt
          stance: supports
          locator: Q65831333
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_ZYkDppFkR2CG22htW5Bskt
            source_type: api_record
            title: 维基数据：孙氏（Q65831333）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65831333
            external_identifier: Q65831333
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_ztc9WEwnt4AMfP9rdvnDy3
          claim_id: c_xDGQMZRnZv5CTBQg6cLSG6
          source_id: s_NrZMMzMrjJSts5CBapGWx9
          stance: supports
          locator: CBDB:307068
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a2
            id: s_NrZMMzMrjJSts5CBapGWx9
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：孫氏（307068）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307068&o=json
            external_identifier: CBDB:307068
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_4K6rLSbFBj2PbXr6YfnG6E
        subject_person_id: p_ABHWjEscFjoCVEgF2qr4dX
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_r9c7S6Y8RCf1UeMz9VaCpH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fgiLJcunzPBwwiHKqp6iDP
          claim_id: c_4K6rLSbFBj2PbXr6YfnG6E
          source_id: s_fhNQgV3E9dkVpKA3u7TQhA
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_fhNQgV3E9dkVpKA3u7TQhA
            source_type: api_record
            title: 维基数据：王宗性（Q45458696）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45458696
            external_identifier: Q45458696
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:54.113Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AE%97%E6%80%A7
        - id: cs_6PTksNqi7dxVav2pnfaWsU
          claim_id: c_4K6rLSbFBj2PbXr6YfnG6E
          source_id: s_ZYkDppFkR2CG22htW5Bskt
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_MYDRr9BSf2uEHMZSaSVWjM
          claim_id: c_4K6rLSbFBj2PbXr6YfnG6E
          source_id: s_XcL5zA1ST4but5njM3qAfP
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：嘉靖二十三年登科錄:一卷
          source:
            id: s_XcL5zA1ST4but5njM3qAfP
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王宗性（203595）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203595&o=json
            external_identifier: CBDB:203595
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:54.262Z
            metadata_json: null
      object_person:
        id: p_ABHWjEscFjoCVEgF2qr4dX
        status: active
        display_name: 王宗性
        merged_into_person_id: null
    - claim:
        id: c_RVR1Qundngc1TqcBDnNvET
        subject_person_id: p_r9c7S6Y8RCf1UeMz9VaCpH
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_ABHWjEscFjoCVEgF2qr4dX
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6pjG-98vIgAPHHFF32GYJi
          claim_id: c_RVR1Qundngc1TqcBDnNvET
          source_id: s_NrZMMzMrjJSts5CBapGWx9
          stance: supports
          locator: 嘉靖二十三年登科錄:一卷，第三甲第八十一名：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a2
      object_person:
        id: p_ABHWjEscFjoCVEgF2qr4dX
        status: active
        display_name: 王宗性
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 孙氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 孙氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_ABHWjEscFjoCVEgF2qr4dX | 王宗性 | accepted |
| spouses | p_ABHWjEscFjoCVEgF2qr4dX | 王宗性 | accepted |

## 外部来源

- [维基数据：孙氏（Q65831333）](https://www.wikidata.org/wiki/Q65831333)
- [维基数据：王宗性（Q45458696）](https://www.wikidata.org/wiki/Q45458696)
- [CBDB 中国历代人物传记资料库：孫氏（307068）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307068&o=json)
- [CBDB 中国历代人物传记资料库：王宗性（203595）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203595&o=json)
