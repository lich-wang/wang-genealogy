---
schema: wang-person/v1
id: p_1VgbuTJUnUYCnmk6Jh3DQG
status: active
merged_into: null
display_name: 范氏
revision: 1
cbdb_id: 336284
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_D2FXsuqakljqUw1HcVW81m
        subject_person_id: p_1VgbuTJUnUYCnmk6Jh3DQG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 范氏，明人物。隆慶二年進士。（中国历代人物传记资料库 CBDB 336284）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_coUS_7FfKBuSj9pltfrpb1
          claim_id: c_D2FXsuqakljqUw1HcVW81m
          source_id: s_fnI9dfuP48jDfOzEWOPjo7
          stance: supports
          locator: CBDB:336284
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_fnI9dfuP48jDfOzEWOPjo7
            source_type: api_record
            title: 中国历代人物传记资料库：范氏(王一鳳妻)（CBDB 336284）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336284&o=json
            external_identifier: CBDB:336284
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_TY-cKsB1mL_nGu_pBL5-os
        subject_person_id: p_1VgbuTJUnUYCnmk6Jh3DQG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 范氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YaW32VLr-4gxHXNFntHILX
          claim_id: c_TY-cKsB1mL_nGu_pBL5-os
          source_id: s_fnI9dfuP48jDfOzEWOPjo7
          stance: supports
          locator: CBDB:336284
          quotation: null
          interpretation_note: CBDB 明确记录的王一鳳配偶
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
        id: c_Ou6zof4YQAxBo_E8o5hFSD
        subject_person_id: p_5cJbXaZPVCfH9EZ6651kPP
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_1VgbuTJUnUYCnmk6Jh3DQG
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_64Jmli2M5wxRdXVOnT0lbv
          claim_id: c_Ou6zof4YQAxBo_E8o5hFSD
          source_id: s_fnI9dfuP48jDfOzEWOPjo7
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第一百七十八名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_5cJbXaZPVCfH9EZ6651kPP
        status: active
        display_name: 王一鳳
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 范氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 范氏，明人物。隆慶二年進士。（中国历代人物传记资料库 CBDB 336284） | accepted |
| name.primary | 范氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_5cJbXaZPVCfH9EZ6651kPP | 王一鳳 | accepted |

## 外部来源

- [中国历代人物传记资料库：范氏(王一鳳妻)（CBDB 336284）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336284&o=json)
