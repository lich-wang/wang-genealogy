---
schema: wang-person/v1
id: p_aYr3EPQVvfC6NBKDGNLUTL
status: active
merged_into: null
display_name: 王懋德
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VjBUQQAHA4AByLHukgmKbU
        subject_person_id: p_aYr3EPQVvfC6NBKDGNLUTL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懋德
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_M5o3oAWviC9z819GD1yA7T
          claim_id: c_VjBUQQAHA4AByLHukgmKbU
          source_id: s_yqBkGb49Td9o4JjzDQ4ibi
          stance: supports
          locator: CBDB:205756
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（205756）
          source: &a1
            id: s_yqBkGb49Td9o4JjzDQ4ibi
            source_type: api_record
            title: 中国历代人物传记资料库：王懋德（CBDB 205756）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205756&o=json
            external_identifier: CBDB:205756
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.872Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_ygf43XzUVx4RQYzb8nyM6G
        subject_person_id: p_aYr3EPQVvfC6NBKDGNLUTL
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1543年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EHceAw4R8Aa2XWCVM2shQE
          claim_id: c_ygf43XzUVx4RQYzb8nyM6G
          source_id: s_yqBkGb49Td9o4JjzDQ4ibi
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
        id: c_Kkc4dipTREwVfGgPE3kNnD
        subject_person_id: p_aYr3EPQVvfC6NBKDGNLUTL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懋德（生于1543年），明人物。明清進士進士，籍贯金谿，入仕進士，曾任翰林編修。（中国历代人物传记资料库 CBDB 205756）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LUN7j6LFcptZOpCE3vlsrG
          claim_id: c_Kkc4dipTREwVfGgPE3kNnD
          source_id: s_yqBkGb49Td9o4JjzDQ4ibi
          stance: supports
          locator: CBDB:205756
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_qoN1o6ckAy43iyTigOOZ-V
        subject_person_id: p_kGHRzXtUaYBnJ8wGBJV9RP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_aYr3EPQVvfC6NBKDGNLUTL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eXc60P-nqfneeudv0BYf1f
          claim_id: c_qoN1o6ckAy43iyTigOOZ-V
          source_id: s_Tv1UGEZ2uHHJHsnvp62A5n
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第二甲第十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Tv1UGEZ2uHHJHsnvp62A5n
            source_type: api_record
            title: 中国历代人物传记资料库：王化（CBDB 337967）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337967&o=json
            external_identifier: CBDB:337967
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.522Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_kGHRzXtUaYBnJ8wGBJV9RP
        status: active
        display_name: 王化
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_PI-1AtkRmSVrR3KDT7HTXM
        subject_person_id: p_9xXNfmtYMVSCBkiCQDQ71J
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_aYr3EPQVvfC6NBKDGNLUTL
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_klW2kDs7Oi4n0bqnlO1ciy
          claim_id: c_PI-1AtkRmSVrR3KDT7HTXM
          source_id: s_E971KgqxfwBMUKQsvGBkzc
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第二甲第十一名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_E971KgqxfwBMUKQsvGBkzc
            source_type: api_record
            title: 中国历代人物传记资料库：王昱（CBDB 337965）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337965&o=json
            external_identifier: CBDB:337965
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.521Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_9xXNfmtYMVSCBkiCQDQ71J
        status: active
        display_name: 王昱
        merged_into_person_id: null
    - claim:
        id: c_5IqI1o2ZYIIPWnY4hlAg31
        subject_person_id: p_ipzAENcDKQPY5smGpNDnar
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_aYr3EPQVvfC6NBKDGNLUTL
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zts3gWkIodUa1wtyMZFoNy
          claim_id: c_5IqI1o2ZYIIPWnY4hlAg31
          source_id: s_gRk47zMEhpFt28SyBqZ74h
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第二甲第十一名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_gRk47zMEhpFt28SyBqZ74h
            source_type: api_record
            title: 中国历代人物传记资料库：王璉（CBDB 337966）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337966&o=json
            external_identifier: CBDB:337966
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.521Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ipzAENcDKQPY5smGpNDnar
        status: active
        display_name: 王璉
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王懋德

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王懋德 | accepted |
| birth.date | 1543年 | accepted |
| bio.summary | 王懋德（生于1543年），明人物。明清進士進士，籍贯金谿，入仕進士，曾任翰林編修。（中国历代人物传记资料库 CBDB 205756） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_kGHRzXtUaYBnJ8wGBJV9RP | 王化 | accepted |
| ancestors | p_9xXNfmtYMVSCBkiCQDQ71J | 王昱 | accepted |
| ancestors | p_ipzAENcDKQPY5smGpNDnar | 王璉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王化（CBDB 337967）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337967&o=json)
- [中国历代人物传记资料库：王璉（CBDB 337966）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337966&o=json)
- [中国历代人物传记资料库：王懋德（CBDB 205756）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205756&o=json)
- [中国历代人物传记资料库：王昱（CBDB 337965）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337965&o=json)
