---
schema: wang-person/v1
id: p_XtCTewFbz8pm7LcGQHafPY
status: active
merged_into: null
display_name: 王宗道
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pkLxudgnqVdLBq8DDXcxmA
        subject_person_id: p_XtCTewFbz8pm7LcGQHafPY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗道
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AboCwEBy1jLDUCCy9upLJg
          claim_id: c_pkLxudgnqVdLBq8DDXcxmA
          source_id: s_XVD3SGXBUNddNgQ7USVno1
          stance: supports
          locator: CBDB:26286
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（26286）
          source: &a1
            id: s_XVD3SGXBUNddNgQ7USVno1
            source_type: api_record
            title: 中国历代人物传记资料库：王宗道（CBDB 26286）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26286&o=json
            external_identifier: CBDB:26286
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.929Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WS8HhxxwKvU6vox4P1oc2R
        subject_person_id: p_XtCTewFbz8pm7LcGQHafPY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗道，宋人物。籍贯鄄城，曾任天章閣侍講、崇文院檢討、尚書省戶部度支司員外郎。（中国历代人物传记资料库 CBDB 26286）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8p0hQJ1QaRUaP-6Zw6s2MA
          claim_id: c_WS8HhxxwKvU6vox4P1oc2R
          source_id: s_XVD3SGXBUNddNgQ7USVno1
          stance: supports
          locator: CBDB:26286
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_OBTxlemQsVUEWnXuhHCkZ_
        subject_person_id: p_eAwcuN77Ri66ET6i32TK3v
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XtCTewFbz8pm7LcGQHafPY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_D6vLRB-hWZg9oi4LkeG4JT
          claim_id: c_OBTxlemQsVUEWnXuhHCkZ_
          source_id: s_ypF_AzzwirnxJBcyBnbBP3
          stance: supports
          locator: CBDB 亲属：父（KinPerson 26285）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_ypF_AzzwirnxJBcyBnbBP3
            source_type: api_record
            title: 中国历代人物传记资料库：王宗道（CBDB 26286）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26286&o=json
            external_identifier: CBDB:26286
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_eAwcuN77Ri66ET6i32TK3v
        status: active
        display_name: 王仲莊
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王宗道

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗道 | accepted |
| bio.summary | 王宗道，宋人物。籍贯鄄城，曾任天章閣侍講、崇文院檢討、尚書省戶部度支司員外郎。（中国历代人物传记资料库 CBDB 26286） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_eAwcuN77Ri66ET6i32TK3v | 王仲莊 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宗道（CBDB 26286）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26286&o=json)
