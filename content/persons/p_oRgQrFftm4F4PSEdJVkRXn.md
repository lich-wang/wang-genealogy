---
schema: wang-person/v1
id: p_oRgQrFftm4F4PSEdJVkRXn
status: active
merged_into: null
display_name: 王才
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WqQ9QCLr7srR9phewLnexQ
        subject_person_id: p_oRgQrFftm4F4PSEdJVkRXn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王才
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FLRuiR2eUNsVMSiZPQnbJe
          claim_id: c_WqQ9QCLr7srR9phewLnexQ
          source_id: s_BrJkuxJ5DkuUsDTWWZjWeT
          stance: supports
          locator: CBDB:303976
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（303976）
          source: &a1
            id: s_BrJkuxJ5DkuUsDTWWZjWeT
            source_type: api_record
            title: 中国历代人物传记资料库：王才（CBDB 303976）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303976&o=json
            external_identifier: CBDB:303976
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.697Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vY6GLQU7vPe6KFBG5NFcEi
        subject_person_id: p_oRgQrFftm4F4PSEdJVkRXn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王才，明人物。嘉靖二十年進士。（中国历代人物传记资料库 CBDB 303976）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MyInoD5MCsmgY05wVYOTZ0
          claim_id: c_vY6GLQU7vPe6KFBG5NFcEi
          source_id: s_BrJkuxJ5DkuUsDTWWZjWeT
          stance: supports
          locator: CBDB:303976
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
        id: c_pZktPCA8Qv1SdvIJmksK1r
        subject_person_id: p_oRgQrFftm4F4PSEdJVkRXn
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_xpckQ2G2t7wTNrXzHWsi53
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_488nRCLHiXX_RprBVspxm6
          claim_id: c_pZktPCA8Qv1SdvIJmksK1r
          source_id: s_BrJkuxJ5DkuUsDTWWZjWeT
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第三甲第九十名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_xpckQ2G2t7wTNrXzHWsi53
        status: active
        display_name: 王霽
        merged_into_person_id: null
  other: []
---

# 王才

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王才 | accepted |
| bio.summary | 王才，明人物。嘉靖二十年進士。（中国历代人物传记资料库 CBDB 303976） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_xpckQ2G2t7wTNrXzHWsi53 | 王霽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王才（CBDB 303976）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303976&o=json)
