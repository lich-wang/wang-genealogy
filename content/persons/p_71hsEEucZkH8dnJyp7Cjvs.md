---
schema: wang-person/v1
id: p_71hsEEucZkH8dnJyp7Cjvs
status: active
merged_into: null
display_name: 匡氏
revision: 1
cbdb_id: 244975
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dUM7HNm97KySZgTyDRmQw1
        subject_person_id: p_71hsEEucZkH8dnJyp7Cjvs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 匡氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AeaNq81iDg467a_Uu59cPK
          claim_id: c_dUM7HNm97KySZgTyDRmQw1
          source_id: s_qQ535tr9HED6pa9YdoCR0b
          stance: supports
          locator: CBDB:244975
          quotation: null
          interpretation_note: CBDB 明确记录的王儀配偶
          source: &a1
            id: s_qQ535tr9HED6pa9YdoCR0b
            source_type: api_record
            title: 中国历代人物传记资料库：匡氏(王儀妻)（CBDB 244975）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244975&o=json
            external_identifier: CBDB:244975
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
        id: c_epBWsHaKJHhMgbVAh9BBZA
        subject_person_id: p_CJ4VyLGZZgJRk8JF6RcE65
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_71hsEEucZkH8dnJyp7Cjvs
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uixL8kRvLtjUoEbCyukRga
          claim_id: c_epBWsHaKJHhMgbVAh9BBZA
          source_id: s_qQ535tr9HED6pa9YdoCR0b
          stance: supports
          locator: 景泰二年進士登科錄:一卷，第三甲第九十三名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_CJ4VyLGZZgJRk8JF6RcE65
        status: active
        display_name: 王儀
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 匡氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 匡氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_CJ4VyLGZZgJRk8JF6RcE65 | 王儀 | accepted |

## 外部来源

- [中国历代人物传记资料库：匡氏(王儀妻)（CBDB 244975）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244975&o=json)
