---
schema: wang-person/v1
id: p_fjK5xkTrjhA9J7fxinn84J
status: active
merged_into: null
display_name: 王思武
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_82xdaXFtPkhvX3f7EfqBeC
        subject_person_id: p_fjK5xkTrjhA9J7fxinn84J
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思武
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3E3jKH3p1k4mw8awV5ySfa
          claim_id: c_82xdaXFtPkhvX3f7EfqBeC
          source_id: s_AdRUVTjS2EN7ctZGmapXud
          stance: supports
          locator: CBDB:255187
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（255187）
          source: &a1
            id: s_AdRUVTjS2EN7ctZGmapXud
            source_type: api_record
            title: 中国历代人物传记资料库：王思武（CBDB 255187）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255187&o=json
            external_identifier: CBDB:255187
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.333Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RayAedYTyG3KdJAQMHxuLq
        subject_person_id: p_fjK5xkTrjhA9J7fxinn84J
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思武，明人物。成化十七年進士，籍贯遂昌。（中国历代人物传记资料库 CBDB 255187）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EccrfMLUIQUYG01XJi69_b
          claim_id: c_RayAedYTyG3KdJAQMHxuLq
          source_id: s_AdRUVTjS2EN7ctZGmapXud
          stance: supports
          locator: CBDB:255187
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_kkRaXDcfCVLtMeegbgHIez
        subject_person_id: p_fjK5xkTrjhA9J7fxinn84J
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wWApByJ4C128PwLJ8AeXkW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jAHiblJ6euVNr-iTWrC76m
          claim_id: c_kkRaXDcfCVLtMeegbgHIez
          source_id: s_AdRUVTjS2EN7ctZGmapXud
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第二甲第四十九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_wWApByJ4C128PwLJ8AeXkW
        status: active
        display_name: 王玘
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王思武

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王思武 | accepted |
| bio.summary | 王思武，明人物。成化十七年進士，籍贯遂昌。（中国历代人物传记资料库 CBDB 255187） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_wWApByJ4C128PwLJ8AeXkW | 王玘 | accepted |

## 外部来源

- [中国历代人物传记资料库：王思武（CBDB 255187）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255187&o=json)
