---
schema: wang-person/v1
id: p_YMKWDiBR9Mv6EzeX7huhe1
status: active
merged_into: null
display_name: 王元珠
cbdb_id: 121052
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_whxaNq8UGWpnKW9E9GJB1E
        subject_person_id: p_YMKWDiBR9Mv6EzeX7huhe1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元珠，清人物。中国历代人物传记资料库（CBDB）以人物编号 121052 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_s7av0qIRad3dx98L-8PwLb
          claim_id: c_whxaNq8UGWpnKW9E9GJB1E
          source_id: s_ft5KjXtH8v3i5rzF2DcCUc
          stance: supports
          locator: CBDB:121052
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_ft5KjXtH8v3i5rzF2DcCUc
            source_type: api_record
            title: 中国历代人物传记资料库：王元珠（CBDB 121052）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121052&o=json
            external_identifier: CBDB:121052
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:51.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_p7M9T2C3PnLaav5mTKuZpD
        subject_person_id: p_YMKWDiBR9Mv6EzeX7huhe1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元珠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_hntYRniXDJwHHuNY6w7gfi
          claim_id: c_p7M9T2C3PnLaav5mTKuZpD
          source_id: s_ft5KjXtH8v3i5rzF2DcCUc
          stance: supports
          locator: CBDB:121052
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1901-2000）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_ft5KjXtH8v3i5rzF2DcCUc
            source_type: api_record
            title: 中国历代人物传记资料库：王元珠（CBDB 121052）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121052&o=json
            external_identifier: CBDB:121052
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:51.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_NFVKXt0fhpuBlnRn2-uJLn
        subject_person_id: p_uK7PAcw6wzKXQcGDMan3mp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YMKWDiBR9Mv6EzeX7huhe1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8jm3UEtMbVAwR_jijli_cV
          claim_id: c_NFVKXt0fhpuBlnRn2-uJLn
          source_id: s_ft5KjXtH8v3i5rzF2DcCUc
          stance: supports
          locator: 杭州府志(吳慶坻):一百七十八卷：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_uK7PAcw6wzKXQcGDMan3mp
        status: active
        display_name: 王庭
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王元珠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王元珠，清人物。中国历代人物传记资料库（CBDB）以人物编号 121052 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王元珠 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_uK7PAcw6wzKXQcGDMan3mp | 王庭 | accepted |

## 外部来源

- [中国历代人物传记资料库：王元珠（CBDB 121052）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121052&o=json)
