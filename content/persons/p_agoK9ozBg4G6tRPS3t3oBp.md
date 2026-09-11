---
schema: wang-person/v1
id: p_agoK9ozBg4G6tRPS3t3oBp
status: active
merged_into: null
display_name: 王清
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SoEpCabQuAKzgtWnu1QiJg
        subject_person_id: p_agoK9ozBg4G6tRPS3t3oBp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王清
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6roeDoUq5HhLWZopLgAzfC
          claim_id: c_SoEpCabQuAKzgtWnu1QiJg
          source_id: s_SgSS1DCkDGK1PsKdK3MgZr
          stance: supports
          locator: CBDB:226915
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（226915）
          source: &a1
            id: s_SgSS1DCkDGK1PsKdK3MgZr
            source_type: api_record
            title: 中国历代人物传记资料库：王清（CBDB 226915）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226915&o=json
            external_identifier: CBDB:226915
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.473Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gsAqH1Py1Ljpo86WHrmidB
        subject_person_id: p_agoK9ozBg4G6tRPS3t3oBp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RAN7B7N23rd6ME93HUKPyz
          claim_id: c_gsAqH1Py1Ljpo86WHrmidB
          source_id: s_SgSS1DCkDGK1PsKdK3MgZr
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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
        id: c_ZbOnpdcf_zXF-c-a6RsQJc
        subject_person_id: p_agoK9ozBg4G6tRPS3t3oBp
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_NGHFT8W3h8WaBq7fkVhjck
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bLwXa5BB5Zg-krlsNZj8IY
          claim_id: c_ZbOnpdcf_zXF-c-a6RsQJc
          source_id: s_SgSS1DCkDGK1PsKdK3MgZr
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第一百一十二名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_NGHFT8W3h8WaBq7fkVhjck
        status: active
        display_name: 王立賢
        merged_into_person_id: null
  other: []
---

# 王清

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王清 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_NGHFT8W3h8WaBq7fkVhjck | 王立賢 | accepted |

## 外部来源

- [中国历代人物传记资料库：王清（CBDB 226915）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226915&o=json)
