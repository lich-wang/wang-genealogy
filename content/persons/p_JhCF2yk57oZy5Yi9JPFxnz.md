---
schema: wang-person/v1
id: p_JhCF2yk57oZy5Yi9JPFxnz
status: active
merged_into: null
display_name: 陳氏
revision: 1
cbdb_id: 246423
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AomY2wfiEx7xhURkJ2JY7T
        subject_person_id: p_JhCF2yk57oZy5Yi9JPFxnz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 陳氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OP7sGeN7L4FHfOjrdoOSpl
          claim_id: c_AomY2wfiEx7xhURkJ2JY7T
          source_id: s_ca-L4Mll3KhMo4-CUjQ7Re
          stance: supports
          locator: CBDB:246423
          quotation: null
          interpretation_note: CBDB 明确记录的王雄配偶
          source: &a1
            id: s_ca-L4Mll3KhMo4-CUjQ7Re
            source_type: api_record
            title: 中国历代人物传记资料库：陳氏(王雄妻)（CBDB 246423）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246423&o=json
            external_identifier: CBDB:246423
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_UMVuNtwW8Ul7qigSnKZEsS
        subject_person_id: p_46qxZEY1wVCATMP4bSgASc
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_JhCF2yk57oZy5Yi9JPFxnz
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2QgSWk2hQcAlojCcg7OSn_
          claim_id: c_UMVuNtwW8Ul7qigSnKZEsS
          source_id: s_ca-L4Mll3KhMo4-CUjQ7Re
          stance: supports
          locator: 成化八年進士登科錄:一卷，第三甲第五十四名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_46qxZEY1wVCATMP4bSgASc
        status: active
        display_name: 王雄
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 陳氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 陳氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_46qxZEY1wVCATMP4bSgASc | 王雄 | accepted |

## 外部来源

- [中国历代人物传记资料库：陳氏(王雄妻)（CBDB 246423）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246423&o=json)
