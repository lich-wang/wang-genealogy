---
schema: wang-person/v1
id: p_cABjR9EJr88tcRcAtynLqD
status: active
merged_into: null
display_name: 王路
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rgYbPu2iSmyjKVNQiBpzmj
        subject_person_id: p_cABjR9EJr88tcRcAtynLqD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王路
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2mFCv6LHXYCpoHsHeNfRL9
          claim_id: c_rgYbPu2iSmyjKVNQiBpzmj
          source_id: s_MGgSCwiWGwWMH9HLyodC1P
          stance: supports
          locator: CBDB:55907
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（55907）
          source: &a1
            id: s_MGgSCwiWGwWMH9HLyodC1P
            source_type: api_record
            title: 中国历代人物传记资料库：王路（CBDB 55907）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=55907&o=json
            external_identifier: CBDB:55907
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.757Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8p7uxJfTcEnY7fN8m8YTg9
        subject_person_id: p_cABjR9EJr88tcRcAtynLqD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王路，清人物。入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 55907）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LLfpyxbvO18D0eUW7IZXV-
          claim_id: c_8p7uxJfTcEnY7fN8m8YTg9
          source_id: s_MGgSCwiWGwWMH9HLyodC1P
          stance: supports
          locator: CBDB:55907
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
  spouses:
    - claim:
        id: c_FVHEGYbEBACIfiE-MQ1Ii3
        subject_person_id: p_cABjR9EJr88tcRcAtynLqD
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_vZEKsEqAPV9vLGW4PLTyTy
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_f6fsnE1WhNQTnEpvB-ARDR
          claim_id: c_FVHEGYbEBACIfiE-MQ1Ii3
          source_id: s_d_GzgUhOHwQmVFVoQrqy78
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #641, HuWenKai #661：妻子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_d_GzgUhOHwQmVFVoQrqy78
            source_type: api_record
            title: 中国历代人物传记资料库：黃荃（CBDB 55883）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=55883&o=json
            external_identifier: CBDB:55883
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_vZEKsEqAPV9vLGW4PLTyTy
        status: active
        display_name: 黃荃
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王路

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王路 | accepted |
| bio.summary | 王路，清人物。入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 55907） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_vZEKsEqAPV9vLGW4PLTyTy | 黃荃 | accepted |

## 外部来源

- [中国历代人物传记资料库：黃荃（CBDB 55883）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=55883&o=json)
- [中国历代人物传记资料库：王路（CBDB 55907）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=55907&o=json)
