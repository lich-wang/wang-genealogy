---
schema: wang-person/v1
id: p_kKBU67KW3DWC3GgsXJTwPQ
status: active
merged_into: null
display_name: 王志楓
cbdb_id: 526695
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8QQBcy4wQNtgowYMa3xyBx
        subject_person_id: p_kKBU67KW3DWC3GgsXJTwPQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志楓，清人物。中国历代人物传记资料库（CBDB）以人物编号 526695 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_Hl6b9Z47EibOb30iWj6b0N
          claim_id: c_8QQBcy4wQNtgowYMa3xyBx
          source_id: s_4Ls4Kmx3x4QqojNFABJxVp
          stance: supports
          locator: CBDB:526695
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_4Ls4Kmx3x4QqojNFABJxVp
            source_type: api_record
            title: 中国历代人物传记资料库：王志楓（CBDB 526695）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526695&o=json
            external_identifier: CBDB:526695
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:18.829Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_VRLKB9o2nisvrGAuAesDWz
        subject_person_id: p_kKBU67KW3DWC3GgsXJTwPQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志楓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_9Z2qgFTUJudcDsxvNRz2Rs
          claim_id: c_VRLKB9o2nisvrGAuAesDWz
          source_id: s_4Ls4Kmx3x4QqojNFABJxVp
          stance: supports
          locator: CBDB:526695
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（7101-7200）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_4Ls4Kmx3x4QqojNFABJxVp
            source_type: api_record
            title: 中国历代人物传记资料库：王志楓（CBDB 526695）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526695&o=json
            external_identifier: CBDB:526695
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:18.829Z
            metadata_json:
              source_release: CBDB 2026-08-29
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
        id: c_sjO54CUAtgAif2qn4f5Ezw
        subject_person_id: p_LFgZ3CGAxkGiYoYL8yH9TP
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_kKBU67KW3DWC3GgsXJTwPQ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SnuVRlD262ZUJS7_TJpZgF
          claim_id: c_sjO54CUAtgAif2qn4f5Ezw
          source_id: s_4Ls4Kmx3x4QqojNFABJxVp
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），12801：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_LFgZ3CGAxkGiYoYL8yH9TP
        status: active
        display_name: 王以銜
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王志楓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王志楓，清人物。中国历代人物传记资料库（CBDB）以人物编号 526695 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王志楓 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_LFgZ3CGAxkGiYoYL8yH9TP | 王以銜 | accepted |

## 外部来源

- [中国历代人物传记资料库：王志楓（CBDB 526695）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526695&o=json)
