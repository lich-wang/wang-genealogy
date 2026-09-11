---
schema: wang-person/v1
id: p_YooVVt33STAedzoaznvNWg
status: active
merged_into: null
display_name: 王軏
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tQ2BczxmxkCWY4XUGAsiQ3
        subject_person_id: p_YooVVt33STAedzoaznvNWg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王軏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NLoFEJvvRt7e88xXBdPM8m
          claim_id: c_tQ2BczxmxkCWY4XUGAsiQ3
          source_id: s_bFcyPXCiqLHh7CapMJztWH
          stance: supports
          locator: CBDB:296437
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（296437）
          source: &a1
            id: s_bFcyPXCiqLHh7CapMJztWH
            source_type: api_record
            title: 中国历代人物传记资料库：王軏（CBDB 296437）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296437&o=json
            external_identifier: CBDB:296437
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.522Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kuHbPYGATdtYTCME4m9Z9L
        subject_person_id: p_YooVVt33STAedzoaznvNWg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王軏，明人物。嘉靖十四年進士。（中国历代人物传记资料库 CBDB 296437）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UvjwOCKyD7Dx6AZBLofLYI
          claim_id: c_kuHbPYGATdtYTCME4m9Z9L
          source_id: s_bFcyPXCiqLHh7CapMJztWH
          stance: supports
          locator: CBDB:296437
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
        id: c_rVJK8iUI9ZbdSlty9ysXwt
        subject_person_id: p_YooVVt33STAedzoaznvNWg
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_RQeyyQ8v759GU56Ye8JJst
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5H2H1XJDxtgJs8Mw8uS8Xz
          claim_id: c_rVJK8iUI9ZbdSlty9ysXwt
          source_id: s_bFcyPXCiqLHh7CapMJztWH
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第三甲第三十二名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_RQeyyQ8v759GU56Ye8JJst
        status: active
        display_name: 王崇冠
        merged_into_person_id: null
  other: []
---

# 王軏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王軏 | accepted |
| bio.summary | 王軏，明人物。嘉靖十四年進士。（中国历代人物传记资料库 CBDB 296437） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_RQeyyQ8v759GU56Ye8JJst | 王崇冠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王軏（CBDB 296437）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296437&o=json)
