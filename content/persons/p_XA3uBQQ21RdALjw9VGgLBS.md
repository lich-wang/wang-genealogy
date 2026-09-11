---
schema: wang-person/v1
id: p_XA3uBQQ21RdALjw9VGgLBS
status: active
merged_into: null
display_name: 王禾
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vFgc9U191HdHVDjbX7FnM3
        subject_person_id: p_XA3uBQQ21RdALjw9VGgLBS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王禾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uxCsu2FVD3WdPThSE6KtAL
          claim_id: c_vFgc9U191HdHVDjbX7FnM3
          source_id: s_wQ1rETy4rx1jjiphvKVT2K
          stance: supports
          locator: CBDB:201210
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（201210）
          source: &a1
            id: s_wQ1rETy4rx1jjiphvKVT2K
            source_type: api_record
            title: 中国历代人物传记资料库：王禾（CBDB 201210）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201210&o=json
            external_identifier: CBDB:201210
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.662Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_HACCECVbKUUuuwc9XMNRp6
        subject_person_id: p_XA3uBQQ21RdALjw9VGgLBS
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1456年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_h8RdTzXAjya3r9yyxohxZr
          claim_id: c_HACCECVbKUUuuwc9XMNRp6
          source_id: s_wQ1rETy4rx1jjiphvKVT2K
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bg1jcHtPSbTMGPK5XHtNqz
        subject_person_id: p_XA3uBQQ21RdALjw9VGgLBS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王禾（生于1456年），明人物。明清進士進士，籍贯武進，入仕進士。（中国历代人物传记资料库 CBDB 201210）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_N1HTHQ3nodB0r7wqZAMON0
          claim_id: c_bg1jcHtPSbTMGPK5XHtNqz
          source_id: s_wQ1rETy4rx1jjiphvKVT2K
          stance: supports
          locator: CBDB:201210
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_XC7Zyy_B0Q8zAahz1JPYPp
        subject_person_id: p_44AWrjz5RmMvPNw5hwzVKf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XA3uBQQ21RdALjw9VGgLBS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_v2q6DiEOhjkChRkmfDaUjh
          claim_id: c_XC7Zyy_B0Q8zAahz1JPYPp
          source_id: s_THWnVa5JTBbLat9749Xi1E
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第三甲第一百零五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_THWnVa5JTBbLat9749Xi1E
            source_type: api_record
            title: 中国历代人物传记资料库：王端（CBDB 268856）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268856&o=json
            external_identifier: CBDB:268856
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.799Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_44AWrjz5RmMvPNw5hwzVKf
        status: active
        display_name: 王端
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_daMMVkoJt7pGJBdzXE_BGP
        subject_person_id: p_KjLqXMyMut3Ba658WbechC
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_XA3uBQQ21RdALjw9VGgLBS
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_msn21PohXa0JqJbAxXNm4G
          claim_id: c_daMMVkoJt7pGJBdzXE_BGP
          source_id: s_pu7jsDcFBrfBtX73zcusd8
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第三甲第一百零五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_pu7jsDcFBrfBtX73zcusd8
            source_type: api_record
            title: 中国历代人物传记资料库：王志中（CBDB 268854）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268854&o=json
            external_identifier: CBDB:268854
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.799Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_KjLqXMyMut3Ba658WbechC
        status: active
        display_name: 王志中
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王禾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王禾 | accepted |
| birth.date | 1456年 | accepted |
| bio.summary | 王禾（生于1456年），明人物。明清進士進士，籍贯武進，入仕進士。（中国历代人物传记资料库 CBDB 201210） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_44AWrjz5RmMvPNw5hwzVKf | 王端 | accepted |
| ancestors | p_KjLqXMyMut3Ba658WbechC | 王志中 | accepted |

## 外部来源

- [中国历代人物传记资料库：王端（CBDB 268856）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268856&o=json)
- [中国历代人物传记资料库：王禾（CBDB 201210）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201210&o=json)
- [中国历代人物传记资料库：王志中（CBDB 268854）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268854&o=json)
