---
schema: wang-person/v1
id: p_ockdWwnfv8UFMyT3oqBGPN
status: active
merged_into: null
display_name: 王懋昭
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QgNwdXkS3ME1QV43yFFRSE
        subject_person_id: p_ockdWwnfv8UFMyT3oqBGPN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懋昭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vUBSDBMSC4ZBNFDc672ud2
          claim_id: c_QgNwdXkS3ME1QV43yFFRSE
          source_id: s_bFhaoixunNT2Q71jXt1cFA
          stance: supports
          locator: CBDB:334283
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（334283）
          source: &a1
            id: s_bFhaoixunNT2Q71jXt1cFA
            source_type: api_record
            title: 中国历代人物传记资料库：王懋昭（CBDB 334283）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334283&o=json
            external_identifier: CBDB:334283
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.443Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5dJy3EXGAC5sW9KcqWxNhy
        subject_person_id: p_ockdWwnfv8UFMyT3oqBGPN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懋昭，明人物。隆慶二年進士，籍贯文昌。（中国历代人物传记资料库 CBDB 334283）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3-QT8yNG4p5lTtF0baxBGI
          claim_id: c_5dJy3EXGAC5sW9KcqWxNhy
          source_id: s_bFhaoixunNT2Q71jXt1cFA
          stance: supports
          locator: CBDB:334283
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_eZDyOq9LN4NLPbIyNR1Fj0
        subject_person_id: p_iK7J2v9nYEqAqfNJHxwFuC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ockdWwnfv8UFMyT3oqBGPN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cd_bjfOT4mBkQJtZysgqYS
          claim_id: c_eZDyOq9LN4NLPbIyNR1Fj0
          source_id: s_9jXeCD1FVBonYbTdv0Y_17
          stance: supports
          locator: CBDB：兄弟 王懋德（126854）之父／母 王良弼
          quotation: null
          interpretation_note: 由兄弟关系推断：王懋昭 与 王懋德 为同胞（CBDB 记「兄」），王懋德 之父／母即 王懋昭 之父／母。
          source:
            id: s_9jXeCD1FVBonYbTdv0Y_17
            source_type: api_record
            title: 中国历代人物传记资料库：王懋昭（CBDB 334283）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334283&o=json
            external_identifier: CBDB:334283
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_iK7J2v9nYEqAqfNJHxwFuC
        status: active
        display_name: 王良弼
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Uxl-LyA7ZHnfOtRUM4bnin
        subject_person_id: p_FL6Az72NGqaTwTmAdfMBte
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ockdWwnfv8UFMyT3oqBGPN
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UAZFmr4WAWfzEDyOZNjydn
          claim_id: c_Uxl-LyA7ZHnfOtRUM4bnin
          source_id: s_9jXeCD1FVBonYbTdv0Y_17
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126854 王懋德）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_9jXeCD1FVBonYbTdv0Y_17
            source_type: api_record
            title: 中国历代人物传记资料库：王懋昭（CBDB 334283）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334283&o=json
            external_identifier: CBDB:334283
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FL6Az72NGqaTwTmAdfMBte
        status: active
        display_name: 王懋德
        merged_into_person_id: null
---

# 王懋昭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王懋昭 | accepted |
| bio.summary | 王懋昭，明人物。隆慶二年進士，籍贯文昌。（中国历代人物传记资料库 CBDB 334283） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_iK7J2v9nYEqAqfNJHxwFuC | 王良弼 | accepted |
| other | p_FL6Az72NGqaTwTmAdfMBte | 王懋德 | accepted |

## 外部来源

- [中国历代人物传记资料库：王懋昭（CBDB 334283）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334283&o=json)
