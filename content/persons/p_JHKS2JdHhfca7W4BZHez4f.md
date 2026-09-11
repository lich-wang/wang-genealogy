---
schema: wang-person/v1
id: p_JHKS2JdHhfca7W4BZHez4f
status: active
merged_into: null
display_name: 陳氏
revision: 1
cbdb_id: 556850
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iuVeyIz0qi1uZJT4sF1YcP
        subject_person_id: p_JHKS2JdHhfca7W4BZHez4f
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
        - id: cs_eZIM7J_iCwANPXb-rRYw9i
          claim_id: c_iuVeyIz0qi1uZJT4sF1YcP
          source_id: s_xpP3FGRWNc2JjeOPDUbTnJ
          stance: supports
          locator: CBDB:556850
          quotation: null
          interpretation_note: CBDB 明确记录的王如愚配偶
          source: &a1
            id: s_xpP3FGRWNc2JjeOPDUbTnJ
            source_type: api_record
            title: 中国历代人物传记资料库：陳氏(王如愚妻)（CBDB 556850）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556850&o=json
            external_identifier: CBDB:556850
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
        id: c_ZsHuQXccYzT7t77Zoi5rmd
        subject_person_id: p_hjDfssysS4T4q3rFBGwAr1
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_JHKS2JdHhfca7W4BZHez4f
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vCrMXFYvVAUBGzubaWmHjE
          claim_id: c_ZsHuQXccYzT7t77Zoi5rmd
          source_id: s_xpP3FGRWNc2JjeOPDUbTnJ
          stance: supports
          locator: 南陽府志，lgid=878738：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_hjDfssysS4T4q3rFBGwAr1
        status: active
        display_name: 王如愚
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
| spouses | p_hjDfssysS4T4q3rFBGwAr1 | 王如愚 | accepted |

## 外部来源

- [中国历代人物传记资料库：陳氏(王如愚妻)（CBDB 556850）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556850&o=json)
