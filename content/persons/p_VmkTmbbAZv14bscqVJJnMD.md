---
schema: wang-person/v1
id: p_VmkTmbbAZv14bscqVJJnMD
status: active
merged_into: null
display_name: 王冰
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_moXdr7FL9zjqssTPdEv6Lq
        subject_person_id: p_VmkTmbbAZv14bscqVJJnMD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王冰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6avw8yfaTHqNcq3e2cP5HU
          claim_id: c_moXdr7FL9zjqssTPdEv6Lq
          source_id: s_KPCnV1CSFd3cni45qs5jkY
          stance: supports
          locator: CBDB:175912
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175912）
          source: &a1
            id: s_KPCnV1CSFd3cni45qs5jkY
            source_type: api_record
            title: 中国历代人物传记资料库：王冰（CBDB 175912）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175912&o=json
            external_identifier: CBDB:175912
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.196Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_smART6j2uN642gtc6g6F9i
        subject_person_id: p_VmkTmbbAZv14bscqVJJnMD
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 855年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NwnyzreSotqA44xpbaMaRv
          claim_id: c_smART6j2uN642gtc6g6F9i
          source_id: s_KPCnV1CSFd3cni45qs5jkY
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_197H43M3TYErEEYTHnx6ty
        subject_person_id: p_VmkTmbbAZv14bscqVJJnMD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1nwVS1QP5RYAfPwbKn3f66
          claim_id: c_197H43M3TYErEEYTHnx6ty
          source_id: s_KPCnV1CSFd3cni45qs5jkY
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
        id: c_GfX_Z4Bjue0RkwVenHzWfN
        subject_person_id: p_UkukK9jtGHA5Nb8R5pgnpm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VmkTmbbAZv14bscqVJJnMD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4Jmw0zySSF1TC6YZY-zFVZ
          claim_id: c_GfX_Z4Bjue0RkwVenHzWfN
          source_id: s_KPCnV1CSFd3cni45qs5jkY
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_UkukK9jtGHA5Nb8R5pgnpm
        status: active
        display_name: 王播
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王冰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王冰 | accepted |
| death.date | 855年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_UkukK9jtGHA5Nb8R5pgnpm | 王播 | accepted |

## 外部来源

- [中国历代人物传记资料库：王冰（CBDB 175912）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175912&o=json)
