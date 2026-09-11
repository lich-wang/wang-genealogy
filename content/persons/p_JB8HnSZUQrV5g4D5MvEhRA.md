---
schema: wang-person/v1
id: p_JB8HnSZUQrV5g4D5MvEhRA
status: active
merged_into: null
display_name: 衛敬瑜
revision: 1
cbdb_id: 134682
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sBUEaHsCAd9XJW-VpBWhjf
        subject_person_id: p_JB8HnSZUQrV5g4D5MvEhRA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 衛敬瑜
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_v8weasDsvmt-FqS76h1dwm
          claim_id: c_sBUEaHsCAd9XJW-VpBWhjf
          source_id: s_sFC2WaMkwdQrTkVy-HFpkH
          stance: supports
          locator: CBDB:134682
          quotation: null
          interpretation_note: CBDB 明确记录的王玉京配偶
          source: &a1
            id: s_sFC2WaMkwdQrTkVy-HFpkH
            source_type: api_record
            title: 中国历代人物传记资料库：衛敬瑜（CBDB 134682）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134682&o=json
            external_identifier: CBDB:134682
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
        id: c_YP_5U71sgr1rQaDiSiXtKM
        subject_person_id: p_XX3yzWUjqK8tzcT9QCdQKK
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_JB8HnSZUQrV5g4D5MvEhRA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ixh-M6ipeqtFSRrl3I3jFV
          claim_id: c_YP_5U71sgr1rQaDiSiXtKM
          source_id: s_sFC2WaMkwdQrTkVy-HFpkH
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #2747：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_XX3yzWUjqK8tzcT9QCdQKK
        status: active
        display_name: 王玉京
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 衛敬瑜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 衛敬瑜 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_XX3yzWUjqK8tzcT9QCdQKK | 王玉京 | accepted |

## 外部来源

- [中国历代人物传记资料库：衛敬瑜（CBDB 134682）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134682&o=json)
