---
schema: wang-person/v1
id: p_mWQzXBk4QWpHyLxDXbMW2R
status: active
merged_into: null
display_name: 王環
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9yVZF63QhvchZr2BZ2BCqg
        subject_person_id: p_mWQzXBk4QWpHyLxDXbMW2R
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王環
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_G3h4yZEeUsgiP8TbkKfmmq
          claim_id: c_9yVZF63QhvchZr2BZ2BCqg
          source_id: s_upZCfGog6teFEgDB9UEiNp
          stance: supports
          locator: CBDB:333320
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（333320）
          source: &a1
            id: s_upZCfGog6teFEgDB9UEiNp
            source_type: api_record
            title: 中国历代人物传记资料库：王環（CBDB 333320）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333320&o=json
            external_identifier: CBDB:333320
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.405Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_f7hA6vEGAP1yV5f3Vgzf5Q
        subject_person_id: p_mWQzXBk4QWpHyLxDXbMW2R
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
        - id: cs_tP6iUAkKpeG4PUKHeyodYM
          claim_id: c_f7hA6vEGAP1yV5f3Vgzf5Q
          source_id: s_upZCfGog6teFEgDB9UEiNp
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
  ancestors: []
  descendants:
    - claim:
        id: c_uCuw4YBNZhhChIowmMl7z8
        subject_person_id: p_mWQzXBk4QWpHyLxDXbMW2R
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_1rXUfnsmYtKV6HvQmcZEx1
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VsZOen7fp6QTLZCgjkr2jX
          claim_id: c_uCuw4YBNZhhChIowmMl7z8
          source_id: s_Ueah6NxBLTeksqUa8dTE5L
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第二百九十三名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Ueah6NxBLTeksqUa8dTE5L
            source_type: api_record
            title: 中国历代人物传记资料库：王之屏（CBDB 205448）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205448&o=json
            external_identifier: CBDB:205448
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.861Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1rXUfnsmYtKV6HvQmcZEx1
        status: active
        display_name: 王之屏
        merged_into_person_id: null
  other: []
---

# 王環

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王環 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_1rXUfnsmYtKV6HvQmcZEx1 | 王之屏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王環（CBDB 333320）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333320&o=json)
- [中国历代人物传记资料库：王之屏（CBDB 205448）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205448&o=json)
