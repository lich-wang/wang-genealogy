---
schema: wang-person/v1
id: p_Koi5WJ5jcXbBAKpaCrntSB
status: active
merged_into: null
display_name: 王復
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JPSiKw2yersJybcv6A67vD
        subject_person_id: p_Koi5WJ5jcXbBAKpaCrntSB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王復
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2NhCFjLrjoT2HEoAgMAELv
          claim_id: c_JPSiKw2yersJybcv6A67vD
          source_id: s_YVFGinKiQ5z6EgLt8Aqurs
          stance: supports
          locator: CBDB:67655
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（67655）
          source: &a1
            id: s_YVFGinKiQ5z6EgLt8Aqurs
            source_type: api_record
            title: 中国历代人物传记资料库：王復（CBDB 67655）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67655&o=json
            external_identifier: CBDB:67655
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.001Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_8GRCQefywcv4x6NcB24QGF
        subject_person_id: p_Koi5WJ5jcXbBAKpaCrntSB
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1416年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LZAKaju8upWNrZgTnyHn9J
          claim_id: c_8GRCQefywcv4x6NcB24QGF
          source_id: s_YVFGinKiQ5z6EgLt8Aqurs
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
        id: c_k5RNTvgseUZw37ahFdBTun
        subject_person_id: p_Koi5WJ5jcXbBAKpaCrntSB
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1485年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZfZQnZRcxaDD6LTNAeBQXn
          claim_id: c_k5RNTvgseUZw37ahFdBTun
          source_id: s_YVFGinKiQ5z6EgLt8Aqurs
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
        id: c_EQLdobQdQteLtoqMHE5F5p
        subject_person_id: p_Koi5WJ5jcXbBAKpaCrntSB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zjet2txT3SXfwrDpRsTUE7
          claim_id: c_EQLdobQdQteLtoqMHE5F5p
          source_id: s_YVFGinKiQ5z6EgLt8Aqurs
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_1H5iOo4MgPIvmNXq4X_KLw
        subject_person_id: p_EXUMXpFadPPwv3VumQBd89
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Koi5WJ5jcXbBAKpaCrntSB
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_maDJOGugwup7aPxw1EeOsj
          claim_id: c_1H5iOo4MgPIvmNXq4X_KLw
          source_id: s_i8GbRr4cAnXZkhaChHVAmG
          stance: supports
          locator: 正统七年進士登科錄:一卷，第二甲第十名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_i8GbRr4cAnXZkhaChHVAmG
            source_type: api_record
            title: 中国历代人物传记资料库：王遜（CBDB 237573）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237573&o=json
            external_identifier: CBDB:237573
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.847Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_EXUMXpFadPPwv3VumQBd89
        status: active
        display_name: 王遜
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王復

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王復 | accepted |
| birth.date | 1416年 | accepted |
| death.date | 1485年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_EXUMXpFadPPwv3VumQBd89 | 王遜 | accepted |

## 外部来源

- [中国历代人物传记资料库：王復（CBDB 67655）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67655&o=json)
- [中国历代人物传记资料库：王遜（CBDB 237573）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237573&o=json)
