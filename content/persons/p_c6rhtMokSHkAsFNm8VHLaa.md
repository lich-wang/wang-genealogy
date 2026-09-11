---
schema: wang-person/v1
id: p_c6rhtMokSHkAsFNm8VHLaa
status: active
merged_into: null
display_name: 蘇氏
revision: 1
cbdb_id: 5317
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xoYmA6EN0vde7iReWDUukx
        subject_person_id: p_c6rhtMokSHkAsFNm8VHLaa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 蘇氏（1027—1101），宋人物。籍贯眉山，入仕封贈。（中国历代人物传记资料库 CBDB 5317）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5dvR7zNgS29thpmYALOy7q
          claim_id: c_xoYmA6EN0vde7iReWDUukx
          source_id: s_2PMbTrg-nqqtPa7BCx0YtX
          stance: supports
          locator: CBDB:5317
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_2PMbTrg-nqqtPa7BCx0YtX
            source_type: api_record
            title: 中国历代人物传记资料库：蘇氏(王東美妻)（CBDB 5317）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5317&o=json
            external_identifier: CBDB:5317
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_pw6OCChugYSctUlATZbCxc
        subject_person_id: p_c6rhtMokSHkAsFNm8VHLaa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 蘇氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1BCgkRL8onOWjGR-1_Hlxo
          claim_id: c_pw6OCChugYSctUlATZbCxc
          source_id: s_2PMbTrg-nqqtPa7BCx0YtX
          stance: supports
          locator: CBDB:5317
          quotation: null
          interpretation_note: CBDB 明确记录的王東美配偶
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
        id: c_eME5xmL6KFXyFc9PaLAA8H
        subject_person_id: p_MeFZQEb7d1NDXAkETnNC7B
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_c6rhtMokSHkAsFNm8VHLaa
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Xce46tOA2cCRVOjIFaKXKR
          claim_id: c_eME5xmL6KFXyFc9PaLAA8H
          source_id: s_2PMbTrg-nqqtPa7BCx0YtX
          stance: supports
          locator: CBDB 双向互证（妻子 蘇氏(王東美妻)）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_MeFZQEb7d1NDXAkETnNC7B
        status: active
        display_name: 王東美
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 蘇氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 蘇氏（1027—1101），宋人物。籍贯眉山，入仕封贈。（中国历代人物传记资料库 CBDB 5317） | accepted |
| name.primary | 蘇氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_MeFZQEb7d1NDXAkETnNC7B | 王東美 | accepted |

## 外部来源

- [中国历代人物传记资料库：蘇氏(王東美妻)（CBDB 5317）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5317&o=json)
