---
schema: wang-person/v1
id: p_iBEGCX4PVUP88xatAFkBy4
status: active
merged_into: null
display_name: 王士安
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_meH1jM9EzuD7VU4cFFkXke
        subject_person_id: p_iBEGCX4PVUP88xatAFkBy4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士安
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eSDNceXsCHywf9M7aXzCqP
          claim_id: c_meH1jM9EzuD7VU4cFFkXke
          source_id: s_k51AENJkRjnNPUmvaULeCa
          stance: supports
          locator: CBDB:270650
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（270650）
          source: &a1
            id: s_k51AENJkRjnNPUmvaULeCa
            source_type: api_record
            title: 中国历代人物传记资料库：王士安（CBDB 270650）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270650&o=json
            external_identifier: CBDB:270650
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.842Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hFJd5nditRV1HBTuCDX58A
        subject_person_id: p_iBEGCX4PVUP88xatAFkBy4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士安，明人物。景泰五年進士，籍贯松江守禦千戶所。（中国历代人物传记资料库 CBDB 270650）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-XvmkJQzNcbbOkJGybNkxM
          claim_id: c_hFJd5nditRV1HBTuCDX58A
          source_id: s_k51AENJkRjnNPUmvaULeCa
          stance: supports
          locator: CBDB:270650
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_KOJAAJI1xbnGXdeNBGK8H3
        subject_person_id: p_iBEGCX4PVUP88xatAFkBy4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CvioAH4pK1gg7UWTM6DCMS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0SURc2ZHEnWOHu77Yaj-uC
          claim_id: c_KOJAAJI1xbnGXdeNBGK8H3
          source_id: s_k51AENJkRjnNPUmvaULeCa
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第一百零三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_CvioAH4pK1gg7UWTM6DCMS
        status: active
        display_name: 王珪
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王士安

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王士安 | accepted |
| bio.summary | 王士安，明人物。景泰五年進士，籍贯松江守禦千戶所。（中国历代人物传记资料库 CBDB 270650） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_CvioAH4pK1gg7UWTM6DCMS | 王珪 | accepted |

## 外部来源

- [中国历代人物传记资料库：王士安（CBDB 270650）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270650&o=json)
