---
schema: wang-person/v1
id: p_qFCQBNTFvnaSJUD5MKLH1u
status: active
merged_into: null
display_name: 劉氏
revision: 1
cbdb_id: 703701
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8axfR14I1ypE8LOutRpN7y
        subject_person_id: p_qFCQBNTFvnaSJUD5MKLH1u
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 劉氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_riWzZLRJ67hmdWUa2VpCZ0
          claim_id: c_8axfR14I1ypE8LOutRpN7y
          source_id: s_7fyGnGeGufvHdyUVjdz-V1
          stance: supports
          locator: CBDB:703701
          quotation: null
          interpretation_note: CBDB 明确记录的王元魁配偶
          source: &a1
            id: s_7fyGnGeGufvHdyUVjdz-V1
            source_type: api_record
            title: 中国历代人物传记资料库：劉氏(王元魁妻)（CBDB 703701）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703701&o=json
            external_identifier: CBDB:703701
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
        id: c_YtSu0iwJU76iRKDDGTpszG
        subject_person_id: p_e3eQ3v3DbVdUMNkHSH5vzU
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_qFCQBNTFvnaSJUD5MKLH1u
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JhV21I7JGzlCZS-k4bbTZP
          claim_id: c_YtSu0iwJU76iRKDDGTpszG
          source_id: s_7fyGnGeGufvHdyUVjdz-V1
          stance: supports
          locator: 平陰縣志，lgid=630888：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_e3eQ3v3DbVdUMNkHSH5vzU
        status: active
        display_name: 王元魁
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 劉氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 劉氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_e3eQ3v3DbVdUMNkHSH5vzU | 王元魁 | accepted |

## 外部来源

- [中国历代人物传记资料库：劉氏(王元魁妻)（CBDB 703701）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703701&o=json)
