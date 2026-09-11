---
schema: wang-person/v1
id: p_hGzTEBArhtNBmqP8bhoNhy
status: active
merged_into: null
display_name: 王祿
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Fvy1c648p1L47J6R9Y1L83
        subject_person_id: p_hGzTEBArhtNBmqP8bhoNhy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5meyTvLdHctXpTwxQPdmyt
          claim_id: c_Fvy1c648p1L47J6R9Y1L83
          source_id: s_L9QNjobGVNfVRmQosp9J9Q
          stance: supports
          locator: CBDB:304455
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（304455）
          source: &a1
            id: s_L9QNjobGVNfVRmQosp9J9Q
            source_type: api_record
            title: 中国历代人物传记资料库：王祿（CBDB 304455）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304455&o=json
            external_identifier: CBDB:304455
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.716Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LKzbd9EUt4HfqgvrvA7zJY
        subject_person_id: p_hGzTEBArhtNBmqP8bhoNhy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祿，明人物。嘉靖二十年進士，籍贯新城，曾任知縣。（中国历代人物传记资料库 CBDB 304455）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_giTGHSUsOlFmv1PugcU93M
          claim_id: c_LKzbd9EUt4HfqgvrvA7zJY
          source_id: s_L9QNjobGVNfVRmQosp9J9Q
          stance: supports
          locator: CBDB:304455
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_fmyhD9WfZGeph0roJyba_X
        subject_person_id: p_hGzTEBArhtNBmqP8bhoNhy
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_H4Uy6ApLcV6Le6pdH8Y4bo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_L9BEqA5dR7iQfu_5n2FaIk
          claim_id: c_fmyhD9WfZGeph0roJyba_X
          source_id: s_L9QNjobGVNfVRmQosp9J9Q
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第三甲第一百三十二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_H4Uy6ApLcV6Le6pdH8Y4bo
        status: active
        display_name: 王材
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王祿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王祿 | accepted |
| bio.summary | 王祿，明人物。嘉靖二十年進士，籍贯新城，曾任知縣。（中国历代人物传记资料库 CBDB 304455） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_H4Uy6ApLcV6Le6pdH8Y4bo | 王材 | accepted |

## 外部来源

- [中国历代人物传记资料库：王祿（CBDB 304455）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304455&o=json)
