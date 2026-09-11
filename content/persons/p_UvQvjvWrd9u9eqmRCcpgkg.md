---
schema: wang-person/v1
id: p_UvQvjvWrd9u9eqmRCcpgkg
status: active
merged_into: null
display_name: 汪氏
revision: 1
cbdb_id: 212511
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BA6Os25J_ztIAXHPRk8Dyy
        subject_person_id: p_UvQvjvWrd9u9eqmRCcpgkg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 汪氏，明人物。萬曆二年進士。（中国历代人物传记资料库 CBDB 212511）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AUkt9k8rOwTaA2J0hhlIym
          claim_id: c_BA6Os25J_ztIAXHPRk8Dyy
          source_id: s_44QkaIx_Npv09m6rQ2a95z
          stance: supports
          locator: CBDB:212511
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_44QkaIx_Npv09m6rQ2a95z
            source_type: api_record
            title: 中国历代人物传记资料库：汪氏(王任妻)（CBDB 212511）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212511&o=json
            external_identifier: CBDB:212511
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_XbsiYszh9ld-KCdMr7aCmo
        subject_person_id: p_UvQvjvWrd9u9eqmRCcpgkg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 汪氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TvLbBRVnxwe-LspDhrMSlL
          claim_id: c_XbsiYszh9ld-KCdMr7aCmo
          source_id: s_44QkaIx_Npv09m6rQ2a95z
          stance: supports
          locator: CBDB:212511
          quotation: null
          interpretation_note: CBDB 明确记录的王任配偶
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
        id: c_1u_12BUZJmW4En_B1mjn85
        subject_person_id: p_A4DQB8jxPM4hHSSP72EbgN
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_UvQvjvWrd9u9eqmRCcpgkg
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xntj0mGFb-m9JKRjtqKw7L
          claim_id: c_1u_12BUZJmW4En_B1mjn85
          source_id: s_44QkaIx_Npv09m6rQ2a95z
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第二甲第十八名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_A4DQB8jxPM4hHSSP72EbgN
        status: active
        display_name: 王任
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 汪氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 汪氏，明人物。萬曆二年進士。（中国历代人物传记资料库 CBDB 212511） | accepted |
| name.primary | 汪氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_A4DQB8jxPM4hHSSP72EbgN | 王任 | accepted |

## 外部来源

- [中国历代人物传记资料库：汪氏(王任妻)（CBDB 212511）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212511&o=json)
