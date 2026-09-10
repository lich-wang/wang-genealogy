---
schema: wang-person/v1
id: p_rEM4FmnErK6MdZnXyWnxsa
status: active
merged_into: null
display_name: 王浩
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_duCPkbBygA92FjqMNCuuXU
        subject_person_id: p_rEM4FmnErK6MdZnXyWnxsa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王浩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GtCTYsL459waPmN3aoTPVW
          claim_id: c_duCPkbBygA92FjqMNCuuXU
          source_id: s_Xm3p98amHJengmqndH7TBF
          stance: supports
          locator: CBDB:199153
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（199153）
          source: &a1
            id: s_Xm3p98amHJengmqndH7TBF
            source_type: api_record
            title: 中国历代人物传记资料库：王浩（CBDB 199153）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199153&o=json
            external_identifier: CBDB:199153
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.529Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_kaiCUvW5EPtBoJmPGQWn3G
        subject_person_id: p_rEM4FmnErK6MdZnXyWnxsa
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1428年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Zz2ZXozF6emFSLn6SRBNYy
          claim_id: c_kaiCUvW5EPtBoJmPGQWn3G
          source_id: s_Xm3p98amHJengmqndH7TBF
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_C1sCu4682yBhUUq4hUPMDd
        subject_person_id: p_rEM4FmnErK6MdZnXyWnxsa
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
        - id: cs_9F5CJjFnA5P9pjBCFgG58c
          claim_id: c_C1sCu4682yBhUUq4hUPMDd
          source_id: s_Xm3p98amHJengmqndH7TBF
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_KdMvdnGmMfSAY17GzPJVYE
        subject_person_id: p_13RmhF22e6LFRmpmecd8LK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rEM4FmnErK6MdZnXyWnxsa
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_A_JlghMBHgLRpPj3XTg8pr
          claim_id: c_KdMvdnGmMfSAY17GzPJVYE
          source_id: s_4jj6ijiWLQE4v4WCZ5b4Z2
          stance: supports
          locator: 成化二年進士登科錄:一卷，第三甲第九十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_4jj6ijiWLQE4v4WCZ5b4Z2
            source_type: api_record
            title: 中国历代人物传记资料库：王忠（CBDB 237775）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237775&o=json
            external_identifier: CBDB:237775
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.853Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_13RmhF22e6LFRmpmecd8LK
        status: active
        display_name: 王忠
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王浩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王浩 | accepted |
| birth.date | 1428年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_13RmhF22e6LFRmpmecd8LK | 王忠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王浩（CBDB 199153）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199153&o=json)
- [中国历代人物传记资料库：王忠（CBDB 237775）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237775&o=json)
