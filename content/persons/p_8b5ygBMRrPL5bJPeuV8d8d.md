---
schema: wang-person/v1
id: p_8b5ygBMRrPL5bJPeuV8d8d
status: active
merged_into: null
display_name: 王斯浩
cbdb_id: 247362
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VfM5AvCmPpzhXqehXAiCtX
        subject_person_id: p_8b5ygBMRrPL5bJPeuV8d8d
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王斯浩，明人物。成化八年進士。（中国历代人物传记资料库 CBDB 247362）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_-HT5WtjUERnJ345y4Yrajx
          claim_id: c_VfM5AvCmPpzhXqehXAiCtX
          source_id: s_DqNHw8xZKD3twgFPt3PV8C
          stance: supports
          locator: CBDB:247362
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_DqNHw8xZKD3twgFPt3PV8C
            source_type: api_record
            title: 中国历代人物传记资料库：王斯浩（CBDB 247362）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247362&o=json
            external_identifier: CBDB:247362
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:59.761Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_PMiXS5BxtEajkjkT6HQVCd
        subject_person_id: p_8b5ygBMRrPL5bJPeuV8d8d
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王斯浩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_f1pM4EUjoNtW62Uv6mNxya
          claim_id: c_PMiXS5BxtEajkjkT6HQVCd
          source_id: s_DqNHw8xZKD3twgFPt3PV8C
          stance: supports
          locator: CBDB:247362
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2901-3000）｜历史性依据：CBDB 朝代 = 明
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
        id: c_YnApwjtA1xoeLE6m0r_THg
        subject_person_id: p_8b5ygBMRrPL5bJPeuV8d8d
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_dHFBy8GTgBZpvwKJGG8hsX
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_30kBGB8w2g-oc9xFQiOROp
          claim_id: c_YnApwjtA1xoeLE6m0r_THg
          source_id: s_UajPbreWAJ8SWtEFXGFhUY
          stance: supports
          locator: 成化八年進士登科錄:一卷，第三甲第一百四十八名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_UajPbreWAJ8SWtEFXGFhUY
            source_type: api_record
            title: 中国历代人物传记资料库：王暄（CBDB 199620）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199620&o=json
            external_identifier: CBDB:199620
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.564Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_dHFBy8GTgBZpvwKJGG8hsX
        status: active
        display_name: 王暄
        merged_into_person_id: null
  other: []
---

# 王斯浩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王斯浩，明人物。成化八年進士。（中国历代人物传记资料库 CBDB 247362） | accepted |
| name.primary | 王斯浩 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_dHFBy8GTgBZpvwKJGG8hsX | 王暄 | accepted |

## 外部来源

- [中国历代人物传记资料库：王斯浩（CBDB 247362）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247362&o=json)
- [中国历代人物传记资料库：王暄（CBDB 199620）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199620&o=json)
