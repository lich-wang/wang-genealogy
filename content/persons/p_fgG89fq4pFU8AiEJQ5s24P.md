---
schema: wang-person/v1
id: p_fgG89fq4pFU8AiEJQ5s24P
status: active
merged_into: null
display_name: 陳氏
revision: 1
cbdb_id: 290154
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_55G6PzOplFYtJUPTNtiF0l
        subject_person_id: p_fgG89fq4pFU8AiEJQ5s24P
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
        - id: cs_XHOCXLpfNLIoyDQIuKkemW
          claim_id: c_55G6PzOplFYtJUPTNtiF0l
          source_id: s_1ekqbWw_onRm52cOn7TxtA
          stance: supports
          locator: CBDB:290154
          quotation: null
          interpretation_note: CBDB 明确记录的王鎬配偶
          source: &a1
            id: s_1ekqbWw_onRm52cOn7TxtA
            source_type: api_record
            title: 中国历代人物传记资料库：陳氏(王鎬妻)（CBDB 290154）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290154&o=json
            external_identifier: CBDB:290154
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
        id: c_BBKLi0iOkivuXy2odx3elb
        subject_person_id: p_8fLyT7ZEVM5q6B59fHgKMb
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_fgG89fq4pFU8AiEJQ5s24P
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yzmS7-jvN45YaqMD9f20Bh
          claim_id: c_BBKLi0iOkivuXy2odx3elb
          source_id: s_1ekqbWw_onRm52cOn7TxtA
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第三甲第一百七十四名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_8fLyT7ZEVM5q6B59fHgKMb
        status: active
        display_name: 王鎬
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
| spouses | p_8fLyT7ZEVM5q6B59fHgKMb | 王鎬 | accepted |

## 外部来源

- [中国历代人物传记资料库：陳氏(王鎬妻)（CBDB 290154）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290154&o=json)
