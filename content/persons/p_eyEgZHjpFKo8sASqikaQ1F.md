---
schema: wang-person/v1
id: p_eyEgZHjpFKo8sASqikaQ1F
status: active
merged_into: null
display_name: 王體乾
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_M3E8MroGp2iBHdeaJ5tjvD
        subject_person_id: p_eyEgZHjpFKo8sASqikaQ1F
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王體乾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YUWEsepVfjuJ5pj1t8NKdd
          claim_id: c_M3E8MroGp2iBHdeaJ5tjvD
          source_id: s_TCoCk5rJbijhXUNkXHCUHx
          stance: supports
          locator: CBDB:227997
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（227997）
          source: &a1
            id: s_TCoCk5rJbijhXUNkXHCUHx
            source_type: api_record
            title: 中国历代人物传记资料库：王體乾（CBDB 227997）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227997&o=json
            external_identifier: CBDB:227997
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.549Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_s46qFVcAMaiYNezTwEEdJM
        subject_person_id: p_eyEgZHjpFKo8sASqikaQ1F
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王體乾，明人物。萬曆丙戌科進士進士，籍贯來安。（中国历代人物传记资料库 CBDB 227997）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7chTnyD3n_JKQySI1yWPFG
          claim_id: c_s46qFVcAMaiYNezTwEEdJM
          source_id: s_TCoCk5rJbijhXUNkXHCUHx
          stance: supports
          locator: CBDB:227997
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_efHYmSB7WcedeylGuutjXz
        subject_person_id: p_yt96UUYNj3ASszrYuN2kTm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eyEgZHjpFKo8sASqikaQ1F
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yQjIodGGmgyfcY14gecx4q
          claim_id: c_efHYmSB7WcedeylGuutjXz
          source_id: s_TCoCk5rJbijhXUNkXHCUHx
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第二百四名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_yt96UUYNj3ASszrYuN2kTm
        status: active
        display_name: 王嘉賓
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王體乾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王體乾 | accepted |
| bio.summary | 王體乾，明人物。萬曆丙戌科進士進士，籍贯來安。（中国历代人物传记资料库 CBDB 227997） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_yt96UUYNj3ASszrYuN2kTm | 王嘉賓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王體乾（CBDB 227997）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227997&o=json)
