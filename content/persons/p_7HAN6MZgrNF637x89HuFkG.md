---
schema: wang-person/v1
id: p_7HAN6MZgrNF637x89HuFkG
status: active
merged_into: null
display_name: 王浩
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_x7EVzecqLMKirMTygy8VK5
        subject_person_id: p_7HAN6MZgrNF637x89HuFkG
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
        - id: cs_uXGTph5Jc4vF8vr7EeeMp1
          claim_id: c_x7EVzecqLMKirMTygy8VK5
          source_id: s_wmC3MDEPgsKi3WAVSqTheD
          stance: supports
          locator: CBDB:301984
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（301984）
          source: &a1
            id: s_wmC3MDEPgsKi3WAVSqTheD
            source_type: api_record
            title: 中国历代人物传记资料库：王浩（CBDB 301984）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301984&o=json
            external_identifier: CBDB:301984
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.646Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eAmKC5sqURYPgAbTHLhXEf
        subject_person_id: p_7HAN6MZgrNF637x89HuFkG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王浩，明人物。嘉靖十七年進士，籍贯定海。（中国历代人物传记资料库 CBDB 301984）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_l1HttdMGpJzwO0CHhxFfEB
          claim_id: c_eAmKC5sqURYPgAbTHLhXEf
          source_id: s_wmC3MDEPgsKi3WAVSqTheD
          stance: supports
          locator: CBDB:301984
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_TGAcB-5bh1M9qnIaZgAiG5
        subject_person_id: p_7HAN6MZgrNF637x89HuFkG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GQ1GXZbABMzPSWjdERZQAa
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OQMsP1DoYBASd-4eS3DIXG
          claim_id: c_TGAcB-5bh1M9qnIaZgAiG5
          source_id: s_wmC3MDEPgsKi3WAVSqTheD
          stance: supports
          locator: 嘉靖十七年進士登科錄:一卷，第三甲第二百一十九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_GQ1GXZbABMzPSWjdERZQAa
        status: active
        display_name: 王心
        merged_into_person_id: null
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
| bio.summary | 王浩，明人物。嘉靖十七年進士，籍贯定海。（中国历代人物传记资料库 CBDB 301984） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_GQ1GXZbABMzPSWjdERZQAa | 王心 | accepted |

## 外部来源

- [中国历代人物传记资料库：王浩（CBDB 301984）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301984&o=json)
