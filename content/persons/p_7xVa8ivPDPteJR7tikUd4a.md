---
schema: wang-person/v1
id: p_7xVa8ivPDPteJR7tikUd4a
status: active
merged_into: null
display_name: 王洀
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CfjHTs5XzZaqKf7wGu31Tp
        subject_person_id: p_7xVa8ivPDPteJR7tikUd4a
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王洀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VF6YbRFM7Xqj9bXoD2DqKJ
          claim_id: c_CfjHTs5XzZaqKf7wGu31Tp
          source_id: s_7bsj37JpqqDWGgSYnYJuhe
          stance: supports
          locator: CBDB:204567
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（204567）
          source: &a1
            id: s_7bsj37JpqqDWGgSYnYJuhe
            source_type: api_record
            title: 中国历代人物传记资料库：王洀（CBDB 204567）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204567&o=json
            external_identifier: CBDB:204567
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.830Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Uc3p3g4N3X73eQsiSVCFar
        subject_person_id: p_7xVa8ivPDPteJR7tikUd4a
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1525年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NwNZhVhTKH4VhbyiMnFU87
          claim_id: c_Uc3p3g4N3X73eQsiSVCFar
          source_id: s_7bsj37JpqqDWGgSYnYJuhe
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
        id: c_Xt8KmfR3Q8zow3B6tGMpPQ
        subject_person_id: p_7xVa8ivPDPteJR7tikUd4a
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王洀（生于1525年），明人物。明清進士進士，籍贯徐州，入仕進士。（中国历代人物传记资料库 CBDB 204567）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6HgZUlsuHbViS1SBpdWGLg
          claim_id: c_Xt8KmfR3Q8zow3B6tGMpPQ
          source_id: s_7bsj37JpqqDWGgSYnYJuhe
          stance: supports
          locator: CBDB:204567
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_jAbBTe2HHwaJh1KwJUVQnh
        subject_person_id: p_N8VeHKkRJBXUZc2iB2TQ63
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7xVa8ivPDPteJR7tikUd4a
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PSHR8HpiXTdaPpmEgY_wW0
          claim_id: c_jAbBTe2HHwaJh1KwJUVQnh
          source_id: s_7bsj37JpqqDWGgSYnYJuhe
          stance: supports
          locator: 嘉靖三十五年進士登科錄:一卷，第三甲第八十五名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_N8VeHKkRJBXUZc2iB2TQ63
        status: active
        display_name: 王鏜
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_q0HzGKCvKOJzgXBVUmApC6
        subject_person_id: p_7xVa8ivPDPteJR7tikUd4a
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_aPM2KDrkDe8sXC8oMkpjoo
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-WHjFh2-EOBG5lGhty1yrW
          claim_id: c_q0HzGKCvKOJzgXBVUmApC6
          source_id: s_TQjkEbQ0Uji4q__dLz6xD9
          stance: supports
          locator: 嘉靖三十五年進士登科錄:一卷，第三甲第八十五名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_TQjkEbQ0Uji4q__dLz6xD9
            source_type: api_record
            title: 中国历代人物传记资料库：宋氏(王洀妻)（CBDB 320899）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320899&o=json
            external_identifier: CBDB:320899
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_aPM2KDrkDe8sXC8oMkpjoo
        status: active
        display_name: 宋氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_STIPqM3nj0Pt_PEs9JYQn7
        subject_person_id: p_AwgZNLMMCA9o2We4RUyw1h
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_7xVa8ivPDPteJR7tikUd4a
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RovgtLt80oYUZVG0zNicuJ
          claim_id: c_STIPqM3nj0Pt_PEs9JYQn7
          source_id: s_7bsj37JpqqDWGgSYnYJuhe
          stance: supports
          locator: 嘉靖三十五年進士登科錄:一卷，第三甲第八十五名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_AwgZNLMMCA9o2We4RUyw1h
        status: active
        display_name: 王琳
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王洀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王洀 | accepted |
| birth.date | 1525年 | accepted |
| bio.summary | 王洀（生于1525年），明人物。明清進士進士，籍贯徐州，入仕進士。（中国历代人物传记资料库 CBDB 204567） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_N8VeHKkRJBXUZc2iB2TQ63 | 王鏜 | accepted |
| spouses | p_aPM2KDrkDe8sXC8oMkpjoo | 宋氏 | accepted |
| ancestors | p_AwgZNLMMCA9o2We4RUyw1h | 王琳 | accepted |

## 外部来源

- [中国历代人物传记资料库：宋氏(王洀妻)（CBDB 320899）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320899&o=json)
- [中国历代人物传记资料库：王洀（CBDB 204567）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204567&o=json)
