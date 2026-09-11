---
schema: wang-person/v1
id: p_U6zX3wnxTCMh3nEUMpMz4g
status: active
merged_into: null
display_name: 王一貫
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SBp4A33XG2L6vNp1FkPjWt
        subject_person_id: p_U6zX3wnxTCMh3nEUMpMz4g
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一貫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tHqTeJBGuHPVGi1wcrBzLG
          claim_id: c_SBp4A33XG2L6vNp1FkPjWt
          source_id: s_hJqj7Z5xZmWaxak2Py5xRH
          stance: supports
          locator: CBDB:333618
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（333618）
          source: &a1
            id: s_hJqj7Z5xZmWaxak2Py5xRH
            source_type: api_record
            title: 中国历代人物传记资料库：王一貫（CBDB 333618）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333618&o=json
            external_identifier: CBDB:333618
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.420Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Kj9jNMko3ET8CcATJUnLzR
        subject_person_id: p_U6zX3wnxTCMh3nEUMpMz4g
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一貫，明人物。隆慶二年進士，籍贯崑山。（中国历代人物传记资料库 CBDB 333618）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tF4SUqtUBKQfnN8t9nHPNO
          claim_id: c_Kj9jNMko3ET8CcATJUnLzR
          source_id: s_hJqj7Z5xZmWaxak2Py5xRH
          stance: supports
          locator: CBDB:333618
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_7PvY0msdix01v06pxb2oxd
        subject_person_id: p_U6zX3wnxTCMh3nEUMpMz4g
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_McURSghs63gxnc5WxHG3bH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_b3YnqCeGQADyKZFNL-gXPR
          claim_id: c_7PvY0msdix01v06pxb2oxd
          source_id: s_hJqj7Z5xZmWaxak2Py5xRH
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第二甲第五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_McURSghs63gxnc5WxHG3bH
        status: active
        display_name: 王周紹
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王一貫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王一貫 | accepted |
| bio.summary | 王一貫，明人物。隆慶二年進士，籍贯崑山。（中国历代人物传记资料库 CBDB 333618） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_McURSghs63gxnc5WxHG3bH | 王周紹 | accepted |

## 外部来源

- [中国历代人物传记资料库：王一貫（CBDB 333618）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333618&o=json)
