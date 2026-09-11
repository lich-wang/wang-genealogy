---
schema: wang-person/v1
id: p_45n56RiQTWtDC21tW3p7zG
status: active
merged_into: null
display_name: 王寶
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CMq6KNVNcKpSCpuoJf8Svc
        subject_person_id: p_45n56RiQTWtDC21tW3p7zG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5wsG9o8tKcW3hL8CH3gjBC
          claim_id: c_CMq6KNVNcKpSCpuoJf8Svc
          source_id: s_h1K8j2LgZhDFnpaWCH2NWh
          stance: supports
          locator: CBDB:236418
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（236418）
          source: &a1
            id: s_h1K8j2LgZhDFnpaWCH2NWh
            source_type: api_record
            title: 中国历代人物传记资料库：王寶（CBDB 236418）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236418&o=json
            external_identifier: CBDB:236418
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.779Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ouGvC2z4RY5gkCfA4F2QLv
        subject_person_id: p_45n56RiQTWtDC21tW3p7zG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寶，明人物。曾任知縣。（中国历代人物传记资料库 CBDB 236418）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yl7n6uwCxG_YQ5lEK2pMIx
          claim_id: c_ouGvC2z4RY5gkCfA4F2QLv
          source_id: s_h1K8j2LgZhDFnpaWCH2NWh
          stance: supports
          locator: CBDB:236418
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
        id: c_ixQe3NElEq_p_FJiFcG21P
        subject_person_id: p_45n56RiQTWtDC21tW3p7zG
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_fRd4kHJooaS9AErLa6rFp5
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-0EgNnuWLGiOV5iunO0XaO
          claim_id: c_ixQe3NElEq_p_FJiFcG21P
          source_id: s_h1K8j2LgZhDFnpaWCH2NWh
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第三甲第一百五十二名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_fRd4kHJooaS9AErLa6rFp5
        status: active
        display_name: 王瀠
        merged_into_person_id: null
  other: []
---

# 王寶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寶 | accepted |
| bio.summary | 王寶，明人物。曾任知縣。（中国历代人物传记资料库 CBDB 236418） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_fRd4kHJooaS9AErLa6rFp5 | 王瀠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王寶（CBDB 236418）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236418&o=json)
