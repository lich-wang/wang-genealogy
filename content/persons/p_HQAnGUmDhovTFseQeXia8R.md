---
schema: wang-person/v1
id: p_HQAnGUmDhovTFseQeXia8R
status: active
merged_into: null
display_name: 王勝
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7oXZ9ZKPwBRr6qEQgpSTjw
        subject_person_id: p_HQAnGUmDhovTFseQeXia8R
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王勝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ztRXoBHVEEgjnenXwp9M2b
          claim_id: c_7oXZ9ZKPwBRr6qEQgpSTjw
          source_id: s_rrMLuAh4LqaZbyaArhstuy
          stance: supports
          locator: CBDB:211978
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（211978）
          source: &a1
            id: s_rrMLuAh4LqaZbyaArhstuy
            source_type: api_record
            title: 中国历代人物传记资料库：王勝（CBDB 211978）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211978&o=json
            external_identifier: CBDB:211978
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.038Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EJL5q1LNfgGH6bL4Mjf2ko
        subject_person_id: p_HQAnGUmDhovTFseQeXia8R
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王勝，明人物。隆慶五年進士。（中国历代人物传记资料库 CBDB 211978）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2xJDLM4HG4XfTxMyAHycV-
          claim_id: c_EJL5q1LNfgGH6bL4Mjf2ko
          source_id: s_rrMLuAh4LqaZbyaArhstuy
          stance: supports
          locator: CBDB:211978
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_DnZpOfR9b4Yv4v-Co_02vR
        subject_person_id: p_HQAnGUmDhovTFseQeXia8R
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_s3BG2bed1QUGktV4Jrg4UH
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Cu_NiBUdvxUTk-KumTMcHB
          claim_id: c_DnZpOfR9b4Yv4v-Co_02vR
          source_id: s_rrMLuAh4LqaZbyaArhstuy
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第二百八十七名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_s3BG2bed1QUGktV4Jrg4UH
        status: active
        display_name: 王學書
        merged_into_person_id: null
  other: []
---

# 王勝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王勝 | accepted |
| bio.summary | 王勝，明人物。隆慶五年進士。（中国历代人物传记资料库 CBDB 211978） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_s3BG2bed1QUGktV4Jrg4UH | 王學書 | accepted |

## 外部来源

- [中国历代人物传记资料库：王勝（CBDB 211978）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211978&o=json)
