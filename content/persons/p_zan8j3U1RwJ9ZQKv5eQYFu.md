---
schema: wang-person/v1
id: p_zan8j3U1RwJ9ZQKv5eQYFu
status: active
merged_into: null
display_name: 王繼晃
cbdb_id: 294877
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_91HaxJbeEieyog9Kg3Cgx2
        subject_person_id: p_zan8j3U1RwJ9ZQKv5eQYFu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王繼晃，明人物。嘉靖十一年進士，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 294877）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_QvC3YiszSfev6FUp51x0l0
          claim_id: c_91HaxJbeEieyog9Kg3Cgx2
          source_id: s_cTyzkEcgF4eFBDDVUA6A9i
          stance: supports
          locator: CBDB:294877
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_cTyzkEcgF4eFBDDVUA6A9i
            source_type: api_record
            title: 中国历代人物传记资料库：王繼晃（CBDB 294877）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294877&o=json
            external_identifier: CBDB:294877
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_82C7XuL3dFFYEu6XxyFnKk
        subject_person_id: p_zan8j3U1RwJ9ZQKv5eQYFu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼晃
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_1tt2kQa5UHF8JDW6D38cSo
          claim_id: c_82C7XuL3dFFYEu6XxyFnKk
          source_id: s_cTyzkEcgF4eFBDDVUA6A9i
          stance: supports
          locator: CBDB:294877
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3401-3500）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_pAXLnInIz5lcVSD1Z7iRU5
        subject_person_id: p_netpjn2vvpbP4gRNZK5nnW
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_zan8j3U1RwJ9ZQKv5eQYFu
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0QYbSid9zOkhnj9ylvS_g_
          claim_id: c_pAXLnInIz5lcVSD1Z7iRU5
          source_id: s_cTyzkEcgF4eFBDDVUA6A9i
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第二百二十七名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_cTyzkEcgF4eFBDDVUA6A9i
            source_type: api_record
            title: 中国历代人物传记资料库：王繼晃（CBDB 294877）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294877&o=json
            external_identifier: CBDB:294877
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_netpjn2vvpbP4gRNZK5nnW
        status: active
        display_name: 王畿
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王繼晃

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王繼晃，明人物。嘉靖十一年進士，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 294877） | accepted |
| name.primary | 王繼晃 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_netpjn2vvpbP4gRNZK5nnW | 王畿 | accepted |

## 外部来源

- [中国历代人物传记资料库：王繼晃（CBDB 294877）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294877&o=json)
