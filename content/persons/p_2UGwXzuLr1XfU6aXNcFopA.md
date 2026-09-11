---
schema: wang-person/v1
id: p_2UGwXzuLr1XfU6aXNcFopA
status: active
merged_into: null
display_name: 王伸
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_er6VifdQPHCngHpKnevsoQ
        subject_person_id: p_2UGwXzuLr1XfU6aXNcFopA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2fqVsDomx5P4XtwnRQTbFH
          claim_id: c_er6VifdQPHCngHpKnevsoQ
          source_id: s_JNCFuPQLjmSAxvFAoL7iB3
          stance: supports
          locator: CBDB:292755
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（292755）
          source: &a1
            id: s_JNCFuPQLjmSAxvFAoL7iB3
            source_type: api_record
            title: 中国历代人物传记资料库：王伸（CBDB 292755）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292755&o=json
            external_identifier: CBDB:292755
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.418Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Z77MskF5vuYrggvt4XL1sC
        subject_person_id: p_2UGwXzuLr1XfU6aXNcFopA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伸，明人物。嘉靖十一年進士，籍贯中江。（中国历代人物传记资料库 CBDB 292755）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hmruLy7OeLNba554-t6z_7
          claim_id: c_Z77MskF5vuYrggvt4XL1sC
          source_id: s_JNCFuPQLjmSAxvFAoL7iB3
          stance: supports
          locator: CBDB:292755
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_8ayC-38w2zoNzin9yuqYhR
        subject_person_id: p_gyNUeFDDZGNowk91dtAr1B
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2UGwXzuLr1XfU6aXNcFopA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wLV74tcaIswsbSw1KuZ9MK
          claim_id: c_8ayC-38w2zoNzin9yuqYhR
          source_id: s_JNCFuPQLjmSAxvFAoL7iB3
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第七十八名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_gyNUeFDDZGNowk91dtAr1B
        status: active
        display_name: 王惟賢
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王伸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王伸 | accepted |
| bio.summary | 王伸，明人物。嘉靖十一年進士，籍贯中江。（中国历代人物传记资料库 CBDB 292755） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_gyNUeFDDZGNowk91dtAr1B | 王惟賢 | accepted |

## 外部来源

- [中国历代人物传记资料库：王伸（CBDB 292755）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292755&o=json)
