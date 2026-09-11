---
schema: wang-person/v1
id: p_NGifpb6gL7oqdH75gy61NE
status: active
merged_into: null
display_name: 王世傑
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hgUYAb1y4RrhfsXEDFp48g
        subject_person_id: p_NGifpb6gL7oqdH75gy61NE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世傑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Rh182wiVhm822ngs1NG8Ho
          claim_id: c_hgUYAb1y4RrhfsXEDFp48g
          source_id: s_vuCjbAhcRAS7EWGA3e6XUU
          stance: supports
          locator: CBDB:238354
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（238354）
          source: &a1
            id: s_vuCjbAhcRAS7EWGA3e6XUU
            source_type: api_record
            title: 中国历代人物传记资料库：王世傑（CBDB 238354）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238354&o=json
            external_identifier: CBDB:238354
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.880Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gJ3CfsovaQEDrCaLBe1XWX
        subject_person_id: p_NGifpb6gL7oqdH75gy61NE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世傑，明人物。成化二年進士，入仕考上會試/貢士，曾任教諭、訓導。（中国历代人物传记资料库 CBDB 238354）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3TzS_YNyf_JwZ7w4dT14Gg
          claim_id: c_gJ3CfsovaQEDrCaLBe1XWX
          source_id: s_vuCjbAhcRAS7EWGA3e6XUU
          stance: supports
          locator: CBDB:238354
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
        id: c_RkVo8G_rj6E__3YHn9Y6ya
        subject_person_id: p_NGifpb6gL7oqdH75gy61NE
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_b2PRCnVEBsHtgqHZaJPLzQ
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2_2t4FHs4yUzxzrvuiUos7
          claim_id: c_RkVo8G_rj6E__3YHn9Y6ya
          source_id: s_6F2kLme4CvTS2KW9MauC32
          stance: supports
          locator: 成化二年進士登科錄:一卷，第三甲第九十六名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_6F2kLme4CvTS2KW9MauC32
            source_type: api_record
            title: 中国历代人物传记资料库：王相（CBDB 68074）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68074&o=json
            external_identifier: CBDB:68074
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.050Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_b2PRCnVEBsHtgqHZaJPLzQ
        status: active
        display_name: 王相
        merged_into_person_id: null
  other: []
---

# 王世傑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世傑 | accepted |
| bio.summary | 王世傑，明人物。成化二年進士，入仕考上會試/貢士，曾任教諭、訓導。（中国历代人物传记资料库 CBDB 238354） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_b2PRCnVEBsHtgqHZaJPLzQ | 王相 | accepted |

## 外部来源

- [中国历代人物传记资料库：王世傑（CBDB 238354）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238354&o=json)
- [中国历代人物传记资料库：王相（CBDB 68074）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68074&o=json)
