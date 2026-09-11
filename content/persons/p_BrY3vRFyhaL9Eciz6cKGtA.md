---
schema: wang-person/v1
id: p_BrY3vRFyhaL9Eciz6cKGtA
status: active
merged_into: null
display_name: 王九徵
cbdb_id: 526838
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PN8VCApTiqK7ijNPbk3u9T
        subject_person_id: p_BrY3vRFyhaL9Eciz6cKGtA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王九徵，清人物。中国历代人物传记资料库（CBDB）以人物编号 526838 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_siGBgD7expI8Llw1TKpjzv
          claim_id: c_PN8VCApTiqK7ijNPbk3u9T
          source_id: s_eyt1tRybhNFFJrKATaQwRL
          stance: supports
          locator: CBDB:526838
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_eyt1tRybhNFFJrKATaQwRL
            source_type: api_record
            title: 中国历代人物传记资料库：王九徵（CBDB 526838）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526838&o=json
            external_identifier: CBDB:526838
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:18.829Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_fMi9TqrrBXs1ay2dzhZchD
        subject_person_id: p_BrY3vRFyhaL9Eciz6cKGtA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王九徵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_nDiCL4QGBAmCcmbzt7uDv8
          claim_id: c_fMi9TqrrBXs1ay2dzhZchD
          source_id: s_eyt1tRybhNFFJrKATaQwRL
          stance: supports
          locator: CBDB:526838
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（7101-7200）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_eyt1tRybhNFFJrKATaQwRL
            source_type: api_record
            title: 中国历代人物传记资料库：王九徵（CBDB 526838）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526838&o=json
            external_identifier: CBDB:526838
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:18.829Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_uNKr3jEjVNX4vsSuwazsIc
        subject_person_id: p_BrY3vRFyhaL9Eciz6cKGtA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xRZab316v7x9f6Hr8WHDfK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1yAdozrR3xdMHWP7fCg5Ja
          claim_id: c_uNKr3jEjVNX4vsSuwazsIc
          source_id: s_8SCHJFh3PHrQ8pAp1nKHLu
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13027：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_8SCHJFh3PHrQ8pAp1nKHLu
            source_type: api_record
            title: 中国历代人物传记资料库：王原（CBDB 69323）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69323&o=json
            external_identifier: CBDB:69323
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.208Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_xRZab316v7x9f6Hr8WHDfK
        status: active
        display_name: 王原
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王九徵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王九徵，清人物。中国历代人物传记资料库（CBDB）以人物编号 526838 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王九徵 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_xRZab316v7x9f6Hr8WHDfK | 王原 | accepted |

## 外部来源

- [中国历代人物传记资料库：王九徵（CBDB 526838）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526838&o=json)
- [中国历代人物传记资料库：王原（CBDB 69323）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69323&o=json)
