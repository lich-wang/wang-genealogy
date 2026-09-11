---
schema: wang-person/v1
id: p_2n6HBgjXCymtu2N844iPTa
status: active
merged_into: null
display_name: 段氏
revision: 1
cbdb_id: 147803
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_B12myZMFHGIlQcMsjE0nNp
        subject_person_id: p_2n6HBgjXCymtu2N844iPTa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 段氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Zwpmp46HnCvSX0CpFwH4tW
          claim_id: c_B12myZMFHGIlQcMsjE0nNp
          source_id: s__PpKxZxG6jCzeQrbSfHuLZ
          stance: supports
          locator: CBDB:147803
          quotation: null
          interpretation_note: CBDB 明确记录的王羅配偶
          source: &a1
            id: s__PpKxZxG6jCzeQrbSfHuLZ
            source_type: api_record
            title: 中国历代人物传记资料库：段氏(王羅妻)（CBDB 147803）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=147803&o=json
            external_identifier: CBDB:147803
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
        id: c_e4jKaThnzXiejNV0f-yl0A
        subject_person_id: p_6zAHPdzLJwKEaLDwrafaq9
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_2n6HBgjXCymtu2N844iPTa
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8For2NxCD4rGe3N3d1T_c8
          claim_id: c_e4jKaThnzXiejNV0f-yl0A
          source_id: s__PpKxZxG6jCzeQrbSfHuLZ
          stance: supports
          locator: 唐代墓誌匯編:二卷，Longshuo 44：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_6zAHPdzLJwKEaLDwrafaq9
        status: active
        display_name: 王羅
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 段氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 段氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_6zAHPdzLJwKEaLDwrafaq9 | 王羅 | accepted |

## 外部来源

- [中国历代人物传记资料库：段氏(王羅妻)（CBDB 147803）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=147803&o=json)
