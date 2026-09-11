---
schema: wang-person/v1
id: p_HDPP8TXt1WhfCLovxb2goq
status: active
merged_into: null
display_name: 李氏
revision: 1
cbdb_id: 229669
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kXyxKmauFeHf9r5kI0keF_
        subject_person_id: p_HDPP8TXt1WhfCLovxb2goq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 李氏，明人物。萬曆丙戌科進士進士。（中国历代人物传记资料库 CBDB 229669）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GaHK-1GZZJ_JYnKET3wEm2
          claim_id: c_kXyxKmauFeHf9r5kI0keF_
          source_id: s_lrlqXzDW2J5Ip7fpN6kXUv
          stance: supports
          locator: CBDB:229669
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_lrlqXzDW2J5Ip7fpN6kXUv
            source_type: api_record
            title: 中国历代人物传记资料库：李氏(王嘉謨妻)（CBDB 229669）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229669&o=json
            external_identifier: CBDB:229669
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_e50fseQVcDPhj78H-rdltX
        subject_person_id: p_HDPP8TXt1WhfCLovxb2goq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 李氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WXmPmSUCUtv4g-K5nQtqem
          claim_id: c_e50fseQVcDPhj78H-rdltX
          source_id: s_lrlqXzDW2J5Ip7fpN6kXUv
          stance: supports
          locator: CBDB:229669
          quotation: null
          interpretation_note: CBDB 明确记录的王嘉謨配偶
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
        id: c_LiYRz0tMj6E56IHoLenTJF
        subject_person_id: p_1wesYYym6K1XDJ5hKnvGQQ
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_HDPP8TXt1WhfCLovxb2goq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KM8-SKKPzsYh0QOPAwBAYE
          claim_id: c_LiYRz0tMj6E56IHoLenTJF
          source_id: s_lrlqXzDW2J5Ip7fpN6kXUv
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第二百七名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_1wesYYym6K1XDJ5hKnvGQQ
        status: active
        display_name: 王嘉謨
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 李氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 李氏，明人物。萬曆丙戌科進士進士。（中国历代人物传记资料库 CBDB 229669） | accepted |
| name.primary | 李氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_1wesYYym6K1XDJ5hKnvGQQ | 王嘉謨 | accepted |

## 外部来源

- [中国历代人物传记资料库：李氏(王嘉謨妻)（CBDB 229669）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229669&o=json)
