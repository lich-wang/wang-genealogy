---
schema: wang-person/v1
id: p_K55LvWgVMjnD8qfjKuA7Rr
status: active
merged_into: null
display_name: 王九寧
cbdb_id: 271244
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_E4oGUAER5GoBFBnYLvhK3N
        subject_person_id: p_K55LvWgVMjnD8qfjKuA7Rr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王九寧，明人物。弘治十五年進士。（中国历代人物传记资料库 CBDB 271244）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_yZk9eyLfe2D_mMTJcGRVG7
          claim_id: c_E4oGUAER5GoBFBnYLvhK3N
          source_id: s_D5oEHoK84Hx84LhGQvL3V8
          stance: supports
          locator: CBDB:271244
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_D5oEHoK84Hx84LhGQvL3V8
            source_type: api_record
            title: 中国历代人物传记资料库：王九寧（CBDB 271244）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271244&o=json
            external_identifier: CBDB:271244
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_fGwbrwwqGLyJEeer86izf8
        subject_person_id: p_K55LvWgVMjnD8qfjKuA7Rr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王九寧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_LrnPXRhU72pGzxx14dSyRg
          claim_id: c_fGwbrwwqGLyJEeer86izf8
          source_id: s_D5oEHoK84Hx84LhGQvL3V8
          stance: supports
          locator: CBDB:271244
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3201-3300）｜历史性依据：CBDB 朝代 = 明
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
        id: c_sQh5j30-ioMkLAZf9v51Rm
        subject_person_id: p_K55LvWgVMjnD8qfjKuA7Rr
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_U9mkTVdbhdN8j3G86uAN6S
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VffzePujHQo6AophRu1oKa
          claim_id: c_sQh5j30-ioMkLAZf9v51Rm
          source_id: s_D5oEHoK84Hx84LhGQvL3V8
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第三甲第五十三名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_D5oEHoK84Hx84LhGQvL3V8
            source_type: api_record
            title: 中国历代人物传记资料库：王九寧（CBDB 271244）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271244&o=json
            external_identifier: CBDB:271244
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_U9mkTVdbhdN8j3G86uAN6S
        status: active
        display_name: 王注
        merged_into_person_id: null
  other: []
---

# 王九寧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王九寧，明人物。弘治十五年進士。（中国历代人物传记资料库 CBDB 271244） | accepted |
| name.primary | 王九寧 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_U9mkTVdbhdN8j3G86uAN6S | 王注 | accepted |

## 外部来源

- [中国历代人物传记资料库：王九寧（CBDB 271244）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271244&o=json)
