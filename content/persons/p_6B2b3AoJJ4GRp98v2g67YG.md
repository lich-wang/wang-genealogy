---
schema: wang-person/v1
id: p_6B2b3AoJJ4GRp98v2g67YG
status: active
merged_into: null
display_name: 汪農
revision: 1
cbdb_id: 95504
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_aT7oTtYAzExXk87viQuJZl
        subject_person_id: p_6B2b3AoJJ4GRp98v2g67YG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 汪農，清人物。籍贯仁和。（中国历代人物传记资料库 CBDB 95504）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oz-oT1UxbomaKfbwVCWB5n
          claim_id: c_aT7oTtYAzExXk87viQuJZl
          source_id: s_8YqRBC_S8FVsG68NyInXbP
          stance: supports
          locator: CBDB:95504
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_8YqRBC_S8FVsG68NyInXbP
            source_type: api_record
            title: 中国历代人物传记资料库：汪農（CBDB 95504）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=95504&o=json
            external_identifier: CBDB:95504
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_7AfOwXnirSr9zTPIQ4Snl1
        subject_person_id: p_6B2b3AoJJ4GRp98v2g67YG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 汪農
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UBmPNdwSOSZppU88PCmYPj
          claim_id: c_7AfOwXnirSr9zTPIQ4Snl1
          source_id: s_8YqRBC_S8FVsG68NyInXbP
          stance: supports
          locator: CBDB:95504
          quotation: null
          interpretation_note: CBDB 明确记录的王德宜配偶
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
        id: c_J5hYFTPYRmwckkHEgvMtQg
        subject_person_id: p_6f2299M3mLffa8gC5Pa17w
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_6B2b3AoJJ4GRp98v2g67YG
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Qs1-QJrVFVTxcg-UAT0eIr
          claim_id: c_J5hYFTPYRmwckkHEgvMtQg
          source_id: s_8YqRBC_S8FVsG68NyInXbP
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #1696, HuWenKai #251：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_6f2299M3mLffa8gC5Pa17w
        status: active
        display_name: 王德宜
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 汪農

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 汪農，清人物。籍贯仁和。（中国历代人物传记资料库 CBDB 95504） | accepted |
| name.primary | 汪農 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_6f2299M3mLffa8gC5Pa17w | 王德宜 | accepted |

## 外部来源

- [中国历代人物传记资料库：汪農（CBDB 95504）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=95504&o=json)
